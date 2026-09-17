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

  const favoritePosts = posts.filter((post) => post.favorite);
  const otherPosts = posts.filter((post) => !post.favorite);

  return (
    <div className="flex flex-col gap-10">
      {favoritePosts.length > 0 && (
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-text-secondary">Favorites</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {favoritePosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
      {otherPosts.length > 0 && (
        <section className="flex flex-col gap-4">
          {favoritePosts.length > 0 && (
            <h2 className="text-lg font-bold text-text-secondary">All posts</h2>
          )}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {otherPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default BlogList;
