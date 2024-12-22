import React from 'react';
import { Link } from 'react-router-dom';
import { Dog, Bell } from 'lucide-react';
import { HeaderProfile } from './HeaderProfile';
import { HeaderNotification } from './HeaderNotification';
import { HeaderLogo } from './HeaderLogo';

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <HeaderLogo />
          <div className="flex items-center space-x-4">
            <HeaderNotification count={3} />
            <HeaderProfile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;