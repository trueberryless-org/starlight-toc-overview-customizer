import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightTocOverviewCustomizer from "starlight-toc-overview-customizer";
import starlightPluginShowLatestVersion from "starlight-plugin-show-latest-version";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";

import node from "@astrojs/node";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl: "https://github.com/trueberryless-org/starlight-toc-overview-customizer/edit/main/docs/",
      },
      plugins: [
        starlightTocOverviewCustomizer({
          overviewTitle: "Back to top",
        }),
        starlightPluginShowLatestVersion({
          source: {
            slug: "starlight-toc-overview-customizer",
          },
          showInSiteTitle: "deferred",
        }),
        starlightPluginsDocsComponents({
          pluginName: "starlight-toc-overview-customizer",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [{ slug: "getting-started" }, { slug: "configuration" }, { slug: "frontmatter" }, { slug: "demo" }],
        },
      ],
      social: {
        github: "https://github.com/trueberryless-org/starlight-toc-overview-customizer",
      },
      title: "🚁",
    }),
  ],
  adapter: node({
    mode: "standalone",
  }),
});
