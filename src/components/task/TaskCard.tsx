import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import { Task } from '../../types/task';

const TaskCard: React.FC<Task> = ({ id, title, image, provider, reward }) => {
  return (
    <Link 
      to={`/mission/${id}`}
      className="block bg-[#FDF1D9] rounded-[20px] overflow-hidden"
    >
      <div className="p-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-[136px] object-cover rounded-[16px]"
        />
        <h3 className="mt-2 text-[13px] font-bold text-[#333841]">{title}</h3>
        <div className="mt-2 flex items-center">
          <div className="w-4 h-4 bg-[#F0E8DC] rounded-full" />
          <span className="ml-2 text-[10px] text-[#333841]">{provider}</span>
          <div className="ml-auto flex items-center">
            <Flame className="w-4 h-4 text-red-500" />
            <span className="ml-1 text-[10px] text-[#333841]">999+</span>
          </div>
        </div>
        <div className="mt-4 flex items-center">
          <img 
            src="https://img.icons8.com/color/48/000000/bitcoin.png" 
            alt="Bitcoin" 
            className="w-4 h-4"
          />
          <span className="ml-2 text-[15px] font-bold text-[#333841]">
            {reward.toFixed(3)} BTC
          </span>
        </div>
      </div>
    </Link>
  );
};

export default TaskCard;