
import React from 'react';
import FileCard, { FileCardProps } from './FileCard';
import { useToast } from '@/hooks/use-toast';

interface FileGridProps {
  files: FileCardProps[];
  emptyMessage?: string;
}

const FileGrid: React.FC<FileGridProps> = ({ 
  files,
  emptyMessage = "No files found"
}) => {
  const { toast } = useToast();

  const handleFileClick = (file: FileCardProps) => {
    toast({
      title: "File selected",
      description: `You selected "${file.name}"`,
    });
  };

  if (files.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
        <div className="bg-cloud-50 h-24 w-24 rounded-full flex items-center justify-center mb-4">
          <svg className="h-12 w-12 text-cloud-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">{emptyMessage}</h3>
        <p className="text-muted-foreground max-w-sm">Upload files or create folders to get started with your cloud storage.</p>
      </div>
    );
  }

  return (
    <div className="file-grid">
      {files.map((file) => (
        <FileCard 
          key={file.id} 
          {...file} 
          onClick={() => handleFileClick(file)}
        />
      ))}
    </div>
  );
};

export default FileGrid;
