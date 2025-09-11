import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
      <p className="mb-8 text-sm text-gray-500">
        {new Date(post.date).toLocaleDateString()}
      </p>
      <div
        className="prose prose-purple"
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />
    </div>
  );
}

function markdownToHtml(md: string) {
  return md
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    .replace(/\n/g, "<br/>");
}
