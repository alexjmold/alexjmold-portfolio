import { z, defineCollection } from 'astro:content';

const cardContent = defineCollection({
  type: 'content',
  schema: z.object({
    key: z.string(),
    title: z.string(),
    text: z.string(),
    type: z.string(),
    sortOrder: z.number(),
    link: z.string().optional(),
    linkText: z.string().optional(),
    isExternal: z.boolean().optional(),
    image: z.string().optional(),
    imageType: z.string().optional(),
  }),
});

export const collections = {
  cards: cardContent,
};
