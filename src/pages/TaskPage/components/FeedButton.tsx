import React from 'react';

interface FeedButtonProps {
  onClick: () => void;
}

const FeedButton: React.FC<FeedButtonProps> = ({ onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="mt-4 mx-auto block bg-[#FFC700] p-3 rounded-full hover:scale-110 transition-transform duration-300"
    >
      <img 
        src="https://img.icons8.com/color/48/000000/dog-bone.png" 
        alt="Feed Dog" 
        className="w-6 h-6"
      />
    </button>
  );
};

export default FeedButton;