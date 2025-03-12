
import React from 'react';
import Layout from '@/components/Layout';
import FileGrid from '@/components/FileGrid';
import { FileCardProps } from '@/components/FileCard';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Folder, Home, ChevronRight, Upload, FolderPlus } from 'lucide-react';

// Mock data
const personalFiles: FileCardProps[] = [
  {
    id: '1',
    name: 'Resume - Latest.pdf',
    type: 'document',
    size: '450 KB',
    lastModified: new Date('2023-12-10')
  },
  {
    id: '2',
    name: 'Personal Budget.xlsx',
    type: 'document',
    size: '2.8 MB',
    lastModified: new Date('2023-12-05')
  },
  {
    id: '3',
    name: 'Travel Photos.zip',
    type: 'archive',
    size: '820 MB',
    lastModified: new Date('2023-11-29')
  },
  {
    id: '4',
    name: 'Profile Picture.jpg',
    type: 'image',
    size: '1.2 MB',
    lastModified: new Date('2023-11-20'),
    preview: '/placeholder.svg'
  },
  {
    id: '5',
    name: 'Notes from Meeting.txt',
    type: 'document',
    size: '12 KB',
    lastModified: new Date('2023-11-15')
  },
  {
    id: '6',
    name: 'Voice Memo.mp3',
    type: 'audio',
    size: '2.4 MB',
    lastModified: new Date('2023-11-10')
  }
];

const PersonalFiles: React.FC = () => {
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
                <BreadcrumbLink href="/personal" className="font-medium">
                  Personal Files
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Folder className="h-6 w-6 text-cloud-500" />
              Personal Files
            </h1>
            <p className="text-muted-foreground mt-1">
              Your private files that only you can access
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
        
        <FileGrid files={personalFiles} />
      </div>
    </Layout>
  );
};

export default PersonalFiles;
