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
  AlertCircle
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

const Metric = ({ label, value, sub, trend }: { label: string, value: string, sub?: string, trend?: 'up' | 'down' | 'neutral' | 'success' }) => (
  <div className="flex flex-col">
    <span className="text-slate-500 text-xs uppercase font-semibold">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-bold ${trend === 'down' ? 'text-green-500' : trend === 'success' || trend === 'up' ? 'text-red-500' : 'text-white'}`}>
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
              <h2 className="text-xl font-bold text-white">深度策略研报</h2>
              <p className="text-xs text-slate-500">生成时间：{new Date().toLocaleDateString()} • 来源：技术面综合诊断</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white transition-all"><X size={24} /></button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-8 text-slate-300 leading-relaxed font-sans space-y-8 custom-scrollbar">
          
          <div className="border-l-4 border-red-500 pl-4 py-1 bg-red-500/5 rounded-r-lg">
             <h3 className="text-lg font-bold text-white mb-1">一、 核心诊断：中期主升浪强劲，短线背离修正</h3>
             <p className="text-red-400 font-medium text-sm">定性：主升浪途中的加油站</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">1. 宏观状态 (日/周线)</h4>
               <ul className="space-y-2 text-slate-400">
                 <li><span className="text-slate-500">现价：</span> 101.79 元</li>
                 <li><span className="text-slate-500">日线：</span> MA5&gt;MA10&gt;MA20，MACD红柱放大(2.289)，健康主升浪。</li>
                 <li><span className="text-slate-500">周线：</span> 极度强势，但RSI 71.5进入超买，随时有震荡整理需求。</li>
               </ul>
             </div>
             <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700/50">
               <h4 className="font-bold text-slate-200 mb-2">2. 短线隐忧 (30分钟)</h4>
               <p className="text-slate-400 mb-2">虽然高位运行，但30分MACD翻绿(-0.855)呈现死叉。</p>
               <p className="text-yellow-400 font-medium">结论：攻击力减弱，正在进行"量价背离"的盘整修复。</p>
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
                   <h4 className="text-blue-400 font-bold text-sm mb-1">1. 缠论视角：日线"男上位" vs 30分"中枢"</h4>
                   <p className="text-sm text-slate-400">日线MACD无背驰，中线趋势完好。30分钟均线死叉对应<span className="text-white">次级别中枢</span>构建。</p>
                   <div className="bg-blue-500/10 p-3 rounded border border-blue-500/20 text-sm mt-2">
                      <p className="text-blue-300 font-bold mb-1">买点判定：</p>
                      <ul className="list-disc pl-5 mt-1 text-slate-400">
                         <li>等待30分MACD绿柱回缩。</li>
                         <li>股价回踩MA5(99.79)或MA10(94.12)不破。</li>
                         <li>5分钟出现<strong className="text-white">底背驰</strong>时，构成第三类买点。</li>
                      </ul>
                   </div>
                </div>

                <div>
                   <h4 className="text-purple-400 font-bold text-sm mb-1">2. 艾略特波浪：3浪4回调</h4>
                   <p className="text-sm text-slate-400">日线特征符合<span className="text-white">第3浪主升</span>。当前30分调整大概率为第3浪中的<span className="text-white">第4子浪修正</span>。只要不有效跌破20日线，后市大概率还有第5子浪冲高。</p>
                </div>

                <div>
                   <h4 className="text-yellow-500 font-bold text-sm mb-1">3. 斐波那契/均线：支撑测算</h4>
                   <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-slate-400">
                      <li><strong className="text-white">MA5 (99.79)：</strong> 强势股生命线，贴线走最强。</li>
                      <li><strong className="text-yellow-400">黄金买点 (94.12 - 96.00)：</strong> MA10与0.236回撤位重合，极佳顺势加仓点。</li>
                   </ul>
                </div>
             </div>
          </div>

          <hr className="border-slate-800" />

          <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
             <h3 className="text-lg font-bold text-white mb-4">三、 综合操作建议</h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-red-500">
                   <div className="text-slate-500 text-xs mb-1">中线持仓</div>
                   <div className="text-white font-bold mb-1">坚定持有</div>
                   <p className="text-slate-400 text-sm">
                      日线趋势完好。防守位设在 MA10 (94.12)，收盘不破即大方向无忧。
                   </p>
                </div>
                <div className="p-4 bg-slate-900 rounded-lg border-l-4 border-yellow-500">
                   <div className="text-slate-500 text-xs mb-1">空仓狙击</div>
                   <div className="text-white font-bold mb-1">耐心回调</div>
                   <p className="text-slate-400 text-sm">
                      勿追高。激进关注 99.80；稳健等待 <span className="text-yellow-400">94.00-95.00</span> 区间及5分钟底分型。
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
               <button onClick={onBack} className="p-2 hover:bg-slate-800 rounded-full text-slate-400 hover:text-white mr-2">
                 <ArrowLeft size={20} />
               </button>
               <div className="bg-indigo-600 w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                  <Activity className="text-white" size={24} />
               </div>
               <div>
                  <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                    澜起科技 <span className="text-slate-500 text-lg font-normal">(688008)</span>
                  </h1>
                  <p className="text-slate-500 text-xs mt-0.5 font-mono">MONTAGE TECHNOLOGY</p>
               </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button onClick={() => setShowReport(true)} className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-indigo-400 border border-slate-700 rounded-lg text-sm font-semibold group">
                <FileText size={16} className="group-hover:scale-110 transition-transform"/>
                详细分析
              </button>
              <div className="h-8 w-px bg-slate-700 mx-2 hidden md:block"></div>
              <div className="flex gap-2">
                 <StatusBadge type="success" text="主升浪" />
                 <StatusBadge type="warning" text="30分回调" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Top Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-800 rounded-xl p-6 border border-slate-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                 <h2 className="text-white font-semibold flex items-center gap-2">
                   <Activity /> 核心数据监测
                 </h2>
                 <span className="text-xs text-slate-500 bg-slate-900 px-2 py-1 rounded">2026-01-22 01:09</span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-6">
                <Metric label="当前价格" value="¥101.79" trend="success" />
                <Metric label="RSI(日线)" value="66.1" sub="强势区域" trend="success" />
                <Metric label="日线MACD" value="2.289" sub="红柱放大" trend="success" />
                <Metric label="30分MACD" value="-0.855" sub="死叉调整" trend="down" />
              </div>
              
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="flex items-start gap-3 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
                  <Layers className="text-red-400 shrink-0 mt-1" size={18} />
                  <div>
                    <p className="text-xs font-bold text-red-300 uppercase mb-1">诊断结论</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      中期趋势看涨，短线等待回调结束。回调是<span className="text-red-400 font-bold">买入机会</span>而非离场信号。
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 relative overflow-hidden group hover:border-indigo-500/30 transition-colors cursor-pointer" onClick={() => setShowReport(true)}>
               <div className="relative z-10">
                <span className="text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  当前操作建议 <span className="bg-indigo-500 text-white text-[10px] px-1.5 py-0.5 rounded">建议</span>
                </span>
                <div className="text-3xl font-bold text-white mt-2 mb-1">持股 / 低吸</div>
                <p className="text-slate-400 text-sm">"关注94-95元强支撑，中线坚定持有。"</p>
               </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <MontageTechChart />
          </div>
        </section>

        {/* Strategy Section */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-slate-700 flex-1"></div>
            <h2 className="text-xl font-bold text-slate-200">三大理论联合狙击策略</h2>
            <div className="h-px bg-slate-700 flex-1"></div>
          </div>
          <MontageTechStrategyCards />
        </section>

        {/* Execution Plan */}
        <section className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-red-500"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <MousePointerClick className="text-red-500" />
                执行计划
              </h2>
              <p className="text-slate-400 mb-6">
                现价 101.79 接近短线高点，30分钟调整进行中。
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-200">激进关注</h4>
                    <p className="text-sm text-slate-400">99.80元 (MA5支撑)，需结合5分钟底背驰轻仓尝试。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-200">稳健关注</h4>
                    <p className="text-sm text-slate-400"><span className="text-yellow-400 font-mono">94.00 - 95.00元</span> (MA10+斐波那契)，胜率极高。</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center font-bold text-slate-300 border border-slate-600 shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-200">防守底线</h4>
                    <p className="text-sm text-slate-400">MA10 (94.12)。收盘不破此线，中线趋势无忧。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-yellow-500 font-bold uppercase text-xs tracking-wider mb-2 flex items-center gap-2">
                  <AlertCircle size={14} /> 风险提示
                </h3>
                <div className="text-3xl font-bold text-white mb-1">周线RSI 71.5</div>
                <p className="text-sm text-slate-500">周线进入超买区，中期虽看涨，但随时可能出现周线级别的震荡。</p>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                <h4 className="text-red-500 font-bold text-sm mb-1">分析师寄语</h4>
                <p className="text-red-200/70 text-sm italic">
                  "澜起科技处于主升浪途中的加油站。通过震荡消化获利盘，回调是买入机会。重点关注94-95元的黄金坑。"
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-slate-600 text-xs py-8">
          <p>基于技术分析源 [185, 191, 21, 196] 生成。不构成投资建议。</p>
        </footer>
      </main>
    </div>
  );
}