
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export interface FamilyMemberProps {
  id: string;
  name: string;
  avatar?: string;
  email: string;
  role: 'admin' | 'member';
  online?: boolean;
}

const FamilyMember: React.FC<FamilyMemberProps> = ({
  name,
  avatar,
  email,
  role,
  online = false
}) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-lg glass-card glass-card-hover">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Avatar className="h-10 w-10 border-2 border-white">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-cloud-100 text-cloud-500">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          {online && (
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 border-2 border-white" />
          )}
        </div>
        
        <div className="flex flex-col">
          <span className="font-medium text-sm">{name}</span>
          <span className="text-muted-foreground text-xs">{email}</span>
        </div>
      </div>
      
      <div className={cn(
        "px-2 py-1 rounded text-xs font-medium",
        role === 'admin' ? "bg-cloud-200 text-cloud-600" : "bg-cloud-yellow text-amber-600"
      )}>
        {role === 'admin' ? 'Admin' : 'Member'}
      </div>
    </div>
  );
};

export default FamilyMember;
