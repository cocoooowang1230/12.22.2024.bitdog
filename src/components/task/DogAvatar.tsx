import React from 'react';
import { Bone, Heart } from 'lucide-react';

interface DogAvatarProps {
  progress: number;
  onFeed: () => void;
}

const DogAvatar: React.FC<DogAvatarProps> = ({ progress, onFeed }) => {
  const getDogImage = () => {
    if (progress >= 30) {
      return "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
    } else if (progress >= 15) {
      return "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
    }
    return "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
  };

  return (
    <div className="relative flex flex-col items-center mb-8">
      <div className="relative">
        <img 
          src={getDogImage()} 
          alt="Dog Avatar" 
          className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-yellow-300"
        />
        <div className="absolute -bottom-2 right-0 bg-white rounded-full p-2 shadow-lg">
          <Heart className="text-red-500 animate-pulse" size={24} />
        </div>
      </div>
      
      <button 
        onClick={onFeed}
        className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-500 p-4 rounded-full hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 group"
      >
        <Bone className="text-white group-hover:rotate-12 transition-transform" size={28} />
      </button>
      
      <div className="absolute -top-4 left-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
        Level {Math.floor(progress / 5) + 1}
      </div>
    </div>
  );
};

export default DogAvatar;