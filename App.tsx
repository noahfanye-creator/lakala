import React from 'react';
import { AnalysisChart } from './components/AnalysisChart';
import { StrategyCards } from './components/StrategyCards';
import { 
  ArrowDown, 
  ArrowUp, 
  ShieldAlert, 
  Clock, 
  MousePointerClick, 
  TrendingUp, 
  AlertCircle 
} from 'lucide-react';

const StatusBadge = ({ type, text }: { type: 'danger' | 'warning' | 'success', text: string }) => {
  const colors = {
    danger: 'bg-market-down/20 text-market-down border-market-down/30', // Green in China is down
    warning: 'bg-yellow-500/20 text-yellow-500 border-yellow-500/30',
    success: 'bg-market-up/20 text-market-up border-market-up/30', // Red in China is up
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

export default function App() {
  return (
    <div className="min-h-screen bg-market-dark text-slate-200 font-sans selection:bg-indigo-500/30">
      {/* Header / Hero Section */}
      <header className="border-b border-slate-800 bg-slate-900/50 sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
                <TrendingUp className="text-indigo-500" />
                技术分析简报
              </h1>
              <p className="text-slate-500 text-sm mt-1">日线回调中，寻找“黄金坑”</p>
            </div>
            <div className="flex items-center gap-4">
              <StatusBadge type="danger" text="日线回调" />
              <StatusBadge type="warning" text="空仓等待" />
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
              <h2 className="text-white font-semibold mb-6 flex items-center gap-2">
                <ActivityIcon /> 核心数据监测
              </h2>
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
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden">
               <div className="relative z-10">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider">当前操作建议</span>
                <div className="text-3xl font-bold text-white mt-2 mb-1">耐心蹲守</div>
                <p className="text-slate-400 text-sm">"不见兔子不撒鹰，等待最佳买点。"</p>
               </div>
               {/* Background decoration */}
               <Clock className="absolute -right-4 -bottom-4 text-slate-700 opacity-20" size={120} />
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
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">第一关注位</h4>
                    <p className="text-sm text-slate-400">等待股价回落至 <span className="text-yellow-400 font-mono">26.50 - 27.00</span> 区间。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">确认信号</h4>
                    <p className="text-sm text-slate-400">打开 <span className="font-mono text-indigo-400">5分钟K线图</span>，观察MACD底背驰信号。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600">3</div>
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

// Simple Icon Component for internal use
const ActivityIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
