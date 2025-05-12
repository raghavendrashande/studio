// This is a placeholder for individual blog post pages.
// In a real application, you would fetch and display the blog post content based on the slug.

import { blogPostsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { CalendarDaysIcon, UserIcon } from 'lucide-react'; // Assuming UserIcon for author

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl mb-4">
            {post.title}
          </h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center">
              <CalendarDaysIcon className="mr-2 h-5 w-5" />
              <span>{post.createdAt}</span>
            </div>
            <div className="flex items-center">
              <UserIcon className="mr-2 h-5 w-5" />
              <span>By Raghavendra Hande</span>
            </div>
          </div>
          <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              priority
              data-ai-hint="article cover"
            />
          </div>
        </header>

        <div className="space-y-6">
          <p>{post.excerpt}</p>
          <p>
            This is placeholder content for the blog post titled &quot;{post.title}&quot;. 
            In a real application, this section would be populated with the full content of the blog post, 
            likely fetched from a CMS or markdown files.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2 className="text-2xl font-semibold">Subheading Example</h2>
          <p>
            Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. 
            Nulla quis lorem ut libero malesuada feugiat. Cras ultricies ligula sed magna dictum porta.
          </p>
        </div>
      </article>
    </div>
  );
}
