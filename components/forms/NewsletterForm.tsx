import React from "react";
import { Button } from "../ui/button";

const NewsletterForm = () => {
  return (
    <div>
      <form action="" className="flex flex-col md:flex-row">
        <input
          type="email"
          placeholder="Enter your email address"
          className="rounded-full basis-3/4 p-4"
        />
        <Button className="rounded-full p-4 md:p-8 flex-1">Subscribe</Button>
      </form>
    </div>
  );
};

export default NewsletterForm;
