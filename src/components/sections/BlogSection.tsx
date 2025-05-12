import { BookOpenIcon, CalendarDaysIcon, ArrowRightIcon } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { blogPostsData, type BlogPost } from '@/lib/data';

export default function BlogSection() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <div className="flex items-center mb-12">
          <BookOpenIcon className="h-10 w-10 text-primary mr-4" />
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Latest Blog Posts
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            {/* This would link to a full blog page in a real app */}
            <Link href="#"> 
              View All Posts <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BlogPostCard({ post }: { post: BlogPost }) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="relative w-full h-48">
        <Image
          src={post.coverImageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
          data-ai-hint="abstract technology"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-primary hover:underline">
          {/* This would link to the actual blog post page */}
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4 h-16 overflow-y-auto">{post.excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <CalendarDaysIcon className="mr-2 h-4 w-4" />
          <span>{post.createdAt}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="link" asChild className="p-0 h-auto text-primary">
          <Link href={`/blog/${post.slug}`}>
            Read More <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
