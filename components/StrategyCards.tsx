import React from 'react';
import { Target, TrendingDown, Activity, AlertTriangle } from 'lucide-react';

export const StrategyCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Fibonacci Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Target size={64} className="text-yellow-500" />
        </div>
        <h3 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Target size={20} />
          斐波那契战法
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          基于本轮上涨波段（21.00元 至 32.00元）的回调测算。
        </p>
        <ul className="space-y-3 text-sm">
           <li className="flex justify-between items-center opacity-50">
            <span>0.382 (27.80)</span>
            <span className="text-red-400">已跌破</span>
          </li>
          <li className="flex justify-between items-center font-bold text-white bg-slate-700/50 p-2 rounded">
            <span>0.500 (26.50)</span>
            <span className="text-yellow-400">共振狙击点</span>
          </li>
          <li className="flex justify-between items-center text-slate-300">
            <span>0.618 (25.20)</span>
            <span className="text-green-400">最后防守线</span>
          </li>
        </ul>
      </div>

      {/* Chan Lun Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Activity size={64} className="text-blue-500" />
        </div>
        <h3 className="text-blue-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Activity size={20} />
          缠论时机把握
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          光有价格支撑不够，必须配合走势结构的背驰（力度衰竭）。
        </p>
        <div className="space-y-3">
          <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <span className="text-xs text-slate-500 uppercase">触发信号</span>
            <div className="text-white font-medium">5分钟级别盘整背驰</div>
          </div>
          <div className="text-sm text-slate-300">
            <span className="block mb-1">技术要求：</span>
            <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li>股价创出新低 (跌破27元)</li>
              <li>MACD 绿柱面积明显缩小</li>
              <li>黄白线开始回拉</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elliott Wave Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-purple-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <TrendingDown size={64} className="text-purple-500" />
        </div>
        <h3 className="text-purple-400 font-bold text-lg mb-3 flex items-center gap-2">
          <TrendingDown size={20} />
          艾略特波浪视角
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          识别从32元高点下来的调整形态结构。
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-xs text-slate-500">调整形态</div>
            <div className="text-white font-bold">A-B-C 结构</div>
          </div>
           <div className="text-center">
            <div className="text-xs text-slate-500">当前位置</div>
            <div className="text-purple-400 font-bold">C浪末端</div>
          </div>
        </div>
        <div className="bg-purple-900/20 p-3 rounded border border-purple-900/50 text-xs text-purple-200 flex items-start gap-2">
          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
          <p>C浪下跌通常比较凶猛（杀伤力大），务必等待其结构走完。</p>
        </div>
      </div>
    </div>
  );
};
