import React, { useState } from 'react';
import { MicroTechChart } from './MicroTechChart';
import { MicroTechStrategyCards } from './MicroTechStrategyCards';
import { 
  ArrowDown, 
  ArrowLeft,
  ShieldAlert, 
  Clock, 
  MousePointerClick, 
  TrendingUp, 
  AlertCircle,
  FileText,
  X,
  Flame // Icon for "Hot/Overbought"
} from 'lucide-react';

// Reusing the StatusBadge and Metric components locally
const StatusBadge = ({ type, text }: { type: 'danger' | 'warning' | 'success', text: string }) => {
  const colors = {
    danger: 'bg-market-down/20 text-market-down border-market-down/30', // Green = Drop/Sell in crypto/global, usually Red in China but keeping style consistent
    warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    success: 'bg-market-up/20 text-market-up border-market-up/30', // Red = Up
  };
  
  // Custom logic for this report: Since it's a "Warning/Sell" report, we use Warning/Danger colors
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors[type]} flex items-center gap-1.5`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${type === 'danger' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${type === 'danger' ? 'bg-green-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`}></span>
      </span>
      {text}
    </span>
  );
};

const Metric = ({ label, value, sub, trend }: { label: string, value: string, sub?: string, trend?: 'up' | 'down' | 'neutral' | 'danger' }) => (
  <div className="flex flex-col">
    <span className="text-slate-500 text-xs uppercase font-semibold">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-bold ${trend === 'down' ? 'text-market-down' : trend === 'up' ? 'text-market-up' : trend === 'danger' ? 'text-orange-500' : 'text-white'}`}>
        {value}
      </span>
      {sub && <span className="text-xs text-slate-400">{sub}</span>}
    </div>
  </div>
);

const ReportModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-slate-900 w-full max-w-4xl max-h-[85vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500/20 p-2 rounded-lg">
              <FileText className="text-indigo-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">深度策略研报</h2>
              <p className="text-xs text-slate-500">生成时间：{new Date().toLocaleDateString()} • 来源：技术面综合诊断</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-400 hover:text-white hover:bg-slate-800 p-2 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Modal Content - Based on Micro-Tech Report */}
        <div className="flex-1 overflow-y-auto p-8 text-slate-300 leading-relaxed font-sans space-y-8 custom-scrollbar">
          
          <div className="border-l-4 border-yellow-500 pl-4 py-1 bg-yellow-500/5 rounded-r-lg">
             <h3 className="text-lg font-bold text-white mb-1">一、 核心盘面诊断：极度强势后的短线背离</h3>
             <p className="text-yellow-500 font-medium text-sm">定性：趋势极强但短期过热，宜“守”不宜“追”</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">1. 宏观状态与风险</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><span className="text-slate-500">现价：</span> 194.88 元</li>
                 <li><span className="text-slate-500">均线：</span> 日/周/月线多头排列，主升浪中。</li>
                 <li><span className="text-orange-500 font-bold">风险：</span> 日线 RSI 83.8 (严重超买)；30分钟 RSI 85.7 (极度超买)。</li>
               </ul>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">2. 短线信号</h4>
               <p className="text-slate-400 mb-2">5分钟MACD翻绿(-1.088)，均线死叉，短线调整已经开始。</p>
               <p className="text-indigo-400 font-medium">结论："鱼尾"阶段，最肥美也最危险。</p>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="space-y-4">
             <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-blue-500"></span>
               二、 三大理论联合画像
             </h3>
             
             <div className="space-y-4 ml-2">
                <div>
                   <h4 className="text-blue-400 font-bold text-sm mb-1">1. 缠论视角：防止“小级别转大级别”</h4>
                   <p className="text-sm text-slate-400">日线处于极强“男上位”，大趋势未坏。但5分钟级别短线正在构筑“盘整中枢”。</p>
                   <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-sm mt-2">
                      <p className="text-blue-300 font-bold mb-1">买卖点推演：</p>
                      <ul className="list-disc pl-5 mt-1 text-slate-400">
                         <li><strong className="text-white">卖点：</strong>若再冲高突破195元，但30分/5分红柱不创新高（趋势背驰），必须减仓。</li>
                         <li><strong className="text-white">买点：</strong>等待5分钟“底背驰”（股价新低但绿柱缩短）。</li>
                      </ul>
                   </div>
                </div>

                <div>
                   <h4 className="text-purple-400 font-bold text-sm mb-1">2. 艾略特波浪：第3浪高潮或第5浪衰竭</h4>
                   <p className="text-sm text-slate-400">结合RSI&gt;80，目前大概率处于主升浪高潮。目前的5分钟调整很可能是<span className="text-white">第4浪的微观修正</span>。</p>
                   <p className="text-sm text-slate-500 mt-1">警示：若这是第5浪顶，随后ABC调整级别将扩大到日线级，跌幅会很深。</p>
                </div>

                <div>
                   <h4 className="text-yellow-500 font-bold text-sm mb-1">3. 斐波那契：测算“安全接回区”</h4>
                   <p className="text-sm text-slate-400">寻找强势股的“黄金坑”。</p>
                   <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
                      <li>30分钟 MA20 位于 178.77。</li>
                      <li>0.382/0.500 回调位与均线共振。</li>
                      <li><strong className="text-white">关键点位：178元 - 180元</strong>。</li>
                   </ul>
                </div>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <h3 className="text-lg font-bold text-white mb-4">三、 综合操作建议</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-orange-500">
                   <div className="text-slate-500 text-xs mb-1">持有者 (止盈/做T)</div>
                   <div className="text-white font-bold mb-1">分批减仓</div>
                   <p className="text-slate-400 text-sm">
                      RSI超买极为危险。利用盘中冲高（如触及200）锁定利润。防守线看 5分钟MA20 (195.57)，站不上则继续减。
                   </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-green-500">
                   <div className="text-slate-500 text-xs mb-1">空仓者 (等待)</div>
                   <div className="text-white font-bold mb-1">严禁追高</div>
                   <p className="text-slate-400 text-sm">
                      当前是下跌调整中。耐心等待回落至 <span className="text-yellow-500">178-185元</span>，且出现底分型信号时介入。
                   </p>
                </div>
             </div>
          </div>

        </div>
        
        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-800/50 flex justify-end">
          <button 
            onClick={onClose} 
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-indigo-500/20"
          >
            我已了解
          </button>
        </div>
      </div>
    </div>
  );
};

// Simple Icon Component for internal use
const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);

interface DetailProps {
  onBack: () => void;
}

export const MicroTechDetail: React.FC<DetailProps> = ({ onBack }) => {
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="min-h-screen bg-market-dark text-slate-200 font-sans selection:bg-indigo-500/30">
      
      <ReportModal isOpen={showReport} onClose={() => setShowReport(false)} />

      {/* Header / Hero Section */}
      <header className="border-b border-slate-800 bg-slate-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
               {/* Back Button */}
               <button 
                 onClick={onBack}
                 className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white transition-colors mr-2 border border-transparent hover:border-slate-700"
                 title="返回股票列表"
               >
                 <ArrowLeft size={20} />
               </button>

               <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-600/20">
                  <TrendingUp className="text-white" size={24} />
               </div>
               <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                    芯碁微装 <span className="text-slate-500 text-lg font-normal">(688630)</span>
                  </h1>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">MICRO-TECH EQUIPMENT</p>
               </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowReport(true)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-indigo-400 hover:text-indigo-300 border border-slate-700 rounded-lg transition-all text-sm font-semibold group"
              >
                <FileText size={16} className="group-hover:scale-110 transition-transform"/>
                详细分析
              </button>
              <div className="h-8 w-px bg-slate-700 mx-2 hidden md:block"></div>
              <div className="flex gap-2">
                 <StatusBadge type="warning" text="高位背离" />
                 <StatusBadge type="danger" text="止盈/等待" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        
        {/* Top Diagnosis Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Key Metrics Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-white font-semibold flex items-center gap-2">
                   <ActivityIcon /> 核心数据监测
                 </h2>
                 <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">2026-01-21 22:46</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6">
                <Metric label="当前价格" value="¥194.88" trend="up" />
                <Metric label="RSI(日线)" value="83.8" sub="严重超买" trend="danger" />
                <Metric label="5分 MACD" value="-1.088" sub="死叉调整" trend="down" />
                <Metric label="目标支撑" value="¥178.0" sub="斐波那契" trend="neutral" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-start gap-3 bg-orange-900/20 p-3 rounded-lg border border-orange-500/20">
                  <Flame className="text-orange-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-bold text-orange-300 uppercase mb-1">诊断结论</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      趋势极强但短期过热(RSI&gt;80)，属于"鱼尾"阶段。5分钟级别已开始调整，<span className="text-orange-400 font-bold">宜守不宜追</span>。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action Verdict */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden group hover:border-indigo-500/30 transition-colors cursor-pointer" onClick={() => setShowReport(true)}>
               <div className="relative z-10">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  当前操作建议 <span className="bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded">建议</span>
                </span>
                <div className="text-3xl font-bold text-white mt-2 mb-1">止盈 / 蹲守</div>
                <p className="text-slate-400 text-sm">"不做接盘侠，等待178元黄金坑。"</p>
                <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                   查看详细策略逻辑 <ArrowDown size={12} className="-rotate-90" />
                </div>
               </div>
               {/* Background decoration */}
               <Clock className="absolute -right-4 -bottom-4 text-slate-700 opacity-20 group-hover:opacity-30 transition-opacity" size={120} />
            </div>
          </div>

          {/* Chart Section */}
          <div className="lg:col-span-8">
            <MicroTechChart />
          </div>
        </section>

        {/* Strategy Breakdown */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-xl font-bold text-slate-200">三大理论联合狙击策略</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
          <MicroTechStrategyCards />
        </section>

        {/* Execution Plan Footer */}
        <section className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MousePointerClick className="text-yellow-500" />
                执行计划
              </h2>
              <p className="text-slate-400 mb-6">
                当前价格 (194.88) 处于5分钟级别下跌调整中，严禁追高。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">等待回调</h4>
                    <p className="text-sm text-slate-400">目标区间： <span className="text-yellow-400 font-mono">178.00 - 185.00</span>。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">观察信号</h4>
                    <p className="text-sm text-slate-400">股价到达区间后，出现<span className="font-mono text-indigo-400">5分钟底背驰</span>或底分型。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-200">持仓防守</h4>
                    <p className="text-sm text-slate-400">若反抽站不上5分钟MA20 (195.57)，坚决减仓。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-red-400 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle size={14} /> 风险提示
                </h3>
                <div className="text-3xl font-bold text-white mb-1">RSI &gt; 80</div>
                <p className="text-sm text-slate-500">极度超买，随时可能出现日线级别的剧烈杀跌。</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h4 className="text-yellow-500 font-bold text-sm mb-1">分析师寄语</h4>
                <p className="text-yellow-200/70 text-sm italic">
                  "鱼尾最肥美但也最危险。利用斐波那契支撑等待回调，利用缠论背驰捕捉短线反弹，切勿在高位盲目加仓。"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs py-8">
          <p>基于技术分析源 [158, 19, 48, 27] 生成。不构成投资建议。</p>
        </footer>

      </main>
    </div>
  );
}