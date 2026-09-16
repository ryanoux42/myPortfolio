import BlogCard from "@/components/Blog/BlogCard";
import { BlogPostMeta } from "@/types";

interface BlogListProps {
  posts: BlogPostMeta[];
}

function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-text-tertiary">No article published yet. Come back soon!</p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default BlogList;
