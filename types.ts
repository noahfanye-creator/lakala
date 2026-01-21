export interface MarketLevel {
  label: string;
  price: number;
  description: string;
  type: 'resistance' | 'support' | 'current' | 'target';
}

export interface Indicator {
  name: string;
  value: string | number;
  status: 'bullish' | 'bearish' | 'neutral';
  detail: string;
}

export interface StrategyPoint {
  title: string;
  content: string;
  subpoints?: string[];
  warning?: string;
  icon?: 'fib' | 'chart' | 'wave' | 'target';
}
