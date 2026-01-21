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
          缠论：三类买点
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          30分钟"男上位"极强，关注回调不破中枢的"第三类买点"。
        </p>
        <div className="space-y-3">
          <div className="bg-slate-900/50 p-3 rounded border border-slate-700">
            <span className="text-xs text-slate-500 uppercase">风险提示</span>
            <div className="text-white font-medium">小转大 (5分背驰引跌)</div>
          </div>
          <div className="text-sm text-slate-300">
             <ul className="list-disc pl-4 space-y-1 text-slate-400">
              <li><span className="text-white">现象：</span>股价急拉但5分MACD翻绿</li>
              <li><span className="text-green-400">机会：</span>回调至154-158元止跌</li>
              <li><span className="text-slate-500">定性：</span>上涨线段的良性修正</li>
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
          波浪：主升浪冲顶
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          符合第3浪主升特征（速度快/RSI超买）。
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <div className="text-xs text-slate-500">当前微观</div>
            <div className="text-white font-bold">第4子浪修正</div>
          </div>
           <div className="text-center">
            <div className="text-xs text-slate-500">后续预期</div>
            <div className="text-purple-400 font-bold">第5子浪冲高</div>
          </div>
        </div>
        <div className="bg-purple-900/20 p-3 rounded border border-purple-900/50 text-xs text-purple-200 flex items-start gap-2">
          <GitCommit size={14} className="shrink-0 mt-0.5" />
          <p>第4浪通常为平台型整理，调整幅度浅。目标随后冲击165-170元。</p>
        </div>
      </div>

      {/* Fibonacci Card */}
      <div className="bg-slate-800 rounded-xl p-6 border-l-4 border-yellow-500 shadow-lg relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
          <Target size={64} className="text-yellow-500" />
        </div>
        <h3 className="text-yellow-400 font-bold text-lg mb-3 flex items-center gap-2">
          <Target size={20} />
          斐波那契：空中加油
        </h3>
        <p className="text-slate-400 text-sm mb-4">
          基于拉升段(142-162)测算，寻找"空中加油"的黄金坑。
        </p>
        <ul className="space-y-3 text-sm">
           <li className="flex justify-between items-center text-slate-400">
            <span>0.236回撤 (极强)</span>
            <span className="text-white">157.30</span>
          </li>
          <li className="flex justify-between items-center font-bold text-white bg-slate-700/50 p-2 rounded">
            <span>0.382 / MA10</span>
            <span className="text-yellow-400">154.40</span>
          </li>
          <li className="flex justify-between items-center text-slate-300">
            <span>支撑逻辑</span>
            <span className="text-xs">均线共振=最佳买点</span>
          </li>
        </ul>
      </div>
    </div>
  );
};