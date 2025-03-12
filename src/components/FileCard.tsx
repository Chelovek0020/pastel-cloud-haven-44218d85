
import React from 'react';
import { 
  FileText, 
  Image, 
  FileArchive, 
  FileAudio, 
  FileVideo, 
  MoreVertical,
  Star,
  Clock,
  Download
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export type FileType = 'document' | 'image' | 'archive' | 'audio' | 'video' | 'other';

export interface FileCardProps {
  id: string;
  name: string;
  type: FileType;
  size: string;
  lastModified: Date;
  preview?: string;
  starred?: boolean;
  shared?: boolean;
  onClick?: () => void;
}

const FileIcon: React.FC<{ type: FileType; className?: string }> = ({ type, className }) => {
  const iconMap = {
    document: <FileText className={className} />,
    image: <Image className={className} />,
    archive: <FileArchive className={className} />,
    audio: <FileAudio className={className} />,
    video: <FileVideo className={className} />,
    other: <FileText className={className} />
  };
  
  return iconMap[type] || iconMap.other;
};

const FileCard: React.FC<FileCardProps> = ({
  id,
  name,
  type,
  size,
  lastModified,
  preview,
  starred = false,
  shared = false,
  onClick
}) => {
  const timeAgo = formatDistanceToNow(lastModified, { addSuffix: true });
  
  const getColorByType = (): string => {
    switch(type) {
      case 'document': return 'bg-cloud-100 text-cloud-600';
      case 'image': return 'bg-cloud-purple text-purple-600';
      case 'archive': return 'bg-cloud-yellow text-amber-600';
      case 'audio': return 'bg-cloud-accent text-green-600';
      case 'video': return 'bg-cloud-red text-red-600';
      default: return 'bg-cloud-100 text-cloud-600';
    }
  };
  
  return (
    <div 
      className="glass-card glass-card-hover rounded-xl overflow-hidden cursor-pointer animate-scaleIn"
      onClick={onClick}
    >
      {/* Preview area */}
      <div className={cn(
        "h-36 flex items-center justify-center p-4",
        !preview && getColorByType()
      )}>
        {preview ? (
          <div 
            className="w-full h-full bg-center bg-cover bg-no-repeat rounded"
            style={{ backgroundImage: `url(${preview})` }}
          />
        ) : (
          <FileIcon type={type} className="w-16 h-16" />
        )}
      </div>
      
      {/* File details */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-sm line-clamp-1 mr-2" title={name}>
            {name}
          </h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="-mr-2 h-8 w-8">
                <MoreVertical className="h-4 w-4" />
                <span className="sr-only">Actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem>
                <Download className="mr-2 h-4 w-4" />
                <span>Download</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className={cn(
                  "mr-2 h-4 w-4",
                  starred && "fill-yellow-400 text-yellow-400"
                )} />
                <span>{starred ? "Unstar" : "Star"}</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Clock className="mr-2 h-4 w-4" />
                <span>Details</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{size}</span>
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
};

export default FileCard;
