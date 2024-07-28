"use client";

import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BookOpen,
  Briefcase,
  Camera,
  CircleUserRound,
  Component,
  FileText,
  GanttChart,
  Home,
  Linkedin,
  Music,
} from "lucide-react";
import Link from "next/link";
import { CATEGORY_QUERYResult } from "@/sanity/types";

const CategoryNavSheet = ({}: {}) => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet
      open={sheetOpen}
      onOpenChange={(e) => {
        console.log("e", e);
        setSheetOpen(e);
      }}
    >
      <SheetTrigger asChild>
        <div className="rounded-full bg-accent p-4">
          <Component />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="">
        <SheetHeader>
          <SheetTitle>Aigbe Law Blog</SheetTitle>
        </SheetHeader>
        <nav className="mt-4 space-y-2">
          <NavLink
            label="Home"
            href="/"
            icon={<Home />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Categories"
            href="/category"
            icon={<GanttChart />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Disclaimer"
            href="/disclaimer"
            icon={<FileText />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Destiny Aigbe"
            href="/destiny-agbe"
            icon={<Camera />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Contact Us"
            href="/contact-us"
            icon={<BookOpen />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="About Firm"
            href="/about-firm"
            icon={<CircleUserRound />}
            onClick={() => setSheetOpen(false)}
          />
          <NavLink
            label="Privacy Policy"
            href="/privacy-policy"
            icon={<FileText />}
            onClick={() => setSheetOpen(false)}
          />
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default CategoryNavSheet;

export function NavLink({
  label,
  href,
  icon,
  onClick,
}: {
  label: string;
  href: string;
  icon: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-all
      duration-200 ease-in-out hover:text-foreground flex items-center gap-4 p-2 rounded-md"
      onClick={onClick}
    >
      <div className="h-[1.2rem] w-[1.2rem]">{icon}</div>
      {label}
    </Link>
  );
}
