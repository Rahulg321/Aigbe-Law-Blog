import BlogCard from "@/components/BlogCard";
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
      <section className="container block-space space-y-4 md:space-y-6 lg:space-y-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <NewsletterSection />
      </section>
    </React.Fragment>
  );
}
