import { defineField, defineType } from "sanity";
import { CalendarIcon, DocumentIcon } from "@sanity/icons";

const BlogSchema = defineType({
  name: "blog",
  title: "Blog",
  icon: DocumentIcon,
  type: "document",
  fieldsets: [{ name: "dates", title: "Dates", options: { columns: 2 } }],
  groups: [
    {
      name: "descriptive",
      title: "Descriptive",
    },
    {
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "SEO",
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
      name: "category",
      group: "descriptive",
      title: "Categories",
      type: "reference",
      to: { type: "category" },
      validation: (Rule) => Rule.required().error("Category required"),
    }),

    defineField({
      name: "publishDate",
      group: "descriptive",
      title: "Publish Date",
      type: "datetime",
      fieldset: "dates",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "updatedAt",
      title: "Updated At",
      group: "descriptive",
      type: "datetime",
      fieldset: "dates",
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
      description: "A short summary of the blog post for displaying",
      validation: (Rule) =>
        Rule.required()
          .min(100)
          .max(200)
          .warning(
            "For consistency, this summary should be between 100-200 characters"
          ),
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
    defineField({
      name: "metaTitle",
      title: "Meta Title",
      group: "seo",
      type: "string",
      description: "Enter the meta title for SEO purposes",
      validation: (Rule) =>
        Rule.required()
          .max(60)
          .warning("Meta titles should be under 60 characters")
          .error("Meta titles are required"),
    }),

    defineField({
      name: "metaDescription",
      title: "Meta Description",
      group: "seo",
      type: "text",
      description: "Enter the meta description for SEO purposes",
      validation: (Rule) =>
        Rule.required()
          .min(50)
          .max(160)
          .warning("Meta descriptions should be between 50-160 characters")
          .error("Meta description is required"),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category.title",
      media: "featuredImage",
    },
  },
});

export default BlogSchema;
