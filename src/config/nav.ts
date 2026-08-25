/**
 * HAUPTNAVIGATION – TÜRRETTER-NORD
 * -----------------------------------
 * Steuert die Links in Header und Footer. Reihenfolge = Anzeigereihenfolge.
 */

export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "Leistungen", href: "/leistungen" },
  { label: "Preise", href: "/preise" },
  { label: "Einsatzgebiete", href: "/einsatzgebiete" },
  { label: "FAQ", href: "/faq" },
  { label: "Kontakt", href: "/kontakt" },
];

export const footerServiceLinks: NavItem[] = [
  { label: "Türöffnung", href: "/leistungen/tueroeffnung" },
  { label: "Schlüssel verloren", href: "/leistungen/schluessel-verloren" },
  { label: "Schlüssel abgebrochen", href: "/leistungen/schluessel-abgebrochen" },
  { label: "Schlosswechsel", href: "/leistungen/schlosswechsel" },
  { label: "Einbruchschutz", href: "/leistungen/einbruchschutz" },
  { label: "Notdienst", href: "/leistungen/notdienst" },
];

export const footerLegalLinks: NavItem[] = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Cookie-Einstellungen", href: "/cookie-einstellungen" },
];
