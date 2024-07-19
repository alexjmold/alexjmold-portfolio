import { z, defineCollection } from 'astro:content';

const cardContent = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    text: z.string(),
    type: z.string(),
    sortOrder: z.number(),
  }),
});

const portfolioContent = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    text: z.string(),
  }),
});

export const collections = {
  portfolio: portfolioContent,
  cards: cardContent,
};
