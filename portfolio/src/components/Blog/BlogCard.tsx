import Image from "next/image";
import Link from "next/link";

import SkillList from "@/components/SkillList";
import { formatPostDate } from "@/lib/blog";
import { BlogPostMeta } from "@/types";

interface BlogCardProps {
  post: BlogPostMeta;
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="flex flex-col overflow-hidden rounded-2xl border border-border-primary bg-bg-primary shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="relative h-40 w-full">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h2 className="text-lg font-bold text-text-primary sm:text-xl">{post.title}</h2>
          <p className="text-xs font-medium text-text-tertiary sm:text-sm">
            {formatPostDate(post.date)} · {post.readingTime} min read
          </p>
        </div>
        <p className="flex-1 text-base text-text-secondary">{post.description}</p>
        {post.tags.length > 0 && <SkillList skills={post.tags} />}
      </div>
    </Link>
  );
}

export default BlogCard;
