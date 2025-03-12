
import React, { useState, useEffect, ReactNode } from 'react';
import Navigation from './Navigation';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  // Auto-close sidebar on mobile
  useEffect(() => {
    setSidebarOpen(!isMobile);
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      
      <div className="flex flex-1 overflow-hidden">
        <main 
          className={cn(
            "flex-1 transition-all duration-300 ease-in-out",
            sidebarOpen ? "pl-0 md:pl-64" : "pl-0"
          )}
        >
          <div className="container mx-auto px-4 py-8 max-w-7xl animate-fadeIn">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
