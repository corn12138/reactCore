// src/api/request.ts
import axios from 'axios';

const request = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // 使用环境变量或直接指定
  // 其他全局配置
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这里可以添加认证token等逻辑
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default request;
