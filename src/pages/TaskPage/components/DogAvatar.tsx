import React from 'react';

interface DogAvatarProps {
  currentDay: number;
}

const DogAvatar: React.FC<DogAvatarProps> = ({ currentDay }) => {
  // Always use the cartoon dog image regardless of progress
  const dogImage = "https://raw.githubusercontent.com/your-username/your-repo/main/cartoon-dog.png";

  return (
    <div className="relative">
      <img 
        src="/cartoon-dog.png" 
        alt="Cartoon Dog" 
        className="w-40 h-40 mx-auto object-contain transform hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute -bottom-2 right-1/4 bg-white rounded-full p-2 shadow-lg">
        <span className="text-sm font-bold text-gray-700">Level {Math.floor(currentDay / 5) + 1}</span>
      </div>
    </div>
  );
};

export default DogAvatar;