import { Button } from "@/components/ui/button";
import { urlFor } from "@/lib/urlBuilder";
import { sanityFetch } from "@/sanity/client";
import { BLOG_QUERY } from "@/sanity/groq-queries";
import { BLOG_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default async function HomePage() {
  const blogs = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
  });

  return (
    <>
      <div>
        {blogs.map((e) => {
          console.log(e.image?.asset);
          return (
            <Link href={`/blog/${e.slug}`} key={e._id}>
              <span>{e._id}</span>
              <h2>{e.title}</h2>
            </Link>
          );
        })}
      </div>
    </>
  );
}
