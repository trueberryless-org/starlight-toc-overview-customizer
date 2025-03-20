import type { APIContext } from "astro";
import { AstroError } from "astro/errors";
import starlightConfig from "virtual:starlight/user-config";

const defaultLang =
  starlightConfig.defaultLocale.lang ??
  starlightConfig.defaultLocale.locale ??
  "en";

export function getTranslation(
  currentLocale: APIContext["currentLocale"],
  translations: string | Record<string, string> | undefined,
  description: string
) {
  if (!translations) {
    return undefined;
  }

  if (typeof translations === "string") {
    return translations;
  }

  const defaultTranslation = translations[defaultLang];

  if (!defaultTranslation) {
    throw new AstroError(
      `The ${description} must have a key for the default language "${defaultLang}".`,
      "Update the Starlight config to include a label for the default language."
    );
  }

  let translation = defaultTranslation;

  if (currentLocale) {
    translation = translations[currentLocale] ?? defaultTranslation;
  }

  return translation;
}
