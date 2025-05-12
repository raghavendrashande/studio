export type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
};

export type BlogPost = {
  id: string;
  title: string;
  coverImageUrl: string;
  createdAt: string;
  slug: string;
  excerpt: string;
};

export const projectsData: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with a custom CMS and payment gateway integration.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates and a clean, intuitive interface.',
    techStack: ['React', 'Firebase', 'Material UI', 'Node.js'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: 'https://github.com',
  },
  {
    id: '3',
    title: 'Personal Portfolio v1',
    description: 'My previous personal portfolio website, built with vanilla HTML, CSS, and JavaScript.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: 'https://example.com',
  },
];

export const blogPostsData: BlogPost[] = [
  {
    id: '1',
    title: 'The Journey to Full Stack Development',
    coverImageUrl: 'https://picsum.photos/seed/blog1/600/300',
    createdAt: 'October 26, 2023',
    slug: 'journey-to-full-stack',
    excerpt: 'Exploring the challenges and rewards of becoming a full stack developer in the modern tech landscape.'
  },
  {
    id: '2',
    title: 'Mastering Tailwind CSS for Rapid UI Development',
    coverImageUrl: 'https://picsum.photos/seed/blog2/600/300',
    createdAt: 'November 15, 2023',
    slug: 'mastering-tailwind-css',
    excerpt: 'A deep dive into Tailwind CSS, uncovering tips and tricks for building beautiful UIs faster than ever.'
  },
  {
    id: '3',
    title: 'Why I Chose Next.js for My Projects',
    coverImageUrl: 'https://picsum.photos/seed/blog3/600/300',
    createdAt: 'December 05, 2023',
    slug: 'why-nextjs',
    excerpt: 'An overview of Next.js features and why it has become my go-to framework for web development.'
  },
];
