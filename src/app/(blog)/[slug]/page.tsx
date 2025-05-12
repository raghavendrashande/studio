
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
          <p className="text-xl font-medium text-foreground">{post.excerpt}</p>
          <hr className="my-6 border-border"/>
          <p>
            The full content for the blog post titled &quot;{post.title}&quot; would appear here.
            This content can be managed through the admin panel.
            For now, this is a placeholder demonstrating the structure of a blog post page.
          </p>
          <p>
            Imagine detailed paragraphs here, perhaps with code snippets, images, or embedded videos,
            all contributing to a comprehensive discussion of the topic. The possibilities are endless
            and can be tailored to best convey the message of the post.
          </p>
          <h2 className="text-2xl font-semibold mt-8">Example Subheading</h2>
          <p>
            Further sections, rich media, and detailed discussions related to the topic would typically follow.
            This section would elaborate on a specific aspect of &quot;{post.title}&quot;, providing more depth and insights.
          </p>
        </div>
      </article>
    </div>
  );
}
