import starlight from "@astrojs/starlight";
import starlightPluginsDocsComponents from "@trueberryless-org/starlight-plugins-docs-components";
import { defineConfig } from "astro/config";
import starlightLinksValidator from "starlight-links-validator";
import starlightTocOverviewCustomizer from "starlight-toc-overview-customizer";

export default defineConfig({
  integrations: [
    starlight({
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-toc-overview-customizer/edit/main/docs/",
      },
      plugins: [
        starlightLinksValidator(),
        starlightTocOverviewCustomizer({
          overviewTitle: "Back to top",
        }),
        starlightPluginsDocsComponents({
          pluginName: "starlight-toc-overview-customizer",
        }),
      ],
      sidebar: [
        {
          label: "Start Here",
          items: [
            { slug: "getting-started" },
            { slug: "configuration" },
            { slug: "frontmatter" },
          ],
        },
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/trueberryless-org/starlight-toc-overview-customizer",
        },
      ],
      title: "🚁",
    }),
  ],
});
