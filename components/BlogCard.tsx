import Link from "next/link";
import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const BlogCard = () => {
  return (
    <div className="">
      <h3 className="text-mainB font-bold">Free Writing Prospectus</h3>
      <span>July 1, 2023</span>
      <p className="text-muted-foreground text-lg md:text-xl mb-2">
        I’m finding a lot of good segues recently – flowing from my discussion
        on the definition and implications of shell company status in a reverse
        merger (see HERE) is the topic of a free writing prospectus (“FWP”). In
        particular, what is a free writing prospectus, when and how is it used,
        and what companies are eligible for its use.
      </p>
      <Link className="text-mainB" href="#">
        Read More <FaAngleDoubleRight className="inline h-4 w-4 ml-1" />
      </Link>
    </div>
  );
};

export default BlogCard;
