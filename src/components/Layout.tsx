import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-custom-beige flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 mb-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;