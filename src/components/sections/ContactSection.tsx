
import { SendIcon, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import { Code2Icon } from 'lucide-react'; // Using Code2Icon for LeetCode
import { Button } from '@/components/ui/button';

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/raghsh', icon: GithubIcon, user: 'raghsh' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/raghsh', icon: LinkedinIcon, user: 'raghsh' },
  { name: 'LeetCode', href: 'https://leetcode.com/raghsh', icon: Code2Icon, user: 'raghsh' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl text-center">
        <div className="flex items-center justify-center mb-8">
          <SendIcon className="h-10 w-10 text-primary mr-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
        </div>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              variant="outline"
              className="py-6 px-6 text-lg transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground transform hover:scale-105 group"
              asChild
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                <link.icon className="mr-3 h-6 w-6 transition-colors group-hover:text-primary-foreground" /> {link.name}
              </a>
            </Button>
          ))}
        </div>
        
        <Button size="lg" asChild className="py-7 px-8 text-lg transition-transform duration-300 hover:scale-105">
          <a href="mailto:raghavendra.hande@example.com">
            <MailIcon className="mr-3 h-6 w-6" /> Send an Email
          </a>
        </Button>

      </div>
    </section>
  );
}