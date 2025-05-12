'use client';

import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
// Removed Inter font import as it should be handled by root layout
// import { Toaster } from "@/components/ui/toaster"; // Toaster is in RootLayout

export default function AdminLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    // This effect runs only on the client, after initial hydration
    const authStatus = localStorage.getItem('isAdminAuthenticated') === 'true';
    setIsAuthenticated(authStatus);

    if (pathname === '/admin/login') {
      if (authStatus) {
        // If authenticated and trying to access login page, redirect to dashboard
        router.replace('/admin/dashboard');
      }
      // If not authenticated and on login page, allow access (isAuthenticated will be false)
    } else {
      // For any other /admin/* route
      if (!authStatus) {
        // If not authenticated, redirect to login
        router.replace('/admin/login');
      }
      // If authenticated, allow access (isAuthenticated will be true)
    }
  }, [pathname, router]);

  // Render loading state until authentication status is determined for protected routes
  if (isAuthenticated === null && pathname !== '/admin/login') {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
        <div className="p-8 bg-card rounded-lg shadow-xl">
          <p className="text-lg">Verifying admin access...</p>
          {/* Optional: Add a spinner here */}
        </div>
      </div>
    );
  }

  // If trying to access a protected page and determined to be not authenticated
  if (isAuthenticated === false && pathname !== '/admin/login') {
    // This state will briefly show loading then redirect via useEffect.
    // Returning null prevents rendering the page content before redirect.
    return null;
  }
  
  // If on login page and authenticated, useEffect redirects to dashboard.
  // If on login page and not authenticated, render children (login form).
  // If on protected page and authenticated, render children (dashboard or other admin pages).
  return (
    // The root layout (src/app/layout.tsx) provides <html>, <body>, fonts, global styles, Toaster.
    // This layout simply wraps the content for the /admin section.
    // The font and Toaster are inherited from the root layout.
    <div className="bg-background text-foreground min-h-screen">
      {/* No need for another <main> if children are full pages */}
      {children}
    </div>
  );
}
