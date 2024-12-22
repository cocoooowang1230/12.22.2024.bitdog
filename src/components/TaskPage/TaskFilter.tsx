import React from 'react';

interface TaskFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Survey', 'Social Media', 'Video'];

const TaskFilter: React.FC<TaskFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center gap-2 my-5">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onFilterChange(filter)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            activeFilter === filter
              ? 'bg-gray-700 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;