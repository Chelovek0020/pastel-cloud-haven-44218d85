
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Files, 
  Users, 
  Settings, 
  Menu, 
  X, 
  Search, 
  Plus,
  CloudUpload,
  Share2
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface NavigationProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const [searchFocused, setSearchFocused] = useState(false);
  
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: '/placeholder.svg'
  };
  
  const navigationItems = [
    { 
      name: 'My Drive', 
      icon: Home, 
      path: '/',
      active: location.pathname === '/'
    },
    { 
      name: 'Personal Files', 
      icon: Files, 
      path: '/personal',
      active: location.pathname === '/personal'
    },
    { 
      name: 'Shared Files', 
      icon: Share2, 
      path: '/shared',
      active: location.pathname === '/shared'
    },
    { 
      name: 'Family Members', 
      icon: Users, 
      path: '/family',
      active: location.pathname === '/family'
    },
    { 
      name: 'Settings', 
      icon: Settings, 
      path: '/settings',
      active: location.pathname === '/settings'
    }
  ];
  
  return (
    <>
      {/* Mobile header */}
      <header className="sticky top-0 z-40 bg-background/70 backdrop-blur-lg border-b md:hidden">
        <div className="container flex h-16 items-center px-4">
          <Button
            variant="ghost"
            className="mr-2 px-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          
          <div className="flex items-center gap-2">
            <CloudUpload className="h-5 w-5 text-cloud-500" />
            <span className="font-medium">Cloud Haven</span>
          </div>
          
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            
            <Avatar className="h-9 w-9 border-2 border-white">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-cloud-100 text-cloud-500">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background transition-transform duration-300 ease-in-out md:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <CloudUpload className="h-5 w-5 text-cloud-500" />
            <span className="font-medium">Cloud Haven</span>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close Sidebar</span>
          </Button>
        </div>
        
        <div className="flex flex-1 flex-col overflow-y-auto py-4">
          <div className="px-4 mb-6">
            <div className={cn(
              "relative transition-all duration-300",
              searchFocused ? "bg-white elevation-1 rounded-lg" : ""
            )}>
              <Input
                placeholder="Search files..."
                className="pl-9 bg-secondary border-none shadow-none focus-visible:ring-1"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            </div>
          </div>
          
          <Button 
            variant="default" 
            className="mx-4 mb-6 bg-cloud-500 hover:bg-cloud-600 transition-all duration-200"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Upload
          </Button>
          
          <nav className="space-y-1 px-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "nav-item",
                  item.active ? "nav-item-active" : "nav-item-inactive"
                )}
              >
                <item.icon className={cn(
                  "h-5 w-5",
                  item.active ? "text-cloud-500" : "text-muted-foreground"
                )} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto px-4">
            <div className="rounded-lg bg-cloud-50 p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border-2 border-white">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-cloud-100 text-cloud-500">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-medium text-sm">{user.name}</span>
                  <span className="text-muted-foreground text-xs">{user.email}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;
