import { defineType, defineField } from "sanity";

export const teamMemberType = defineType({
  name: "teamMember",
  title: "Team Member",
  type: "document",
  icon: "person",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "photo",
      title: "Photo",
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
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "twitter",
      title: "Twitter/X Handle",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Used to control the order team members appear on the website",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Leadership", value: "leadership" },
          { title: "Program Staff", value: "program" },
          { title: "Board Member", value: "board" },
          { title: "Advisor", value: "advisor" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "position",
      media: "photo",
    },
  },
});
