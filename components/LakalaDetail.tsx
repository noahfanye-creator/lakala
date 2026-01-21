import React, { useState } from 'react';
import { AnalysisChart } from './AnalysisChart';
import { StrategyCards } from './StrategyCards';
import { 
  ArrowDown, 
  ArrowLeft,
  ShieldAlert, 
  Clock, 
  MousePointerClick, 
  TrendingUp, 
  AlertCircle,
  FileText,
  X
} from 'lucide-react';

// Reusing the StatusBadge and Metric components locally
const StatusBadge = ({ type, text }: { type: 'danger' | 'warning' | 'success', text: string }) => {
  const colors = {
    danger: 'bg-market-down/20 text-market-down border-market-down/30',
    warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    success: 'bg-market-up/20 text-market-up border-market-up/30',
  };
  
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

const Metric = ({ label, value, sub, trend }: { label: string, value: string, sub?: string, trend?: 'up' | 'down' | 'neutral' }) => (
  <div className="flex flex-col">
    <span className="text-slate-500 text-xs uppercase font-semibold">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-bold ${trend === 'down' ? 'text-market-down' : trend === 'up' ? 'text-market-up' : 'text-white'}`}>
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
        
        {/* Modal Content */}
        <div className="flex-1 overflow-y-auto p-8 text-slate-300 leading-relaxed font-sans space-y-8 custom-scrollbar">
          
          <div className="border-l-4 border-market-down pl-4 py-1 bg-market-down/5 rounded-r-lg">
             <h3 className="text-lg font-bold text-white mb-1">一、 核心诊断：日线回调中，寻找“黄金坑”</h3>
             <p className="text-market-down font-medium text-sm">定性：上涨趋势中的次级别回调</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">1. 当前盘面状态</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><span className="text-slate-500">现价：</span> 27.60元 (从32元高点回落)</li>
                 <li><span className="text-slate-500">均线：</span> 已跌破MA5(28.62)和MA10(28.48)，正在向MA20(26.95)寻求支撑。</li>
                 <li><span className="text-slate-500">动能：</span> MACD绿柱(-0.119)，空头主导，动能未衰竭。</li>
                 <li><span className="text-slate-500">大周期：</span> 周线MA5(27.18)及月线MA5(25.33)构成多头支撑，大方向未坏。</li>
               </ul>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">2. 操作定性</h4>
               <p className="text-slate-400 mb-2">依据缠论思想：“没有任何买点，什么股票都是垃圾”。</p>
               <p className="text-indigo-400 font-medium">策略：猎人模式。不急于进场，等待回调结束的“第一类买点”。</p>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="space-y-4">
             <h3 className="text-lg font-bold text-white flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
               二、 三大理论联合狙击策略
             </h3>
             
             <div className="space-y-4 ml-2">
                <div>
                   <h4 className="text-yellow-500 font-bold text-sm mb-1">1. 斐波那契交易法：锁定“价格”区间</h4>
                   <p className="text-sm text-slate-400">假设本轮上涨波段 (21.00 -&gt; 32.00)，涨幅11元。</p>
                   <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
                      <li><strong className="text-slate-300">0.382回调位 (27.80)：</strong> <span className="text-market-down">已跌破</span>，调整力度较强。</li>
                      <li><strong className="text-white">0.500回调位 (26.50)：</strong> <span className="text-market-up">关键共振区</span>。与日线MA20(26.95)重合，构成极强支撑区 (26.50-27.00)。</li>
                      <li><strong className="text-slate-300">0.618回调位 (25.20)：</strong> 接近月线MA5(25.33)，这是最后的防守线。</li>
                   </ul>
                </div>

                <div>
                   <h4 className="text-blue-400 font-bold text-sm mb-1">2. 缠论视角：确认“时机”</h4>
                   <p className="text-sm text-slate-400 mb-2">必须配合走势结构的背驰。</p>
                   <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-sm">
                      <p className="text-blue-300 font-bold mb-1">进场信号：</p>
                      <p className="text-slate-300">当股价回落至 <span className="text-white font-mono">26.50-27.00</span> 区间时，观察5分钟图：</p>
                      <ul className="list-decimal pl-5 mt-1 text-slate-400">
                         <li>股价创出新低 (跌破27元)。</li>
                         <li>MACD绿柱面积明显比前一波缩小。</li>
                         <li>黄白线开始回拉 (构成盘整背驰/一买)。</li>
                      </ul>
                      <p className="mt-2 text-xs text-red-400 flex items-center gap-1">
                        <ShieldAlert size={12}/> 警示：若到达26.50时MACD绿柱依然很长且加速，千万不要接飞刀！
                      </p>
                   </div>
                </div>

                <div>
                   <h4 className="text-purple-400 font-bold text-sm mb-1">3. 艾略特波浪：形态识别</h4>
                   <p className="text-sm text-slate-400">目前处于C浪下跌末端。C浪通常凶猛，务必等跌透。一旦结束，将开启针对32元高点的反弹。</p>
                </div>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <h3 className="text-lg font-bold text-white mb-4">三、 综合操作建议 (无持仓版)</h3>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-slate-900 rounded-lg">
                   <div className="text-slate-500 text-xs mb-1">总策略</div>
                   <div className="text-white font-bold">耐心蹲守</div>
                   <div className="text-yellow-500 text-sm mt-1">26.50 - 27.00</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                   <div className="text-slate-500 text-xs mb-1">建仓动作</div>
                   <div className="text-white font-bold">背驰确认后</div>
                   <div className="text-indigo-400 text-sm mt-1">分批买入30%</div>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg">
                   <div className="text-slate-500 text-xs mb-1">防守底线</div>
                   <div className="text-white font-bold">跌破 25.00</div>
                   <div className="text-market-down text-sm mt-1">果断离场</div>
                </div>
             </div>
             <p className="text-center text-slate-500 text-sm mt-4 italic">
                “让子弹再飞一会儿，等待股价回踩27元以下并出现缠论背驰信号时，才是最安全的吸血机会。”
             </p>
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

interface LakalaDetailProps {
  onBack: () => void;
}

export const LakalaDetail: React.FC<LakalaDetailProps> = ({ onBack }) => {
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
                    拉卡拉 <span className="text-slate-500 text-lg font-normal">(300773)</span>
                  </h1>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">LAKALA PAYMENT CO., LTD.</p>
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
                 <StatusBadge type="danger" text="日线回调" />
                 <StatusBadge type="warning" text="空仓等待" />
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
                 <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">实时: 15:00:00</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6">
                <Metric label="当前价格" value="¥27.60" trend="down" />
                <Metric label="短期趋势" value="看跌" sub="调整阶段" trend="down" />
                <Metric label="MA20 支撑" value="¥26.95" sub="逼近中" trend="neutral" />
                <Metric label="MACD 动能" value="-0.119" sub="绿柱/空头" trend="down" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-start gap-3 bg-indigo-900/20 p-3 rounded-lg border border-indigo-500/20">
                  <ShieldAlert className="text-indigo-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-bold text-indigo-300 uppercase mb-1">诊断结论</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      股价已跌破MA5/MA10，正向MA20寻求支撑。大方向周/月线支撑完好，属于<span className="text-market-up font-bold">上涨趋势中的次级别回调</span>。
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
                <div className="text-3xl font-bold text-white mt-2 mb-1">耐心蹲守</div>
                <p className="text-slate-400 text-sm">"不见兔子不撒鹰，等待最佳买点。"</p>
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
            <AnalysisChart />
          </div>
        </section>

        {/* Strategy Breakdown */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-xl font-bold text-slate-200">三大理论联合狙击策略</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
          <StrategyCards />
        </section>

        {/* Execution Plan Footer */}
        <section className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-market-up"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MousePointerClick className="text-market-up" />
                执行计划 (空仓版)
              </h2>
              <p className="text-slate-400 mb-6">
                您现在空仓是最大的优势。不要因为手痒在半山腰接货。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">第一关注位</h4>
                    <p className="text-sm text-slate-400">等待股价回落至 <span className="text-yellow-400 font-mono">26.50 - 27.00</span> 区间。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">确认信号</h4>
                    <p className="text-sm text-slate-400">打开 <span className="font-mono text-indigo-400">5分钟K线图</span>，观察MACD底背驰信号。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-200">狙击进场</h4>
                    <p className="text-sm text-slate-400">仅在背驰确认后，分批建仓 (首笔30%)。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-red-400 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle size={14} /> 风控 / 止损
                </h3>
                <div className="text-3xl font-bold text-white mb-1">止损位 &lt; 25.00</div>
                <p className="text-sm text-slate-500">若有效跌破月线支撑 (25.33) 及0.618黄金分割位。</p>
              </div>

              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                <h4 className="text-yellow-500 font-bold text-sm mb-1">交易纪律</h4>
                <p className="text-yellow-200/70 text-sm italic">
                  "如果跌到26.50时，5分钟MACD绿柱依然很长且加速下跌，千万不要接飞刀。继续等待25.30附近的背驰信号。"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-600 text-xs py-8">
          <p>基于技术分析源 [21, 63, 76, 90, 148] 生成。不构成投资建议。</p>
        </footer>

      </main>
    </div>
  );
}