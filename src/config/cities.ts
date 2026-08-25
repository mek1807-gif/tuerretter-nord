/**
 * EINSATZGEBIETE / STÄDTE – TÜRRETTER-NORD
 * ------------------------------------------
 * Jede Stadt in diesem Array erzeugt automatisch eine eigene, lokal
 * optimierte Landingpage unter /schluesseldienst-[slug].
 *
 * WICHTIG für lokales SEO: Bitte für jede Stadt einen WIRKLICH
 * individuellen Text schreiben (mind. "intro" und "localNotes"), keine
 * Kopien aus anderen Städten verwenden.
 *
 * Neue Stadt hinzufügen: Objekt unten kopieren, slug/name/Texte anpassen.
 * Stadt entfernen: Objekt löschen – Seite verschwindet automatisch,
 * interne Links werden ebenfalls automatisch aktualisiert.
 */

export interface City {
  /** URL-Slug -> Seite liegt unter /schluesseldienst-<slug> */
  slug: string;
  name: string;
  /** Bundesland / Region, für Schema.org und Texte. */
  region: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Individueller Einleitungstext (kein Copy-Paste zwischen Städten!). */
  intro: string;
  /** Beispielhafte Stadtteile/Ortsteile zur lokalen Einordnung. */
  districts: string[];
  /** Ein bis zwei individuelle, hilfreiche Absätze mit Lokalbezug. */
  localNotes: string[];
  /** Grobe Ankunfts-/Reaktionszeit-Aussage – realistisch halten, nicht überversprechen. */
  responseTimeNote: string;
}

export const cities: City[] = [
  {
    slug: "seevetal",
    name: "Seevetal",
    region: "Niedersachsen",
    metaTitle: "Schlüsseldienst Seevetal – Türöffnung 99 € 24/7 | Türretter-Nord",
    metaDescription:
      "Schlüsseldienst in Seevetal: Türretter-Nord öffnet Ihre Tür für 99 € – rund um die Uhr erreichbar, transparent und fachgerecht. Jetzt anrufen.",
    h1: "Schlüsseldienst Seevetal – Türöffnung für 99 €",
    intro:
      "Türretter-Nord ist in Seevetal und den umliegenden Ortsteilen für Türöffnungen, Schlosswechsel und Hilfe bei verlorenen oder abgebrochenen Schlüsseln im Einsatz. Eine reguläre Türöffnung kostet 99 €. Durch den lokalen Schwerpunkt können wir Anfragen aus dem Gemeindegebiet und dem nahen Umland gezielt bedienen.",
    districts: ["Hittfeld", "Meckelfeld", "Maschen", "Fleestedt", "Ramelsloh", "Horst"],
    localNotes: [
      "Seevetal besteht aus vielen Ortsteilen mit unterschiedlichen Wohnlagen – von Mehrfamilienhäusern bis zu Einfamilienhäusern mit moderner Mehrfachverriegelung. Wir stimmen die Öffnungsmethode auf die jeweilige Tür und das Schloss ab.",
      "Bei Ihrem Anruf nennen wir Ihnen vorab eine realistische Einschätzung zu Anfahrt und Kosten. Die tatsächliche Ankunftszeit hängt von Standort, Verkehrslage und aktueller Auslastung ab.",
    ],
    responseTimeNote:
      "Für Seevetal nennen wir Ihnen am Telefon eine realistische voraussichtliche Ankunftszeit – ohne pauschale Minutenversprechen.",
  },
  {
    slug: "hamburg-harburg",
    name: "Hamburg-Harburg",
    region: "Hamburg",
    metaTitle: "Schlüsseldienst Hamburg-Harburg – Türöffnung 99 € | Türretter-Nord",
    metaDescription:
      "Schlüsseldienst für Hamburg-Harburg: Türöffnung für 99 €, Schlosswechsel und Notdienst durch Türretter-Nord – rund um die Uhr telefonisch erreichbar.",
    h1: "Schlüsseldienst Hamburg-Harburg – Türöffnung für 99 €",
    intro:
      "Vom Seevetaler Einsatzschwerpunkt aus bedienen wir auch Teile des Hamburger Südens, insbesondere den Bezirk Harburg, sofern der Einsatzort innerhalb unseres ungefähren 25-km-Radius liegt. Wir helfen bei zugefallenen und abgeschlossenen Türen sowie bei Problemen mit Schlüssel und Schloss – eine Türöffnung kostet 99 €.",
    districts: ["Harburg", "Heimfeld", "Eißendorf", "Marmstorf", "Neugraben-Fischbek"],
    localNotes: [
      "In Harburg treffen ältere Mehrfamilienhäuser und moderne Wohnanlagen aufeinander. Entsprechend unterschiedlich sind die verbauten Schließsysteme – von klassischen Profilzylindern bis zu Mehrfachverriegelungen.",
      "Ob Ihre Adresse im Einsatzradius liegt, klären wir direkt am Telefon, bevor ein Auftrag zustande kommt.",
    ],
    responseTimeNote:
      "Für Hamburg-Harburg hängt die Anfahrt besonders von Verkehrslage und genauer Adresse ab; eine konkrete Einschätzung erhalten Sie bei der Anfrage.",
  },
  {
    slug: "winsen-luhe",
    name: "Winsen (Luhe)",
    region: "Niedersachsen",
    metaTitle: "Schlüsseldienst Winsen (Luhe) – Türöffnung 99 € | Türretter-Nord",
    metaDescription:
      "Türretter-Nord für Winsen (Luhe): Hilfe bei Türöffnung für 99 €, Schlüsselverlust und Schlosswechsel – transparent und 24/7 erreichbar.",
    h1: "Schlüsseldienst Winsen (Luhe) – Türöffnung für 99 €",
    intro:
      "Winsen (Luhe) liegt im erweiterten lokalen Einsatzgebiet von Türretter-Nord. Bei Türproblemen prüfen wir bei Ihrer Anfrage, ob die konkrete Adresse innerhalb unseres rund 25 km großen Einsatzradius um Seevetal liegt. Eine reguläre Türöffnung kostet 99 €.",
    districts: ["Innenstadt", "Roydorf", "Luhdorf", "Pattensen", "Stöckte"],
    localNotes: [
      "Bei Einfamilienhäusern in Winsen sind häufig Haustüren mit Mehrfachverriegelung verbaut. Diese erfordern bei einer Störung eine andere Vorgehensweise als eine lediglich zugefallene Wohnungstür.",
      "Vor Beginn der Arbeiten erläutern wir – soweit die Situation vorab beurteilbar ist – die zu erwartenden Kosten und die geplante Vorgehensweise.",
    ],
    responseTimeNote:
      "Für Winsen (Luhe) bestätigen wir Verfügbarkeit und voraussichtliche Anfahrtszeit individuell bei Ihrem Anruf.",
  },
  {
    slug: "buchholz-nordheide",
    name: "Buchholz in der Nordheide",
    region: "Niedersachsen",
    metaTitle: "Schlüsseldienst Buchholz in der Nordheide – Türöffnung 99 € | Türretter-Nord",
    metaDescription:
      "Schlüsseldienst für Buchholz in der Nordheide: Türretter-Nord hilft bei Aussperrung, Türöffnung für 99 €, Schlosswechsel und Schlüsselproblemen im lokalen Einsatzgebiet.",
    h1: "Schlüsseldienst Buchholz in der Nordheide – Türöffnung für 99 €",
    intro:
      "Auch Buchholz in der Nordheide gehört je nach genauer Adresse zum Einsatzgebiet rund um Seevetal. Türretter-Nord unterstützt bei zugefallenen oder abgeschlossenen Türen sowie beim Austausch defekter oder unsicherer Schließzylinder. Eine Türöffnung kostet 99 €.",
    districts: ["Buchholz", "Steinbeck", "Sprötze", "Holm-Seppensen", "Trelde"],
    localNotes: [
      "Die Wohngebiete in Buchholz sind geprägt von Einfamilienhäusern, Reihenhäusern und Mehrfamilienhäusern. Damit unterscheiden sich auch Türtypen und Verriegelungen deutlich – wir wählen die Öffnungsmethode entsprechend der Situation.",
      "Da nicht jede Adresse im Stadtgebiet zwingend innerhalb des 25-km-Radius liegt, bestätigen wir die konkrete Einsatzmöglichkeit vorab telefonisch.",
    ],
    responseTimeNote:
      "Für Buchholz nennen wir Ihnen nach Angabe der Adresse eine realistische Einschätzung zu Verfügbarkeit und Anfahrt.",
  },
  {
    slug: "rosengarten",
    name: "Rosengarten",
    region: "Niedersachsen",
    metaTitle: "Schlüsseldienst Rosengarten – Türöffnung 99 € | Türretter-Nord",
    metaDescription:
      "Schlüsseldienst in Rosengarten bei Seevetal: Türretter-Nord hilft bei Türöffnung für 99 € und Schlossproblemen – transparent und rund um die Uhr erreichbar.",
    h1: "Schlüsseldienst Rosengarten – Türöffnung für 99 €",
    intro:
      "Rosengarten liegt direkt westlich von Seevetal und damit in unserem lokalen Schwerpunktgebiet. Wir helfen bei Aussperrungen, defekten Schlössern, abgebrochenen Schlüsseln und auf Wunsch beim Austausch von Schließzylindern. Eine Türöffnung kostet 99 €.",
    districts: ["Nenndorf", "Tötensen", "Ehestorf", "Vahrendorf", "Klecken"],
    localNotes: [
      "In den Ortsteilen von Rosengarten sind viele Einfamilien- und Reihenhäuser vorhanden. Gerade Haustüren mit Mehrfachverriegelungen sollten fachgerecht beurteilt werden, bevor eine Öffnung versucht wird.",
      "Unsere Preis- und Anfahrtsinformationen erhalten Sie transparent bei der Anfrage; zusätzliche Arbeiten werden nicht ohne Rücksprache durchgeführt.",
    ],
    responseTimeNote:
      "Für Rosengarten können wir die voraussichtliche Anfahrtszeit nach Angabe des Ortsteils und der aktuellen Verkehrslage einschätzen.",
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
