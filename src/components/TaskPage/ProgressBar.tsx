import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = (current / total) * 100;

  return (
    <div className="mx-auto w-4/5 mb-6">
      <div className="bg-gray-200 rounded-full overflow-hidden shadow-inner">
        <div 
          className="h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          <div className="h-full w-full bg-opacity-20 bg-white animate-pulse" />
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className="text-sm text-gray-600">Progress</p>
        <p className="text-sm font-medium text-gray-800">
          {current}/{total} Tasks Completed
        </p>
      </div>
    </div>
  );
};

export default ProgressBar;