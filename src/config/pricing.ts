/**
 * ZENTRALE PREIS-KONFIGURATION – TÜRRETTER-NORD
 * ----------------------------------------------
 * Steuert die Preistabelle auf /preise.
 *
 * Alle Beträge sind verbindlich vorgegeben.
 * Für Zusatzleistungen werden KEINE erfundenen Preise eingetragen –
 * deren Kosten werden vor Ort transparent besprochen.
 */

export const pricingMeta = {
  currency: "€",
  /** Hinweistext, der unter allen Preisangaben erscheint. */
  disclaimer:
    "Der Startpreis für eine reguläre Türöffnung beträgt ab 99 € inkl. MwSt. Darin ist die Anfahrt bis 15 km enthalten. Ab dem 16. Kilometer werden 1 € inkl. MwSt. je zusätzlichem Kilometer berechnet. Während der Notdienstzeit (18:00–06:00 Uhr) wird ein Notdienstzuschlag von 20 € inkl. MwSt. erhoben. Zusätzliche Leistungen wie Schlosswechsel, ein neuer Schließzylinder oder weiteres Material werden separat berechnet und vor Beginn der Arbeiten transparent mit Ihnen besprochen.",
} as const;

/**
 * Hauptpreis – prominent dargestellt auf Startseite und Preisseite.
 */
export const mainPrice = {
  label: "Türöffnung",
  price: "ab 99",
  priceSuffix: "inkl. MwSt.",
  description:
    "Startpreis für eine reguläre Türöffnung im definierten Leistungsumfang. Anfahrt bis 15 km inklusive. Zusätzliche Arbeiten oder benötigte Materialien, z. B. ein neues Schloss oder ein neuer Schließzylinder, werden separat berechnet und vorher transparent kommuniziert.",
} as const;

/**
 * Notdienst-Zuschlag.
 */
export const emergencyService = {
  label: "Notdienstzuschlag",
  timeRange: "18:00–06:00 Uhr",
  price: "+20",
  priceSuffix: "inkl. MwSt.",
  description:
    "Bei Einsätzen innerhalb der Notdienstzeit (18:00–06:00 Uhr) wird zusätzlich zum Grundpreis ein Notdienstzuschlag berechnet.",
} as const;

/**
 * Anfahrt-Konditionen.
 */
export const travelInfo = {
  includedKm: 15,
  perExtraKm: "1 € inkl. MwSt.",
  description:
    "Die Anfahrt bis 15 km ist im Preis enthalten. Ab dem 16. Kilometer werden 1 € inkl. MwSt. je zusätzlichem Kilometer berechnet.",
} as const;

/**
 * Zusatzleistungen – ohne erfundene Preise.
 * Kosten werden vor Durchführung transparent mit dem Kunden besprochen.
 */
export const addonServices = [
  {
    id: "schlosswechsel",
    label: "Schlosswechsel",
    description: "Preis abhängig vom benötigten Schloss. Kosten werden vor Arbeitsbeginn transparent besprochen.",
    icon: "lock" as const,
  },
  {
    id: "schliesszylinder",
    label: "Neuer Schließzylinder",
    description: "Preis nach Modell und Aufwand. Wir beraten Sie vor Ort zu passenden Optionen und den jeweiligen Kosten.",
    icon: "lock" as const,
  },
  {
    id: "schluesselarbeiten",
    label: "Schlüssel- & Schlossarbeiten",
    description: "z. B. Entfernung eines abgebrochenen Schlüssels. Kosten nach tatsächlichem Aufwand, vorab kommuniziert.",
    icon: "key" as const,
  },
  {
    id: "material",
    label: "Zusätzliche Materialien",
    description: "Nach tatsächlichem Materialbedarf. Materialkosten werden vor Anschaffung mit Ihnen abgestimmt.",
    icon: "receipt" as const,
  },
  {
    id: "sicherheit",
    label: "Sicherheitslösungen",
    description: "Beratung und ggf. Montage von einbruchhemmenden Komponenten. Kosten nach vereinbarter Leistung.",
    icon: "shield" as const,
  },
] as const;
