import React, { useState } from 'react';
import { missions } from '../data/missions';
import MissionCard from '../components/MissionCard';
import ImageCarousel from '../components/ImageCarousel/ImageCarousel';

const HomePage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'survey' | 'social media' | 'video'>('all');

  const filteredMissions = activeCategory === 'all' 
    ? missions 
    : missions.filter(mission => mission.category === activeCategory);

  return (
    <div className="space-y-8">
      <div className="bg-custom-card rounded-lg shadow-md p-4 sm:p-6">
        <ImageCarousel />
      </div>

      <div className="bg-custom-card p-4 sm:p-6 rounded-lg">
        <div className="flex flex-wrap justify-center space-x-2 space-y-2 sm:space-y-0 mb-6">
          {['all', 'survey', 'social media', 'video'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as any)}
              className={`px-3 py-1 rounded-full text-sm ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredMissions.map((mission) => (
            <MissionCard key={mission.id} {...mission} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;