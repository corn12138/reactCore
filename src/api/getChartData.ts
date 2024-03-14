import request from '../utils/request';
import { formatPath } from './config/env'

export const getChartData = async () => {
    try {
        const response = await request.post(`${formatPath}/getChartData`, {});
        return response.data;
    } catch (error) {
        throw error;
    }
};