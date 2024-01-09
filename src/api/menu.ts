// src/api/auth.ts
import request from '../utils/request';
import { formatPath } from './config/env'

export const menuItem = async () => {
    try {
        const response = await request.get(`${formatPath}/menu-items`, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};