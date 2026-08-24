/**
 * LEISTUNGEN – TÜRRETTER-NORD
 * ----------------------------
 * Zentrale Liste aller Leistungen. Jede Leistung erzeugt automatisch
 * eine eigene Unterseite unter /leistungen/[slug].
 *
 * Neue Leistung hinzufügen: neues Objekt unten ergänzen.
 * Leistung entfernen: Objekt löschen (Seite verschwindet automatisch).
 */

export interface ServiceContentBlock {
  heading: string;
  paragraphs: string[];
}

export interface Service {
  slug: string;
  /** Kurztitel, z. B. für Karten und Navigation. */
  title: string;
  /** Titel für <title>-Tag, darf abweichen (SEO-optimiert). */
  metaTitle: string;
  metaDescription: string;
  /** Kurzer Teaser-Text für Übersichtskarten. */
  teaser: string;
  /** H1 der Detailseite. */
  h1: string;
  /** Einleitungstext direkt unter der H1. */
  intro: string;
  /** Stichpunkte, z. B. "Das zeichnet uns aus". */
  highlights: string[];
  /** Weitere inhaltliche Abschnitte (H2 + Absätze). */
  sections: ServiceContentBlock[];
  /** Icon-Kennung für <Icon>-Komponente. */
  icon: "door" | "key-lost" | "key-broken" | "lock" | "shield" | "clock";
}

export const services: Service[] = [
  {
    slug: "tueroeffnung",
    title: "Türöffnung",
    metaTitle: "Türöffnung vom Fachbetrieb | Türretter-Nord",
    metaDescription:
      "Tür zugefallen oder abgeschlossen? Türretter-Nord öffnet Ihre Tür fachgerecht und möglichst beschädigungsarm. Transparente Preise, schnelle Einsatzbereitschaft.",
    teaser: "Zugefallene oder abgeschlossene Tür – wir öffnen fachgerecht und möglichst ohne Beschädigung.",
    h1: "Türöffnung durch Türretter-Nord",
    intro:
      "Ob die Tür nur ins Schloss gefallen oder tatsächlich abgeschlossen ist – wir öffnen Wohnungs-, Haus- und Kellertüren fachgerecht und mit der jeweils schonendsten Methode für Ihr Schloss.",
    highlights: [
      "Erfahrung mit gängigen Schließsystemen",
      "Möglichst beschädigungsarme Öffnungstechnik",
      "Transparente Kosteninformation vor Beginn der Arbeiten",
      "Einsatz im gesamten Einsatzgebiet",
    ],
    sections: [
      {
        heading: "Zugefallene Tür vs. abgeschlossene Tür",
        paragraphs: [
          "Bei einer nur zugefallenen Tür ist das Schloss in der Regel nicht verriegelt – hier reichen häufig einfachere, sehr schonende Techniken. Ist die Tür hingegen abgeschlossen bzw. mehrfach verriegelt, ist der Aufwand meist höher, da der Schließzylinder aktiv überwunden werden muss.",
          "Welche Methode im Einzelfall zum Einsatz kommt, hängt vom Schlosstyp, dem Türmaterial und dem Alter des Schlosses ab. Wir wählen grundsätzlich die Vorgehensweise, die Ihre Tür am wenigsten belastet.",
        ],
      },
      {
        heading: "Ablauf eines Einsatzes",
        paragraphs: [
          "Nach Ihrem Anruf erfragen wir kurz die wichtigsten Informationen (Adresse, Art des Schlosses, Dringlichkeit) und geben Ihnen eine realistische Einschätzung zu Kosten und Ankunftszeit.",
          "Vor Ort verschaffen wir uns einen Überblick über die Tür und das Schloss und informieren Sie – wenn möglich – vor Beginn der Arbeiten über die zu erwartenden Kosten.",
        ],
      },
      {
        heading: "Was Sie selbst prüfen können",
        paragraphs: [
          "Bitte prüfen Sie vor dem Anruf, ob wirklich niemand (z. B. Nachbarn, Familienmitglieder, Vermieter) einen Zweitschlüssel hat – das spart Zeit und Kosten.",
          "Halten Sie nach Möglichkeit einen Ausweis bereit, damit wir vor Ort nachvollziehen können, dass Sie zur Wohnung bzw. zum Objekt berechtigt sind.",
        ],
      },
    ],
    icon: "door",
  },
  {
    slug: "schluessel-verloren",
    title: "Schlüssel verloren",
    metaTitle: "Schlüssel verloren – was tun? | Türretter-Nord",
    metaDescription:
      "Schlüssel verloren oder gestohlen? Türretter-Nord öffnet Ihre Tür und berät Sie zu einem sinnvollen Schlosswechsel für mehr Sicherheit.",
    teaser: "Schlüssel weg? Wir öffnen die Tür und beraten Sie zum sinnvollen weiteren Vorgehen.",
    h1: "Schlüssel verloren – schnelle Hilfe und ehrliche Beratung",
    intro:
      "Ein verlorener oder gestohlener Schlüssel ist ärgerlich und wirft oft Sicherheitsfragen auf. Wir öffnen zunächst Ihre Tür und beraten Sie anschließend, ob und in welchem Umfang ein Schlosswechsel sinnvoll ist.",
    highlights: [
      "Kurzfristige Türöffnung ohne den verlorenen Schlüssel",
      "Ehrliche Einschätzung zum Sicherheitsrisiko",
      "Optionaler Schlosswechsel direkt im Anschluss möglich",
      "Keine Panikmache – wir bewerten die Lage sachlich",
    ],
    sections: [
      {
        heading: "Ist ein Schlosswechsel nach Schlüsselverlust immer nötig?",
        paragraphs: [
          "Das kommt auf die Umstände an: Wurde der Schlüssel gestohlen und lässt sich die Adresse zuordnen (z. B. durch einen Schlüsselanhänger mit Adresse), ist ein zeitnaher Austausch des Schlosses ratsam. Ist der Schlüssel vermutlich nur verlegt worden, kann in manchen Fällen zunächst abgewartet werden.",
          "Wir sprechen die Situation vor Ort ehrlich mit Ihnen durch und empfehlen nur, was tatsächlich sinnvoll ist – ohne unnötigen Zusatzverkauf.",
        ],
      },
      {
        heading: "Schlüssel gestohlen – was tun?",
        paragraphs: [
          "Bei einem Diebstahl empfehlen wir zusätzlich, den Vorfall der Polizei zu melden und – sofern vorhanden – die Hausratversicherung zu informieren.",
        ],
      },
    ],
    icon: "key-lost",
  },
  {
    slug: "schluessel-abgebrochen",
    title: "Schlüssel abgebrochen",
    metaTitle: "Schlüssel im Schloss abgebrochen | Türretter-Nord",
    metaDescription:
      "Schlüssel im Schloss abgebrochen? Türretter-Nord entfernt das Schlüsselteil fachgerecht und öffnet die Tür – meist ohne Schlosswechsel.",
    teaser: "Schlüsselbruch im Schloss – wir entfernen das Teil fachgerecht und öffnen die Tür.",
    h1: "Schlüssel abgebrochen – Entfernung und Türöffnung",
    intro:
      "Ein im Schloss abgebrochener Schlüssel blockiert häufig den gesamten Zylinder. Mit dem passenden Werkzeug entfernen wir das abgebrochene Teil in der Regel, ohne dass ein kompletter Schlosswechsel nötig wird.",
    highlights: [
      "Spezialwerkzeug zur schonenden Entfernung",
      "Meist kein Schlosswechsel notwendig",
      "Anschließende Funktionsprüfung des Schlosses",
      "Bei beschädigtem Zylinder: transparentes Angebot für Austausch",
    ],
    sections: [
      {
        heading: "Warum bricht ein Schlüssel ab?",
        paragraphs: [
          "Häufige Ursachen sind Materialermüdung, ein bereits vorgeschädigter Schlüssel, zu viel Kraftaufwand beim Aufschließen oder ein schwergängiges bzw. verschmutztes Schloss.",
        ],
      },
      {
        heading: "Muss danach ein neues Schloss eingebaut werden?",
        paragraphs: [
          "Nicht zwingend: Lässt sich das abgebrochene Teil sauber entfernen und ist der Zylinder anschließend unbeschädigt, reicht in vielen Fällen ein neuer Schlüssel. Ist der Zylinder beschädigt, empfehlen wir einen Austausch und erläutern Ihnen die Kosten, bevor wir weiterarbeiten.",
        ],
      },
    ],
    icon: "key-broken",
  },
  {
    slug: "schlosswechsel",
    title: "Schlosswechsel",
    metaTitle: "Schlosswechsel & Schließzylinder tauschen | Türretter-Nord",
    metaDescription:
      "Beschädigtes, unsicheres oder altes Schloss? Türretter-Nord tauscht Schließzylinder fachgerecht aus – auf Wunsch mit erhöhtem Einbruchschutz.",
    teaser: "Alter, unsicherer oder beschädigter Schließzylinder? Wir tauschen fachgerecht aus.",
    h1: "Schlosswechsel vom Fachbetrieb",
    intro:
      "Ein beschädigter, abgenutzter oder nicht mehr sicherer Schließzylinder sollte zeitnah ausgetauscht werden. Wir beraten Sie zu passenden Zylindern – von der Standardlösung bis zum einbruchhemmenden Modell.",
    highlights: [
      "Austausch gängiger Standard- und Sicherheitszylinder",
      "Beratung zu Schutzklassen und Zusatzsicherungen",
      "Saubere, funktionsgeprüfte Montage",
      "Sinnvoll nach Umzug, Einbruch(-versuch) oder Schlüsselverlust",
    ],
    sections: [
      {
        heading: "Wann ist ein Schlosswechsel sinnvoll?",
        paragraphs: [
          "Typische Anlässe sind ein Wohnungs- oder Hauswechsel, ein verlorener oder gestohlener Schlüssel, ein Einbruch oder Einbruchsversuch sowie ein spürbar schwergängiges oder altes Schloss.",
        ],
      },
      {
        heading: "Welche Schließzylinder gibt es?",
        paragraphs: [
          "Von einfachen Standardzylindern bis zu einbruchhemmenden Zylindern mit Bohr-, Zieh- und Verschleißschutz gibt es unterschiedliche Sicherheitsstufen. Wir erläutern Ihnen die für Ihre Situation sinnvollen Optionen, ohne unnötig teure Lösungen aufzudrängen.",
        ],
      },
    ],
    icon: "lock",
  },
  {
    slug: "einbruchschutz",
    title: "Einbruchschutz",
    metaTitle: "Einbruchschutz für Türen – Beratung | Türretter-Nord",
    metaDescription:
      "Türretter-Nord berät zu sinnvollen Einbruchschutz-Maßnahmen für Ihre Tür: Sicherheitsschlösser, Zusatzsicherungen und Beschläge.",
    teaser: "Beratung zu sinnvollen Sicherheitslösungen für Ihre Tür – ohne Angstmache.",
    h1: "Einbruchschutz für Türen",
    intro:
      "Ein Großteil der Einbruchsversuche scheitert an mechanischem Widerstand. Wir beraten Sie sachlich zu Maßnahmen, die für Ihre Tür tatsächlich sinnvoll sind – von der Zylinderklasse bis zu Zusatzsicherungen.",
    highlights: [
      "Ehrliche Einschätzung statt Angstmache",
      "Beratung zu einbruchhemmenden Schließzylindern",
      "Beratung zu Zusatzsicherungen und Beschlägen",
      "Umsetzung aus einer Hand möglich",
    ],
    sections: [
      {
        heading: "Welche Maßnahmen sind sinnvoll?",
        paragraphs: [
          "Je nach Tür und Budget kommen unter anderem einbruchhemmende Schließzylinder, verstärkte Schließbleche, Zusatzschlösser oder Bänderschutz in Frage. Wir schauen uns Ihre konkrete Situation an, bevor wir etwas empfehlen.",
        ],
      },
      {
        heading: "Wichtiger Hinweis",
        paragraphs: [
          "Wir versprechen keine hundertprozentige Sicherheit – die gibt es nicht. Unser Ziel ist es, den Widerstand Ihrer Tür realistisch und mit vertretbarem Aufwand zu erhöhen.",
        ],
      },
    ],
    icon: "shield",
  },
  {
    slug: "notdienst",
    title: "Schlüsseldienst-Notdienst",
    metaTitle: "Schlüsseldienst Notdienst | Türretter-Nord",
    metaDescription:
      "Dringende Türöffnung nötig? Türretter-Nord hilft bei akuten Aussperrungen – schnelle Einsatzbereitschaft, transparente Preise, keine falschen Versprechen.",
    teaser: "Akut ausgesperrt? Wir kümmern uns schnellstmöglich um Ihre Anfrage.",
    h1: "Schlüsseldienst-Notdienst",
    intro:
      "Bei einer akuten Aussperrung zählt jede Minute. Rufen Sie uns an – wir schätzen die Lage direkt am Telefon realistisch ein und nennen Ihnen einen voraussichtlichen Kosten- und Zeitrahmen, bevor wir losfahren.",
    highlights: [
      "Direkte telefonische Ersteinschätzung",
      "Schnellstmögliche Einsatzplanung im Einsatzgebiet",
      "Keine überzogenen Zeitversprechen am Telefon",
      "Transparente Kommunikation zu Kosten vor Ort",
    ],
    sections: [
      {
        heading: "Was uns von unseriösen Notdienst-Angeboten unterscheidet",
        paragraphs: [
          "Wir nennen Ihnen am Telefon einen realistischen Rahmen statt Minutenversprechen, die ohnehin von Verkehr, Wetter und Entfernung abhängen. Und wir informieren Sie – wo immer möglich – vor Arbeitsbeginn über die zu erwartenden Kosten.",
        ],
      },
      {
        heading: "So erreichen Sie uns am schnellsten",
        paragraphs: [
          "Am schnellsten geht es telefonisch, da wir dann direkt Rückfragen stellen und die Anfahrt einschätzen können. Alternativ nutzen Sie unser Kontaktformular für weniger dringende Anfragen.",
        ],
      },
    ],
    icon: "clock",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
