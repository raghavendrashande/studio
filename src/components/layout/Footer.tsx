
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Code2Icon } from 'lucide-react'; // Using Code2Icon for LeetCode as a generic code icon

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/raghsh', icon: GithubIcon },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/raghsh', icon: LinkedinIcon },
  { name: 'LeetCode', href: 'https://leetcode.com/raghsh', icon: Code2Icon },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8 max-w-screen-xl">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Raghavendra Hande. All rights reserved.
        </p>
        <div className="flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
           <a
              href="mailto:raghavendra.hande@example.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <MailIcon className="h-5 w-5" />
            </a>
        </div>
      </div>
    </footer>
  );
}