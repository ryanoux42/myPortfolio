import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import { BlogPost, BlogPostMeta } from "@/types";

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");
const MARKDOWN_EXTENSION = ".md";
const WORDS_READ_PER_MINUTE = 200;

interface BlogFrontMatter {
   title: string;
   description: string;
   date: string;
   cover: string;
   tags?: string[];
   draft?: boolean;
}

function computeReadingTime(content: string): number {
   const words = content.trim().split(/\s+/).length;

   return Math.max(1, Math.round(words / WORDS_READ_PER_MINUTE));
}

function readPost(slug: string): BlogPost | null {
   const filePath = path.join(BLOG_DIRECTORY, `${slug}${MARKDOWN_EXTENSION}`);

   if (!fs.existsSync(filePath)) {
      return null;
   }

   const { data, content } = matter(fs.readFileSync(filePath, "utf8"));
   const frontMatter = data as BlogFrontMatter;

   if (frontMatter.draft) {
      return null;
   }

   const meta: BlogPostMeta = {
      slug,
      title: frontMatter.title,
      description: frontMatter.description,
      date: new Date(frontMatter.date),
      cover: frontMatter.cover,
      tags: frontMatter.tags ?? [],
      readingTime: computeReadingTime(content),
   };

   return { meta, content };
}

function getPostSlugs(): string[] {
   if (!fs.existsSync(BLOG_DIRECTORY)) {
      return [];
   }

   return fs
      .readdirSync(BLOG_DIRECTORY)
      .filter((fileName) => fileName.endsWith(MARKDOWN_EXTENSION))
      .map((fileName) => fileName.slice(0, -MARKDOWN_EXTENSION.length));
}

function getPost(slug: string): BlogPost | null {
   return readPost(slug);
}

function getPosts(): BlogPost[] {
   return getPostSlugs()
      .map(readPost)
      .filter((post): post is BlogPost => post !== null)
      .sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime());
}

function formatPostDate(date: Date): string {
   return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
   }).format(date);
}

export { formatPostDate, getPost, getPosts, getPostSlugs };
