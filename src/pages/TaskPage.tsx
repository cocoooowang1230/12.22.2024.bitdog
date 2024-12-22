import React, { useState } from 'react';
import { Calendar, Ticket } from 'lucide-react';
import TaskFilter from '../components/task/TaskFilter';
import TaskGrid from '../components/task/TaskGrid';
import { Task } from '../types/task';

const initialTasks: Task[] = [
  {
    id: 1,
    title: "首要任務：身份驗證",
    image: "https://images.unsplash.com/photo-1567446537708-ac4aa75c9c28",
    type: "Survey",
    provider: "Twin3",
    reward: 0.03
  },
  {
    id: 2,
    title: "Welcome to Bitdog",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0",
    type: "Social Media",
    provider: "Bitdog",
    reward: 0.01
  },
  {
    id: 3,
    title: "Unlock Exclusive Rewards",
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    type: "Video",
    provider: "Bitdog",
    reward: 0.05
  },
  {
    id: 4,
    title: "Boost Your Social Influence",
    image: "https://images.unsplash.com/photo-1562157873-818bc0726f68",
    type: "Social Media",
    provider: "9starst",
    reward: 0.01
  }
];

const TaskPage: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const [activeFilter, setActiveFilter] = useState('All');
  const totalDays = 30;

  const handleFeedDog = () => {
    if (currentDay < totalDays) {
      setCurrentDay(prev => prev + 1);
    }
  };

  const getDogImage = () => {
    if (currentDay >= 30) {
      return "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a";
    } else if (currentDay >= 15) {
      return "https://images.unsplash.com/photo-1587300003388-59208cc962cb";
    }
    return "https://images.unsplash.com/photo-1543466835-00a7907e9de1";
  };

  const filteredTasks = activeFilter === 'All' 
    ? initialTasks 
    : initialTasks.filter(task => task.type === activeFilter);

  return (
    <div className="min-h-screen bg-[#FBF7EF] overflow-y-auto">
      {/* Header */}
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

      {/* Dog Progress */}
      <div className="relative px-4 py-8">
        <img 
          src={getDogImage()} 
          alt="Dog" 
          className="w-40 h-40 mx-auto rounded-full object-cover"
        />
        <div className="mt-4 w-4/5 mx-auto bg-[#D2CCBF77] rounded-full h-6">
          <div 
            className="h-full bg-[#F48F26] rounded-full transition-all duration-300"
            style={{ width: `${(currentDay / totalDays) * 100}%` }}
          />
        </div>
        <button 
          onClick={handleFeedDog}
          className="mt-4 mx-auto block bg-[#FFC700] p-3 rounded-full hover:scale-110 transition-transform duration-300"
        >
          <img 
            src="https://img.icons8.com/color/48/000000/dog-bone.png" 
            alt="Feed Dog" 
            className="w-6 h-6"
          />
        </button>
      </div>

      {/* Task Section */}
      <div className="bg-white rounded-t-[32px] mt-8 p-6">
        <TaskFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <TaskGrid tasks={filteredTasks} />
      </div>
    </div>
  );
};

export default TaskPage;