// ./schemas/person.js

const PersonSchema = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "projectName",
      title: "Project Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
    },
    {
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};

export default PersonSchema;
