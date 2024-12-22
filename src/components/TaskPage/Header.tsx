import React from 'react';
import { getFormattedDate } from '../../utils/dateUtils';

const Header: React.FC = () => {
  return (
    <header className="text-center py-6 bg-white shadow-sm animate-fade-in">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 hover:scale-105 transition-transform">
        Bitdog
      </h1>
      <p className="text-gray-500 text-sm font-medium">
        {getFormattedDate()}
      </p>
    </header>
  );
};

export default Header;