// ./schemas/person.js

const ProjectSchema = {
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

export default ProjectSchema;
