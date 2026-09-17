import Image from "next/image";
import Link from "next/link";
import { FiStar } from "react-icons/fi";

import SkillList from "@/components/SkillList";
import { formatPostDate } from "@/lib/blog";
import { BlogPostMeta } from "@/types";

interface BlogCardProps {
  post: BlogPostMeta;
}

function BlogCard({ post }: BlogCardProps) {
  const borderStyle = post.favorite
    ? "border-2 border-blue-primary shadow-md"
    : "border border-border-primary shadow-sm";
  const coverHeight = post.favorite ? "h-56" : "h-40";
  const titleSize = post.favorite ? "text-xl sm:text-2xl" : "text-lg sm:text-xl";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`flex flex-col overflow-hidden rounded-2xl bg-bg-primary transition-shadow duration-300 hover:shadow-md ${borderStyle}`}
    >
      <div className={`relative w-full ${coverHeight}`}>
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover"
        />
        {post.favorite && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-bg-primary px-3 py-1 text-xs font-semibold text-blue-primary shadow-sm">
            <FiStar className="size-3.5" />
            Favorite
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex flex-col gap-1">
          <h2 className={`font-bold text-text-primary ${titleSize}`}>{post.title}</h2>
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
