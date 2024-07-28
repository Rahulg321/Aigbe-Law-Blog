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

  return (
    <section className="block-space container">
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
            Securities attorney Laura Anthony and her experienced legal team
            provide ongoing corporate counsel to small and mid-size private
            companies, public companies as well as private companies going
            public on the Nasdaq, NYSE American or over-the-counter market, such
            as the OTCQB and OTCQX. For more than two decades Anthony, Linder &
            Cacomanolis, PLLC has served clients providing fast, personalized,
            cutting-edge legal service. The firm’s reputation and relationships
            provide invaluable resources to clients including introductions to
            investment bankers, broker-dealers, institutional investors and
            other strategic alliances. The firm’s focus includes, but is not
            limited to, compliance with the Securities Act of 1933 offer sale
            and registration requirements, including private placement
            transactions under Regulation D and Regulation S and PIPE
            Transactions, securities token offerings and initial coin offerings,
            Regulation A/A+ offerings, as well as registration statements on
            Forms S-1, S-3, S-8 and merger registrations on Form S-4; compliance
            with the Securities Exchange Act of 1934, including registration on
            Form 10, reporting on Forms 10-Q, 10-K and 8-K, and 14C Information
            and 14A Proxy Statements; all forms of going public transactions;
            mergers and acquisitions including both reverse mergers and forward
            mergers; applications to and compliance with the corporate
            governance requirements of securities exchanges including Nasdaq and
            NYSE American; general corporate; and general contract and business
            transactions. Ms. Anthony and her firm represent both target and
            acquiring companies in merger and acquisition transactions,
            including the preparation of transaction documents such as merger
            agreements, share exchange agreements, stock purchase agreements,
            asset purchase agreements and reorganization agreements. The ALC
            legal team assists Pubcos in complying with the requirements of
            federal and state securities laws and SROs such as FINRA for 15c2-11
            applications, corporate name changes, reverse and forward splits and
            changes of domicile. Ms. Anthony is also the author of
            SecuritiesLawBlog.com, the small-cap and middle market’s top source
            for industry news, and the producer and host of LawCast.com,
            Corporate Finance in Focus. In addition to many other major
            metropolitan areas, the firm currently represents clients in New
            York, Los Angeles, Miami, Boca Raton, West Palm Beach, Atlanta,
            Phoenix, Scottsdale, Charlotte, Cincinnati, Cleveland, Washington,
            D.C., Denver, Tampa, Detroit and Dallas.
          </p>
          <p>
            <span className="text-accentB font-semibold">Mr. Anthony</span> is a
            member of various professional organizations including the
            Crowdfunding Professional Association (CfPA), Palm Beach County Bar
            Association, the Florida Bar Association, the American Bar
            Association and the ABA committees on Federal Securities Regulations
            and Private Equity and Venture Capital. She is a supporter of
            several community charities including the American Red Cross for
            Palm Beach and Martin Counties, Susan Komen Foundation, Opportunity,
            Inc., New Hope Charities, the Society of the Four Arts, the Norton
            Museum of Art, Palm Beach County Zoo Society, the Kravis Center for
            the Performing Arts and several others.
          </p>
          <p>
            Ms. Anthony is an honors graduate from Florida State University
            College of Law and has been practicing law since 1993.
          </p>
          <p>
            Contact Anthony, Linder & Cacomanolis, PLLC. Inquiries of a
            technical nature are always encouraged.
          </p>
          <p>
            Follow Anthony, Linder & Cacomanolis, PLLC on Facebook, LinkedIn,
            YouTube, Pinterest and Twitter.
          </p>
          <p>
            Anthony, Linder & Cacomanolis, PLLC makes this general information
            available for educational purposes only. The information is general
            in nature and does not constitute legal advice. Furthermore, the use
            of this information, and the sending or receipt of this information,
            does not create or constitute an attorney-client relationship
            between us. Therefore, your communication with us via this
            information in any form will not be considered as privileged or
            confidential.
          </p>
          <span>© Anthony, Linder & Cacomanolis, PLLC</span>
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
  const post = await sanityFetch<SINGLE_BLOG_METADATA_QUERYResult>({
    query: SINGLE_BLOG_METADATA_QUERY,
    params: {
      slug: params.slug,
    },
    tags: ["blog"],
  });

  console.log("meta data post is ", post);

  return {
    title: post?.metaTitle,
    description: post?.metaDescription,
  };
}
