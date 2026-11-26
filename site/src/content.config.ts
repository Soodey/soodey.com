import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const recipes = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/recipes' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string().optional(),
    subtitle: z.string(),
    description: z.string(),
    category: z.string(),
    eyebrow: z.string(),
    cuisine: z.string().default('American'),
    author: z.string().default('Steven Horvat'),
    datePublished: z.string(),
    keywords: z.string(),
    prepTime: z.string(),
    cookTime: z.string(),
    prepTimeISO: z.string(),
    cookTimeISO: z.string(),
    totalTimeISO: z.string(),
    yield: z.string(),
    yieldShort: z.string(),
    bakingDish: z.string().optional(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string(),
      width: z.number(),
      height: z.number(),
    }),
    ingredients: z.array(
      z.object({
        id: z.string(),
        metric: z.string(),
        us: z.string(),
        bothPrimary: z.string().optional(),
        bothSecondary: z.string().optional(),
        name: z.string(),
        note: z.string().optional(),
        dayTag: z.string().optional(),
        schemaText: z.string(),
      })
    ),
    parts: z.array(
      z.object({
        pill: z.string(),
        title: z.string(),
        steps: z.array(
          z.object({
            id: z.string(),
            title: z.string(),
            bullets: z.array(z.string()),
            schemaText: z.string(),
          })
        ),
      })
    ),
  }),
});

export const collections = { recipes };
