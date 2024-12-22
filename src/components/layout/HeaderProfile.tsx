import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderProfile: React.FC = () => {
  return (
    <Link 
      to="/profile" 
      className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-200 hover:ring-blue-400 transition-all duration-300"
    >
      <img 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
        alt="Profile" 
        className="w-full h-full object-cover"
      />
    </Link>
  );
};