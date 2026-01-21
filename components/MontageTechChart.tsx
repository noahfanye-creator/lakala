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

// Corrected Data: Strong rise 142 -> 162, Pullback to 160.02
const data = [
  { day: '起涨点', price: 142.00 },
  { day: '加速段1', price: 148.50 },
  { day: '加速段2', price: 155.20 },
  { day: '主升浪', price: 160.80 },
  { day: '高点', price: 162.15 }, // Intraday High
  { day: '5分回调', price: 161.20 },
  { day: '现价', price: 160.02 }, // Closing price
  { day: 'MA5支撑', price: 158.60 }, 
  { day: '黄金坑/MA10', price: 154.35 }, // Target
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
            domain={[140, 170]} 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            tickFormatter={(value) => `¥${value}`}
          />
          <Tooltip content={<CustomTooltip />} />
          
          {/* Golden Buy Zone */}
          <ReferenceArea 
            y1={154.00} 
            y2={155.00} 
            fill="#10b981" 
            fillOpacity={0.15} 
            strokeOpacity={0}
          >
            <Label value="空中加油区 (154.0-155.0)" position="insideRight" fill="#10b981" fontSize={12} offset={10} />
          </ReferenceArea>

          {/* Key Reference Lines */}
          <ReferenceLine y={162.15} stroke="#94a3b8" strokeDasharray="3 3">
            <Label value="近期高点 (162.15)" position="left" fill="#94a3b8" fontSize={11} />
          </ReferenceLine>
          
          <ReferenceLine y={158.60} stroke="#fbbf24" strokeDasharray="3 3">
             <Label value="30分MA5 (158.60)" position="left" fill="#fbbf24" fontSize={11} />
          </ReferenceLine>

          <ReferenceLine y={154.35} stroke="#38bdf8" strokeDasharray="5 5">
             <Label value="30分MA10 (154.35)" position="left" fill="#38bdf8" fontSize={11} />
          </ReferenceLine>

          {/* Current Price Line */}
          <ReferenceLine y={160.02} stroke="#fff" strokeDasharray="2 2" />

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