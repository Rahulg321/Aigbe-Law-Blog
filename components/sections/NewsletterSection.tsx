import React from "react";
import NewsletterForm from "../forms/NewsletterForm";

const NewsletterSection = () => {
  return (
    <section className="block-space narrow-container">
      <div className="text-center space-y-4 mb-10">
        <h2 className="font-bold">Never Miss An Update</h2>
        <span className="font-semibold block text-muted-foreground">
          Get our Weekly news, articles and resources.
        </span>
      </div>
      <div>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
