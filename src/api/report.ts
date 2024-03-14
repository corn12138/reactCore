// 上报接口
import request from '../utils/request';
import { formatPath } from './config/env'

// 假设您已经定义了一个类型接口来描述value
interface ReportData {
    key: string;
    timestamp: Date;
    userAgent: string;
    value: any; // 或者更具体的类型
  }
  
  export const reportUserData = async ({ key, timestamp, userAgent, value }: ReportData) => {
      try {
          const response = await request.post(`${formatPath}/report`, { key, timestamp, userAgent, value });
          return response.data;
      } catch (error) {
          // 统一错误处理
          throw error;
      }
  }
  