import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";

const AuthorSchema = defineType({
  name: "author",
  title: "Author",
  icon: UserIcon,
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
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    }),

    defineField({
      name: "socialMedia",
      title: "Social Media",
      type: "object",
      fields: [
        defineField({
          name: "twitter",
          title: "Twitter",
          type: "url",
        }),
        defineField({
          name: "linkedin",
          title: "LinkedIn",
          type: "url",
        }),
        defineField({
          name: "facebook",
          title: "Facebook",
          type: "url",
        }),
        defineField({
          name: "instagram",
          title: "Instagram",
          type: "url",
        }),
      ],
    }),

    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email().error("Invalid email address"),
    }),

    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "fullName",
      subtitle: "bio[0].children[0].text",
      email: "email",
      media: "profileImage",
    },
    prepare({ title, email, media }) {
      return {
        title,
        subtitle: email || "No email",
        media,
      };
    },
  },
});

export default AuthorSchema;
