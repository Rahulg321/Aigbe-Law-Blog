import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="container">
      <div className="">
        <Image
          src="https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          height={400}
          width={400}
          className="object-cover mx-auto"
        />
      </div>
      <div>
        <span>Welcome</span>
        <h2>Destiny Law Blog</h2>
        <p>
          Use the search or alphabetical categories to locate information on any
          and all schedules, rules, legislation or updates to corporate and
          securities laws. Laura Anthony, Esq. has been publishing weekly
          articles for the past 600 weeks. If you need assistance or have
          questions, please reach out to Laura Anthony, Esquire, Founding
          Partner of Anthony, Linder & Cacomanolis, PLLC using any of the
          contact forms on this site or visit the firm website for further
          information.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
