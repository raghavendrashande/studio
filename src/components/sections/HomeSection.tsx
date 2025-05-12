import { Button } from '@/components/ui/button';
import { ArrowDownIcon } from 'lucide-react';

export default function HomeSection() {
  return (
    <section id="home" className="relative flex h-[calc(100vh-4rem)] min-h-[500px] w-full items-center justify-center overflow-hidden text-center">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-secondary/30 opacity-70 z-0"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-foreground">Hello, I&apos;m</span>
          <span className="block text-primary mt-2">Raghavendra Hande</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground sm:max-w-xl md:text-xl">
          A passionate Full Stack Developer crafting intuitive and performant digital experiences.
        </p>
        <p className="mt-3 max-w-lg text-md text-accent-foreground bg-accent/30 px-3 py-1 rounded-md inline-block sm:max-w-xl md:text-lg">
          Tagline: Building bridges between ideas and reality with code.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href="#projects">
              View My Work
              <ArrowDownIcon className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="transition-transform duration-300 hover:scale-105">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <ArrowDownIcon className="h-8 w-8 text-muted-foreground" />
      </div>
    </section>
  );
}