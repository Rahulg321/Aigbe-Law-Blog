import BlogCard from "@/components/BlogCard";
import CategoriesList from "@/components/CategoriesList";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/client";
import { BLOG_BY_CATEGORY, CATEGORY_BY_SLUG } from "@/sanity/groq-queries";
import { BLOG_BY_CATEGORYResult, CATEGORY_BY_SLUGResult } from "@/sanity/types";
import Link from "next/link";
import React from "react";

type Params = {
  slug: string;
};

const page = async ({ params }: { params: Params }) => {
  const currentCategory = await sanityFetch<CATEGORY_BY_SLUGResult>({
    query: CATEGORY_BY_SLUG,
    params: {
      slug: params.slug,
    },
    tags: ["category"],
  });

  const blogs = await sanityFetch<BLOG_BY_CATEGORYResult>({
    query: BLOG_BY_CATEGORY,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  });

  console.log("blogs for category are ", blogs);

  return (
    <section className="container block-space">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
          <h2>Category: {currentCategory?.title as string}</h2>
          {blogs &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog._id}
                  title={blog.title as string}
                  excerpt={blog.excerpt as string}
                  slug={blog.slug?.current as string}
                  createdAt={blog._createdAt as string}
                />
              );
            })}
          {blogs.length === 0 && (
            <div>
              <h3>Oops!!</h3>
              <h3>No blogs found for this category</h3>
              <h3 className="">Please try Again Later</h3>
              <Button className="mt-4" asChild>
                <Link href={"/"}>Back to Home Page</Link>
              </Button>
            </div>
          )}
        </div>
        <div>
          <CategoriesList />
        </div>
      </div>
    </section>
  );
};

export default page;
