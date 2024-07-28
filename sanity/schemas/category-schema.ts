import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons";

const CategorySchema = defineType({
  name: "category",
  title: "Category",
  icon: TagIcon,
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm",
        timeStep: 15,
      },
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A short description of the category",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "icon",
    },
  },
});

export default CategorySchema;
