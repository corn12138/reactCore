import React, { useState, useEffect } from 'react';
import ChartComponent from '../../components/chartComponent';
import { useWebSocket } from '../../hooks/useWebSocket';
// import FloatingText from "../../components/specialEffect";
// import { getChartData } from "../../api/getChartData";

interface dataObj {
  close: number,
  date: string,
  high: number,
  low: number,
  open: number,
  _id: string,
}

const Dashboard: React.FC = () => {
  // 
  const [chartData, setChartData] = useState<any>({});

  // 假设 WebSocket 服务返回一个对象，其中包含多个图表的数据
  const linkUrl = process.env.REACT_APP_API_URL?.substring(process.env.REACT_APP_API_URL.indexOf(":") + 1)
  // socketIo返回信息
  const socketIo = useWebSocket(`ws:${linkUrl}`);

  // WebSocket 数据更新时处理数据
  useEffect(() => {
    if (socketIo) {
      // 请求图表数据(先emit触发)后端去监听
      socketIo.emit('kLineDataRequest');
      // 假设 socketIo 是一个事件发射器，当接收到数据时触发 'data' 事件
      const handleData = (data: dataObj[]) => {
        const transformedData = transformData(data);
        // 假设每个键对应一个图表的数据
        const newChartData = {
          chart1: getChart1Option(transformedData),
          chart2: getChart2Option(transformedData),
          // 更多图表数据...
        };
        setChartData(newChartData);
      };
      socketIo.on('kLineDataResponse', handleData);

      // 清理函数
      return () => {
        socketIo.off('kLineDataResponse', handleData);
      };
    }
  }, [socketIo]);

  // useEffect(()=>{
  //   const getList =async ()=>{
  //     try {
  //       const res =await getChartData();
  //       console.log(res,'getChartData')
  //     } catch (error) {
  //       console.log(error,'errorgetChartData')
  //     }
  //   }
  //   getList();
  // },[])

  // 定义转换数据的函数...
  const transformData = (rawData: dataObj[]) => {
    // 转换数据逻辑...
    const transformedData = rawData.map(item => [
      item.open, item.close, item.low, item.high
    ]);

    return transformedData;
  };

  // 根据 chartData 来配置图表...
  const getChart1Option = (data: number[][]) => {
    return {
      xAxis: {
        type: 'category',
        data: data.map((_, i) => i) // 或者使用实际的日期，如果您有日期数据
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [
        {
          type: 'candlestick',
          data: data
        }
      ]
    };
  };

  const getChart2Option = (data: number[][]) => {
    return {
      xAxis: {
        type: 'category',
        data: data.map((_, i) => i) // 或者使用实际的日期，如果您有日期数据
      },
      yAxis: {
        type: 'value',
        scale: true
      },
      series: [
        {
          type: 'candlestick',
          data: data
        }
      ]
    };
  };

  // 渲染多个图表组件
  return (
    <div>
      {/* <FloatingText></FloatingText> */}
      {chartData.chart1 && <ChartComponent option={chartData.chart1} style={{ height: '400px', width: '100%' }} />}
      {chartData.chart2 && <ChartComponent option={chartData.chart2} style={{ height: '400px', width: '100%' }} />}
      {/* 更多图表... */}
      <span>数据展示</span>
      
    </div>
  );
};

export default Dashboard;
