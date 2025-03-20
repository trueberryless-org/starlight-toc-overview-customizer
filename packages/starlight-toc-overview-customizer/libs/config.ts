import { AstroError } from "astro/errors";
import { z } from "astro/zod";

const configSchema = z
  .object({
    overviewTitle: z.union([z.string(), z.record(z.string())]).optional(),
  })
  .default({});

export function validateConfig(userConfig: unknown): starlightTocOverviewCustomizerConfig {
  const config = configSchema.safeParse(userConfig);

  if (!config.success) {
    const errors = config.error.flatten();

    throw new AstroError(
      `Invalid starlight-toc-overview-customizer configuration:
      
      ${errors.formErrors.map((formError) => ` - ${formError}`).join("\n")}
      ${Object.entries(errors.fieldErrors)
        .map(([fieldName, fieldErrors]) => ` - ${fieldName}: ${fieldErrors.join(" - ")}`)
        .join("\n")}
        `,
      `See the error report above for more informations.\n\nIf you believe this is a bug, please file an issue at https://github.com/trueberryless-org/starlight-toc-overview-customizer/issues/new`
    );
  }

  return config.data;
}

export type starlightTocOverviewCustomizerUserConfig = z.input<typeof configSchema>;
export type starlightTocOverviewCustomizerConfig = z.output<typeof configSchema>;
