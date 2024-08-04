"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import clsx from "clsx";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useCallback } from "react";

type BlogPaginationProps = {
  previousBlogId: string;
  currentBlogId: string;
  nextBlogId: string;
  classname?: string;
};

const BlogPagination = ({
  previousBlogId,
  currentBlogId,
  nextBlogId,
  classname,
}: BlogPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (params: { [key: string]: string }) => {
      const newSearchParams = new URLSearchParams(searchParams.toString());
      Object.entries(params).forEach(([key, value]) => {
        newSearchParams.set(key, value);
      });
      return newSearchParams.toString();
    },
    [searchParams]
  );

  const handlePrevious = () => {
    if (previousBlogId !== "") {
      const newParams = createQueryString({
        currentBlogId: previousBlogId,
        prevBlogId: currentBlogId,
      });

      router.push(pathname + "?" + newParams);
    } else {
      const newParams = createQueryString({
        currentBlogId: "",
        prevBlogId: "",
      });

      router.push(pathname + "?" + newParams);
    }
  };

  const handleNext = () => {
    if (nextBlogId !== "") {
      console.log("currentBlogId when clicking next is", currentBlogId);

      const newParams = createQueryString({
        currentBlogId: nextBlogId,
        prevBlogId: currentBlogId,
      });

      router.push(pathname + "?" + newParams);
    }
  };

  return (
    <div className={clsx(classname)}>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrevious}
              className={clsx("cursor-pointer")}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              className={clsx("cursor-pointer")}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default BlogPagination;
