import React from 'react';

interface TaskFilterProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = ['All', 'Survey', 'Social media', 'Video'];

const TaskFilter: React.FC<TaskFilterProps> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative bg-[#E6E1D854] rounded-[100px] p-[2px] flex">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => onFilterChange(filter)}
            className={`
              relative z-10 px-4 py-1.5 text-[15px] font-['Baloo_2'] rounded-[100px] transition-all duration-300
              ${activeFilter === filter ? 'text-[#000000]' : 'text-[#000000] hover:bg-white/10'}
            `}
          >
            {filter}
          </button>
        ))}
        <div
          className="absolute top-[2px] left-[2px] h-[calc(100%-4px)] bg-white rounded-[100px] shadow-[0px_3px_8px_rgba(0,0,0,0.12),0px_3px_1px_rgba(0,0,0,0.04)] transition-all duration-300 ease-in-out"
          style={{
            width: activeFilter === 'All' ? '64px' :
                  activeFilter === 'Survey' ? '70px' :
                  activeFilter === 'Social media' ? '100px' : '64px',
            transform: `translateX(${
              activeFilter === 'All' ? '0' :
              activeFilter === 'Survey' ? '68px' :
              activeFilter === 'Social media' ? '142px' : '246px'
            })`
          }}
        />
      </div>
    </div>
  );
};

export default TaskFilter;