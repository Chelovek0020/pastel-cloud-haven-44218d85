
import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import FileGrid from '@/components/FileGrid';
import StorageStats from '@/components/StorageStats';
import { FileCardProps } from '@/components/FileCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Clock, Star, FolderOpen, Upload } from 'lucide-react';

// Mock data
const recentFiles: FileCardProps[] = [
  {
    id: '1',
    name: 'Family Photo 2023.jpg',
    type: 'image',
    size: '2.4 MB',
    lastModified: new Date('2023-12-20'),
    preview: '/placeholder.svg',
    starred: true
  },
  {
    id: '2',
    name: 'Vacation Plans.docx',
    type: 'document',
    size: '145 KB',
    lastModified: new Date('2023-12-15')
  },
  {
    id: '3',
    name: 'Home Budget 2024.xlsx',
    type: 'document',
    size: '2.1 MB',
    lastModified: new Date('2023-12-11')
  },
  {
    id: '4',
    name: 'Birthday Party Video.mp4',
    type: 'video',
    size: '256 MB',
    lastModified: new Date('2023-12-05')
  },
  {
    id: '5',
    name: 'Summer Memories.zip',
    type: 'archive',
    size: '1.2 GB',
    lastModified: new Date('2023-11-28')
  }
];

const starredFiles: FileCardProps[] = recentFiles.filter(file => file.starred);

const Index: React.FC = () => {
  const [activeTab, setActiveTab] = useState('recent');
  const [visibleFiles, setVisibleFiles] = useState<FileCardProps[]>([]);
  
  // Animation for files
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeTab === 'recent') {
        setVisibleFiles(recentFiles);
      } else if (activeTab === 'starred') {
        setVisibleFiles(starredFiles);
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, [activeTab]);
  
  return (
    <Layout>
      <div className="space-y-8 page-transition">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">My Drive</h1>
            <p className="text-muted-foreground mt-1">
              Manage your family's files in one place
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <FolderOpen className="h-4 w-4" />
              New Folder
            </Button>
            <Button className="gap-2 bg-cloud-500 hover:bg-cloud-600">
              <Upload className="h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="md:col-span-2 lg:col-span-3 space-y-6">
            <Tabs defaultValue="recent" className="w-full" onValueChange={setActiveTab}>
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="recent" className="gap-2">
                    <Clock className="h-4 w-4" /> Recent
                  </TabsTrigger>
                  <TabsTrigger value="starred" className="gap-2">
                    <Star className="h-4 w-4" /> Starred
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="recent" className="mt-0 space-y-4">
                <FileGrid 
                  files={visibleFiles} 
                  emptyMessage="No recent files" 
                />
              </TabsContent>
              
              <TabsContent value="starred" className="mt-0 space-y-4">
                <FileGrid 
                  files={visibleFiles} 
                  emptyMessage="No starred files" 
                />
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <StorageStats 
              used={3.7 * 1024 * 1024 * 1024} 
              total={15 * 1024 * 1024 * 1024} 
            />
            
            <div className="glass-card rounded-xl p-4 space-y-4">
              <h3 className="font-medium">Quick Access</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <div className="bg-cloud-100 p-2 rounded-lg">
                    <FolderOpen className="h-5 w-5 text-cloud-500" />
                  </div>
                  <span className="text-xs">Documents</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <div className="bg-cloud-purple p-2 rounded-lg">
                    <Image className="h-5 w-5 text-purple-500" />
                  </div>
                  <span className="text-xs">Photos</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <div className="bg-cloud-red p-2 rounded-lg">
                    <FileVideo className="h-5 w-5 text-red-500" />
                  </div>
                  <span className="text-xs">Videos</span>
                </Button>
                
                <Button variant="outline" className="h-auto py-4 flex flex-col items-center gap-2">
                  <div className="bg-cloud-accent p-2 rounded-lg">
                    <Plus className="h-5 w-5 text-green-500" />
                  </div>
                  <span className="text-xs">Add</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
