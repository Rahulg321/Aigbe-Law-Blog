import { sanityFetch } from "@/sanity/client";
import React from "react";
import { SINGLE_BLOG_QUERY } from "@/sanity/groq-queries";
import { SINGLE_BLOG_QUERYResult } from "@/sanity/types";
import { PortableText } from "@portabletext/react";

const page = async ({ params }: { params: { slug: string } }) => {
  const blogpost = await sanityFetch<SINGLE_BLOG_QUERYResult>({
    query: SINGLE_BLOG_QUERY,
    params: {
      slug: params.slug,
    },
  });

  return (
    <article className="block-space narrow-container">
      <h1>{blogpost?.title}</h1>
      {blogpost?.content && (
        <div className="prose max-w-none w-full md:prose-lg lg:prose-xl">
          <PortableText value={blogpost?.content} />
        </div>
      )}
    </article>
  );
};

export default page;
