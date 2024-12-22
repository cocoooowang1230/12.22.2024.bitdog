import React from 'react';

interface DogProgressProps {
  progress: number;
}

const DogProgress: React.FC<DogProgressProps> = ({ progress }) => {
  const getDogImage = () => {
    if (progress >= 30) {
      return "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
    } else if (progress >= 15) {
      return "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
    }
    return "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80";
  };

  return (
    <div className="flex justify-center mb-6">
      <img 
        src={getDogImage()} 
        alt="Dog Progress" 
        className="w-40 h-40 rounded-full object-cover"
      />
    </div>
  );
};

export default DogProgress;