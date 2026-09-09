"use client";

import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// External links open in a new tab; internal (relative) links stay in place.
const components: Components = {
  a({ node, href, children, ...props }) {
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
  // Inline images render at a uniform height regardless of source resolution,
  // centred in a light card — so a set of product shots looks consistent.
  img({ node, src, alt, ...props }) {
    return (
      <img
        src={typeof src === "string" ? src : undefined}
        alt={alt ?? ""}
        loading="lazy"
        className="mx-auto h-72 w-auto object-contain"
        {...props}
      />
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
