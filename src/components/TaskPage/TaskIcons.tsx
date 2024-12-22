import React from 'react';
import { Trophy, Star } from 'lucide-react';

const TaskIcons: React.FC = () => {
  return (
    <div className="flex justify-center space-x-8 my-6">
      <div className="animate-bounce">
        <Trophy size={32} className="text-red-500" />
      </div>
      <div className="animate-bounce delay-100">
        <Star size={32} className="text-yellow-600" />
      </div>
    </div>
  );
};

export default TaskIcons;