import { defineType, defineField } from "sanity";

export const storyType = defineType({
  name: "stories",
  title: "Stories",
  type: "document",
  fields: [
    // ✅ Basic Info
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

    // ✅ Summary and Content
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(250),
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
            { name: "alt", type: "string", title: "Alternative Text" },
            { name: "caption", type: "string", title: "Caption" },
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Media and Metadata
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alternative Text" }],
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

    // ✅ New: Optional SEO
    defineField({
      name: "seo",
      title: "SEO Metadata",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta Title", type: "string" },
        { name: "metaDescription", title: "Meta Description", type: "text" },
        {
          name: "keywords",
          title: "Keywords",
          type: "array",
          of: [{ type: "string" }],
        },
      ],
    }),

    // ✅ New: Estimated Reading Time (auto-filled manually or in hooks)
    defineField({
      name: "readingTime",
      title: "Estimated Reading Time (minutes)",
      type: "number",
    }),

    // ✅ Featured toggle
    defineField({
      name: "featured",
      title: "Featured Story",
      type: "boolean",
      description: "Display this story prominently on the homepage",
      initialValue: false,
    }),
  ],

  // ✅ Previews and ordering
  preview: {
    select: {
      title: "title",
      category: "category",
      media: "featuredImage",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { category, publishedAt } = selection;
      return {
        ...selection,
        subtitle: `${category} — ${new Date(publishedAt).toLocaleDateString()}`,
      };
    },
  },

  orderings: [
    {
      title: "Newest First",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "publishedAtAsc",
      by: [{ field: "publishedAt", direction: "asc" }],
    },
  ],
});
