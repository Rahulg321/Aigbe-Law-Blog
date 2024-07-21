import React from "react";
import NewsletterForm from "../forms/NewsletterForm";

const NewsletterSection = () => {
  return (
    <section className="block-space big-container">
      <div>
        <h2>Never Miss An Update</h2>
        <span>Get our Weekly news, articles and resources.</span>
      </div>
      <div>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default NewsletterSection;
