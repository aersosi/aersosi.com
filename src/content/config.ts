import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            pubDate: z.date(),
            title: z.string(),
            description: z.string(),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()),
        }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            pubDate: z.date(),
            title: z.string(),
            description: z.string(),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
            tags: z.array(z.string()),

            repo: z.object({
                name: z.string(),
                href: z.string().refine((val) => val.includes("http"), {
                    message: "Repo href muss eine valide url sein",
                }),
                ariaLabel: z.string(),
            }).optional(),
            demo: z.object({
                name: z.string(),
                href: z.string().refine((val) => val.includes("http"), {
                    message: "Demo href muss eine valide url sein",
                }),
                ariaLabel: z.string(),
            }).optional(),

            noLinks: z.string().optional(),

            company: z.object({
                companyName: z.string(),
                companySize: z.number(),
                teamSize: z.number(),
                myRole: z.string(),
            }),


        }),
});

const pagesCollection = defineCollection({
    type: 'content',
    schema: ({image}) =>
        z.object({
            title: z.string(),
            description: z.string(),
            image: z.object({
                url: image(),
                alt: z.string(),
            }),
        }),
});

export const collections = {
    articles: articlesCollection,
    projects: projectsCollection,
    pages: pagesCollection
};
