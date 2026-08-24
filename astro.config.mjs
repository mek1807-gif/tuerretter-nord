import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Zentrale Basis-URL der Website. Wird u. a. für die XML-Sitemap,
// Canonical-URLs und Open-Graph-Daten verwendet.
// -> siehe auch src/config/site.ts (dort liegt der gleiche Wert für
//    Komponenten, die zur Laufzeit gerendert werden).
const SITE_URL = "https://tuerretter-nord.de";

export default defineConfig({
  site: SITE_URL,
  // "ignore": Die Website funktioniert sowohl mit als auch ohne
  // abschließenden Slash in der URL. Das ist die kompatibelste Einstellung
  // für einfaches, klassisches Webhosting (Apache-Standardkonfiguration
  // mit DirectoryIndex), ohne dass zusätzliche Server-Konfiguration nötig ist.
  trailingSlash: "ignore",
  integrations: [
    sitemap({
      // Preisrechner-Zwischenseiten o. Ä. gibt es hier nicht, daher
      // keine Filterung nötig. Sollte künftig eine interne Suchseite,
      // ein Admin-Bereich o. Ä. hinzukommen, hier per filter() ausschließen.
    }),
  ],
  compressHTML: true,
  build: {
    format: "directory",
  },
});
