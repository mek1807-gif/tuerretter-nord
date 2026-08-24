/**
 * KUNDENBEWERTUNGEN – TÜRRETTER-NORD
 * ------------------------------------
 * WICHTIG: Hier dürfen AUSSCHLIESSLICH echte, von Kunden stammende
 * Bewertungen eingetragen werden. KEINE erfundenen Bewertungen,
 * Sterne-Durchschnitte oder Siegel verwenden – das wäre irreführend
 * und ein Wettbewerbsrisiko.
 *
 * Solange dieses Array leer ist, zeigt die Website automatisch einen
 * Hinweis- bzw. Platzhalterbereich statt erfundener Bewertungen an
 * (siehe TestimonialsSection.astro).
 *
 * EMPFEHLUNG: Bewertungen am besten direkt über ein Google-
 * Unternehmensprofil sammeln und von dort aus (mit Zustimmung des
 * Kunden) hier ergänzen, inkl. Verlinkung auf das echte Profil.
 */

export interface Testimonial {
  /** Name oder Kürzel, z. B. "Familie K." – volle Klarnamen nur mit Einverständnis. */
  author: string;
  /** Stadt/Ort, optional. */
  location?: string;
  /** Bewertungstext, wortgetreu bzw. sinngemäß mit Einverständnis des Kunden. */
  text: string;
  /** Sternebewertung 1–5, nur eintragen, wenn tatsächlich von der Plattform übernommen. */
  rating?: 1 | 2 | 3 | 4 | 5;
  /** Quelle, z. B. "Google-Rezension", für Nachvollziehbarkeit. */
  source?: string;
  /** Link zur Original-Bewertung, falls öffentlich einsehbar. */
  url?: string;
}

export const testimonials: Testimonial[] = [
  // Aktuell noch keine echten Bewertungen hinterlegt.
  // Beispiel für den späteren Eintrag einer echten Bewertung:
  // {
  //   author: "Familie K.",
  //   location: "Hamburg-Eimsbüttel",
  //   text: "Schnell da gewesen, freundlich und die Tür ging ohne Schaden auf. Preis wurde vorher genannt.",
  //   rating: 5,
  //   source: "Google-Rezension",
  //   url: "https://g.page/r/....",
  // },
];
