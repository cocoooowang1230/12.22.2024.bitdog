import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import TaskPage from '../pages/TaskPage';
import MissionPage from '../pages/MissionPage';
import MyTokenPage from '../pages/MyTokenPage';
import InterestSurvey from '../pages/InterestSurvey';
import ProfilePage from '../pages/ProfilePage';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="/mission/:id" element={<MissionPage />} />
      <Route path="/my-tokens" element={<MyTokenPage />} />
      <Route path="/interest-survey" element={<InterestSurvey />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;