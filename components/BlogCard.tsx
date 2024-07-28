import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogCard = ({
  title,
  excerpt,
  slug,
}: {
  title: string;
  excerpt: string;
  slug: string;
}) => {
  return (
    <article className="">
      <h3 className="text-mainB font-bold mb-2">{title}</h3>
      <span className="text-accentB text-xl font-semibold">July 1, 2023</span>
      <p className="text-muted-foreground text-lg md:text-xl mb-2">{excerpt}</p>
      <Link className="text-mainB" href={`/blog/${slug}`}>
        Read More <FaAngleDoubleRight className="inline h-4 w-4 ml-1" />
      </Link>
    </article>
  );
};

export default BlogCard;
