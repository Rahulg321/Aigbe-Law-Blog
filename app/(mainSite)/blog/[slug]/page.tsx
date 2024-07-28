import { sanityFetch } from "@/sanity/client";
import React from "react";
import {
  SINGLE_BLOG_METADATA_QUERY,
  SINGLE_BLOG_QUERY,
} from "@/sanity/groq-queries";
import {
  SINGLE_BLOG_METADATA_QUERYResult,
  SINGLE_BLOG_QUERYResult,
} from "@/sanity/types";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import CategoriesList from "@/components/CategoriesList";
import { FaPenNib } from "react-icons/fa6";
import { TimerIcon } from "lucide-react";
import { urlFor } from "@/lib/urlBuilder";

type Params = {
  slug: string;
};

const page = async ({ params }: { params: Params }) => {
  const blogpost = await sanityFetch<SINGLE_BLOG_QUERYResult>({
    query: SINGLE_BLOG_QUERY,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  });

  if (!blogpost) {
    return notFound();
  }

  const date = new Date(blogpost.publishDate as string);

  // Format the date using options for locale, day, month, and year
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const {
    title,
    slug,
    _createdAt,
    _updatedAt,
    metaDescription,
    featuredImage,
  } = blogpost;

  return (
    <section className="block-space container">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: title,
            datePublished: _createdAt,
            dateModified: _updatedAt,
            description: metaDescription,
            image: urlFor(featuredImage).url(),
            url: `https://aigbe-law-blog.vercel.app/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "Destiny Aigbe",
            },
          }),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <article className="col-span-2 text-pretty">
          <div className="space-y-4">
            <h2 className="text-mainB ">{blogpost?.title}</h2>
            <h3 className="flex items-center text-accentB">
              <FaPenNib className="mr-2" /> Author: Destiny Aigbe
            </h3>
            <h4 className="flex items-center text-accentB">
              <TimerIcon /> {formattedDate}
            </h4>
          </div>
          <Separator className="h-[4px] my-[1em] bg-muted" />
          {blogpost?.content && (
            <div className="prose max-w-none w-full">
              <PortableText value={blogpost?.content} />
            </div>
          )}
          <h3 className="text-mainB my-[1em]">About the Author</h3>
          <div className="space-y-4">
            <h4 className="text-accentB">Destiny Aigbe</h4>
            <h4 className="text-accentB"> Managing Partner</h4>
            <h4 className="text-accentB">
              {" "}
              Aigbe Law PLLC | Dark Alpha Capital
            </h4>
            <h4 className="text-accentB">
              A Corporate and Securities Law Firm
            </h4>
          </div>
          <p>
            With a robust foundation in{" "}
            <span className="text-mainB font-semibold">law</span> and{" "}
            <span className="text-mainB font-semibold">finance</span>, Destiny
            Aigbe has carved a distinguished career, underpinned by his pivotal
            role in orchestrating and managing complex transactions that have
            propelled companies to significant growth and market prominence. As
            a seasoned attorney and strategic advisor, Destiny has been
            instrumental in facilitating over $75 million in capital raises,
            demonstrating a keen acumen for securing funding and fostering
            investor confidence.
          </p>
          <p>
            Destiny&apos;s leadership in the execution of six successful public
            listings, through meticulously structured reverse mergers and
            registration statements, showcases his adeptness in navigating the
            intricacies of the public markets and his capacity to guide
            companies through transformative growth phases. His involvement in
            five mergers as an operator further illustrates his versatile skill
            set, extending beyond legal expertise to include hands-on management
            and operational strategy, though these ventures did not involve
            funding.
          </p>
          <p>
            Destiny&apos;s professional journey is marked by a commitment to
            excellence and a diverse range of experiences, from representing a
            wide spectrum of clients including public and private companies, and
            investment firms, to holding significant roles within the US
            government. His tenure with the US Department of State and the
            National Institutes of Health highlights his adaptability and his
            contribution to the advancement of entrepreneurial ventures in
            sectors like biotechnology and nanotechnology through strategic
            funding initiatives.
          </p>
          <p>
            An alumnus of{" "}
            <span className="text-mainB font-semibold">
              Vanderbilt University Law School
            </span>
            , Destiny focused on Finance and Mergers & Acquisitions, further
            honing his expertise with a certificate in Law and Business. His
            foundational education in Finance was obtained with honors from the{" "}
            <span className="text-mainB font-semibold">
              University of Maryland&apos;s Robert H. Smith School of Business
            </span>
            , which laid the groundwork for his subsequent achievements in
            investment banking and legal practice.
          </p>
          <p>
            Residing in the{" "}
            <span className="text-mainB font-semibold">
              Washington, D.C. area,
            </span>{" "}
            Destiny Aigbe continues to leverage his extensive experience and
            insightful leadership to drive innovation, growth, and success for
            his clients and the ventures he is involved with.
          </p>
          <span>© Aigbe Law, PLLC</span>
        </article>
        <div>
          <CategoriesList />
        </div>
      </div>
    </section>
  );
};

export default page;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const blogpost = await sanityFetch<SINGLE_BLOG_QUERYResult>({
    query: SINGLE_BLOG_QUERY,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  });

  if (!blogpost) {
    return {};
  }

  let { title, metaDescription, featuredImage, _createdAt, slug, excerpt } =
    blogpost;

  let ogImage = featuredImage
    ? urlFor(featuredImage).width(1200).height(630).url()
    : null;

  console.log("og image", ogImage);

  return {
    title,
    description: metaDescription || excerpt,
    openGraph: {
      title,
      description: metaDescription || excerpt,
      type: "article",
      publishedTime: _createdAt,
      url: `https://aigbe-law-blog.vercel.app/blog/${slug}`,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: metaDescription || excerpt,
      images: ogImage ? [ogImage] : [],
    },
  };
}
