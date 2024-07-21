import { groq } from "next-sanity";
// import groq from 'groq' // in other frameworks

export const AUTHOR_QUERY = groq`*[_type == "author" && defined(slug.current)]{_id, name, slug, date}|order(date desc)`;

export const CATEGORY_QUERY = groq`*[_type == "category" && defined(slug.current)]{_id, title, slug}|order(date desc)`;

export const BLOG_QUERY = groq`*[_type == "blog" && defined(slug.current)]{_id, title, "slug":slug.current, "image":featuredImage}|order(date desc)`;

export const SINGLE_BLOG_QUERY = groq`
*[_type == "blog" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  "image": featuredImage,
  "author": author->name,
  "authorImage": author->image,
  publishDate,
  categories[]->{
    title,
    slug
  },
  tags,
  excerpt,
  content[]{
    ...,
    _type == "image" => {
      ...,
      asset->{
        _id,
        url
      }
    }
  }
}
`;
