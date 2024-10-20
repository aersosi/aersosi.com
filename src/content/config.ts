import { defineCollection, z } from 'astro:content';

// Transform German date string (DD.MM.YYYY) to Date object
const germanDateToDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.');
  return new Date(`${year}-${month}-${day}`);
};

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		categories: z.string().array(),
		tags: z.string().array(),
		// Transform string to Date object
		pubDate: z.preprocess(
			(val) => germanDateToDate(val as string),
			z.date()
		),
		updateDate: z.preprocess(
			(val) => germanDateToDate(val as string),
			z.date()
		).optional(),
		heroImage: z.string().optional(),
		heroAltText: z.string().optional(),
	}),
});

export const collections = { blog };
