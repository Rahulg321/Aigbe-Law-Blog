import { defineField, defineType } from "sanity";

const AuthorSchema = defineType({
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    defineField({
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "fullName",
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});

export default AuthorSchema;
