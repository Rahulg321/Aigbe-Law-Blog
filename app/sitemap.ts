import { sanityFetch } from "@/sanity/client";
import { BLOG_QUERY, CATEGORY_QUERY } from "@/sanity/groq-queries";
import { BLOG_QUERYResult, CATEGORY_QUERYResult } from "@/sanity/types";

export default async function sitemap() {
  const categories = await sanityFetch<CATEGORY_QUERYResult>({
    query: CATEGORY_QUERY,
  });

  const blogs = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
  });

  let categoryUrlMaps = categories.map((category) => ({
    url: `https://aigbe-law-blog.vercel.app/blog/${category.slug}`,
    lastModified: category.createdAt,
  }));

  let blogUrlMaps = blogs.map((post) => ({
    url: `https://aigbe-law-blog.vercel.app/blog/${post.slug}`,
    lastModified: post._createdAt,
  }));

  let routes = [
    "/",
    "/about-firm",
    "/disclaimer",
    "/contact-us",
    "/destiny-aigbe",
  ].map((route) => ({
    url: `https://aigbe-law-blog.vercel.app${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogUrlMaps, ...categoryUrlMaps];
}
