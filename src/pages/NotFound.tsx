
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CloudOff, Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="bg-cloud-50 h-20 w-20 rounded-full flex items-center justify-center">
            <CloudOff className="h-10 w-10 text-cloud-500" />
          </div>
        </div>
        
        <h1 className="text-4xl font-bold mb-2">404</h1>
        <p className="text-xl font-medium mb-2">Page not found</p>
        <p className="text-muted-foreground mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Button asChild className="bg-cloud-500 hover:bg-cloud-600">
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
