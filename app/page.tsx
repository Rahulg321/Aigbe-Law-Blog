import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/client";
import { BLOG_QUERY } from "@/sanity/groq-queries";
import { BLOG_QUERYResult } from "@/sanity/types";
import Image from "next/image";
import { useEffect } from "react";

export default async function HomePage() {
  const blogs = await sanityFetch<BLOG_QUERYResult>({
    query: BLOG_QUERY,
  });

  console.log("blogs from sanity are", blogs);

  return (
    <>
      <div>
        <Button>Click me</Button>
      </div>
      <div>
        <p>page</p>
      </div>
    </>
  );
}
