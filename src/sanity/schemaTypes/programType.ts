import { defineType, defineField } from "sanity";

export const programType = defineType({
  name: "program",
  title: "Program",
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
      name: "pillar",
      title: "Pillar",
      type: "string",
      options: {
        list: [
          { title: "Peace & Security", value: "peace" },
          { title: "Economic Development", value: "economic" },
          { title: "Climate Change & Sustainability", value: "climate" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "cause",
      title: "Cause",
      type: "array",
      of: [{ type: "block" }],
      description: "What is the problem this program addresses?",
    }),
    defineField({
      name: "impact",
      title: "Impact",
      type: "array",
      of: [{ type: "block" }],
      description: "What is the expected or achieved impact?",
    }),
    defineField({
      name: "solutions",
      title: "Solutions",
      type: "array",
      of: [{ type: "block" }],
      description: "How does this program solve the problem?",
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
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Current", value: "current" },
          { title: "Completed", value: "completed" },
          { title: "Upcoming", value: "upcoming" },
        ],
      },
      initialValue: "current",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to control the order programs appear on the website",
    }),
  ],
  preview: {
    select: {
      title: "title",
      pillar: "pillar",
      media: "featuredImage",
    },
    prepare(selection) {
      return {
        ...selection,
        subtitle: selection.pillar,
      };
    },
  },
});
