import React from 'react';
import { Bell } from 'lucide-react';

interface HeaderNotificationProps {
  count: number;
}

export const HeaderNotification: React.FC<HeaderNotificationProps> = ({ count }) => {
  return (
    <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
      <Bell size={24} className="text-gray-700" />
      {count > 0 && (
        <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
          {count}
        </span>
      )}
    </button>
  );
};