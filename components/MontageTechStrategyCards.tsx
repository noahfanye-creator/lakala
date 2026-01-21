import React from 'react';
import { Target, TrendingUp, Activity, GitCommit } from 'lucide-react';

export const MontageTechStrategyCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Chan Lun Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Activity size={64} className="text-blue-500" />
        </div>
        <h3 className="text-blue-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Activity size={20} />
          缠论：中枢震荡
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          日线"男上位"趋势完好，30分钟级别正在构建"次级别中枢"。
        </p>
        <div className="space-y-3">
          <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <span className="text-xs text-slate-500 uppercase">定性</span>
            <div className="text-white font-medium">上涨中继 (加油站)</div>
          </div>
          <div className="text-sm text-slate-300">
             <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li><span className="text-white">信号：</span>30分MACD翻绿/均线死叉</li>
              <li><span className="text-green-400">买点：</span>5分钟级别底背驰(三买)</li>
              <li><span className="text-slate-500">逻辑：</span>回调是积蓄力量</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elliott Wave Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-purple-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <TrendingUp size={64} className="text-purple-500" />
        </div>
        <h3 className="text-purple-400 font-bold text-lg mb-3 flex items-center gap-2">
          <TrendingUp size={20} />
          波浪：3浪主升
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          强劲阳线配合MACD放大，处于第3浪主升段。
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-xs text-slate-500">当前位置</div>
            <div className="text-white font-bold">第3浪-子浪4</div>
          </div>
           <div className="text-center">
            <div className="text-xs text-slate-500">后续预期</div>
            <div className="text-purple-400 font-bold">子浪5冲高</div>
          </div>
        </div>
        <div className="bg-purple-900/20 p-3 rounded border border-purple-900/50 text-xs text-purple-200 flex items-start gap-2">
          <GitCommit size={14} className="shrink-0 mt-0.5" />
          <p>4浪调整通常不深，只要不有效跌破20日线，后市大概率冲击新高。</p>
        </div>
      </div>

      {/* Fibonacci Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Target size={64} className="text-yellow-500" />
        </div>
        <h3 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Target size={20} />
          均线战法：生命线
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          股价高位运行，依托关键均线寻找低吸机会。
        </p>
        <ul className="space-y-3 text-sm">
           <li className="flex justify-between items-center text-slate-400">
            <span>MA5 (激进)</span>
            <span className="text-white">99.79</span>
          </li>
          <li className="flex justify-between items-center font-bold text-white bg-slate-700/50 p-2 rounded">
            <span>MA10 (稳健)</span>
            <span className="text-yellow-400">94.12</span>
          </li>
          <li className="flex justify-between items-center text-slate-300">
            <span>0.236回撤</span>
            <span className="text-xs">~96.00</span>
          </li>
        </ul>
      </div>
    </div>
  );
};