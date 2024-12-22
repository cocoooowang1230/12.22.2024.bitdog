import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8 bg-white rounded-lg p-4 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-800">Daily Progress</h3>
          <p className="text-sm text-gray-500">Keep going! You're doing great!</p>
        </div>
        <Trophy className="text-yellow-400" size={24} />
      </div>
      
      <div className="relative h-6 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full w-full bg-white/20 animate-pulse" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white mix-blend-difference">
          {current}/{total} Tasks
        </div>
      </div>
      
      <div className="mt-2 flex justify-between text-xs text-gray-500">
        <span>Start</span>
        <span>Finish</span>
      </div>
    </div>
  );
};

export default ProgressBar;