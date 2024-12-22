import React from 'react';
import { Calendar, Ticket } from 'lucide-react';

const TaskHeader: React.FC = () => {
  return (
    <div className="bg-[#FBF7EF] p-4 flex justify-between items-center">
      <div>
        <h1 className="text-[32px] font-['Bagel_Fat_One'] text-[#313557]">Bitdog</h1>
        <p className="text-[15px] font-['Baloo_2'] text-[#877777]">April 21, Friday</p>
      </div>
      <div className="flex gap-2">
        <Calendar className="w-9 h-9 text-[#313557]" />
        <Ticket className="w-9 h-9 text-[#313557]" />
      </div>
    </div>
  );
};

export default TaskHeader;