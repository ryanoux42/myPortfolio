import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogContent from "@/components/Blog/BlogContent";
import SkillList from "@/components/SkillList";
import { formatPostDate, getPost, getPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
   params: Promise<{ slug: string }>;
}

function generateStaticParams(): { slug: string }[] {
   return getPostSlugs().map((slug) => ({ slug }));
}

async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
   const { slug } = await params;
   const post = getPost(slug);

   if (!post) {
      return {};
   }

   return {
      title: post.meta.title,
      description: post.meta.description,
      alternates: {
         canonical: `/blog/${slug}`,
      },
      openGraph: {
         type: "article",
         title: post.meta.title,
         description: post.meta.description,
         publishedTime: post.meta.date.toISOString(),
         images: [{ url: post.meta.cover }],
      },
   };
}

async function BlogPostPage({ params }: BlogPostPageProps) {
   const { slug } = await params;
   const post = getPost(slug);

   if (!post) {
      notFound();
   }

   return (
      <article className="mx-auto w-full max-w-3xl">
        <Link href="/blog" className="text-sm font-medium text-blue-primary">
          ← Back to blog
        </Link>

        <header className="mt-4 mb-6 flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-text-primary sm:text-3xl">{post.meta.title}</h1>
          <p className="text-xs font-medium text-text-tertiary sm:text-sm">
            {formatPostDate(post.meta.date)} · {post.meta.readingTime} min read
          </p>
          {post.meta.tags.length > 0 && <SkillList skills={post.meta.tags} />}
        </header>

        <div className="relative mb-8 h-56 w-full overflow-hidden rounded-2xl border border-border-primary shadow-sm sm:h-80">
          <Image
            src={post.meta.cover}
            alt={post.meta.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        <BlogContent content={post.content} />
      </article>
   );
}

export { generateMetadata, generateStaticParams };
export default BlogPostPage;
