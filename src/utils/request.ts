// src/api/request.ts  AxiosResponse
import axios, { AxiosRequestConfig } from 'axios';
import { store } from '../store/store'
import { reportUserData } from '../api/report'; //上报接口
import Cookies from 'js-cookie';
// 全局变量
declare global {
  interface Window {
    trace: (key: string, value: any) => void;
  }
}
// 上报
window.trace = async (key: string, value: any) => {
  const reportData = {
    key,
    value,
    timestamp: new Date(),
    userAgent: navigator.userAgent,
  };

  try {
    const res = await reportUserData(reportData);
    // 可以在这里处理res，如果需要
    console.log(res, '成功')
  } catch (error) {
    console.error('上报错误:', error);
  }
};

// CSRF Token配置
const CSRF_KEY = 'XSRF-TOKEN';
let csrfToken = Cookies.get('XSRF-TOKEN'); // 使用 js-cookie 获取 CSRF 令牌// 合适的地方 获取 
// 登录超时和断点续传的配置
let lastRequestQueue: AxiosRequestConfig[] = [];
let isRetryInProgress = false;
// 创建axios的实例
const request = axios.create({
  timeout: 24000,
  baseURL: process.env.REACT_APP_API_URL, // 使用环境变量或直接指定
  withCredentials: true, // 添加这行来确保跨域请求时携带cookie
  // 其他全局配置
});
const state = store.getState();
const username = state.user.value?.name; // 假设用户的名称存储在 user slice 的 value 中
const token = localStorage.getItem("UserToken")||null;
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这里可以添加认证token等逻辑
    config.headers['Authorization'] = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    if (username) {
      config.headers['X-Username'] = username; // 添加自定义头部，例如 'X-Username'
    }
    // csrf的token 塞进headers
    if (csrfToken) {
      config.headers[CSRF_KEY] = csrfToken;
    }
    // 存储请求以便之后重试
    if (!config.headers['Retry']) {
      lastRequestQueue.push(config)
    }
    const urlBool = config.url?.includes('/report')
    // 上报
    if (!urlBool && token) {
      window.trace('request_end', config);
    }
    console.log(config, token, 'logout111111')
    return config;
  },
  (error) => {
    // 上报错误
    if (token && error.config && !error.config.url.includes('/report')) {
      window.trace('request_error', error);
    }
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 回传数据上报
    // if (!response?.data.reportDataBool)
    //   window.trace('response_end', response);
    // 从响应头中获取 CSRF 令牌
    const token = response.headers['x-csrf-token'];
    if (token) {
      csrfToken = token; // 存储 CSRF 令牌以备后续使用
    }

    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // if (!error.data?.reportDataBool)
    //   //响应错误上报 
    //   window.trace('response_error', error);
    // 登录超时处理
    if (error.response && error.response.status === 401) {
      if (!isRetryInProgress) {
        // 用于实现 重新登录或者刷新token的逻辑
        return retryFailedRequests();
      }
    }
    // 处理响应错误
    return Promise.reject(error);
  }
);
// 重试失败的请求
const retryFailedRequests = async () => {
  // 更新token或者执行登录操作
  const newToken = csrfToken //更新后的token(暂时还是使用原来的csrf的token)
  const retryQueue = lastRequestQueue.map(config => {
    // 确保 headers 已定义
    if (!config.headers) {
      config.headers = {};
    }
    config.headers['Retry'] = true;
    config.headers[CSRF_KEY] = newToken; // 更新 CSRF token
    return request(config);
  });
  lastRequestQueue = []; // 清空队列
  isRetryInProgress = false;
  try {
    await Promise.all(retryQueue);
  } catch (error) {
    console.error('Error retrying requests:', error);
  }
};

export default request;
