import { useState, useMemo } from 'react';
import { Task } from '../types/task';

export const useTaskFiltering = (tasks: Task[]) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTasks = useMemo(() => 
    activeFilter === 'All' 
      ? tasks 
      : tasks.filter(task => task.type === activeFilter),
    [tasks, activeFilter]
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  return {
    activeFilter,
    filteredTasks,
    handleFilterChange
  };
};