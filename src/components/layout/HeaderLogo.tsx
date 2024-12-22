import React from 'react';
import { Link } from 'react-router-dom';
import { Dog } from 'lucide-react';

export const HeaderLogo: React.FC = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center space-x-2 transform hover:scale-105 transition-all duration-300"
    >
      <Dog className="text-blue-600 animate-bounce" size={32} />
      <span className="text-2xl font-bold tracking-tight">
        Bit<span className="text-blue-600">dog</span>
      </span>
    </Link>
  );
};