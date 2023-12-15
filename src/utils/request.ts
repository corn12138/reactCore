// src/api/request.ts
import axios from 'axios';
import { store } from '../store/store'
// console.log(store.getState(),'aaaaaa')
const request = axios.create({
  timeout:24000,
  baseURL: process.env.REACT_APP_API_URL, // 使用环境变量或直接指定
  withCredentials: true, // 添加这行来确保跨域请求时携带cookie
  // 其他全局配置
});
const state = store.getState();
const username = state.user.value?.name; // 假设用户的名称存储在 user slice 的 value 中
const token = localStorage.getItem('token')
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在这里可以添加认证token等逻辑
    config.headers.Authorization = `Bearer ${token}`;
    config.headers['Content-Type'] = 'application/json;charset=UTF-8';
    if (username) {
      config.headers['X-Username'] = username; // 添加自定义头部，例如 'X-Username'
    }
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
