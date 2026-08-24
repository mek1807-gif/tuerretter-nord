# Türretter-Nord – Website

Produktions-Website für den Schlüsseldienst **Türretter-Nord**, gebaut mit
[Astro](https://astro.build) (statische Seitengenerierung, kein Server im
Betrieb nötig). Optimiert für lokale Google-Suche, schnelle Ladezeiten und
möglichst viele Anrufe/Anfragen von Kund:innen in einer akuten Aussperr-Situation.

---

## 1. Wichtigster erster Schritt: Platzhalter ausfüllen

Bevor die Seite live geht, müssen alle Platzhalter durch echte Daten ersetzt
werden. **Es gibt genau eine zentrale Stelle dafür:**

📄 **`src/config/site.ts`**

Dort befinden sich (jeweils klar als Platzhalter markiert, z. B. `[TELEFONNUMMER]`):

- Telefonnummer (Anzeige-Text **und** `tel:`-Link – beide mit der echten Nummer
  im Format `tel:+49XXXXXXXXXX` ausfüllen, siehe Kommentar in der Datei)
- E-Mail-Adresse
- Geschäftsadresse
- Öffnungszeiten
- Einsatzgebiet-Beschreibung
- rechtlicher Firmenname (für Impressum & strukturierte Daten)
- Zahlungsmöglichkeiten

Diese Datei wird von der **gesamten Website** referenziert (Header, Footer,
Sticky-Call-Button, alle Leistungs- und Stadtseiten, Kontaktseite, Impressum,
Schema.org-Daten). Ein einziges Update dort reicht aus – kein Suchen &
Ersetzen im Quellcode nötig.

Zusätzlich müssen noch reine **rechtliche Angaben** direkt auf zwei Seiten
ergänzt werden (bewusst nicht automatisiert, da hier keine erfundenen Daten
verwendet werden sollen):

- `src/pages/impressum.astro` – vertretungsberechtigte Person, USt-IdNr.,
  Handelsregister/Handwerksrolle (jeweils nur falls zutreffend)
- `src/pages/datenschutz.astro` – Hosting-Anbieter, ggf. eingesetzte
  Formular-/Analyse-Dienste

Alle Platzhalter im Code sind konsequent in **eckigen Klammern** geschrieben
(`[SO]`), damit sie beim Durchsuchen leicht auffindbar sind:

```bash
grep -rn "\[" src/pages/impressum.astro src/pages/datenschutz.astro
```

---

## 2. Preise, Leistungen, Städte & FAQ verwalten

Alles Inhaltliche, das sich öfter ändert, liegt in **`src/config/`** – reine,
gut kommentierte TypeScript-Dateien ohne Datenbank, ohne Login, ohne
zusätzliches System. Ändern, speichern, neu bauen (siehe Abschnitt 4) –
fertig.

| Datei | Steuert |
|---|---|
| `src/config/site.ts` | Telefon, E-Mail, Adresse, Öffnungszeiten, Firmendaten |
| `src/config/pricing.ts` | Preistabelle **und** die Rechenlogik des Preisrechners |
| `src/config/services.ts` | Die 6 Leistungsseiten (Texte, Überschriften, Icon) |
| `src/config/cities.ts` | Alle lokalen Landingpages (Städte/Einsatzgebiete) |
| `src/config/faq.ts` | Alle FAQ-Einträge (Start, FAQ-Seite, Schema.org) |
| `src/config/testimonials.ts` | Echte Kundenbewertungen (**nur echte!**) |
| `src/config/nav.ts` | Menüpunkte in Header/Footer |

### Beispiel: einen Preis ändern

In `src/config/pricing.ts` einfach den Zahlenwert anpassen:

```ts
{
  id: "zugefallen",
  label: "Zugefallene Tür",
  price: 59, // <- diesen Wert ändern
  from: true,
  ...
}
```

Der neue Preis erscheint danach automatisch sowohl auf `/preise` als auch
als Berechnungsgrundlage im Preisrechner (`/preisrechner`) – beide lesen aus
derselben Datei, es gibt keine zweite Stelle, die man vergessen könnte.

### Beispiel: eine neue Stadt hinzufügen

In `src/config/cities.ts` ein neues Objekt in das `cities`-Array einfügen
(am besten ein bestehendes kopieren und anpassen). Wichtig: **jede Stadt
braucht einen wirklich individuellen `intro`- und `localNotes`-Text** –
keine Kopien zwischen Städten, das schadet sonst der lokalen SEO
(Duplicate-Content-Vermeidung). Die Seite `/schluesseldienst-<slug>` sowie
alle internen Links (Footer, Startseite, Einsatzgebiete-Übersicht,
Sitemap) werden danach automatisch erzeugt.

Eine Stadt entfernen: Objekt einfach aus dem Array löschen – die Seite und
alle Links darauf verschwinden automatisch.

### Beispiel: eine neue Leistung hinzufügen

Genauso in `src/config/services.ts`: neues Objekt in das `services`-Array
einfügen. Die Unterseite unter `/leistungen/<slug>` sowie die Karte auf der
Startseite/Leistungsübersicht werden automatisch erzeugt.

### Preisrechner-Logik anpassen

Der interaktive Rechner (`/preisrechner`) liest seine komplette Logik aus
`calculatorConfig` in `src/config/pricing.ts`. Jede Options-Gruppe
(Türstatus, Leistung, Tageszeit, Wochentag, Gebiet, Zusatzleistungen) hat
`options` mit `label` und `value` (Euro-Betrag, der bei Auswahl addiert
wird). Werte ändern, Optionen hinzufügen/entfernen – das Rechner-Formular
und die Live-Berechnung passen sich automatisch an, ohne dass am
JavaScript-Code etwas geändert werden muss.

---

## 3. Warum keine Datenbank / kein klassisches Admin-Login?

Diese Website ist bewusst als **schnelle, statische Seite** gebaut
(kein Server-Prozess im Dauerbetrieb nötig). Das bringt für einen
Schlüsseldienst mit Notdienst-Charakter drei handfeste Vorteile:

1. **Geschwindigkeit & Core Web Vitals** – entscheidend, wenn jemand in
   einer Stresssituation mit dem Smartphone (oft im mobilen Netz) die Seite
   aufruft.
2. **Einfaches, günstiges Hosting** – die Seite läuft auf praktisch jedem
   Webspace, ganz ohne Datenbank-Server, ohne Login-System, ohne Angriffsfläche
   durch ein Admin-Backend.
3. **Sicherheit** – kein Login bedeutet auch: kein Login, der gehackt werden
   kann.

Die zentralen Konfigurationsdateien in `src/config/` übernehmen die Rolle
eines Admin-Bereichs, ohne dessen Nachteile. Wer dennoch eine klassische
Weboberfläche mit Login möchte, kann später ein sogenanntes Headless-CMS
(z. B. mit Git-Anbindung) ergänzen – die Struktur der Konfigurationsdateien
ist dafür bereits sauber vorbereitet.

---

## 4. Entwicklung & Build

Voraussetzung: [Node.js](https://nodejs.org) Version 18 oder neuer.

```bash
# Abhängigkeiten installieren (einmalig bzw. nach Änderungen an package.json)
npm install

# Lokalen Entwicklungsserver starten (mit Live-Vorschau)
npm run dev
# -> http://localhost:4321

# Produktions-Build erzeugen (statische Dateien in ./dist)
npm run build

# Den Produktions-Build lokal testen
npm run preview
```

> **Hinweis:** In der Entwicklungsumgebung, in der dieses Projekt erstellt
> wurde, war der Zugriff auf das npm-Paketregister aus Sicherheitsgründen
> gesperrt. Der Code wurde deshalb sorgfältig manuell auf korrekte Syntax
> geprüft, aber `npm install` und `npm run build` konnten dort nicht
> tatsächlich ausgeführt werden. Bitte **`npm install` und `npm run build`
> einmal in Ihrer eigenen Umgebung ausführen**, bevor Sie live gehen, um
> das Ergebnis zu verifizieren. Sollte dabei unerwartet ein Fehler
> auftreten, ist er in der Regel schnell zu beheben – die Fehlermeldung von
> Astro benennt üblicherweise Datei und Zeile sehr genau.

---

## 5. Deployment (Live-Schaltung)

`npm run build` erzeugt einen Ordner `dist/` mit ausschließlich statischen
HTML-, CSS-, JS- und Bilddateien. Diese können auf praktisch jedem Hosting
veröffentlicht werden:

### Klassisches Webhosting (z. B. per FTP)

1. `npm run build` ausführen.
2. Den kompletten **Inhalt** des `dist/`-Ordners (nicht den Ordner selbst)
   per FTP/SFTP in das Hauptverzeichnis (häufig `httpdocs`, `htdocs` oder
   `public_html`) des Hosting-Pakets hochladen.
3. Domain `tuerretter-nord.de` auf dieses Hosting-Paket zeigen lassen und
   HTTPS/SSL-Zertifikat aktivieren (bei den meisten Anbietern per Klick,
   z. B. Let's Encrypt).

### Moderne Static-Hosting-Anbieter (empfohlen, meist kostenlos im
Einstieg, automatisches HTTPS, automatisches Deployment bei Änderungen)

Z. B. Netlify, Vercel oder Cloudflare Pages:

1. Projekt in ein Git-Repository (z. B. GitHub) hochladen.
2. Beim Hosting-Anbieter das Repository verbinden.
3. Build-Befehl: `npm run build`, Ausgabeordner: `dist`.
4. Domain `tuerretter-nord.de` in den Domain-Einstellungen des Anbieters
   hinterlegen.

Bei jeder Änderung an den Konfigurationsdateien (z. B. neuer Preis) reicht
danach ein `git push` – die Seite baut und aktualisiert sich automatisch.

---

## 6. SEO – was bereits eingerichtet ist

- Individuelle `<title>`- und Meta-Description-Tags je Seite
- Saubere H1/H2/H3-Struktur, semantisches HTML
- Canonical-URLs auf allen Seiten
- Automatisch generierte XML-Sitemap (`/sitemap-index.xml`, via
  `@astrojs/sitemap`) – wird bei jedem Build aktuell erzeugt
- `robots.txt` mit Verweis auf die Sitemap (`public/robots.txt`)
- Open-Graph- und Twitter-Card-Daten (inkl. Vorschaubild) für Vorschauen in
  Messengern/Social Media
- Strukturierte Daten (Schema.org / JSON-LD):
  - `Locksmith` / `LocalBusiness` auf jeder Seite (Name, Adresse, Telefon,
    Öffnungszeiten, Einsatzgebiete)
  - `BreadcrumbList` auf jeder Unterseite
  - `FAQPage` auf Startseite, `/faq` und allen Stadt-Landingpages
  - `Service` auf allen Leistungs- und Stadtseiten
- Lokale Landingpages je Stadt mit individuellem Inhalt (keine
  Duplicate-Content-Doorway-Pages)
- Mobile-First-Design, dauerhaft sichtbarer Anruf-Button auf Smartphones
- Kein unnötiges JavaScript, keine großen Frameworks/Bibliotheken – schnelle
  Ladezeiten für gute Core Web Vitals

### Google Search Console einrichten

1. [search.google.com/search-console](https://search.google.com/search-console/)
   öffnen, Property für `https://tuerretter-nord.de` anlegen.
2. Eigentümerschaft bestätigen (empfohlen: DNS-TXT-Eintrag beim
   Domain-Anbieter, alternativ HTML-Datei-Upload).
3. Unter „Sitemaps“ die URL `https://tuerretter-nord.de/sitemap-index.xml`
   einreichen.

### Analytics einrichten (optional)

Aktuell ist **bewusst kein** Tracking-Tool eingebunden (siehe
`src/pages/cookie-einstellungen.astro`). Empfehlenswert für den Start:

- **Datenschutzfreundliche Variante:** [Plausible](https://plausible.io)
  oder [Matomo](https://matomo.org) – meist ganz ohne Cookie-Banner möglich.
- **Google Analytics 4:** funktioniert ebenfalls, erfordert aber wegen
  Cookies i. d. R. einen Consent-Banner **vor** dem Laden des Skripts.

Beim Einbinden eines Tools bitte zusätzlich `src/pages/datenschutz.astro`
und `src/pages/cookie-einstellungen.astro` entsprechend aktualisieren (an
den markierten Stellen).

### Google-Unternehmensprofil (Google Business Profile) einrichten

Für lokale Suchanfragen und die Anzeige in Google Maps ist ein
Google-Unternehmensprofil mindestens genauso wichtig wie die Website selbst:

1. Profil unter [business.google.com](https://business.google.com) anlegen.
2. **Exakt dieselben** Angaben wie auf der Website verwenden (Name,
   Adresse, Telefonnummer – sogenannte NAP-Konsistenz: Name, Address,
   Phone). Kleinste Abweichungen (z. B. andere Schreibweise der Straße)
   können das lokale Ranking negativ beeinflussen.
3. Kategorie „Schlüsseldienst“ (Locksmith) auswählen.
4. Öffnungszeiten identisch zu `src/config/site.ts` hinterlegen.
5. Nach den ersten Aufträgen aktiv um echte Google-Rezensionen bitten –
   diese können anschließend (mit Einverständnis der Kund:innen) in
   `src/config/testimonials.ts` ergänzt werden.
6. Link zum Profil in `src/config/site.ts` unter `social.google` eintragen
   – erscheint dann automatisch in den strukturierten Daten (`sameAs`).

---

## 7. Kontaktformular anbinden

Das Kontaktformular (`src/components/ContactForm.astro`) funktioniert ohne
eigenen Server: Beim Absenden öffnet es eine vorausgefüllte E-Mail über das
E-Mail-Programm der besuchenden Person. Das funktioniert zuverlässig auf
jedem Hosting, ganz ohne Backend.

Für ein komfortableres Erlebnis (Formular wird direkt versendet, ohne dass
sich ein E-Mail-Programm öffnen muss) kann später ein Formular-Dienst wie
[Formspree](https://formspree.io) angebunden werden:

1. Bei Formspree ein Formular anlegen, Ziel-E-Mail hinterlegen.
2. In `src/components/ContactForm.astro` das `action`-Attribut auf die von
   Formspree bereitgestellte URL ändern.
3. Das `<script>` am Ende der Datei (die mailto-Fallback-Logik) kann dann
   entfernt werden, da Formspree den Versand übernimmt.

---

## 8. Projektstruktur im Überblick

```
src/
  config/          -> zentrale Inhalte (siehe Abschnitt 2)
  layouts/
    BaseLayout.astro   -> HTML-Grundgerüst, SEO-Head, Schema.org
  components/          -> wiederverwendbare Bausteine (Header, Footer, …)
  lib/
    schema.ts           -> Hilfsfunktionen für Schema.org/JSON-LD
  styles/
    global.css           -> gesamtes Design-System (Farben, Typo, Buttons, …)
  pages/
    index.astro                    -> Startseite
    leistungen/
      index.astro                  -> Leistungsübersicht
      [slug].astro                 -> generiert alle 6 Leistungsseiten
    preise.astro                   -> Preisübersicht
    preisrechner.astro             -> interaktiver Preisrechner
    einsatzgebiete/index.astro     -> Übersicht aller Städte
    schluesseldienst-[city].astro  -> generiert alle Stadt-Landingpages
    kontakt.astro
    faq.astro
    ueber-uns.astro
    impressum.astro
    datenschutz.astro
    cookie-einstellungen.astro
    404.astro
public/
  robots.txt
  favicon.svg, favicon-32.png, favicon-180.png
  images/og-default.png   -> Vorschaubild für Social-Media-Links (bitte bei
                              Gelegenheit durch ein echtes Foto ersetzen)
```

---

## 9. Vor dem Livegang: Checkliste

- [ ] Telefonnummer in `src/config/site.ts` eingetragen (Anzeige **und**
      `tel:`-Link im Format `tel:+49…`)
- [ ] E-Mail-Adresse eingetragen
- [ ] Geschäftsadresse eingetragen
- [ ] Öffnungszeiten eingetragen (Text **und** `openingHours.schema`)
- [ ] Einsatzgebiet-Texte final geprüft
- [ ] Echte Preise in `src/config/pricing.ts` eingetragen
- [ ] Zahlungsmöglichkeiten in `site.ts` an tatsächlich angebotene Optionen
      angepasst
- [ ] Impressum vollständig ausgefüllt (`src/pages/impressum.astro`)
- [ ] Datenschutzerklärung ergänzt (Hosting-Anbieter, ggf. Analyse-Tools;
      `src/pages/datenschutz.astro`)
- [ ] `npm install && npm run build` erfolgreich in eigener Umgebung
      getestet
- [ ] Website auf echtem Smartphone getestet (Anruf-Button, Sticky-Bar,
      Preisrechner, Formular)
- [ ] Google Search Console eingerichtet, Sitemap eingereicht
- [ ] Google-Unternehmensprofil angelegt (siehe Abschnitt 6)
- [ ] Bei Bedarf: echtes Foto als Open-Graph-Bild (`public/images/og-default.png`)
      und als Hero-/Vertrauensbild ergänzt
- [ ] Bei Einbindung von Analytics: Datenschutzerklärung & Cookie-Seite
      aktualisiert
