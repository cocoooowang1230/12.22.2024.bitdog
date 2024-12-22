import React from 'react';
import TaskFilter from './TaskFilter';
import TaskGrid from './TaskGrid';
import { Task } from '../types/task';

interface TaskSectionProps {
  tasks: Task[];
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const TaskSection: React.FC<TaskSectionProps> = ({ tasks, activeFilter, onFilterChange }) => {
  return (
    <div className="bg-white rounded-t-[32px] mt-8 p-6">
      <TaskFilter activeFilter={activeFilter} onFilterChange={onFilterChange} />
      <TaskGrid tasks={tasks} />
    </div>
  );
};

export default TaskSection;