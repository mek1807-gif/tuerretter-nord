/**
 * ZENTRALE UNTERNEHMENSKONFIGURATION – TÜRRETTER-NORD
 * ----------------------------------------------------
 * Diese Datei ist die EINZIGE Stelle, an der Kontaktdaten, Adresse,
 * Öffnungszeiten und Unternehmensangaben gepflegt werden.
 * Alle Seiten und Komponenten der Website (Header, Footer, Sticky-Call-
 * Button, Kontaktseite, Impressum, Schema.org-Daten, Open-Graph-Tags …)
 * lesen ihre Werte ausschließlich aus dieser Datei.
 *
 * ÄNDERN:
 * 1. Werte unten anpassen (Platzhalter in eckigen Klammern ersetzen).
 * 2. Datei speichern.
 * 3. Website neu bauen/deployen (siehe README.md).
 *
 * Es muss dafür KEIN anderer Code angefasst werden.
 */

export const siteConfig = {
  /** Sichtbarer Markenname – wird auf der GESAMTEN Website so angezeigt. */
  brandName: "Türretter-Nord",

  /** Kurzform, z. B. für sehr enge Platzierungen (mobile Kopfzeile). */
  brandNameShort: "Türretter-Nord",

  /** Claim / Slogan unter dem Markennamen. */
  claim: "Schnelle & faire Türöffnungen",

  /**
   * Vollständiger rechtlicher Unternehmensname für Impressum, Rechnungen
   * und strukturierte Daten. WICHTIG: Von der Marke ("Türretter-Nord")
   * kann der rechtliche Name abweichen (z. B. Einzelunternehmen mit
   * Inhabername oder GmbH-Zusatz). Bitte unbedingt mit den echten
   * Firmendaten ersetzen, bevor die Seite live geht.
   */
  legalName: "[VOLLSTÄNDIGER RECHTLICHER FIRMENNAME, z. B. „Türretter-Nord Inh. Max Mustermann“ oder „Türretter-Nord GmbH“]",

  /** Domain ohne Protokoll – nur für Anzeige-Zwecke. */
  domain: "tuerretter-nord.de",

  /** Vollständige, kanonische Basis-URL (mit Protokoll, ohne Slash am Ende). */
  url: "https://tuerretter-nord.de",

  /**
   * TELEFONNUMMER – zentral an dieser einen Stelle pflegen.
   * - display: wie die Nummer auf der Website angezeigt wird
   * - href: exakter tel:-Link-Wert (immer mit Ländervorwahl, ohne
   *   Leerzeichen), damit der Anruf-Button auf Smartphones zuverlässig
   *   funktioniert, z. B. "tel:+49401234567"
   */
  phone: {
    display: "123456",
    href: "tel:123456",
  },

  /** WhatsApp-Kontakt, optional. Leer lassen ("") um den Button auszublenden. */
  whatsapp: {
    display: "",
    href: "",
  },

  /** E-Mail-Adresse für Kontaktlinks und Impressum. */
  email: "test@gmail.com",

  /** Geschäftsadresse. Wird für Impressum, Kontaktseite und Schema.org genutzt. */
  address: {
    street: "Teststraße 69",
    zip: "[PLZ]",
    city: "[ORT]",
    region: "Niedersachsen",
    country: "DE",
    countryName: "Deutschland",
  },

  /** Kurzbeschreibung des Einsatzgebiets für Hero-Bereich, Footer etc. */
  serviceAreaShort: "Seevetal und Umgebung im Umkreis von ca. 25 km",

  /** Längere Beschreibung für Textabschnitte. */
  serviceAreaLong:
    "Wir sind in Seevetal und im näheren Umland in einem Umkreis von etwa 25 km im Einsatz. Ob Ihr Standort innerhalb des Einsatzgebiets liegt, bestätigen wir Ihnen bei der telefonischen Anfrage.",

  /**
   * Öffnungszeiten / Erreichbarkeit.
   * display: Text für Menschen (Kontaktseite, Footer)
   * schema: maschinenlesbare Zeiten für strukturierte Daten
   *         (Format: Mo–So Reihenfolge, jeweils opens/closes als "HH:MM")
   *         Beispiel unten ist auf durchgehende Erreichbarkeit voreingestellt –
   *         bitte an die tatsächlichen Zeiten anpassen.
   */
  openingHours: {
    display: "24/7 – rund um die Uhr telefonisch erreichbar",
    schema: [
      { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], opens: "00:00", closes: "23:59" },
    ],
  },

  /** Gründungsjahr / Erfahrung – optional für Vertrauenstexte. Leer lassen wenn unbekannt. */
  foundedYear: "",

  /** Social-Media-Profile, optional. Leere Werte werden nicht angezeigt. */
  social: {
    facebook: "",
    instagram: "",
    google: "", // Link zum Google-Unternehmensprofil, sobald angelegt
  },

  /** Angebotene Zahlungsarten – bitte nur tatsächlich angebotene Optionen eintragen. */
  paymentMethods: [
    "Barzahlung",
    "[EC-/Kartenzahlung – nur eintragen, falls tatsächlich angeboten]",
    "[Rechnung – nur eintragen, falls tatsächlich angeboten]",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
