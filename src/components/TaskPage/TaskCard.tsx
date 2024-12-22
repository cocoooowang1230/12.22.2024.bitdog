import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

interface TaskCardProps {
  id: number;
  image: string;
  title: string;
  completed?: boolean;
  type: string;
}

const TaskCard: React.FC<TaskCardProps> = ({ id, image, title, completed = false, type }) => {
  return (
    <Link 
      to={`/mission/${id}`}
      className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-102 relative"
    >
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-gray-600">
          {type}
        </div>
        {completed && (
          <div className="absolute top-2 left-2">
            <CheckCircle className="text-green-500" size={20} />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default TaskCard;