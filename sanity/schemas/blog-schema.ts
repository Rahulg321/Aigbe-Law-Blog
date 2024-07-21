import { defineField, defineType } from "sanity";
import { CalendarIcon, DocumentIcon } from "@sanity/icons";

const BlogSchema = defineType({
  name: "blog",
  title: "Blog",
  icon: DocumentIcon,
  type: "document",
  groups: [
    {
      name: "descriptive",
      title: "Descriptive",
    },
    {
      name: "editorial",
      title: "Editorial",
    },
  ],
  fields: [
    defineField({
      name: "title",
      description: "Enter the title for your blogpost",
      title: "Title",
      group: "descriptive",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(100).warning("Shorter titles are usually better"),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "descriptive",
      options: {
        source: "title",
        maxLength: 96,
      },
      //   field will be hidden if the document does not have a name
      hidden: ({ document }) => {
        return !document?.title;
      },
      validation: (Rule) =>
        Rule.required().error(
          "slug required to generate a page on the website"
        ),
    }),
    defineField({
      name: "featuredImage",
      group: "descriptive",
      description:
        "Upload a featured image for your blogpost for Opengraph and SEO",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "author",
      group: "descriptive",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "publishDate",
      group: "descriptive",
      title: "Publish Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "categories",
      group: "descriptive",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      group: "descriptive",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    defineField({
      name: "excerpt",
      group: "editorial",
      title: "Excerpt",
      type: "text",
      description: "A short summary of the blog post",
      validation: (Rule) => Rule.required().max(200),
    }),

    defineField({
      name: "content",
      title: "Content",
      group: "editorial",
      type: "array",

      of: [
        {
          type: "block",
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
              { title: "Underline", value: "underline" },
              { title: "Strike", value: "strike-through" },
            ],
          },
        },
        { type: "image", options: { hotspot: true } },
        {
          type: "code",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "categor.title",
      media: "featuredImage",
    },
  },
});

export default BlogSchema;
