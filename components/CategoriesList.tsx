import React from "react";
import { Separator } from "./ui/separator";
import { sanityFetch } from "@/sanity/client";
import { CATEGORY_QUERYResult } from "@/sanity/types";
import { CATEGORY_QUERY } from "@/sanity/groq-queries";
import Link from "next/link";

const CategoriesList = async () => {
  const categories = await sanityFetch<CATEGORY_QUERYResult>({
    query: CATEGORY_QUERY,
    tags: ["category"],
  });

  return (
    <div className="bg-muted p-4 ">
      <h4 className="text-mainB">Categories</h4>
      <Separator className="h-[4px] bg-mainB my-[1em]" />
      <div className="space-y-2">
        {categories.map((category) => {
          return (
            <Link
              href={`/category/${category.slug?.current}`}
              key={category._id}
              className="text-mainB block font-semibold"
            >
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesList;
