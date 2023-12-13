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
