import React from 'react';

interface DogProgressBarProps {
  current: number;
  total: number;
}

const DogProgressBar: React.FC<DogProgressBarProps> = ({ current, total }) => {
  return (
    <div className="mt-4 w-4/5 mx-auto bg-[#D2CCBF77] rounded-full h-6">
      <div 
        className="h-full bg-[#F48F26] rounded-full transition-all duration-300"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
};

export default DogProgressBar;