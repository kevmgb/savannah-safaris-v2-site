import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import matter from "gray-matter";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  coverImage?: string;
}

export function BlogIndex() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPosts() {
      try {
        // Use Vite's glob import to load all markdown files as raw text
        const modules = import.meta.glob("/content/blog/*.md", {
          eager: true,
          query: "?raw",
        }) as Record<string, { default: string }>;

        const postsData: BlogPost[] = Object.keys(modules).map((path) => {
          const content = modules[path].default;
          const { data } = matter(content);
          const slug = path.split("/").pop()?.replace(".md", "") || "";

          return {
            slug,
            title: data.title || "Untitled",
            date: data.date || new Date().toISOString(),
            description: data.description || "",
            coverImage: data.coverImage,
          };
        });

        // Sort by date, newest first
        postsData.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setPosts(postsData);
      } catch (error) {
        console.error("Error loading blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[60vh]">
          <p className="text-lg">Loading blog posts...</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Blog
          </h1>
          <p className="text-center text-lg text-muted-foreground mb-12">
            Stories from our safaris and adventures
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {post.coverImage && (
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-[var(--safari-brown)] transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-muted-foreground line-clamp-3">
                        {post.description}
                      </p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
