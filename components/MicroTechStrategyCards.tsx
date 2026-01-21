import React from 'react';
import { Target, TrendingDown, Activity, AlertTriangle } from 'lucide-react';

export const MicroTechStrategyCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {/* Chan Lun Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Activity size={64} className="text-blue-500" />
        </div>
        <h3 className="text-blue-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Activity size={20} />
          缠论视角：防小转大
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          日线"男上位"强势，但短线5分钟已开始构筑盘整中枢。
        </p>
        <div className="space-y-3">
          <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <span className="text-xs text-slate-500 uppercase">监控重点</span>
            <div className="text-white font-medium">5分钟级别底背驰</div>
          </div>
          <div className="text-sm text-slate-300">
             <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li><span className="text-red-400">卖点：</span>若冲高不破背驰(1类卖点)</li>
              <li><span className="text-green-400">买点：</span>股价新低但绿柱缩短</li>
              <li>当前状态：5分MACD翻绿(-1.088)</li>
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
          波浪理论：高潮/衰竭
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          RSI&gt;80极值特征，处于3浪主升段顶部或5浪疯狂期。
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-xs text-slate-500">当前定位</div>
            <div className="text-white font-bold">4浪微观修正</div>
          </div>
           <div className="text-center">
            <div className="text-xs text-slate-500">调整形态</div>
            <div className="text-purple-400 font-bold">锯齿形(ABC)</div>
          </div>
        </div>
        <div className="bg-purple-900/20 p-3 rounded border border-purple-900/50 text-xs text-purple-200 flex items-start gap-2">
          <AlertTriangle size={14} className="shrink-0 mt-0.5" />
          <p>若为5浪顶，随后ABC调整级别将扩大至日线，风险累积中。</p>
        </div>
      </div>

      {/* Fibonacci Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Target size={64} className="text-yellow-500" />
        </div>
        <h3 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Target size={20} />
          斐波那契：黄金坑
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          股价处于历史高位(194.88)，寻找0.382/0.5强势回调位。
        </p>
        <ul className="space-y-3 text-sm">
           <li className="flex justify-between items-center text-slate-400">
            <span>30分 MA10</span>
            <span className="text-white">188.44</span>
          </li>
          <li className="flex justify-between items-center font-bold text-white bg-slate-700/50 p-2 rounded">
            <span>共振支撑区</span>
            <span className="text-yellow-400">178.00 - 180.00</span>
          </li>
          <li className="flex justify-between items-center text-slate-300">
            <span>逻辑</span>
            <span className="text-xs">MA20 + 0.5回调位</span>
          </li>
        </ul>
      </div>
    </div>
  );
};