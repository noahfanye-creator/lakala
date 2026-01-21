import React from 'react';
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea,
  Label
} from 'recharts';

// Mock data to simulate the trend described: 21 -> 32 -> 27.60
const data = [
  { day: '起涨', price: 21.00 },
  { day: '第一周', price: 23.50 },
  { day: '第二周', price: 26.00 },
  { day: '第三周', price: 29.50 },
  { day: '高点', price: 32.00 },
  { day: '回调1', price: 30.50 },
  { day: '破MA5', price: 28.62 }, // MA5 cross
  { day: '回调2', price: 28.00 },
  { day: '现价', price: 27.60 },
  { day: '预期支撑', price: 26.50 }, // Target
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-800 border border-slate-700 p-3 rounded shadow-xl text-sm">
        <p className="text-slate-400 mb-1">{label}</p>
        <p className="text-white font-bold text-lg">
          ¥{payload[0].value.toFixed(2)}
        </p>
      </div>
    );
  }
  return null;
};

export const AnalysisChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-slate-900/50 rounded-xl p-4 border border-slate-800">
      <h3 className="text-slate-400 text-sm font-semibold mb-4 uppercase tracking-wider">价格结构分析 (Price Structure)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#38bdf8" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis dataKey="day" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis 
            domain={[20, 34]} 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `¥${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Support Zone Area (Golden Pit) */}
          <ReferenceArea 
            y1={26.50} 
            y2={27.00} 
            fill="#ef4444" 
            fillOpacity={0.15} 
            strokeOpacity={0}
          >
            <Label value="黄金坑伏击区 (26.5-27.0)" position="insideRight" fill="#ef4444" fontSize={12} offset={10} />
          </ReferenceArea>

          {/* Key Reference Lines */}
          <ReferenceLine y={32.00} stroke="#94a3b8" strokeDasharray="3 3">
            <Label value="近期高点 (32.00)" position="left" fill="#94a3b8" fontSize={11} />
          </ReferenceLine>
          
          <ReferenceLine y={27.80} stroke="#fbbf24" strokeDasharray="3 3">
             <Label value="0.382 (已破位)" position="left" fill="#fbbf24" fontSize={11} />
          </ReferenceLine>

          <ReferenceLine y={26.95} stroke="#ef4444" strokeDasharray="5 5">
             <Label value="MA20 (26.95)" position="left" fill="#ef4444" fontSize={11} />
          </ReferenceLine>

          <ReferenceLine y={25.33} stroke="#10b981" strokeDasharray="3 3">
             <Label value="月线MA5 / 0.618 (25.33)" position="left" fill="#10b981" fontSize={11} />
          </ReferenceLine>

          {/* Current Price Line */}
          <ReferenceLine y={27.60} stroke="#fff" strokeDasharray="2 2" />

          {/* The Price Line */}
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#38bdf8" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorPrice)" 
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};
