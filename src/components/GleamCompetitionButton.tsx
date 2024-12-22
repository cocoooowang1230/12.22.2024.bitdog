import React from 'react';

interface GleamCompetitionButtonProps {
  url: string;
}

const GleamCompetitionButton: React.FC<GleamCompetitionButtonProps> = ({ url }) => {
  return (
    <div className="text-center my-6">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#1abc9c] text-white text-base px-6 py-3 rounded-md hover:bg-[#16a085] transition-colors duration-300 transform hover:scale-105"
      >
        Enter Competition
      </a>
    </div>
  );
};

export default GleamCompetitionButton;