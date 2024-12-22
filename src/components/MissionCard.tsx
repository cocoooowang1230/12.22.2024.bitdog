import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

interface MissionCardProps {
  id: number;
  title: string;
  provider: string;
  reward: number;
  popularity: number;
  imageUrl: string;
}

const MissionCard: React.FC<MissionCardProps> = ({
  id,
  title,
  provider,
  reward,
  popularity,
  imageUrl
}) => {
  return (
    <Link 
      to={`/mission/${id}`}
      className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105"
    >
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <span>{provider}</span>
          <div className="flex items-center">
            <Flame className="text-red-500 mr-1" size={16} />
            <span>{popularity}+</span>
          </div>
        </div>
        <div className="mt-2 text-right">
          <span className="font-bold text-yellow-600">{reward.toFixed(3)} BTC</span>
        </div>
      </div>
    </Link>
  );
};

export default MissionCard;