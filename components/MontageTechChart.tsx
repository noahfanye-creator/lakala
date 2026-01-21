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

// Data simulating a strong Wave 3 uptrend with a minor pullback at the end
const data = [
  { day: '起涨点', price: 80.00 },
  { day: '浪1顶部', price: 88.50 },
  { day: '浪2回调', price: 85.20 },
  { day: '浪3加速', price: 92.00 },
  { day: '突破', price: 96.50 },
  { day: '近期高点', price: 102.15 },
  { day: '现价', price: 101.79 }, // Closing price
  { day: 'MA5支撑', price: 99.79 }, 
  { day: 'MA10/黄金点', price: 94.12 },
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

export const MontageTechChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-slate-900/50 rounded-xl p-4 border border-slate-800">
      <h3 className="text-slate-400 text-sm font-semibold mb-4 uppercase tracking-wider">价格结构分析 (Price Structure)</h3>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorPriceMontage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/> 
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis dataKey="day" stroke="#475569" fontSize={12} tickLine={false} axisLine={false} />
          <YAxis 
            domain={[75, 110]} 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `¥${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Golden Buy Zone */}
          <ReferenceArea 
            y1={94.00} 
            y2={95.00} 
            fill="#10b981" 
            fillOpacity={0.15} 
            strokeOpacity={0}
          >
            <Label value="稳健接回区 (94.0-95.0)" position="insideRight" fill="#10b981" fontSize={12} offset={10} />
          </ReferenceArea>

          {/* Key Reference Lines */}
          <ReferenceLine y={102.00} stroke="#94a3b8" strokeDasharray="3 3">
            <Label value="前高压力 (102.0)" position="left" fill="#94a3b8" fontSize={11} />
          </ReferenceLine>
          
          <ReferenceLine y={99.79} stroke="#fbbf24" strokeDasharray="3 3">
             <Label value="MA5 激进支撑 (99.79)" position="left" fill="#fbbf24" fontSize={11} />
          </ReferenceLine>

          <ReferenceLine y={94.12} stroke="#38bdf8" strokeDasharray="5 5">
             <Label value="MA10 强支撑 (94.12)" position="left" fill="#38bdf8" fontSize={11} />
          </ReferenceLine>

          {/* Current Price Line */}
          <ReferenceLine y={101.79} stroke="#fff" strokeDasharray="2 2" />

          {/* The Price Line */}
          <Area 
            type="monotone" 
            dataKey="price" 
            stroke="#ef4444" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorPriceMontage)" 
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};