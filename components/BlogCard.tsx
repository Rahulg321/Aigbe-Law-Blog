import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogCard = ({
  title,
  excerpt,
  slug,
  createdAt,
}: {
  title: string;
  excerpt: string;
  slug: string;
  createdAt: string;
}) => {
  const date = new Date(createdAt);

  // Format the date using options for locale, day, month, and year
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="">
      <Link href={`/blog/${slug}`}>
        <h3 className="text-mainB font-bold mb-2">{title}</h3>
      </Link>
      <span className="text-accentB text-xl font-semibold">
        {formattedDate}
      </span>
      <p className="text-muted-foreground text-lg md:text-xl mb-2">{excerpt}</p>
      <Link className="text-mainB" href={`/blog/${slug}`}>
        Read More <FaAngleDoubleRight className="inline h-4 w-4 ml-1" />
      </Link>
    </article>
  );
};

export default BlogCard;
