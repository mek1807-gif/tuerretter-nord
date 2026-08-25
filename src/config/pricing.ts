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
    "Der Preis für eine reguläre Türöffnung beträgt 99 € (inkl. der gesetzlichen Mehrwertsteuer). Zusätzliche Leistungen wie Schlosswechsel, ein neuer Schließzylinder oder weiteres Material werden separat berechnet und vor Beginn der Arbeiten transparent mit Ihnen besprochen.",
} as const;

/**
 * Hauptpreis – prominent dargestellt auf Startseite und Preisseite.
 */
export const mainPrice = {
  label: "Türöffnung",
  price: 99,
  description:
    "Für eine reguläre Türöffnung im definierten Leistungsumfang. Zusätzliche Arbeiten oder benötigte Materialien, z. B. ein neues Schloss oder ein neuer Schließzylinder, werden separat berechnet und vorher transparent kommuniziert.",
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
