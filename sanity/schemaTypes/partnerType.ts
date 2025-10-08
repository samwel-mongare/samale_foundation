import { defineType, defineField } from "sanity";

export const partnerType = defineType({
  name: "partner",
  title: "Partner",
  type: "document",
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
      name: "logo",
      title: "Logo",
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
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "website",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "partnershipType",
      title: "Partnership Type",
      type: "string",
      options: {
        list: [
          { title: "Government", value: "government" },
          { title: "NGO/CBO", value: "ngo" },
          { title: "Private Sector", value: "private" },
          { title: "International Organization", value: "international" },
          { title: "Community Organization", value: "community" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Featured Partner",
      type: "boolean",
      description: "Display this partner prominently on the homepage",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to control the order partners appear on the website",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "partnershipType",
      media: "logo",
    },
  },
});
