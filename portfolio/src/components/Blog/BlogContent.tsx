import Image from "next/image";
import type { ComponentProps } from "react";
import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

const MARKDOWN_IMAGE_WIDTH = 1200;
const MARKDOWN_IMAGE_HEIGHT = 675;

function MarkdownImage({ src, alt }: ComponentProps<"img">) {
  if (typeof src !== "string") {
    return null;
  }

  return (
    <Image
      src={src}
      alt={alt ?? ""}
      width={MARKDOWN_IMAGE_WIDTH}
      height={MARKDOWN_IMAGE_HEIGHT}
      className="my-6 h-auto w-full rounded-2xl border border-border-primary object-cover shadow-sm"
    />
  );
}

const MARKDOWN_COMPONENTS: Components = {
  h2: ({ children }) => (
    <h2 className="mt-8 mb-3 text-xl font-bold text-text-primary sm:text-2xl">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-6 mb-2 text-lg font-semibold text-text-primary sm:text-xl">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="mb-4 text-base leading-7 text-text-secondary">{children}</p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-medium text-blue-primary underline underline-offset-4"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-base text-text-secondary">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-base text-text-secondary">{children}</ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-6 border-l-4 border-blue-primary bg-bg-primary py-2 pl-4 text-text-secondary italic">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="rounded bg-bg-primary px-1.5 py-0.5 font-mono text-sm text-dark-blue">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="my-6 overflow-x-auto rounded-2xl border border-border-primary bg-bg-primary p-4 font-mono text-sm text-text-primary">
      {children}
    </pre>
  ),
  hr: () => <hr className="my-8 border-border-primary" />,
  img: MarkdownImage,
};

interface BlogContentProps {
  content: string;
}

function BlogContent({ content }: BlogContentProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={MARKDOWN_COMPONENTS}>
      {content}
    </ReactMarkdown>
  );
}

export default BlogContent;
