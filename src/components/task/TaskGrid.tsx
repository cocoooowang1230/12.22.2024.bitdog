import React from 'react';
import TaskCard from './TaskCard';
import { Task } from '../../types/task';

interface TaskGridProps {
  tasks: Task[];
}

const TaskGrid: React.FC<TaskGridProps> = ({ tasks }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} {...task} />
      ))}
    </div>
  );
};

export default TaskGrid;