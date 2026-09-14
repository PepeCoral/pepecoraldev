// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    site: "https://pepecoral.dev",
    vite: {
        plugins: [tailwindcss()],
    },
    i18n: {
        locales: ["en", "es"],
        defaultLocale: "en",
        routing: {
            prefixDefaultLocale: false
        }
    }
});