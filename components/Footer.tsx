import { UserIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/white_logo.png";

const Footer = () => {
  return (
    <footer className=" bg-mainB">
      <div className="grid container grid-cols-4 block-space gap-4 border-b-2 border-gray-200/20">
        <div className="p-4">
          <Image src={Logo} alt="" />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h5 className="text-white">Contact Information</h5>
          <IconText icon={<FaCircleUser />} label="Destiny Aigbe" />
          <IconText icon={<FaSun />} label="Founding Partner" />
          <IconText
            icon={<FaLocationDot />}
            label="1700 Palm Beach Lakes Blvd, Suite 820"
          />
          <IconText icon={<FaPhoneAlt />} label="+1 (800) 123-4567" />
          <IconText icon={<FaPhoneAlt />} label="+1 (800) 123-4567" />
          <IconText icon={<IoMail />} label="daigbe@gmail.com" />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h5 className="text-white">Quick Links</h5>
          <Link href={"*"}>Destiny Aigbe</Link>
          <Link href={"*"}>About Firm</Link>
          <Link href={"*"}>Disclaimer</Link>
          <Link href={"*"}>Guest Authors</Link>
        </div>
        <div className="flex flex-col gap-2 text-white">
          <h5>Legal Resources</h5>
          <Link href={"*"}>Attorneys</Link>
          <Link href={"*"}>Practice Areas</Link>
          <Link href={"*"}>News</Link>
        </div>
      </div>
      <div className="text-white flex flex-col gap-2 justify-center items-center p-6">
        <div className="flex gap-4">
          <SocialMediaIconLink icon={<FaInstagram />} />
          <SocialMediaIconLink icon={<FaInstagram />} />
          <SocialMediaIconLink icon={<FaInstagram />} />
          <SocialMediaIconLink icon={<FaInstagram />} />
        </div>
        {/* write span tag for copyrights reserved */}
        <span>Copyright 2023. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;

function SocialMediaIconLink({ icon }: { icon: any }) {
  return (
    <Link href={"*"} className="p-2 rounded-full border-gray-400 border-2">
      <div>{icon}</div>
    </Link>
  );
}

function IconText({ icon, label }: { icon: any; label: string }) {
  return (
    <span className="flex items-center gap-2 text-sm text-white">
      {icon}
      {label}
    </span>
  );
}
