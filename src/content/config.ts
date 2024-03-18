// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const demosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    thumbnail: z.string(),
    description: z.string().optional(),
  }),
});

const guidesCollection = defineCollection({
    type: 'content',
    schema: z.object({
      date: z.string(),
      title: z.string(),
      tags: z.array(z.string()).optional(),
      description: z.string(),
    }),
  });

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  demo: demosCollection,
  guides: guidesCollection,
};