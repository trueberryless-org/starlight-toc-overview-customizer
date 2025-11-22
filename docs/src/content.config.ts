import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection, z } from "astro:content";
import { tocOverviewCustomizer } from "starlight-toc-overview-customizer/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: tocOverviewCustomizer.merge(
        z.object({
          banner: z.object({ content: z.string() }).default({
            content:
              '⚠️ This package is depricated. Please migrate your project following <a href="https://blog.trueberryless.org/blog/starlight-customize-toc-overview-title/">this blog</a>. 🚨',
          }),
        })
      ),
    }),
  }),
};
