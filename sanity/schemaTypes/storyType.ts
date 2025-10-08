import { defineType, defineField } from "sanity";

export const storyType = defineType({
  name: "story",
  title: "Story",
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
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Impact Story", value: "impact" },
          { title: "News", value: "news" },
          { title: "Update", value: "update" },
          { title: "Event", value: "event" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "relatedProgram",
      title: "Related Program",
      type: "reference",
      to: [{ type: "program" }],
      description: "Optional: Link this story to a specific program",
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "string",
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      description: "Display this story prominently on the homepage",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "featuredImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { title, category, publishedAt } = selection;
      return {
        ...selection,
        subtitle: `${category} - ${new Date(publishedAt).toLocaleDateString()}`,
      };
    },
  },
  orderings: [
    {
      title: "Published Date, New",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
