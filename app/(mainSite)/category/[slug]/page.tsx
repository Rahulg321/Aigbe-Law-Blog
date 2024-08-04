import BlogCard from "@/components/BlogCard";
import BlogPagination from "@/components/BlogPagination";
import CategoriesList from "@/components/CategoriesList";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/client";
import {
  CATEGORY_BY_SLUG,
  FETCH_ALL_BLOGS_BY_CATEGORY,
  NUMBERED_BLOG_CATEGORY_QUERY,
  PAGINATED_BLOG_CATEGORY_QUERY,
} from "@/sanity/groq-queries";
import {
  CATEGORY_BY_SLUGResult,
  FETCH_ALL_BLOGS_BY_CATEGORYResult,
  NUMBERED_BLOG_CATEGORY_QUERYResult,
  PAGINATED_BLOG_CATEGORY_QUERYResult,
} from "@/sanity/types";
import Link from "next/link";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const currentCategory = await sanityFetch<CATEGORY_BY_SLUGResult>({
    query: CATEGORY_BY_SLUG,
    params: {
      slug: params.slug,
    },
    tags: ["category"],
  });

  const blogs = await sanityFetch<FETCH_ALL_BLOGS_BY_CATEGORYResult>({
    query: FETCH_ALL_BLOGS_BY_CATEGORY,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  });

  return (
    <section className="container block-space">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4 md:space-y-6 lg:space-y-8">
          <h2>Category: {currentCategory?.title as string}</h2>
          {blogs.length > 0 &&
            blogs.map((blog) => {
              return (
                <BlogCard
                  key={blog._id}
                  title={blog.title as string}
                  excerpt={blog.excerpt as string}
                  slug={blog.slug?.current as string}
                  createdAt={blog.publishDate as string}
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
