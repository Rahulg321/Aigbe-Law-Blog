import BlogCard from "@/components/BlogCard";
import CategoriesList from "@/components/CategoriesList";
import HeroSection from "@/components/sections/HeroSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/urlBuilder";
import { sanityFetch } from "@/sanity/client";
import { BLOG_QUERY, CATEGORY_QUERY } from "@/sanity/groq-queries";
import { BLOG_QUERYResult, CATEGORY_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import React from "react";

export default async function HomePage() {
  const blogs = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
    tags: ["blog"],
  });

  const categories = await sanityFetch<CATEGORY_QUERYResult>({
    query: CATEGORY_QUERY,
    tags: ["category"],
  });

  return (
    <React.Fragment>
      <HeroSection />
      <section className="container block-space">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
            <h2>Latest Blogs</h2>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
          <div>
            <CategoriesList />
          </div>
        </div>
      </section>
      <NewsletterSection />
    </React.Fragment>
  );
}
