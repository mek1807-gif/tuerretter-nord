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
    question: "Was kostet eine Türöffnung?",
    answer:
      "Eine reguläre Türöffnung kostet 99 €. Zusätzliche Leistungen wie ein Schlosswechsel, ein neuer Schließzylinder oder weiteres Material werden separat berechnet und vor Beginn der Arbeiten transparent mit Ihnen besprochen.",
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
    question: "Gibt es Zuschläge für Einsätze nachts oder am Wochenende?",
    answer:
      "Eine reguläre Türöffnung kostet 99 € – unabhängig von Tageszeit oder Wochentag. Zusätzliche Leistungen und Materialien werden separat und vorab transparent besprochen. Wir erfinden keine versteckten Zuschläge.",
  },
  {
    id: "zuschlaege",
    question: "Gibt es versteckte Kosten?",
    answer:
      "Nein. Der Preis für eine Türöffnung beträgt 99 €. Wenn zusätzliche Arbeiten oder Materialien benötigt werden, informieren wir Sie vor Beginn darüber und besprechen die Kosten transparent mit Ihnen. Sie erhalten eine nachvollziehbare Rechnung.",
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
      "Wir öffnen zunächst Ihre Tür für 99 €. Anschließend beraten wir Sie ehrlich, ob ein Schlosswechsel sinnvoll ist – etwa wenn der Schlüssel gestohlen wurde und Rückschlüsse auf Ihre Adresse möglich sind.",
  },
  {
    id: "direkter-schlosswechsel",
    question: "Kann direkt ein neues Schloss eingebaut werden?",
    answer:
      "In vielen Fällen ja – sofern der passende Schließzylinder verfügbar ist, führen wir den Austausch direkt im Anschluss an die Türöffnung durch. Wir beraten Sie vor Ort zu passenden Optionen und den jeweiligen Kosten, bevor wir weiterarbeiten.",
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
      "Unser Einsatzgebiet liegt rund um Seevetal in einem Umkreis von etwa 25 km. Dazu gehören unter anderem Seevetal, Rosengarten, Hamburg-Harburg, Winsen (Luhe) und Buchholz in der Nordheide. Ob Ihre Adresse innerhalb des Einsatzgebiets liegt, bestätigen wir Ihnen direkt am Telefon.",
  },
];
