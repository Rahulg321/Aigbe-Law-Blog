import Image from "next/image";
import React from "react";
import Logo from "@/public/securities-law-blog-1.png";
import { FaLocationDot } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import CategoryAlphabet from "./CategoryAlphabet";
import Link from "next/link";
import { IoCall } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa";
import MobileNavSheet from "@/components/MobileNavSheet";

const Header = () => {
  return (
    <div className="">
      <header className="">
        <div className="flex justify-between block-space-mini items-center container">
          <Link href="/">
            <Image src={Logo} alt="" width={350} height={100} />
          </Link>
          <HeaderIconComponent
            icon={<FaLocationDot />}
            heading="1700 Palm Beach Lakes Blvd, Suite 820"
            tagline="West Palm Beach, FL"
          />
          <HeaderIconComponent
            icon={<IoCall />}
            heading="(800) 341-2684"
            tagline="Call Toll Free"
          />
          <HeaderIconComponent
            icon={<FaQuestion />}
            heading="Contact Us"
            tagline="Online Inquires 24/7"
          />
        </div>
      </header>
      <div className="">
        <TopBar />
        <CategoriesList />
      </div>
    </div>
  );
};

export default Header;

function HeaderIconComponent({
  heading,
  tagline,
  icon,
}: {
  heading: string;
  tagline: string;
  icon: any;
}) {
  return (
    <div className="md:flex gap-2 items-center hidden">
      <div className="text-muted-foreground text-3xl">{icon}</div>
      <div>
        <span className="text-mainB leading-[1] font-semibold text-[1rem] block">
          {heading}
        </span>
        <span className="text-md text-muted-foreground">{tagline}</span>
      </div>
    </div>
  );
}

function TopBar({ classname }: { classname?: string }) {
  return (
    <div className="bg-mainB">
      <div
        className={cn("hidden lg:flex items-center big-container", classname)}
      >
        <TopBarHeading title="Home" link="/" />
        <TopBarHeading title="Destiny Aigbe" link="/destiny-aigbe" />
        <TopBarHeading title="About Firm" link="/about-firm" />
        <TopBarHeading title="Privacy Policy" link="privacy-policy" />
        <TopBarHeading title="Terms of Service" link="/terms-of-service" />
        <TopBarHeading title="Disclaimer" link="/disclaimer" />
        <TopBarHeading title="Contact Us" link="/contact-us" />
      </div>
      <div className="big-container flex items-center justify-between lg:hidden p-4">
        <h3 className="text-white">Aigbe Law Blogs</h3>
        <MobileNavSheet />
      </div>
    </div>
  );
}

function TopBarHeading({ title, link }: { title: string; link: string }) {
  return (
    <Link
      href={link}
      className="hover:bg-accentB p-4 transition duration-100 ease-in-out"
    >
      <h5 className="text-white">{title}</h5>
    </Link>
  );
}

function CategoriesList() {
  return (
    <div>
      <div className="hidden lg:flex justify-center py-2 bg-muted shadow-lg items-center gap-4">
        <CategoryAlphabet Alphabet="A" />
        <CategoryAlphabet Alphabet="B" />
        <CategoryAlphabet Alphabet="C" />
        <CategoryAlphabet Alphabet="D" />
        <CategoryAlphabet Alphabet="E" />
        <CategoryAlphabet Alphabet="F" />
        <CategoryAlphabet Alphabet="G" />
        <CategoryAlphabet Alphabet="H" />
        <CategoryAlphabet Alphabet="I" />
        <CategoryAlphabet Alphabet="J" />
        <CategoryAlphabet Alphabet="K" />
        <CategoryAlphabet Alphabet="L" />
        <CategoryAlphabet Alphabet="M" />
        <CategoryAlphabet Alphabet="N" />
        <CategoryAlphabet Alphabet="O" />
        <CategoryAlphabet Alphabet="P" />
        <CategoryAlphabet Alphabet="Q" />
        <CategoryAlphabet Alphabet="R" />
        <CategoryAlphabet Alphabet="S" />
        <CategoryAlphabet Alphabet="T" />
        <CategoryAlphabet Alphabet="U" />
        <CategoryAlphabet Alphabet="V" />
        <CategoryAlphabet Alphabet="W" />
        <CategoryAlphabet Alphabet="X" />
      </div>
      <div></div>
    </div>
  );
}
