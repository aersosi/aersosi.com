---
pubDate: 2025-06-08
viewerTitle: "a11ytip3"
viewerDescription: "Mit viel gutem CSS und wenig JavaScript."
images: [ {
  src: "/src/images/articles/1.jpg",
  alt: "Lorem Ipsum"
} ]
tags: [ "Tooltip" ]
---

## a11ytip – Barrierefreie Tooltips

Kennen Sie das? Sie sind ein junger, ziemlich gut aussehender Web-Entwickler (trotzdem Single) und wollen ihrer
minimalistisch designten trendy Website/App ein bisschen mehr informativen Kontext durch Tooltips geben? Die Tooltips
sind ein bisschen Text in einem schwarzen Kasten, denken Sie! Wie kompliziert kann das bloß sein??? Denken Sie!!!

Man findet CSS-Schnipsel, die eine grobe Richtung weisen, wie man sowas mit CSS machen kann. Aber dann: Selber bauen?
Gar kein Bock!

Also muss 1 Library her. Nach kurzem googlen und `npm i tooltip-library-x` krallen Sie sich in den ergonomischen
Schreibtischstuhl (1200 €) und starren entsetzt und schweißgebadet auf den Bildschirm des MacBook M4 Pro 16" (3400 €).
Dem node_modules Ordner geht es garnicht gut, denn er hat jetzt das Gewicht des supermassiven schwarzen Loches im
Zentrum der Milchstraße.

## Bestandsaufnahme

Tooltips als CSS einzubinden hat nur Hint.css verstanden. Alle anderen Libraries (die ich auf der ersten Google-Seite
gefunden habe lol) antworten auf die Frage: "Wie viel JavaScript kann man auf einem Rechner installieren?" mit einem
zünftigen "Ja, ich will!". Die sollen alle mal mit ihrem Popper.js chillen. Ich meine, wer braucht das und warum sollte
man das wollen? Dann wollen die alle, dass ich JavaScript schreibe, damit unter den 6 Icons onHover "Hell/Dunkel Modus" steht. Klar gibt
es Anwendungsfälle für ihre overengineereten Tooltip Libraries, aber ich bin es auf jeden Fall nicht.

### Schauen wir uns mal die Kandidaten an:

**Tippy.js** – installiert Popper.js als Dependency und ist absolut overengineered. Gar kein Bock! Quatsch Animationen = warum?

**Hint.css** – funktioniert zwar, aber ehrlich gesagt finde ich die ein bisschen hässlich. Diese Tooltips glauben sie
seien eine Sprechblase und haben einen Zipfel. Genau wie im Comic! Wir haben 2025, get over it! Der Zipfel muss ab,
sag ich!

**Bootstrap Tooltips** – wieder Popper.js – give me a break! Und die Data-Attribute sind nicht geprefixed. Damit kommt man sich irgendwann
mit anderen Data-Attributen in die Quere. Außerdem: Bootstrap ist nur was für Backend-Developer.

**Syncfusion Tooltips** – hässlich, overengineered und ich habe keine Zeit JavaScript zu schreiben, nur damit da drei
Tooltips manchmal erscheinen. Zumindest nicht, wenn es auch anders geht.

Mir ist das Kosten-Nutzen-Verhältnis einfach zu unausgewogen bei den prominenten Tooltip Libraries. Ich check einfach
nicht, warum die so massiv overengineered sind und am Ende dann einfach trotzdem scheiße aussehen.

So, was macht man denn da? Wir sind ja alle faul, hört man gelegentlich und ich bin es auch. Aber vielleicht bin ich
slightly weniger faul, denn ich hab da mal was gebaut.

Sanfte Animation. Ein Tooltip muss auftauchen und wieder verschwinden, mehr nicht. Es muss sich nicht drehen, springen
oder wer weiß was machen, wenn man gerade nicht hinschaut.

## Viel gutes CSS und wenig JavaScript.

### Die Idee:

1. Das darf doch wohl nicht so schwer sein!
2. CSS first weil KISS (nicht die Band)
3. Mit Tailwind kompatibel, sonst bekommen alle direkt Herzrhythmusstörungen
4. No-brainer in der Anwendung
5. Winziges Packmaß (wie Ryanair, ohne Upgrade)
6. A11y first (Warum? Bessere Frage: Warum nicht?)
7. Easy zu customizen
8. Grab & run, wie shadcn

### Die Umsetzung:

Eeeeeigentlich sollte es 100% CSS sein. Aber eeeeigentlich konnte ich die Delay-Zeit der Rein- und Raus-Animation mit
CSS nicht gut steuern. Falls man mal mausrutscht, sollten nicht überall Tooltips aufploppen, deswegen das
Animations-Delay zu Beginn. Aber das Tooltip soll auch sofort verschwinden, wenn man vom getooltippten Element
herunterhuscht. Ich habe also doch das Nötigste in JavaScript geschrieben. Weiterhin checke ich im JavaScript ob das a11ytip
**beim Seitenladen** erscheint, **wenn die Maus bereits über dem** getooltippten Element ist.

Dann wollen wir ja alle mehr A11y sein bzw. ist es inzwischen Legislatur. Deswegen wird der a11ytip-Text aus dem
aria-label des Elements erzeugt.

Zur Erklärung:

`aria-label` und Tooltips verfolgen das gleiche Ziel: sie wollen den Informationsgehalt dieses Elements
steigern/ergänzen. Da ist es naheliegend, beides zusammen zu denken.

Was auch richtig nice ist: Die CSS `attr()`-Funktion hat vor kurzem ein Upgrade erhalten, und damit konnte ich eine
gezielte Anpassung einzelner a11ytip durch Data-Attribute implementieren. Das ist, stand heute, nur in Chrome drin,
aber sollte bald überall implementiert sein.

## Betriebsanleitung

1. Einfach das CSS und JavaScript in dein Projekt kopieren, wohin du es eben haben willst und verlinken.
2. CSS: `<link rel="stylesheet" href="a11ytip.css">`
3. JavaScript: `<script src="a11ytip.js"></script>`
4. HTML: Bam, Tooltip!

```html
<button a11ytip-top aria-label="Hover mich">Hover mich</button>
```

<button a11ytip-top aria-label="Hover mich">
    Hover mich
</button>

### Ein wildes **a11tip** ist erschienen!

Easy peasy positionierung!

```html
<button a11ytip-top aria-label="Ich erscheine oben!">Hover mich</button>
<button a11ytip-top-left aria-label="Ich bin oben links ausgerichtet!">Hover mich</button>
<button a11ytip-top-right aria-label="Ich bin oben rechts ausgerichtet!">Hover mich</button>

<button a11ytip-right aria-label="Ich erscheine rechts!">Hover mich</button>
<button a11ytip-right-top aria-label="Ich bin rechts oben ausgerichtet!">Hover mich</button>
<button a11ytip-right-bottom aria-label="Ich bin rechts unten ausgerichtet!">Hover mich</button>

<button a11ytip-bottom aria-label="Ich erscheine unten!">Hover mich</button>
<button a11ytip-bottom-left aria-label="Ich bin unten links ausgerichtet!">Hover mich</button>
<button a11ytip-bottom-right aria-label="Ich bin unten rechts ausgerichtet!">Hover mich</button>

<button a11ytip-left aria-label="Ich erscheine links!">Hover mich</button>
<button a11ytip-left-top aria-label="Ich bin links oben ausgerichtet!">Hover mich</button>
<button a11ytip-left-bottom aria-label="Ich bin links unten ausgerichtet!">Hover mich</button>
```

### Globales Looksmaxing

Die a11ytip sind dir nicht Alpha genug? Bam, Config!

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
:root.dark {
	--a11ytip-text-color: black;
	--a11ytip-bg-color: var(--color-base-100, white);
}
```

### Kein Tailwind = Herzrhythmusstörungen?

```css
/* a11ytip_config.css */

:root {
	/* Text */
	--a11ytip-text-size: theme(fontSize.sm, 0.875rem);
	--a11ytip-text-color: theme(colors.white, #ffffff);

	/* Box */
	--a11ytip-bg-color: theme(colors.gray.900, #111827);
	--a11ytip-padding-x: theme(spacing.1.5, 0.375rem);
	--a11ytip-padding-y: theme(spacing.2, 0.5rem);
	--a11ytip-border-radius: theme(borderRadius.md, 0.375rem);
	--a11ytip-max-width: theme(spacing.40, 10rem);

	/* Animation */
	--a11ytip-start-position: calc(100% + theme(spacing.1, 0.25rem));
	--a11ytip-end-position: calc(100% + theme(spacing.3, 0.75rem));
	--a11ytip-transition-duration: theme(transitionDuration.300, 300ms);
}

/* Dark Theme */
:root.dark {
	--a11ytip-text-color: theme(colors.black, #000000);
	--a11ytip-bg-color: theme(colors.white, #ffffff);
}
```

### Einzelne Tooltips looksmaxen

Du möchtest ein einzelnes a11ytip anpassen? Sicher, sicher?! Bam, ein freche gestyltes einzelnes Tooltip!

Das System unterstützt eine Vielzahl von Data-Attributen für die individuelle Anpassung:

- `data-a11ytip-text` - Überschreibt den `aria-label` Text für das visuelle Tooltip
- `data-a11ytip-text-size` - Schriftgröße (z.B. `18px`, `1.2rem`)
- `data-a11ytip-text-color` - Textfarbe (z.B. `hotpink`, `#ff69b4`)
- `data-a11ytip-bg-color` - Hintergrundfarbe (z.B. `#1a1a1a`, `blue`)
- `data-a11ytip-padding-x` / `data-a11ytip-padding-y` - Innenabstand horizontal/vertikal
- `data-a11ytip-border-radius` - Rahmenradius für abgerundete Ecken
- `data-a11ytip-max-width` - Maximale Breite (z.B. `20ch`, `200px`)
- `data-a11ytip-start-position` / `data-a11ytip-end-position` - Animationspositionierung
- `data-a11ytip-transition-duration` - Animationsdauer (z.B. `200ms`, `0.5s`)

```html
<button
	a11ytip-top
	aria-label="Ich bin ein freches Tooltip"
	data-a11ytip-text-size="18px"
	data-a11ytip-text-color="hotpink"
	data-a11ytip-bg-color="#1a1a1a"
	data-a11ytip-padding-x="1rem"
	data-a11ytip-padding-y="0.8rem"
	data-a11ytip-border-radius="1rem"
	data-a11ytip-max-width="20ch"
	data-a11ytip-transition-duration="200ms"
>
	Hover mich
</button>
```

### Richtiger Flex: Unterschiedliche Texte für Screenreader vs. Bildschirm

Das ist peak A11y! Der Screenreader bekommt den vollen Kontext, während das visuelle Tooltip kurz und knackig bleibt.
Mind = blown!

- Screenreader sagt: "Schließe das Dialogfenster für besseres Chakra"
- Visuelles Tooltip zeigt: "Schließen"

```html
<button
	a11ytip-top
	aria-label="Schließe das Dialogfenster für besseres Chackra"
	data-a11ytip-text="Schließen"
>
	Schließen
</button>
```

### Content Priority (Weil ich bin ein Fuchs!)

Der Text wird erzeugt nach folgenden Priorität:

1. **Höchste Priorität**: `data-a11ytip-text` - Falls vorhanden, wird der Wert dieses Attributs als a11ytip-Text verwendet.
2. **Fallback**: `aria-label` - Falls `data-a11ytip-text` nicht vorhanden ist, wird der `aria-label` Wert verwendet.

Nur aria-label: Screenreader UND Tooltip zeigen "Dokument speichern"

```html
<button a11ytip-bottom aria-label="Dokument speichern">Speichern</button>
```

Nur data-a11ytip-text: Screenreader sagt nichts (kein aria-label), Tooltip zeigt "Dokument speichern"

```html
<button a11ytip-bottom data-a11ytip-text="Dokument speichern">Speichern</button>
```

Beide Attribute: Screenreader sagt "Dokument im Projektordner speichern", Tooltip zeigt "Speichern"

```html
<button
	a11ytip-bottom
	aria-label="Dokument im Projektordner speichern"
	data-a11ytip-text="Speichern"
>
	Speichern
</button>
```

### Zwei Wege führen nach Rom

Du hast zwei Möglichkeiten, um a11ytip zu verwenden:

**Variante 1: Nur `aria-label`**

```html
<button a11ytip-top aria-label="Hover mich">Hover mich</button>
```

**Variante 2: Mit `data-a11ytip-text`**

```html
<button a11ytip-top data-a11ytip-text="Hover mich">Hover mich</button>
```

Beide Varianten funktionieren, aber wenn du verschiedene Texte für Screenreader und visuelles Tooltip willst, ist die Kombination aus `aria-label` + `data-a11ytip-text` der Weg zu gehen.

### Browser-Kompatibilität

Die Data-Attribute funktionieren dank CSS `attr()` - das ist relativ fresh und momentan nur in Chrome verfügbar.
Jetzt aber keine Panik! Fallbacks sind eingebaut, und andere Browser ziehen nach. Bis dahin: CSS-Variablen regeln.

Wenn ein Data-Attribut nicht definiert ist, wird automatisch der CSS-Fallback-Wert aus den `:root` benutzerdefinierten Eigenschaften verwendet. Das System ist also robust und funktioniert auch in älteren Browsern.

## Fazit: Mission possible!

- ✅ Minified ≤ 2kb
- ✅ Accessibility mitgedacht
- ✅ Nicht aussehen wie Windows 95
- ✅ Keine Quatsch-Animationen
- ✅ Kein Gefummel in JavaScript
- ✅ node_modules my ass
- ✅ Customizable ohne Doctor of Computer Science
- ✅ 12 verschiedene Positionierungen
- ✅ Individuelle Anpassung durch Data-Attribute
- ✅ Separate Texte für Screenreader und visuelle Tooltips
- ✅ Tailwind-kompatibel
- ✅ Robust mit Fallbacks

Grab & run, meine lieben Freunde der Sonne! Einfach CSS/JavaScript stehlen und einbinden.

Falls ich hier irgendwelchen Quatsch schreibe und du was besser weißt: Bitte nicht anzeigen!

Pullrequest: [https://github.com/aersosi/a11ytip](https://github.com/aersosi/a11ytip)
<br/>
Oder SMS: https://aersosi.com/#socials
