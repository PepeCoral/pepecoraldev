import type { Locale, Translation } from "./types";
import es from "./es";
import en from "./en";

const translations: Record<Locale, Translation> = {
    "es": es,
    "en": en
};

export default function getTranslation(currentLocale: string | undefined) {

    const locale: Locale = (currentLocale && currentLocale in translations)
        ? (currentLocale as Locale)
        : "en";

    const t = translations[locale];

    return t;
}
