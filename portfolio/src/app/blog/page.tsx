import type { Metadata } from "next";

import BlogList from "@/components/Blog/BlogList";
import TitleSection from "@/components/TitleSection";
import { getPosts } from "@/lib/blog";

export const metadata: Metadata = {
   title: "Blog",
   description: "Articles and notes written by Ryan HERCULE.",
   alternates: {
      canonical: "/blog",
   },
};

function Blog() {
   const posts = getPosts().map((post) => post.meta);

   return (
      <div>
        <TitleSection title="Blog" description="Things I experience, learn and write about" />
        <BlogList posts={posts} />
      </div>
   );
}

export default Blog;
