
import React from 'react';
import Layout from '@/components/Layout';
import FileGrid from '@/components/FileGrid';
import { FileCardProps } from '@/components/FileCard';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Share2, Home, ChevronRight, Upload, FolderPlus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock data
const sharedFiles: FileCardProps[] = [
  {
    id: '1',
    name: 'Family Vacation Photos.zip',
    type: 'archive',
    size: '1.2 GB',
    lastModified: new Date('2023-12-22'),
    shared: true
  },
  {
    id: '2',
    name: 'Christmas Party Planning.docx',
    type: 'document',
    size: '45 KB',
    lastModified: new Date('2023-12-18'),
    shared: true
  },
  {
    id: '3',
    name: 'Home Renovation Budget.xlsx',
    type: 'document',
    size: '350 KB',
    lastModified: new Date('2023-12-15'),
    shared: true
  },
  {
    id: '4',
    name: 'Kids Birthday Party.mp4',
    type: 'video',
    size: '1.8 GB',
    lastModified: new Date('2023-12-10'),
    shared: true
  },
  {
    id: '5',
    name: 'Family Portrait 2023.jpg',
    type: 'image',
    size: '5.8 MB',
    lastModified: new Date('2023-12-05'),
    preview: '/placeholder.svg',
    shared: true
  }
];

// Mock family members
const familyMembers = [
  {
    id: '1',
    name: 'Alex Johnson',
    avatar: '/placeholder.svg',
  },
  {
    id: '2',
    name: 'Emma Johnson',
    avatar: '/placeholder.svg',
  },
  {
    id: '3',
    name: 'Sophia Johnson',
    avatar: '/placeholder.svg',
  }
];

const SharedFiles: React.FC = () => {
  return (
    <Layout>
      <div className="space-y-6 page-transition">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <Breadcrumb className="mb-2">
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <Home className="h-4 w-4 mr-1" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink href="/shared" className="font-medium">
                  Shared Files
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Share2 className="h-6 w-6 text-cloud-500" />
              Shared Files
            </h1>
            <p className="text-muted-foreground mt-1">
              Files shared with your family members
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button variant="outline" className="gap-2">
              <FolderPlus className="h-4 w-4" />
              New Folder
            </Button>
            <Button className="gap-2 bg-cloud-500 hover:bg-cloud-600">
              <Upload className="h-4 w-4" />
              Upload
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm text-muted-foreground">Shared with:</span>
          <div className="flex -space-x-2">
            {familyMembers.map((member) => (
              <Avatar key={member.id} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="bg-cloud-100 text-cloud-500 text-xs">
                  {member.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
        
        <FileGrid files={sharedFiles} />
      </div>
    </Layout>
  );
};

export default SharedFiles;
