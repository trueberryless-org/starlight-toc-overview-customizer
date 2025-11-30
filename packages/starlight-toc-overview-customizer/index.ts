import type { StarlightPlugin } from "@astrojs/starlight/types";

import {
  type starlightTocOverviewCustomizerConfig,
  type starlightTocOverviewCustomizerUserConfig,
  validateConfig,
} from "./libs/config";
import { vitePluginstarlightTocOverviewCustomizerConfig } from "./libs/vite";

export type {
  starlightTocOverviewCustomizerConfig,
  starlightTocOverviewCustomizerUserConfig,
};

export default function starlightTocOverviewCustomizer(
  userConfig?: starlightTocOverviewCustomizerUserConfig
): StarlightPlugin {
  const config = validateConfig(userConfig);
  return {
    name: "starlight-toc-overview-customizer",
    hooks: {
      "config:setup"({ logger, addIntegration, addRouteMiddleware }) {
        logger.warn(
          "⚠️ This package is depricated. Please migrate your project following this blog: https://blog.trueberryless.org/blog/starlight-customize-toc-overview-title/. 🚨"
        );

        addRouteMiddleware({
          entrypoint: "starlight-toc-overview-customizer/middleware",
        });

        addIntegration({
          name: "starlight-toc-overview-customizer-integration",
          hooks: {
            "astro:config:setup": ({ updateConfig }) => {
              updateConfig({
                vite: {
                  plugins: [
                    vitePluginstarlightTocOverviewCustomizerConfig(config),
                  ],
                },
              });
            },
          },
        });
      },
    },
  };
}
