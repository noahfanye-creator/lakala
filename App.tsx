import React, { useState } from 'react';
import { StockDashboard } from './components/StockDashboard';
import { LakalaDetail } from './components/LakalaDetail';
import { MicroTechDetail } from './components/MicroTechDetail';
import { StockSummary } from './types';

// Mock database of stocks
const stockDatabase: StockSummary[] = [
  {
    id: 'lakala-300773',
    name: '拉卡拉',
    code: '300773',
    price: '¥27.60',
    change: '-1.43%',
    trend: 'down',
    status: 'warning',
    statusText: '日线回调 • 等待',
    strategy: '股价已跌破MA5/10，寻找黄金坑。重点关注 26.50-27.00 支撑区，等待5分钟背驰。',
    lastUpdate: '2023-10-24'
  },
  {
    id: 'microtech-688630',
    name: '芯碁微装',
    code: '688630',
    price: '¥194.88',
    change: '-0.57%',
    trend: 'up', // Long term up
    status: 'danger', // Short term danger/overbought
    statusText: '高位超买 • 止盈',
    strategy: 'RSI>80极度强势后背离。5分钟级别已死叉调整，寻找178-180元斐波那契支撑。',
    lastUpdate: '2026-01-21'
  }
];

export default function App() {
  const [currentView, setCurrentView] = useState<'dashboard' | 'detail'>('dashboard');
  const [selectedStockId, setSelectedStockId] = useState<string | null>(null);

  const handleSelectStock = (id: string) => {
    if (id === 'lakala-300773' || id === 'microtech-688630') {
      setSelectedStockId(id);
      setCurrentView('detail');
    } else {
      alert("该股票的详细分析页面尚未生成");
    }
  };

  const handleBack = () => {
    setCurrentView('dashboard');
    setSelectedStockId(null);
  };

  if (currentView === 'detail') {
    if (selectedStockId === 'lakala-300773') {
      return <LakalaDetail onBack={handleBack} />;
    }
    if (selectedStockId === 'microtech-688630') {
      return <MicroTechDetail onBack={handleBack} />;
    }
  }

  return (
    <StockDashboard 
      stocks={stockDatabase} 
      onSelectStock={handleSelectStock} 
    />
  );
}