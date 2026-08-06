"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// External links open in a new tab; internal (relative) links stay in place.
const components: Components = {
  a({ href, children, ...props }) {
    const external = !!href && /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
};

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="prose prose-lg prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{content}</ReactMarkdown>
    </div>
  );
}
