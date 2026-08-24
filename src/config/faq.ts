/**
 * FAQ – TÜRRETTER-NORD
 * ---------------------
 * Zentrale Liste globaler Fragen & Antworten. Wird auf der Startseite
 * (Auszug), der Seite /faq (vollständig) sowie als FAQPage-Schema.org-
 * Markup ausgegeben.
 *
 * Neue Frage hinzufügen: Objekt unten ergänzen (id muss eindeutig sein).
 */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FaqItem[] = [
  {
    id: "kosten-tueroeffnung",
    question: "Wie viel kostet eine Türöffnung?",
    answer:
      "Die Kosten hängen davon ab, ob die Tür nur zugefallen oder abgeschlossen ist, zu welcher Tageszeit Hilfe benötigt wird und wo sich das Objekt befindet. Auf unserer Preisseite finden Sie Richtpreise, mit unserem Preisrechner erhalten Sie eine unverbindliche Einschätzung für Ihre konkrete Situation.",
  },
  {
    id: "reaktionszeit",
    question: "Wie schnell kann jemand vor Ort sein?",
    answer:
      "Das hängt vom genauen Standort, der Verkehrslage und unserer aktuellen Auslastung ab. Am Telefon geben wir Ihnen eine realistische Einschätzung zur voraussichtlichen Ankunftszeit, statt pauschale Minutenangaben zu versprechen.",
  },
  {
    id: "beschaedigungsfrei",
    question: "Kann eine zugefallene Tür ohne Beschädigung geöffnet werden?",
    answer:
      "Bei einer nur zugefallenen (nicht verriegelten) Tür ist eine beschädigungsarme Öffnung in den meisten Fällen möglich. Bei abgeschlossenen bzw. mehrfach verriegelten Türen kann je nach Schlosstyp ein höherer Aufwand nötig sein. Wir wählen grundsätzlich die für Ihre Tür schonendste Methode.",
  },
  {
    id: "nachtzuschlag",
    question: "Was kostet der Schlüsseldienst nachts?",
    answer:
      "Für Einsätze in der Nacht (in der Regel 22–8 Uhr) fällt ein Nachtzuschlag zum Grundpreis an. Die genaue Höhe finden Sie auf unserer Preisseite; über den Preisrechner können Sie den voraussichtlichen Gesamtpreis inklusive Zuschlag ermitteln.",
  },
  {
    id: "zuschlaege",
    question: "Welche Zuschläge gibt es?",
    answer:
      "Übliche Zuschläge sind Abend-, Nacht- sowie Sonn- und Feiertagszuschläge. Alle Zuschläge sind auf unserer Preisseite transparent aufgeführt und fließen automatisch in die Berechnung im Preisrechner ein.",
  },
  {
    id: "schluessel-abgebrochen",
    question: "Was passiert, wenn mein Schlüssel im Schloss abgebrochen ist?",
    answer:
      "Wir entfernen das abgebrochene Schlüsselteil in der Regel mit speziellem Werkzeug, ohne dass das Schloss komplett ausgetauscht werden muss. Ist der Zylinder dabei beschädigt, informieren wir Sie transparent über die Kosten für einen Austausch, bevor wir weiterarbeiten.",
  },
  {
    id: "schluessel-verloren",
    question: "Was passiert bei einem verlorenen Schlüssel?",
    answer:
      "Wir öffnen zunächst Ihre Tür. Anschließend beraten wir Sie ehrlich, ob ein Schlosswechsel sinnvoll ist – etwa wenn der Schlüssel gestohlen wurde und Rückschlüsse auf Ihre Adresse möglich sind.",
  },
  {
    id: "direkter-schlosswechsel",
    question: "Kann direkt ein neues Schloss eingebaut werden?",
    answer:
      "In vielen Fällen ja – sofern der passende Schließzylinder verfügbar ist, führen wir den Austausch direkt im Anschluss an die Türöffnung durch. Wir beraten Sie vor Ort zu passenden Optionen und Kosten.",
  },
  {
    id: "zahlungsmoeglichkeiten",
    question: "Welche Zahlungsmöglichkeiten gibt es?",
    answer:
      "Die angebotenen Zahlungsarten finden Sie auf unserer Kontaktseite. Grundsätzlich gilt: Fragen Sie bei der telefonischen Anfrage gerne direkt nach den aktuell möglichen Zahlungsarten.",
  },
  {
    id: "einsatzgebiet",
    question: "In welchen Städten ist Türretter-Nord tätig?",
    answer:
      "Unser Einsatzgebiet liegt rund um Seevetal in einem Umkreis von etwa 25 km. Dazu können je nach genauer Adresse unter anderem Seevetal, Rosengarten, Hamburg-Harburg, Winsen (Luhe) und Buchholz in der Nordheide gehören. Ob Ihre Adresse innerhalb des Einsatzgebiets liegt, bestätigen wir Ihnen direkt am Telefon.",
  },
];
