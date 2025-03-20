import { z } from "astro/zod";

export const tocOverviewCustomizer = z.object({
  overviewTitle: z.string().optional(),
});

export type TocOverviewCustomizer = z.input<typeof tocOverviewCustomizer>;
