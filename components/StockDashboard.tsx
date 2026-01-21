import React from 'react';
import { TrendingUp, TrendingDown, ChevronRight, Activity, Clock, Search } from 'lucide-react';
import { StockSummary } from '../types';

interface DashboardProps {
  stocks: StockSummary[];
  onSelectStock: (id: string) => void;
}

export const StockDashboard: React.FC<DashboardProps> = ({ stocks, onSelectStock }) => {
  return (
    <div className="min-h-screen bg-market-dark text-slate-200 font-sans p-4 md:p-8">
      {/* Dashboard Header */}
      <header className="max-w-7xl mx-auto mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            <Activity className="text-indigo-500" size={32} />
            股票策略分析中心
          </h1>
          <p className="text-slate-500 mt-2">实时追踪 • 技术面诊断 • 策略狙击</p>
        </div>
        
        {/* Simple Search Bar Simulation */}
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-500" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-700 rounded-xl leading-5 bg-slate-800 text-slate-300 placeholder-slate-500 focus:outline-none focus:bg-slate-900 focus:border-indigo-500 transition duration-150 ease-in-out sm:text-sm"
            placeholder="输入股票代码或名称 (e.g. 300773)"
          />
        </div>
      </header>

      {/* Stock Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stocks.map((stock) => (
          <div 
            key={stock.id}
            onClick={() => onSelectStock(stock.id)}
            className="group bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all cursor-pointer shadow-xl relative overflow-hidden"
          >
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent -translate-x-full group-hover:animate-shimmer" />

            <div className="flex justify-between items-start mb-4 relative z-10">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {stock.name}
                  </h3>
                  <span className="text-xs font-mono text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded">
                    {stock.code}
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                   <span className="text-2xl font-bold text-white">{stock.price}</span>
                   <span className={`text-sm font-medium px-2 py-0.5 rounded ${stock.trend === 'up' ? 'text-red-500 bg-red-500/10' : stock.trend === 'down' ? 'text-green-500 bg-green-500/10' : 'text-slate-400'}`}>
                      {stock.change}
                   </span>
                </div>
              </div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                stock.status === 'danger' ? 'bg-green-500/10 border-green-500/30 text-green-500' : 
                stock.status === 'success' ? 'bg-red-500/10 border-red-500/30 text-red-500' : 
                'bg-yellow-500/10 border-yellow-500/30 text-yellow-500'
              }`}>
                {stock.status === 'success' ? <TrendingUp size={20} /> : stock.status === 'danger' ? <TrendingDown size={20} /> : <Clock size={20} />}
              </div>
            </div>

            {/* Status Badge */}
            <div className="mb-6 relative z-10">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                 stock.status === 'danger' ? 'bg-green-900/20 text-green-400 border-green-900/30' : 
                 stock.status === 'success' ? 'bg-red-900/20 text-red-400 border-red-900/30' : 
                 'bg-yellow-900/20 text-yellow-500 border-yellow-900/30'
              }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${stock.status === 'danger' ? 'bg-green-500' : stock.status === 'success' ? 'bg-red-500' : 'bg-yellow-500'}`}></span>
                {stock.statusText}
              </span>
            </div>

            {/* Strategy Summary */}
            <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700/50 mb-4 relative z-10">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">当前策略</p>
              <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
                {stock.strategy}
              </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center pt-4 border-t border-slate-700/50 relative z-10">
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Clock size={12} /> 更新于: {stock.lastUpdate}
              </span>
              <span className="text-sm font-bold text-indigo-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                详细分析 <ChevronRight size={16} />
              </span>
            </div>
          </div>
        ))}

        {/* Placeholder for "Add New" */}
        <div className="border-2 border-dashed border-slate-700 rounded-2xl p-6 flex flex-col items-center justify-center text-slate-500 hover:border-slate-600 hover:bg-slate-800/30 transition-all cursor-not-allowed opacity-60">
          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4">
             <Activity className="text-slate-600" />
          </div>
          <h3 className="font-bold">新增分析对象</h3>
          <p className="text-sm text-center mt-2">即将支持更多股票代码</p>
        </div>

      </div>
    </div>
  );
};
