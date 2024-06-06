// src/api/auth.ts
import request from '../utils/request';
import { formatPath } from './config/env'

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await request.post(`${formatPath}/login`, { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
// 这个是加载登录页的时候 获取 csrf的
export const loginCsrf = async (data: undefined) => {
  try {
    // const response = await request.get(`${formatPath}/csrfs`, {});
    const response = await request({
      method: 'get',
      url: `${formatPath}/csrfs`,
      params: data,
      // responseType:"json"
    })
    return response
  } catch (error) {
    throw error;
  }
}
