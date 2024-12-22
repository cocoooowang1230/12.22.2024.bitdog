import React, { useState } from 'react';
import TaskHeader from './components/TaskHeader';
import DogSection from './components/DogSection';
import TaskSection from './components/TaskSection';
import { useTaskFiltering } from './hooks/useTaskFiltering';
import { initialTasks } from './data/tasks';

const TaskPage: React.FC = () => {
  const [currentDay, setCurrentDay] = useState(1);
  const { activeFilter, filteredTasks, handleFilterChange } = useTaskFiltering(initialTasks);
  const totalDays = 30;

  const handleFeedDog = () => {
    if (currentDay < totalDays) {
      setCurrentDay(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF7EF] overflow-y-auto">
      <TaskHeader />
      <DogSection 
        currentDay={currentDay} 
        totalDays={totalDays} 
        onFeedDog={handleFeedDog} 
      />
      <TaskSection 
        tasks={filteredTasks}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
};

export default TaskPage;