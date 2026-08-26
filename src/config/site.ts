/**
 * ZENTRALE UNTERNEHMENSKONFIGURATION – TÜRRETTER-NORD
 * ----------------------------------------------------
 * Diese Datei ist die EINZIGE Stelle, an der Kontaktdaten, Adresse,
 * Öffnungszeiten und Unternehmensangaben gepflegt werden.
 * Alle Seiten und Komponenten der Website (Header, Footer, Sticky-Call-
 * Button, Kontaktseite, Impressum, Schema.org-Daten, Open-Graph-Tags …)
 * lesen ihre Werte ausschließlich aus dieser Datei.
 */

export const siteConfig = {
  /** Sichtbarer Markenname – wird auf der GESAMTEN Website so angezeigt. */
  brandName: "Türretter-Nord",

  /** Kurzform, z. B. für sehr enge Platzierungen (mobile Kopfzeile). */
  brandNameShort: "Türretter-Nord",

  /** Claim / Slogan unter dem Markennamen. */
  claim: "Schnelle & faire Türöffnungen",

  /** Untertitel / rechtlicher Zusatz unter der Marke. */
  brandSubtitle: "Eine Marke der Thies UG (haftungsbeschränkt)",

  /**
   * Vollständiger rechtlicher Unternehmensname für Impressum, Rechnungen
   * und strukturierte Daten.
   */
  legalName: "Thies UG (haftungsbeschränkt)",

  /** Geschäftsführer. */
  managingDirector: "Tristan Thies",

  /** Weitere vertretungsberechtigter Geschäftsführer. */
  authorizedRepresentative: "Moritz Elias Kraatz",

  /** Umsatzsteuer-Identifikationsnummer. */
  vatId: "DE310189530",

  /** Domain ohne Protokoll – nur für Anzeige-Zwecke. */
  domain: "tuerretter-nord.de",

  /** Vollständige, kanonische Basis-URL (mit Protokoll, ohne Slash am Ende). */
  url: "https://tuerretter-nord.de",

  /**
   * TELEFONNUMMER – zentral an dieser einen Stelle pflegen.
   * - display: wie die Nummer auf der Website angezeigt wird
   * - href: exakter tel:-Link-Wert (immer mit Ländervorwahl, ohne
   *   Leerzeichen), damit der Anruf-Button auf Smartphones zuverlässig
   *   funktioniert
   */
  phone: {
    display: "04105 4062924",
    href: "tel:+4941054062924",
  },

  /** WhatsApp-Kontakt, optional. Leer lassen ("") um den Button auszublenden. */
  whatsapp: {
    display: "",
    href: "",
  },

  /**
   * E-Mail-Adresse für Kontaktlinks und Impressum.
   * - display: sichtbare Schreibweise mit Umlaut
   * - href: international kompatible Schreibweise (Punycode) für mailto:-Links
   */
  email: "info@türretter-nord.de",
  emailHref: "mailto:info@xn--trretter-nord-wob.de",

  /** Geschäftsadresse. Wird für Impressum, Kontaktseite und Schema.org genutzt. */
  address: {
    street: "Winkelweg 27",
    zip: "21218",
    city: "Seevetal-Emmelndorf",
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
    google: "",
  },

  /** Angebotene Zahlungsarten – bitte nur tatsächlich angebotene Optionen eintragen. */
  paymentMethods: [
    "Barzahlung",
  ],
} as const;

export type SiteConfig = typeof siteConfig;
