
'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOutIcon, Edit3Icon, LayoutDashboardIcon, FileTextIcon, BriefcaseIcon, FilePenLineIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function AdminDashboardPage() {
  const router = useRouter();
  const { toast } = useToast();
  const adminName = "Raghavendra Hande"; 

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    toast({
      title: 'Logged Out',
      description: 'You have been successfully logged out.',
    });
    router.replace('/admin/login');
  };

  // Placeholder functions for navigating to content editing pages that are not yet implemented
  const navigateToPlaceholderEdit = (section: string) => {
    toast({ title: 'Navigation', description: `Placeholder: Edit page for ${section} is not yet implemented.` });
    // Example: router.push(`/admin/edit/${section.toLowerCase().replace(' ', '-')}`);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-10 flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-border">
        <div className="flex items-center gap-3 mb-4 sm:mb-0">
          <LayoutDashboardIcon className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold text-foreground">Admin Dashboard</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg text-muted-foreground hidden md:inline">Welcome, {adminName}!</span>
          <Button onClick={handleLogout} variant="outline" size="lg" className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
            <LogOutIcon className="mr-2 h-5 w-5" /> Logout
          </Button>
        </div>
      </header>

      <section>
        <Card className="shadow-lg border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Manage Website Content</CardTitle>
            <CardDescription>
              Select a section of your portfolio to update its information.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContentEditCard
              title="Homepage"
              description="Edit hero section, tagline, and featured content."
              icon={<LayoutDashboardIcon className="h-8 w-8 text-primary" />}
              onEdit={() => navigateToPlaceholderEdit('Homepage')}
            />
            <ContentEditCard
              title="About Section"
              description="Update your biography, skills, and experience."
              icon={<FileTextIcon className="h-8 w-8 text-primary" />}
              onEdit={() => navigateToPlaceholderEdit('About Section')}
            />
            <ContentEditCard
              title="Projects"
              description="Add, remove, or modify project details and showcases."
              icon={<BriefcaseIcon className="h-8 w-8 text-primary" />}
              onEdit={() => router.push('/admin/edit/projects')}
            />
            <ContentEditCard
              title="Blog Posts"
              description="Create, edit, or delete blog articles."
              icon={<FilePenLineIcon className="h-8 w-8 text-primary" />}
              onEdit={() => router.push('/admin/edit/blog')}
            />
            {/* Add more cards for Contact, etc. as needed */}
          </CardContent>
          <CardFooter className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              More content management features will be added soon.
            </p>
          </CardFooter>
        </Card>
      </section>

      <footer className="mt-16 text-center text-muted-foreground text-sm">
        <p>Admin Panel &copy; {new Date().getFullYear()} Raghavendra Hande.</p>
        <div className="mt-4 p-3 bg-destructive/10 border border-destructive/30 rounded-md max-w-2xl mx-auto">
            <p className="text-xs text-destructive">
            <strong>Important Security Notice:</strong> This admin panel utilizes client-side authentication with hardcoded credentials
            for demonstration purposes ONLY. It is inherently insecure and MUST NOT be used in a production environment
            or with any sensitive data. For real applications, implement robust server-side authentication.
            </p>
        </div>
      </footer>
    </div>
  );
}

type ContentEditCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  onEdit: () => void;
};

function ContentEditCard({ title, description, icon, onEdit }: ContentEditCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow duration-300 bg-card flex flex-col">
      <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-3">
        {icon}
        <CardTitle className="text-xl text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={onEdit} variant="secondary" className="w-full">
          <Edit3Icon className="mr-2 h-4 w-4" /> Manage Content
        </Button>
      </CardFooter>
    </Card>
  );
}
