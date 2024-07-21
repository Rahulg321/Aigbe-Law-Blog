import { groq } from "next-sanity";
// import groq from 'groq' // in other frameworks

export const AUTHOR_QUERY = groq`*[_type == "author" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export const CATEGORY_QUERY = groq`*[_type == "category" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export const BLOG_QUERY = groq`*[_type == "blog" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;
