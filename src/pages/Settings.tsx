
import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Settings as SettingsIcon, Home, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';

const Settings: React.FC = () => {
  // Mock user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex@example.com',
    avatar: '/placeholder.svg'
  };
  
  return (
    <Layout>
      <div className="space-y-6 page-transition">
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
              <BreadcrumbLink href="/settings" className="font-medium">
                Settings
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          
          <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <SettingsIcon className="h-6 w-6 text-cloud-500" />
            Settings
          </h1>
          <p className="text-muted-foreground mt-1">
            Manage your account and preferences
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Profile</CardTitle>
              <CardDescription>
                Manage your personal information
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="text-lg bg-cloud-100 text-cloud-500">
                    {user.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Change Avatar
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto text-destructive">
                    Remove
                  </Button>
                </div>
              </div>
              
              <div className="grid gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue={user.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={user.email} type="email" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-3">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-cloud-500 hover:bg-cloud-600">Save Changes</Button>
            </CardFooter>
          </Card>
          
          {/* Preferences Card */}
          <Card>
            <CardHeader>
              <CardTitle>Preferences</CardTitle>
              <CardDescription>
                Customize your cloud experience
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about your account
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Auto-save</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically save edited files
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-base">Preview Files</Label>
                  <p className="text-sm text-muted-foreground">
                    Generate thumbnails for files
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
          
          {/* Security Card */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Manage your account security settings
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-medium">Password</h3>
                  <Button variant="outline" className="w-full">Change Password</Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Two-Factor Authentication</h3>
                  <Button variant="outline" className="w-full">Enable 2FA</Button>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium">Sessions</h3>
                  <Button variant="outline" className="w-full">Manage Devices</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
