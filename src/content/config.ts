import { z, defineCollection } from 'astro:content';

const cardContent = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    text: z.string(),
    type: z.string(),
    sortOrder: z.number(),
    link: z.string().optional(),
    linkText: z.string().optional(),
    image: z.string().optional(),
    imageType: z.string().optional(),
  }),
});

export const collections = {
  cards: cardContent,
};
