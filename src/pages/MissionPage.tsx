import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Users, Clock, X } from 'lucide-react';
import { missions } from '../data/missions';
import useAppNavigation from '../hooks/useNavigation';
import GleamWidget from '../components/GleamWidget';
import GleamCompetitionButton from '../components/GleamCompetitionButton';

const MissionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { goBack } = useAppNavigation();
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const mission = missions.find(m => m.id === Number(id));

  useEffect(() => {
    if (!mission) return;

    const timer = setInterval(() => {
      const now = new Date();
      const end = new Date('2024/04/30 22:00');
      const diff = end.getTime() - now.getTime();

      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mission]);

  if (!mission) {
    return <div>Mission not found</div>;
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow-md overflow-hidden animate-slide-up">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" 
          src={mission.imageUrl} 
          alt={mission.title} 
        />
        <button 
          onClick={goBack} 
          className="absolute top-2 right-2 bg-white rounded-full p-1 hover:scale-110 transition-transform duration-300"
        >
          <X size={20} />
        </button>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h1 className="text-2xl font-bold">{mission.title}</h1>
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-2">
              {mission.provider.charAt(0)}
            </div>
            <span className="text-sm text-gray-600">{mission.provider}</span>
          </div>
        </div>

        {mission.description && (
          <p className="text-gray-600 mb-4">{mission.description}</p>
        )}

        <div className="flex items-center mb-4">
          <Users className="mr-2 text-blue-600" size={20} />
          <span>{mission.popularity} people have completed this task</span>
        </div>

        <div className="flex items-center mb-4">
          <Clock className="mr-2 text-blue-600" size={20} />
          <span>Ongoing - Until 2024/04/30 22:00</span>
        </div>

        {mission.campaignId && (
          <GleamWidget campaignId={mission.campaignId} />
        )}

        {mission.gleamUrl && (
          <GleamCompetitionButton url={mission.gleamUrl} />
        )}

        <div className="mt-6 bg-gray-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Countdown Timer:</h2>
          <div className="flex justify-between">
            {Object.entries(countdown).map(([unit, value]) => (
              <div key={unit} className="text-center">
                <span className="text-2xl font-bold">{value}</span>
                <p className="text-sm">{unit}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Your Reward:</h2>
          <p className="text-2xl font-bold text-yellow-600">
            {mission.reward.toFixed(4)} BTC
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;