import { defineRouteMiddleware } from "@astrojs/starlight/route-data";
import config from "virtual:starlight-toc-overview-customizer-config";
import { getTranslation } from "./libs/i18n";

export const onRequest = defineRouteMiddleware((context) => {
  // @ts-expect-error
  const { starlightRoute } = context.locals;
  const { locale } = starlightRoute;

  const globalOverview = getTranslation(locale, config.overviewTitle, "overview");
  const overview = starlightRoute.entry.data.overviewTitle;

  const overviewItem = starlightRoute.toc?.items[0];
  if (overviewItem && (globalOverview || overview)) {
    overviewItem.text = overview ?? globalOverview;
  }
});
