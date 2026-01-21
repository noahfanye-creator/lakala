import React, { useState } from 'react';
import { MontageTechChart } from './MontageTechChart';
import { MontageTechStrategyCards } from './MontageTechStrategyCards';
import { 
  ArrowLeft, 
  TrendingUp, 
  FileText,
  X,
  Activity,
  Layers,
  MousePointerClick,
  AlertCircle,
  Zap // Icon for "High Energy/Strong"
} from 'lucide-react';

const StatusBadge = ({ type, text }: { type: 'danger' | 'warning' | 'success', text: string }) => {
  const colors = {
    danger: 'bg-green-500/20 text-green-500 border-green-500/30', // Sell/Bearish
    warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    success: 'bg-red-500/20 text-red-500 border-red-500/30', // Buy/Bullish
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${colors[type]} flex items-center gap-1.5`}>
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${type === 'success' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${type === 'success' ? 'bg-red-500' : type === 'warning' ? 'bg-yellow-500' : 'bg-green-500'}`}></span>
      </span>
      {text}
    </span>
  );
};

const Metric = ({ label, value, sub, trend }: { label: string, value: string, sub?: string, trend?: 'up' | 'down' | 'neutral' | 'success' | 'warning' }) => (
  <div className="flex flex-col">
    <span className="text-slate-500 text-xs uppercase font-semibold">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-bold ${trend === 'down' ? 'text-green-500' : trend === 'success' || trend === 'up' ? 'text-red-500' : trend === 'warning' ? 'text-yellow-500' : 'text-white'}`}>
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
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-500/20 p-2 rounded-lg">
              <FileText className="text-indigo-400" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">深度策略研报 (修正版)</h2>
              <p className="text-xs text-slate-500">生成时间：{new Date().toLocaleDateString()} • 来源：技术面综合诊断</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-all"><X size={24} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 text-slate-300 leading-relaxed font-sans space-y-8 custom-scrollbar">
          
          <div className="border-l-4 border-red-500 pl-4 py-1 bg-red-500/5 rounded-r-lg">
             <h3 className="text-lg font-bold text-white mb-1">一、 核心诊断：极强主升浪，短线"空中加油"</h3>
             <p className="text-red-400 font-medium text-sm">定性：30分钟极强多头，5分钟良性回调</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">1. 30分钟级别 (极强)</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><span className="text-slate-500">现价：</span> 160.02 元</li>
                 <li><span className="text-slate-500">均线：</span> MA5(158.6) > MA10(154.3)，接近90度拉升。</li>
                 <li><span className="text-yellow-500 font-bold">警示：</span> RSI高达74.5，进入超买区，有获利回吐压力。</li>
               </ul>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">2. 5分钟级别 (背离)</h4>
               <p className="text-slate-400 mb-2">MACD已翻绿(-0.723)，RSI回落至38.3。</p>
               <p className="text-indigo-400 font-medium">结论：短线抛压正在释放，是"良性回调"，并非趋势反转。</p>
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
                   <h4 className="text-blue-400 font-bold text-sm mb-1">1. 缠论视角：防"小转大"，找"三买"</h4>
                   <p className="text-sm text-slate-400">30分钟上涨线段延伸中。5分钟背驰可能引发30分钟一笔回调。</p>
                   <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-sm mt-2">
                      <p className="text-blue-300 font-bold mb-1">策略推演：</p>
                      <ul className="list-disc pl-5 mt-1 text-slate-400">
                         <li>由于上涨力度极强，回调大概率不深。</li>
                         <li>若在 <strong className="text-white">154-158元</strong> 止跌，构成30分钟级别的<strong className="text-red-400">第三类买点</strong>。</li>
                      </ul>
                   </div>
                </div>

                <div>
                   <h4 className="text-purple-400 font-bold text-sm mb-1">2. 艾略特波浪：第4浪修正</h4>
                   <p className="text-sm text-slate-400">当前处于主升浪(Wave 3)的高潮。5分钟的回调是微观的<span className="text-white">第4子浪</span>。调整结束后，理论上还有<span className="text-white">第5子浪</span>冲高(目标165+)。</p>
                </div>

                <div>
                   <h4 className="text-yellow-500 font-bold text-sm mb-1">3. 斐波那契：黄金坑测算</h4>
                   <p className="text-sm text-slate-400">基于 142.00 -> 162.00 的急涨段：</p>
                   <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
                      <li>0.236回撤位：157.3 (极强支撑)</li>
                      <li><strong className="text-yellow-400">0.382回撤位：154.4</strong> (与30分MA10重合)</li>
                   </ul>
                </div>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <h3 className="text-lg font-bold text-white mb-4">三、 综合操作建议</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-yellow-500">
                   <div className="text-slate-500 text-xs mb-1">持仓防守</div>
                   <div className="text-white font-bold mb-1">止盈警戒</div>
                   <p className="text-slate-400 text-sm">
                      30分RSI超买+5分背离。若明日不能快速突破162，建议减仓。防守线看 <span className="text-yellow-400">154.35 (MA10)</span>。
                   </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-red-500">
                   <div className="text-slate-500 text-xs mb-1">空仓进攻</div>
                   <div className="text-white font-bold mb-1">回调狙击</div>
                   <p className="text-slate-400 text-sm">
                      严禁现价追高。耐心等待回调至 <span className="text-red-400">154.0-155.0</span> 区间，配合底分型信号介入。
                   </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface DetailProps {
  onBack: () => void;
}

export const MontageTechDetail: React.FC<DetailProps> = ({ onBack }) => {
  const [showReport, setShowReport] = useState(false);

  return (
    <div className="min-h-screen bg-market-dark text-slate-200 font-sans selection:bg-indigo-500/30">
      <ReportModal isOpen={showReport} onClose={() => setShowReport(false)} />

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
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
                    澜起科技 <span className="text-slate-500 text-lg font-normal">(688008)</span>
                  </h1>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">MONTAGE TECHNOLOGY</p>
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
                 <StatusBadge type="success" text="主升浪" />
                 <StatusBadge type="warning" text="等待低吸" />
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
                   <Activity className="text-indigo-500" /> 核心数据监测
                 </h2>
                 <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">实时监测中</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6">
                <Metric label="当前价格" value="¥160.02" trend="success" />
                <Metric label="30分趋势" value="极强" sub="MA5>MA10" trend="success" />
                <Metric label="RSI(30分)" value="74.5" sub="高位超买" trend="warning" />
                <Metric label="目标支撑" value="¥154.4" sub="MA10共振" trend="neutral" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-start gap-3 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                  <Zap className="text-red-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-bold text-red-300 uppercase mb-1">诊断结论</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      处于主升浪高潮后的短线休整（空中加油）。30分钟级别极强，<span className="text-red-400 font-bold">只做回调低吸，不做追高</span>。
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
                <div className="text-3xl font-bold text-white mt-2 mb-1">等待回调</div>
                <p className="text-slate-400 text-sm">"千金难买牛回头，瞄准154元。"</p>
                <div className="mt-4 text-xs text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                   查看详细策略逻辑 <ArrowLeft size={12} className="-rotate-90" />
                </div>
               </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="lg:col-span-8">
            <MontageTechChart />
          </div>
        </section>

        {/* Strategy Breakdown */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-xl font-bold text-slate-200">三大理论联合狙击策略</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
          <MontageTechStrategyCards />
        </section>

        {/* Execution Plan Footer */}
        <section className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MousePointerClick className="text-red-500" />
                执行计划
              </h2>
              <p className="text-slate-400 mb-6">
                针对强势股的“回马枪”策略。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">挂单/预警</h4>
                    <p className="text-sm text-slate-400">关注区间： <span className="text-yellow-400 font-mono">154.00 - 155.00</span>。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">确认信号</h4>
                    <p className="text-sm text-slate-400">5分钟级别出现<span className="font-mono text-indigo-400">底分型</span>或MACD绿柱缩短。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-200">防守止损</h4>
                    <p className="text-sm text-slate-400">跌破153.00 (大阴线击穿) 则放弃。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-yellow-500 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle size={14} /> 风险提示
                </h3>
                <div className="text-3xl font-bold text-white mb-1">冲高回落</div>
                <p className="text-sm text-slate-500">若明日直接高开低走放出巨量，可能是短线见顶信号。</p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <h4 className="text-blue-400 font-bold text-sm mb-1">交易心法</h4>
                <p className="text-blue-200/70 text-sm italic">
                  "强者恒强。在上升趋势中，每一次缩量回调都是买入机会，直到趋势被破坏。"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs py-8">
          <p>基于技术分析源 [688008] 生成。不构成投资建议。</p>
        </footer>

      </main>
    </div>
  );
}