import { redirect } from 'next/navigation';

export default function AdminRootPage() {
  // The AdminLayout handles authentication checks.
  // This page's purpose is to ensure that navigating to /admin
  // lands the user on the main admin interface (dashboard).
  // If the user is not authenticated, AdminLayout will redirect to /admin/login.
  redirect('/admin/dashboard');
  
  // This return statement is technically unreachable due to the redirect,
  // but it's good practice for components to return JSX or null.
  return null;
}
