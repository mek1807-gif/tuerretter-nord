/**
 * ZENTRALE PREIS-KONFIGURATION – TÜRRETTER-NORD
 * ----------------------------------------------
 * Diese Datei steuert BEIDES:
 *  1. die Preistabelle auf /preise
 *  2. die Berechnungslogik des interaktiven Preisrechners auf /preisrechner
 *
 * Alle Beträge sind BEISPIEL-/PLATZHALTERWERTE und müssen vor dem Livegang
 * durch die tatsächlichen Preise ersetzt werden.
 *
 * ÄNDERN:
 * - Zahlenwerte (price / surcharge) einfach anpassen.
 * - Neue Zeilen (z. B. neue Zuschläge oder Zusatzleistungen) durch
 *   Kopieren eines bestehenden Objekts ergänzen.
 * - Es muss dafür KEIN anderer Code angefasst werden – Preistabelle und
 *   Rechner lesen automatisch aus dieser Datei.
 */

export const pricingMeta = {
  currency: "€",
  /** Hinweistext, der unter allen Preisangaben erscheint. */
  disclaimer:
    "Alle genannten Beträge sind unverbindliche Richtpreise (Beispielwerte) inkl. der gesetzlichen Mehrwertsteuer. Der tatsächliche Endpreis hängt von der konkreten Situation vor Ort (z. B. Schlossart, Tür, Aufwand) ab und wird nach Möglichkeit vor Beginn der Arbeiten transparent mitgeteilt.",
  /** Hinweis speziell für den Preisrechner. */
  calculatorDisclaimer:
    "Dieser Rechner liefert eine unverbindliche Preiseinschätzung auf Basis Ihrer Angaben. Der endgültige Preis wird vor Ort final bestätigt und kann je nach tatsächlichem Aufwand abweichen.",
} as const;

/**
 * Grundleistungen für die Preistabelle (/preise).
 * "from: true" bedeutet, der Preis wird mit "ab" angezeigt.
 */
export const basePriceTable = [
  {
    id: "zugefallen",
    label: "Zugefallene Tür",
    price: 59,
    from: true,
    description: "Tür ist nur ins Schloss gefallen, aber nicht abgeschlossen.",
  },
  {
    id: "abgeschlossen",
    label: "Abgeschlossene Tür",
    price: 89,
    from: true,
    description: "Tür ist verriegelt bzw. abgeschlossen.",
  },
  {
    id: "schluessel_abgebrochen",
    label: "Schlüssel abgebrochen",
    price: 99,
    from: true,
    description: "Entfernung des abgebrochenen Schlüsselteils inkl. Türöffnung.",
  },
  {
    id: "schlosswechsel",
    label: "Schlosswechsel",
    price: 119,
    from: true,
    description: "Austausch eines Standard-Schließzylinders, Material einfacher Qualität inklusive.",
  },
] as const;

/** Zuschläge für die Preistabelle. */
export const surchargeTable = [
  {
    id: "anfahrt",
    label: "Anfahrt im Einsatzgebiet",
    price: 0,
    note: "Im Grundpreis enthalten (siehe Einsatzgebiete). Außerhalb ggf. Zuschlag – wird vorab genannt.",
  },
  {
    id: "abend",
    label: "Abendzuschlag (18–22 Uhr)",
    price: 20,
    note: "",
  },
  {
    id: "nacht",
    label: "Nachtzuschlag (22–8 Uhr)",
    price: 40,
    note: "",
  },
  {
    id: "wochenende",
    label: "Wochenendzuschlag (Sa)",
    price: 15,
    note: "",
  },
  {
    id: "feiertag",
    label: "Sonn- und Feiertagszuschlag",
    price: 30,
    note: "",
  },
] as const;

/**
 * KONFIGURATION DES INTERAKTIVEN PREISRECHNERS
 * Jede Gruppe entspricht einem Auswahlschritt. "value" wird als
 * Rechengrundlage addiert. id-Werte bitte nicht ändern (werden im
 * Frontend referenziert) – aber Label und value jederzeit anpassbar.
 */
export const calculatorConfig = {
  doorStatus: {
    label: "Ist die Tür zugefallen oder abgeschlossen?",
    options: [
      { id: "zugefallen", label: "Nur zugefallen (nicht verriegelt)", value: 59 },
      { id: "abgeschlossen", label: "Abgeschlossen / verriegelt", value: 89 },
    ],
  },
  service: {
    label: "Welche Leistung wird benötigt?",
    options: [
      { id: "tueroeffnung", label: "Nur Türöffnung", value: 0 },
      { id: "schluessel_abgebrochen", label: "Abgebrochenen Schlüssel entfernen", value: 25 },
      { id: "schlosswechsel", label: "Türöffnung + Schlosswechsel", value: 60 },
      { id: "schluessel_verloren", label: "Schlüssel verloren / gestohlen (mit Beratung zu Schlosswechsel)", value: 20 },
    ],
  },
  timeOfDay: {
    label: "Zu welcher Tageszeit wird Hilfe benötigt?",
    options: [
      { id: "tag", label: "Tagsüber (8–18 Uhr)", value: 0 },
      { id: "abend", label: "Abends (18–22 Uhr)", value: 20 },
      { id: "nacht", label: "Nachts (22–8 Uhr)", value: 40 },
    ],
  },
  dayType: {
    label: "Werktag, Wochenende oder Feiertag?",
    options: [
      { id: "werktag", label: "Werktag (Mo–Fr)", value: 0 },
      { id: "wochenende", label: "Wochenende (Samstag)", value: 15 },
      { id: "feiertag", label: "Sonn- oder Feiertag", value: 30 },
    ],
  },
  area: {
    label: "Einsatzgebiet / Entfernung",
    options: [
      { id: "zone1", label: "Bis ca. 10 km um Seevetal", value: 0 },
      { id: "zone2", label: "Ca. 10–25 km um Seevetal", value: 15 },
      { id: "zone3", label: "Außerhalb von 25 km – nur nach vorheriger Absprache", value: 30 },
    ],
  },
  extras: {
    label: "Zusatzleistungen (optional)",
    multiSelect: true,
    options: [
      { id: "sicherheitstuer", label: "Sicherheits- / verstärkte Tür", value: 25 },
      { id: "mehrfachverriegelung", label: "Mehrfachverriegelung", value: 20 },
      { id: "hochwertiges_schloss", label: "Hochwertiger Schließzylinder (Einbruchschutz)", value: 35 },
    ],
  },
} as const;

export type CalculatorGroupId = keyof typeof calculatorConfig;
