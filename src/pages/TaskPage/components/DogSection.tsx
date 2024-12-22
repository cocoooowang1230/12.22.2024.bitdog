import React from 'react';
import DogAvatar from './DogAvatar';
import DogProgressBar from './DogProgressBar';
import FeedButton from './FeedButton';

interface DogSectionProps {
  currentDay: number;
  totalDays: number;
  onFeedDog: () => void;
}

const DogSection: React.FC<DogSectionProps> = ({ currentDay, totalDays, onFeedDog }) => {
  return (
    <div className="relative px-4 py-8">
      <DogAvatar currentDay={currentDay} />
      <DogProgressBar current={currentDay} total={totalDays} />
      <FeedButton onClick={onFeedDog} />
    </div>
  );
};

export default DogSection;