import { groq } from "next-sanity";
// import groq from 'groq' // in other frameworks

export const AUTHOR_QUERY = groq`*[_type == "author" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export const CATEGORY_QUERY = groq`*[_type == "category" && defined(slug.current)]{_id, title, slug, createdAt}|order(date desc)`;

// write a query to fetch blogs by category
export const BLOG_BY_CATEGORY = groq`
*[_type == "blog" && category->slug.current == $slug]
`;

export const NUMBERED_BLOG_CATEGORY_QUERY = groq`*[_type == "blog" && category->slug.current == $slug] | order(_id) [0...3] {
  _id, title, slug, publishDate, excerpt, content
}`;

export const FETCH_ALL_BLOGS_BY_CATEGORY = groq`*[_type == "blog" && category->slug.current == $slug] | order(_id) {
  _id, title, slug, publishDate, excerpt, content
}`;

export const PAGINATED_BLOG_CATEGORY_QUERY = groq`*[_type == "blog" && _id > $lastId && category->slug.current == $slug] | order(_id) [0...3] {
  _id, title, slug, publishDate, excerpt, content
}`;

export const BLOG_QUERY = groq`*[_type == "blog" && defined(slug.current)]`;

export const CATEGORY_BY_SLUG = groq`
*[_type == "category" && slug.current == $slug][0]{
  _id,  
  title,
  description
}
`;

export const SINGLE_BLOG_METADATA_QUERY = groq`
*[_type == "blog" && slug.current == $slug][0]{
  _id,
  metaTitle,
  metaDescription,
}
`;

export const SINGLE_BLOG_QUERY = groq`
*[_type == "blog" && slug.current == $slug][0]{
  ...,
  metaTitle,
  metaDescription,
}
`;
