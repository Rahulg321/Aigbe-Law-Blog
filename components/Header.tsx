import Image from "next/image";
import React from "react";
import Logo from "@/public/securities-law-blog-1.png";
import { FaLocationDot } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import CategoryAlphabet from "./CategoryAlphabet";
import Link from "next/link";

const Header = () => {
  return (
    <div className="relative">
      <header className="">
        <div className="flex gap-4 items-center">
          <div>
            <Image src={Logo} alt="" />
          </div>
          <HeaderIconComponent />
          <HeaderIconComponent />
          <HeaderIconComponent />
        </div>
      </header>
      <div className="sticky top-0 z-10">
        <TopBar />
        <CategoriesList />
      </div>
    </div>
  );
};

export default Header;

function HeaderIconComponent() {
  return (
    <div className="flex gap-2 items-center">
      <div>
        <FaLocationDot />
      </div>
      <div>
        <h4>1700 Palm Beach Lakes Blvd, Suite 820</h4>
        <span>West Palm Beach, FL 33401</span>
      </div>
    </div>
  );
}

function TopBar({ classname }: { classname?: string }) {
  return (
    <div
      className={cn("flex justify-around  items-center bg-mainB ", classname)}
    >
      <TopBarHeading title="Destiny Aigbe" />
      <TopBarHeading title="Privacy Policy" />
      <TopBarHeading title="Terms of Service" />
      <TopBarHeading title="Disclaimer" />
    </div>
  );
}

function TopBarHeading({ title }: { title: string }) {
  return (
    <Link
      href={"*"}
      className="hover:bg-accentB p-4 transition duration-100 ease-in-out"
    >
      <h5 className="text-white">{title}</h5>
    </Link>
  );
}

function CategoriesList() {
  return (
    <div className="container flex justify-center py-2 bg-muted shadow-lg items-center gap-2">
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
  );
}
