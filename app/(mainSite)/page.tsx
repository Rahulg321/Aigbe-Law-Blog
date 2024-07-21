import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/urlBuilder";
import { sanityFetch } from "@/sanity/client";
import { BLOG_QUERY, CATEGORY_QUERY } from "@/sanity/groq-queries";
import { BLOG_QUERYResult, CATEGORY_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default async function HomePage() {
  const blogs = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
  });

  const categories = await sanityFetch<CATEGORY_QUERYResult>({
    query: CATEGORY_QUERY,
  });

  return (
    <section className="big-container">
      <div>
        <h2>All blogs are</h2>
        {blogs.map((e) => {
          console.log(e.image?.asset);
          return (
            <Link href={`/blog/${e.slug}`} key={e._id}>
              <h2>{e.title}</h2>
            </Link>
          );
        })}
      </div>

      <div>
        <h2>All Categories are</h2>
        {categories.map((e) => {
          return (
            <div key={e._id}>
              <h4>{e.title}</h4>
            </div>
          );
        })}
      </div>
    </section>
  );
}
