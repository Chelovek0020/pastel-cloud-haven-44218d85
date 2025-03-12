
import React from 'react';
import Layout from '@/components/Layout';
import FamilyMember, { FamilyMemberProps } from '@/components/FamilyMember';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Users, Home, ChevronRight, UserPlus } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data
const familyMembers: FamilyMemberProps[] = [
  {
    id: '1',
    name: 'Alex Johnson',
    email: 'alex@example.com',
    role: 'admin',
    avatar: '/placeholder.svg',
    online: true
  },
  {
    id: '2',
    name: 'Emma Johnson',
    email: 'emma@example.com',
    role: 'member',
    avatar: '/placeholder.svg',
    online: true
  },
  {
    id: '3',
    name: 'Sophia Johnson',
    email: 'sophia@example.com',
    role: 'member',
    avatar: '/placeholder.svg',
    online: false
  },
  {
    id: '4',
    name: 'James Johnson',
    email: 'james@example.com',
    role: 'member',
    avatar: '/placeholder.svg',
    online: false
  }
];

const FamilyMembers: React.FC = () => {
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
                <BreadcrumbLink href="/family" className="font-medium">
                  Family Members
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Users className="h-6 w-6 text-cloud-500" />
              Family Members
            </h1>
            <p className="text-muted-foreground mt-1">
              Manage access to your family cloud
            </p>
          </div>
          
          <Button className="gap-2 bg-cloud-500 hover:bg-cloud-600">
            <UserPlus className="h-4 w-4" />
            Invite Member
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {familyMembers.map((member) => (
            <FamilyMember key={member.id} {...member} />
          ))}
        </div>
        
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-lg">Family Plan</CardTitle>
            <CardDescription>Your current cloud storage plan details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-2 border-b">
                <span className="font-medium">Family Cloud Premium</span>
                <span className="bg-cloud-100 text-cloud-600 px-2 py-1 rounded text-xs font-medium">
                  Active
                </span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Storage</p>
                  <p className="font-medium">15 GB</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Members</p>
                  <p className="font-medium">5 / 6 slots</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Renewal Date</p>
                  <p className="font-medium">January 15, 2024</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default FamilyMembers;
