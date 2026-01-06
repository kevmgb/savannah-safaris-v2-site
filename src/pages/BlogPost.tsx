import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import matter from 'gray-matter';
import { ArrowLeft } from 'lucide-react';
import '../styles/blog.css';

interface PostData {
  title: string;
  date: string;
  description: string;
  coverImage?: string;
  body: string;
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<PostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPost() {
      if (!slug) {
        setError('Post not found');
        setLoading(false);
        return;
      }

      try {
        // Use Vite's glob import to find the post
        const modules = import.meta.glob('/content/blog/*.md', { 
          eager: true,
          query: '?raw',
        }) as Record<string, { default: string }>;
        
        const postPath = `/content/blog/${slug}.md`;
        const module = modules[postPath];

        if (!module) {
          setError('Post not found');
          setLoading(false);
          return;
        }

        const content = module.default;
        const { data, content: body } = matter(content);

        setPost({
          title: data.title || 'Untitled',
          date: data.date || new Date().toISOString(),
          description: data.description || '',
          coverImage: data.coverImage,
          body,
        });
      } catch (err) {
        console.error('Error loading blog post:', err);
        setError('Post not found');
      } finally {
        setLoading(false);
      }
    }

    loadPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-lg">Loading post...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg mb-4">Post not found</p>
            <Link
              to="/blog"
              className="text-[var(--safari-brown)] hover:underline"
            >
              Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-muted-foreground mb-6">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
            {post.coverImage && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            {post.description && (
              <p className="text-xl text-muted-foreground mb-8">{post.description}</p>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            <ReactMarkdown>{post.body}</ReactMarkdown>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
}

