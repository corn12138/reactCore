// src/api/auth.ts
import request from '../utils/request';

export const loginUser = async (username: string, password: string) => {
  try {
    const response = await request.post('/login', { username, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};
