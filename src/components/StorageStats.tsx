
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface StorageStatsProps {
  used: number; // in bytes
  total: number; // in bytes
  className?: string;
}

const StorageStats: React.FC<StorageStatsProps> = ({ used, total, className }) => {
  const usedPercentage = Math.min(100, Math.round((used / total) * 100));
  
  // Format sizes to be human readable
  const formatSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    
    return parseFloat((bytes / Math.pow(1024, i)).toFixed(2)) + ' ' + sizes[i];
  };
  
  const usedFormatted = formatSize(used);
  const totalFormatted = formatSize(total);
  
  return (
    <div className={cn("space-y-3 p-4 rounded-xl bg-cloud-50", className)}>
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-sm">Storage</h3>
        <span className="text-xs font-medium text-muted-foreground">{usedPercentage}% used</span>
      </div>
      
      <Progress value={usedPercentage} className="h-2" />
      
      <div className="text-xs text-muted-foreground flex justify-between items-center">
        <span>{usedFormatted} used</span>
        <span>{totalFormatted} total</span>
      </div>
    </div>
  );
};

export default StorageStats;
