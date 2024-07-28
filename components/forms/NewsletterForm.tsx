import React from "react";
import { Button } from "../ui/button";

const NewsletterForm = () => {
  return (
    <div>
      <form action="" className="flex">
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-full basis-3/4 p-4"
        />
        <Button className="rounded-full p-8 flex-1">Subscribe</Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
