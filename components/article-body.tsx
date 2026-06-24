"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ArticleBody({ content }: { content: string }) {
  return (
    <div className="prose prose-lg prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-strong:text-foreground prose-blockquote:border-l-primary prose-blockquote:font-medium prose-blockquote:not-italic prose-blockquote:text-foreground">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
