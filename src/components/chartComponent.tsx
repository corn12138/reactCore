import React from 'react';
import ReactECharts from 'echarts-for-react';

// 定义 Props 类型
interface ChartComponentProps {
  option: echarts.EChartsOption; // 或者根据实际需要定制更详细的类型
  style?: React.CSSProperties;
}

// 图表组件定义
const ChartComponent: React.FC<ChartComponentProps> = ({ option, style }) => {
  return <ReactECharts option={option} style={{ height: '350px', width: '100%', ...style }} />;
};

export default ChartComponent;
