### Anwenden eines a11ytip auf ein Element

Um ein a11ytip auf ein Element anzuwenden, muss das Element folgende Eigenschaften haben:

1. Ein `data-a11ytip-*` Attribut zur Definition der Position des a11ytip.
   Verfügbare Positionen:
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

2. Entweder ein `aria-label` Attribut ODER ein `data-a11ytip-text` Attribut zur Definition des Textinhalts des a11ytip.

Beispiel mit `aria-label`:

```html

<button data-a11ytip-top aria-label="Hover mich">Hover mich</button>
```

Beispiel mit `data-a11ytip-text`:

```html

<button data-a11ytip-top data-a11ytip-text="Hover mich">Hover mich</button>
```

### Verwendung von `data-a11ytip-text` vs. `aria-label`

Das a11ytip-System bestimmt den Textinhalt basierend auf der folgenden Priorität:

1. **Höchste Priorität**: `data-a11ytip-text` - Falls vorhanden, wird der Wert dieses Attributs als a11ytip-Text verwendet.
2. **Fallback**: `aria-label` - Falls `data-a11ytip-text` nicht vorhanden ist, wird der `aria-label` Wert verwendet.

**Wichtig: Wenn sowohl `aria-label` als auch `data-a11ytip-text` vorhanden sind, hat `data-a11ytip-text` Vorrang!**

Diese Prioritätsregel bietet Ihnen folgende Vorteile:

- Sie können `aria-label` für Bildschirmlesegeräte verwenden, während Sie einen anderen Text im visuellen a11ytip anzeigen
- Sie können den a11ytip-Text überschreiben, ohne die Barrierefreiheitsbeschriftung zu beeinträchtigen
- Sie behalten Flexibilität in Ihrem Markup

Beispiel für verschiedene Texte für Bildschirmlesegeräte und visuelle a11ytip:

```html

<button
	data-a11ytip-top
	aria-label="Schließe das Dialogfenster für besseres Chackra"
	data-a11ytip-text="Schließen"
>
	Schließen
</button>
```

In diesem Beispiel:
- Bildschirmlesegeräte werden "Schließe das Dialogfenster für besseres Chackra" vorlesen (aus `aria-label`)
- Das visuelle a11ytip wird "Schließen" anzeigen (aus `data-a11ytip-text`)

Positionierung:

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

Aktiv-Status erzwingen:

Mit der Eigenschaft `data-a11ytip-active` kann der aktive Status eines a11ytip permanent erzwungen werden, ohne dass ein
Hover-Ereignis erforderlich ist. Dies ist besonders nützlich, um die Positionierung zu überprüfen oder während der
Entwicklung.

Beispiel:

```html

<button data-a11ytip-top data-a11ytip-active aria-label="Ich bin immer sichtbar!">Kein Hover nötig</button>
```

Hinweise:

- Das `data-a11ytip-*` Attribut bestimmt, wo das a11ytip relativ zum Element erscheint.
- Bei einfachen Positionen (`top`, `right`, `bottom`, `left`) sind die Tooltips zentriert ausgerichtet.
- Bei kombinierten Positionen (z.B. `right-top`) wird das Tooltip am entsprechenden Rand des Elements ausgerichtet.
- Das a11ytip-System erstellt das a11ytip dynamisch unter Verwendung des Textinhalts (siehe Abschnitt "Verwendung von `data-a11ytip-text` vs. `aria-label`").
- Zusätzliche Anpassungen können durch Hinzufügen weiterer `data-*` Attribute erreicht werden (siehe Beispiele unten).

---

### Anpassen von a11ytip mit a11ytip_config.css

Die CSS-Variablen sind selbsterklärend und steuern die Eigenschaften der a11ytip.
Ändern Sie die Variablen entsprechend Ihren Bedürfnissen.

```css
/* a11ytip_config.css */

:root {
    /* Text */
    --a11ytip-text-size: 1rem;
    --a11ytip-text-color: white;

    /* Box */
    --a11ytip-bg-color: var(--color-base-700, black);
    --a11ytip-padding-x: 0.375rem;
    --a11ytip-padding-y: 0.5rem;
    --a11ytip-border-radius: 0.375rem;
    --a11ytip-max-width: 10ch;

    /* Animation */
    --a11ytip-start-position: calc(100% + 4px);
    --a11ytip-end-position: calc(100% + 12px);
    --a11ytip-transition-duration: 350ms;
}

/* Dark Theme */
[data-dark],
[data-theme="dark"],
:root.dark {
    --a11ytip-text-color: black;
    --a11ytip-bg-color: var(--color-base-100, white);
}
```

Tailwind-Konfiguration:

```css
/* a11ytip_config.css */

:root {
    /* Text */
    --a11ytip-text-size: theme(fontSize.sm, 0.875rem);
    --a11ytip-text-color: theme(colors.white, #ffffff);

    /* Box */
    --a11ytip-bg-color: theme(colors.gray.900, #111827);
    --a11ytip-padding-x: theme(spacing.1 .5, 0.375rem);
    --a11ytip-padding-y: theme(spacing.2, 0.5rem);
    --a11ytip-border-radius: theme(borderRadius.md, 0.375rem);
    --a11ytip-max-width: theme(spacing.40, 10rem);

    /* Animation */
    --a11ytip-start-position: calc(100% + theme(spacing.1, 0.25rem));
    --a11ytip-end-position: calc(100% + theme(spacing.3, 0.75rem));
    --a11ytip-transition-duration: theme(transitionDuration.300, 300ms);
}

/* Dark Theme */
[data-dark],
[data-theme="dark"],
:root.dark {
    --a11ytip-text-color: theme(colors.black, #000000);
    --a11ytip-bg-color: theme(colors.white, #ffffff);
}
```

#### Dark Theme und benutzerdefinierte Themes

Sie können das Dark Theme mit folgenden vordefinierten Selektoren aktivieren:

- `data-dark` Attribut: `<body data-dark>`
- `data-theme="dark"` Attribut: `<body data-theme="dark">`
- `.dark` Klasse: `<body class="dark">`

Sie können auch eigene benutzerdefinierte Themes erstellen, indem Sie neue Selektoren definieren. Zum Beispiel:

```css
/* Benutzerdefiniertes Pink-Theme */
[data-theme="pink"] {
    --a11ytip-text-color: white;
    --a11ytip-bg-color: darkmagenta;
}
```

### Anpassen von a11ytip mit Data-Attributen

Die CSS a11ytip unterstützen optionale `data-*` Attribute, die es Ihnen ermöglichen, die Standardstile
zu überschreiben, die in den CSS-Variablen definiert sind. Diese Attribute bieten eine einfache Möglichkeit,
a11ytip individuell in Ihrem Markup zu konfigurieren.

Verfügbare Data-Attribute:

1. `data-a11ytip-*`:
    - Bestimmen, wo das a11ytip relativ zum Element erscheint.
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
    - Werteformat: Keine Werte erforderlich, die bloße Anwesenheit des Attributs aktiviert die entsprechende Position.

2. `data-a11ytip-text`:
    - Definiert den Textinhalt des a11ytip.
    - Dieses Attribut hat Vorrang vor `aria-label`, wenn beide vorhanden sind.
    - Werteformat: Beliebige Textzeichenfolge.

3. `data-a11ytip-text-size`:
    - Passt die Schriftgröße des a11ytip-Texts an.
    - Werteformat: `<Zahl>` gefolgt von einer Einheit (z.B. `16px`, `1rem`).

4. `data-a11ytip-text-color`:
    - Ändert die Farbe des a11ytip-Texts.
    - Werteformat: Ein gültiger CSS `<color>` Wert (z.B. `#ffffff`, `rgb(255, 255, 255)` oder `blue`).

5. `data-a11ytip-bg-color`:
    - Verändert die Hintergrundfarbe des a11ytip.
    - Werteformat: Ein gültiger CSS `<color>` Wert.

6. `data-a11ytip-padding-x` und `data-a11ytip-padding-y`:
    - Passt den horizontalen (`x`) und vertikalen (`y`) Innenabstand der a11ytip-Box an.
    - Werteformat: Ein CSS `<length>` Wert (z.B. `0.5rem`, `8px`).

7. `data-a11ytip-border-radius`:
    - Setzt den Rahmenradius der a11ytip-Box für abgerundete Ecken.
    - Werteformat: Ein CSS `<length>` Wert (z.B. `0.375rem`, `5px`).

8. `data-a11ytip-max-width`:
    - Setzt die maximale Breite der a11ytip-Box.
    - Dies verhindert, dass extrem lange Inhalte das a11ytip überdehnen.
    - Werteformat: Ein CSS `<length>` Wert (z.B. `12ch`, `150px`).
    - Standardwert: `12ch` (etwa 12 Zeichen breit).

9. `data-a11ytip-start-position` und `data-a11ytip-end-position`:
    - Positioniert das a11ytip beim Erscheinen (`start`) oder wenn es aktiv wird (`end`).
    - Werteformat: CSS `<length>` Werte (z.B. `4px`, `2rem`).

10. `data-a11ytip-transition-duration`:
    - Passt die Übergangsdauer des a11ytip an.
    - Werteformat: Eine gültige Zeitdauer (z.B. `350ms`, `0.5s`).

11. `data-a11ytip-delay`:
    - Ändert die Verzögerung bis das a11ytip angezeigt wird.
    - Werteformat: Eine Zahl in Millisekunden (z.B. `250`, `1000`).
    - Standardwert: `500` (500 Millisekunden).

12. `data-a11ytip-active`:
    - Erzwingt den aktiven Status eines a11ytip permanent, ohne dass ein Hover-Ereignis erforderlich ist.
    - Nützlich für die Überprüfung der Positionierung oder während der Entwicklung.
    - Werteformat: Keine Werte erforderlich, die bloße Anwesenheit des Attributs aktiviert den Effekt.

Hinweise:

- Jedes `data-*` Attribut ist optional. Wenn ein Attribut nicht definiert ist, wird der CSS-Fallback-Wert
  aus den `:root` benutzerdefinierten Eigenschaften (`var(...)`) verwendet.
- Um die Anpassung über Data-Attribute zu gewährleisten, stellen Sie sicher, dass der a11ytip-Container
  mindestens eine der `data-a11ytip-*` Attribute hat (z.B. `data-a11ytip-top`, `data-a11ytip-right-bottom`,
  `data-a11ytip-left-top`).

---

### Beispiel mit allen Data-Attributen

```html

<button
	data-a11ytip-top
	aria-label="Ich bin ein freches Tooltip!"
    data-a11ytip-text="Dieser text wird angezeigt"
    
    data-a11ytip-active
    
	data-a11ytip-text-size="18px"
	data-a11ytip-text-color="hotpink"
	data-a11ytip-bg-color="#1a1a1a"
	data-a11ytip-padding-x="1rem"
	data-a11ytip-padding-y="0.8rem"
	data-a11ytip-border-radius="1rem"
	data-a11ytip-max-width="20ch"
	data-a11ytip-start-position="4px"
	data-a11ytip-end-position="12px"
	data-a11ytip-transition-duration="200ms"
    data-a11ytip-delay="1000"
>
	Hover mich
</button>
```

