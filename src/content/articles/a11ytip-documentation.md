---
pubDate: 2025-06-08
viewerTitle: "a11ytip Dokumentation"
pageDescription: "Offizielle a11ytip Dokumentation"
pageTitle: "a11ytip | Dokumentation | Arthur Ersosi"
online:
  name: "GitHub"
  href: "https://github.com/aersosi/a11ytip"
  ariaLabel: "a11ytip GitHub Repository"
images: [{ src: "src/images/articles/a11ytip-cover.webp", alt: "a11ytip npm Paket Coverbild" }]
tags: ["CSS", "A11y", "Tooltip"]
---

# a11ytip

Einfach unkomplizierte Tooltips. Kinderleicht zu integrieren und zu konfigurieren. CSS-first und accessibility
mitgedacht.

## Funktionen

- **CSS-Variablen**: Müheloses anpassen des Looks
- **Data-Attribute**: Präzises Styling einzelner Tooltips (nur chrome)
- **Leichtgewicht**: ~7KB CSS (minified) + ~1KB JavaScript (minified)
- **Barrierefreiheit first**: Entwickelt mit Screenreadern und Tastaturnavigation im Blick
- **Ansprechende Optik**: Sauberes, modernes Design
- **Theme-Unterstützung**: Light- und Dark Theme inklusive, oder einfach eigenes Theme hinzufügen
- **CSS-first Architektur**: Minimaler JavaScript-Fußabdruck, maximale Flexibilität
- **Keine Überentwicklung**: Einfach Tooltips, die funktionieren. Ohne Heckmeck

---

## Installation

1. a11ytip installieren:

```bash
npm i @aersosi/a11ytip
```

2. CSS (minified) importieren:

```css
@import "@aersosi/a11ytip/css";
```

3. TypeScript (minified) importieren:

```typescript
import { toggleA11ytip } from "@aersosi/a11ytip/js";

document.addEventListener("DOMContentLoaded", toggleA11ytip);
```

## Verwendung

**Einfachstes Beispiel:**

```html
<button data-a11ytip-top aria-label="Hover mich">Hover mich</button>
```

---

## Positionierung

```html
<button data-a11ytip-top aria-label="Ich erscheine oben!">Hover mich</button>
<button data-a11ytip-top-left aria-label="Ich bin oben links ausgerichtet!">Hover mich</button>
<button data-a11ytip-top-right aria-label="Ich bin oben rechts ausgerichtet!">Hover mich</button>

<button data-a11ytip-right aria-label="Ich erscheine rechts!">Hover mich</button>
<button data-a11ytip-right-top aria-label="Ich bin rechts oben ausgerichtet!">Hover mich</button>
<button data-a11ytip-right-bottom aria-label="Ich bin rechts unten ausgerichtet!">Hover mich</button>

<button data-a11ytip-bottom aria-label="Ich erscheine unten!">Hover mich</button>
<button data-a11ytip-bottom-left aria-label="Ich bin unten links ausgerichtet!">Hover mich</button>
<button data-a11ytip-bottom-right aria-label="Ich bin unten rechts ausgerichtet!">Hover mich</button>

<button data-a11ytip-left aria-label="Ich erscheine links!">Hover mich</button>
<button data-a11ytip-left-top aria-label="Ich bin links oben ausgerichtet!">Hover mich</button>
<button data-a11ytip-left-bottom aria-label="Ich bin links unten ausgerichtet!">Hover mich</button>
```

---

## a11ytip Text

1. Der a11ytip Text wird primär über das `aria-label` definiert.
2. **Opt-Out:** Alternativ können Sie auch nur das `data-a11ytip-text` Attribut verwenden.
3. Beide Attribute, `aria-label` und `data-a11ytip-text`, können gleichzeitig genutzt werden. In diesem Fall hat der
   Text aus `data-a11ytip-text` Vorrang und wird angezeigt.

**Beispiel mit beiden Attributen:**

```html
<button data-a11ytip-top aria-label="Dialog-Fenster schließen" data-a11ytip-text="Dialog schließen">Schließen</button>
```

Das `data-a11ytip-text` bestimmt den angezeigten a11ytip-Text ("Dialog schließen"), während das `aria-label` unabhängig
bleibt.

---

## a11ytip dauerhaft aktivieren

Mit dem `data-a11ytip-active` Attribut oder der `a11ytip-active` Klasse kann der aktive Status eines a11ytips dauerhaft
erzwungen werden.

**Beispiel mit Data-Attribut:**

```html
<button data-a11ytip-top data-a11ytip-active aria-label="Ich bin immer sichtbar!">Kein Hover nötig</button>
```

**Beispiel mit `a11ytip-active` Klasse:**

```html
<button data-a11ytip-top class="a11ytip-active" aria-label="Ich bin immer sichtbar!">Kein Hover nötig</button>
```

---

## a11ytips konfigurieren mit a11ytip_config.css

- Überschreiben Sie die Standardkonfiguration nach Ihrem Geschmack.
- Die CSS-Variablen sind selbsterklärend und steuern die Eigenschaften aller a11ytips.
- Alle gängigen Farb-, Zeit- und Größenwerte können verwendet werden, z.B. #fafafa, 2s, px, etc.

**Standardkonfiguration:**

```css
/* src/a11ytip_config.css */

:root {
  /* Text */
  --a11ytip-text-size: 1rem;
  --a11ytip-text-color: white;

  /* Box */
  --a11ytip-bg-color: theme(color.base.700, black);
  --a11ytip-padding-left: 8px;
  --a11ytip-padding-right: 8px;
  --a11ytip-padding-top: 4px;
  --a11ytip-padding-bottom: 4px;
  --a11ytip-border-radius: 6px;
  --a11ytip-box-shadow: 0 1px 3px 0 theme(colors.black / 0.25), 0 1px 2px -1px theme(colors.black / 0.1);
  --a11ytip-max-width: 14ch;

  /* Animation */
  --a11ytip-start-position: calc(100% + 2px);
  --a11ytip-end-position: calc(100% + 8px);
  --a11ytip-transition-duration: 250ms;

  --a11ytip-z-index: 100;
}

/* Dark Theme */
@media (prefers-color-scheme: dark) {
  :root:not(.light, [data-light], [data-theme="light"]) {
    --a11ytip-text-color: black;
    --a11ytip-bg-color: theme(color.base.100, white);
  }
}

[data-dark],
[data-theme="dark"],
:root.dark {
  --a11ytip-text-color: black;
  --a11ytip-bg-color: theme(color.base.100, white);
}
```

**Tailwind Konfigurationsbeispiel:**

```css
/* src/a11ytip_config.css */

:root {
   /* Text */
   --a11ytip-text-size: theme(fontSize.sm, 0.875rem);
   --a11ytip-text-color: theme(colors.white, #ffffff);

   /* Box */
   --a11ytip-padding-left: theme(spacing.2, 0.5rem);
   --a11ytip-padding-right: theme(spacing.2, 0.5rem);
   --a11ytip-padding-top: theme(spacing.1, 0.25rem);
   --a11ytip-padding-bottom: theme(spacing.1, 0.25rem);
   --a11ytip-box-shadow: theme(boxShadow.sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));

   ...
}
```

## Dark Theme oder eigene Themes

**Das Dark Theme wird in folgenden Fällen getriggert:**

- `data-dark` Attribut: `<body data-dark>`
- `data-theme="dark"` Attribut: `<body data-theme="dark">`
- `.dark` Klasse: `<body class="dark">`

Sie können auch eigene Themes erstellen, indem Sie neue Selektoren in der `a11ytip_config.css` definieren.

**Zum Beispiel:**

```css
/* Pinkes Theme */

[data-theme="pink"] {
  --a11ytip-text-color: white;
  --a11ytip-bg-color: darkmagenta;
}
```

## Einzelnes a11ytip mit Data-Attributen anpassen

Die CSS-a11ytips unterstützen optionale `data-*` Attribute, mit denen Sie die Standardkonfiguration für ein einzelnes
a11ytips überschreiben können.

**Hinweis:** Die Anpassung über Data-Attribute wird derzeit nur in Chrome-basierten Browsern unterstützt.

**Verfügbare Data-Attribute:**

1. `data-a11ytip-*`:
   - **Diese Attribute werden von allen Browsern unterstützt!**
   - Bestimmen, wo der a11ytip relativ zum Element erscheint.
   - Verfügbare Positionen:
   - `data-a11ytip-top` (zentriert)
   - `data-a11ytip-top-left`
   - `data-a11ytip-top-right`
   - `data-a11ytip-right` (zentriert)
   - `data-a11ytip-right-top`
   - `data-a11ytip-right-bottom`
   - `data-a11ytip-bottom` (zentriert)
   - `data-a11ytip-bottom-left`
   - `data-a11ytip-bottom-right`
   - `data-a11ytip-left` (zentriert)
   - `data-a11ytip-left-top`
   - `data-a11ytip-left-bottom`
   - Werteformat: Keine Werte erforderlich, allein das Vorhandensein des Attributs aktiviert die entsprechende Position.

2. `data-a11ytip-text`:
   - **Dieses Attribut wird von allen Browsern unterstützt!**
   - Definiert den Textinhalt des a11ytips.
   - Dieses Attribut hat Vorrang vor `aria-label`, wenn beide vorhanden sind.
   - Werteformat: Beliebiger Text.

3. `data-a11ytip-text-size`:
   - Passt die Schriftgröße des a11ytip-Textes an.
   - Werteformat: `<Zahl>` gefolgt von einer Einheit (z.B. `16px`, `1rem`).

4. `data-a11ytip-text-color`:
   - Ändert die Farbe des a11ytip-Textes.
   - Werteformat: Ein gültiger CSS `<color>` Wert (z.B. `#ffffff`, `rgb(255, 255, 255)` oder `blue`).

5. `data-a11ytip-bg-color`:
   - Ändert die Hintergrundfarbe des a11ytips.
   - Werteformat: Ein gültiger CSS `<color>` Wert.

6. `data-a11ytip-padding-left`, `data-a11ytip-padding-right`, `data-a11ytip-padding-top` und
   `data-a11ytip-padding-bottom`:
   - Passt den linken, rechten, oberen und unteren Innenabstand der a11ytip-Box einzeln an.
   - Werteformat: Ein CSS `<length>` Wert (z.B. `0.5rem`, `8px`).

7. `data-a11ytip-border-radius`:
   - Setzt den Wert der a11ytip-Box für abgerundete Ecken.
   - Werteformat: Ein CSS `<length>` Wert (z.B. `0.375rem`, `5px`).

8. `data-a11ytip-box-shadow`:
   - Setzt den box-shadow der a11ytip-Box.
   - Werteformat: Ein gültiger CSS `box-shadow` Wert (z.B. `0 4px 6px rgba(0, 0, 0, 0.1)`, `none`).

9. `data-a11ytip-max-width`:
   - Setzt die maximale Breite der a11ytip-Box.
   - Dies verhindert, dass extrem langer Inhalt den a11ytip übermäßig ausdehnt.
   - Werteformat: Ein CSS `<length>` Wert (z.B. `14ch`, `150px`).

10. `data-a11ytip-start-position` und `data-a11ytip-end-position`:
    - Startpunkt der a11ytip Animation (`start`) und endpunkt (`end`).
    - Werteformat: CSS `<length>` Werte (z.B. `4px`, `2rem`).

11. `data-a11ytip-transition-duration`:
    - Passt die Übergangsdauer des a11ytips an.
    - Werteformat: Eine gültige Zeitdauer (z.B. `350ms`, `0.5s`).

12. `data-a11ytip-delay`:
    - Ändert die Verzögerung, bevor der a11ytip angezeigt wird.
    - Werteformat: Eine Zahl in Millisekunden (z.B. `250`, `1000`).
    - Standardwert: `500` (500 Millisekunden).

13. `data-a11ytip-active`:
    - Erzwingt den aktiven Status eines a11ytips dauerhaft, ohne dass ein Hover-Event erforderlich ist.
    - Nützlich zum Überprüfen der Positionierung oder während der Entwicklung.
    - Werteformat: Keine Werte erforderlich, allein das Vorhandensein des Attributs aktiviert den Effekt.

14. `data-a11ytip-z-index`:
    - Steuert die Stapelreihenfolge des a11ytips und bestimmt, ob er über oder unter anderen Elementen erscheint.
    - Werteformat: Eine positive Ganzzahl (z.B. `100`, `999`, `1000`).
    - Standardwert: `100`.

---

**Beispiel mit allen verfügbaren Data-Attributen:**

```html
<button
  data-a11ytip-top
  aria-label="Ich bin ein freches a11ytip!"
  data-a11ytip-text="Dieser Text wird angezeigt"
  data-a11ytip-active

  <!-- Styling -->
  data-a11ytip-text-size="2rem"
  data-a11ytip-text-color="hotpink"
  data-a11ytip-bg-color="#1a1a1a"
  data-a11ytip-padding-left="1rem"
  data-a11ytip-padding-right="1rem"
  data-a11ytip-padding-top="0.8rem"
  data-a11ytip-padding-bottom="0.8rem"
  data-a11ytip-border-radius="1rem"
  data-a11ytip-box-shadow="0 10px 25px rgba(0, 0, 0, 0.2)"
  data-a11ytip-max-width="20ch"
  data-a11ytip-start-position="4px"
  data-a11ytip-end-position="12px"
  data-a11ytip-transition-duration="200ms"
  data-a11ytip-delay="1000"
  data-a11ytip-z-index="999"
>
  Hover mich
</button>
```
