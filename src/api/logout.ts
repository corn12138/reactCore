import request from '../utils/request';
import { formatPath } from './config/env'

export const logoutUser = async () => {
  try {
    const response = await request.post(`${formatPath}/logout`);
    return response.data
  } catch (error) {
    throw error;
  }
};