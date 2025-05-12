
'use client';

import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader as ShadTableHeader, TableRow } from '@/components/ui/table'; // Renamed to avoid conflict
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { MoreHorizontalIcon, PlusCircleIcon, EditIcon, Trash2Icon, ArrowLeftIcon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { BlogPost } from '@/lib/data';
import { blogPostsData as initialBlogPosts } from '@/lib/data';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader as ShadAlertDialogHeader, // Renamed to avoid conflict
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function EditBlogPostsPage(): ReactNode {
  const router = useRouter();
  const { toast } = useToast();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<BlogPost | null>(null);

  useEffect(() => {
    // In a real app, fetch this data from a backend or use state management that persists.
    // For this demo, we'll use the local data and allow "deletion" which only affects local state.
    // This also simulates the data being loaded when the component mounts.
    const storedPosts = localStorage.getItem('blogPostsAdminDemo');
    if (storedPosts) {
      setBlogPosts(JSON.parse(storedPosts));
    } else {
      setBlogPosts(initialBlogPosts);
      localStorage.setItem('blogPostsAdminDemo', JSON.stringify(initialBlogPosts));
    }
  }, []);

  const updateLocalStorage = (posts: BlogPost[]) => {
    localStorage.setItem('blogPostsAdminDemo', JSON.stringify(posts));
  };

  const handleCreateNewPost = () => {
    toast({ title: 'Placeholder', description: 'Functionality to create a new blog post will be implemented here. This would typically navigate to a form page.' });
    // Example: router.push('/admin/edit/blog/new');
  };

  const handleEditPost = (postId: string) => {
    toast({ title: 'Placeholder', description: `Functionality to edit blog post (ID: ${postId}) will be implemented here. This would navigate to an edit form for this post.` });
    // Example: router.push(`/admin/edit/blog/${postId}`);
  };

  const openDeleteDialog = (post: BlogPost) => {
    setPostToDelete(post);
    setIsDeleteDialogOpen(true);
  };

  const handleDeletePost = () => {
    if (!postToDelete) return;
    
    const updatedPosts = blogPosts.filter(p => p.id !== postToDelete.id);
    setBlogPosts(updatedPosts);
    updateLocalStorage(updatedPosts);
    
    toast({ 
      title: 'Post "Deleted"', 
      description: `Blog post "${postToDelete.title}" has been removed from the local list for this demo session.`,
      variant: 'default' 
    });
    setIsDeleteDialogOpen(false);
    setPostToDelete(null);
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <header className="mb-8 flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" onClick={() => router.back()} aria-label="Go back">
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-3xl font-bold text-foreground">Manage Blog Posts</h1>
        </div>
        <Button onClick={handleCreateNewPost} size="lg">
          <PlusCircleIcon className="mr-2 h-5 w-5" /> Create New Post
        </Button>
      </header>

      <Card className="shadow-lg border-border">
        <CardHeader>
          <CardTitle>Existing Blog Posts</CardTitle>
          <CardDescription>View, edit, or delete blog posts. Changes in this demo are session-based (local storage).</CardDescription>
        </CardHeader>
        <CardContent>
          {blogPosts.length === 0 ? (
             <p className="text-muted-foreground text-center py-8">No blog posts available. Create one to get started!</p>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <ShadTableHeader>
                  <TableRow>
                    <TableHead className="w-[30%]">Title</TableHead>
                    <TableHead className="w-[20%]">Date Created</TableHead>
                    <TableHead className="w-[30%]">Slug</TableHead>
                    <TableHead className="text-right w-[20%]">Actions</TableHead>
                  </TableRow>
                </ShadTableHeader>
                <TableBody>
                  {blogPosts.map((post) => (
                    <TableRow key={post.id}>
                      <TableCell className="font-medium">{post.title}</TableCell>
                      <TableCell>{post.createdAt}</TableCell>
                      <TableCell>/blog/{post.slug}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label={`Actions for ${post.title}`}>
                              <MoreHorizontalIcon className="h-5 w-5" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleEditPost(post.id)}>
                              <EditIcon className="mr-2 h-4 w-4" /> Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => openDeleteDialog(post)} className="text-destructive focus:text-destructive focus:bg-destructive/10">
                              <Trash2Icon className="mr-2 h-4 w-4" /> Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
        {blogPosts.length > 0 && (
          <CardFooter className="text-sm text-muted-foreground">
            Showing {blogPosts.length} post{blogPosts.length === 1 ? '' : 's'}.
          </CardFooter>
        )}
      </Card>

      <AlertDialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <AlertDialogContent>
          <ShadAlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action will &quot;delete&quot; the blog post: <span className="font-semibold">{postToDelete?.title}</span>. 
              This is a demo and only affects the current view by removing it from the list in this session. Data is not permanently deleted from the source.
            </AlertDialogDescription>
          </ShadAlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setPostToDelete(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeletePost} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Yes, &quot;delete&quot; post
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <footer className="mt-12 text-center text-muted-foreground text-sm">
        <p>Blog Management Panel &copy; {new Date().getFullYear()} Raghavendra Hande.</p>
      </footer>
    </div>
  );
}
