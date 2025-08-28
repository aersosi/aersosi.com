---
pubDate: 2025-08-26
viewerTitle: "Zoom-Feature mit Tailwind"
pageDescription: "Eine einfache Zoom-Funktion für bessere Accessibility durch Tailwind @custom-variant"
pageTitle: "Zoom-Feature mit Tailwind @custom-variant | Arthur Ersosi"
images:
  [
    {
      src: "src/images/articles/zoomCustomVariant-cover.webp",
      alt: "Website Zoom Feature mit Tailwind @custom-variant Directive ",
    },
  ]
tags: ["Tailwind CSS", "A11y", "CSS", "JavaScript", "Zoom"]
---

## Das Problem

12% der Menschen haben eine Form von Sehbeeinträchtigung. Durch den demografischen Wandel nutzen auch immer mehr ältere
Menschen das Internet, für die eine größere Schrift hilfreich ist. Die Browser-Zoom-Funktion hilft, ist aber auf mobilen
Browsern nicht vorhanden. Außerdem haben Entwickler keine Kontrolle darüber, was und wie vergrößert wird. Eine
integrierte Website-Zoom-Funktion ermöglicht die volle Kontrolle über das Nutzererlebnis.

## Die Lösung: Tailwind @custom-variant Directive

Mehr Accessibility durch Zoom-Funktion. Elegant und skalierbar realisiert mit Tailwind CSS Custom Variants.

Durch die `@custom-variant` Directive in Tailwind CSS können wir eigene Präfix-Varianten definieren. Ähnlich wie `dark:`
oder `hover:`, aber für unsere spezifischen Bedürfnisse. Das bedeutet: Wir können eine `zoom:` Variante erstellen, die
nur dann aktiv wird, wenn der Zoom-Modus eingeschaltet ist.

**Beispiel:**

```html
<div class="zoom:text-xl zoom:p-8 p-4 text-base">Text größer im Zoom-Modus</div>
```

## Die Implementierung

**Ein bisschen CSS, ein bisschen JavaScript, ein bisschen Markup. Fertig.**

### 1. Custom Variant definieren

Genau wie `dark:` für Dark Mode kannst du eine `zoom:` Variant definieren:

```css
@custom-variant zoom (&:where(.zoom, .zoom *));
```

**Alternative mit Data-Attribut:**

```css
@custom-variant zoom (&:where([data-zoom="true"], [data-zoom="true"] *));
```

Diese Zeile aktiviert Tailwind-Klassen wie `zoom:text-xl` nur, wenn das HTML-Tag die entsprechende Klasse oder das
Data-Attribut hat.

### 2. Tailwind Variablen

So sieht meine komplette Implementierung in CSS aus:

```css
@custom-variant zoom (&:where(.zoom, .zoom *));

:root {
  --zoom-factor: 1;
}

:root.zoom {
  --zoom-factor: 1.125;

  /* Spezielle Styles für tailwindcss/typography */
  .prose-base {
    font-size: calc(1rem * var(--zoom-factor, 1));
    line-height: calc(1.75 * var(--zoom-factor, 1));
  }

  /* Trick 18 für z. B. SVGs */
  svg {
    transform: scale(var(--zoom-factor, 1));
  }
}

/* Das Herzstück. Wir überschreiben die Tailwind v4 Variablen ganz gezielt */
@theme {
  --text-xs: calc(0.75rem * var(--zoom-factor, 1));
  --text-xs--line-height: calc(1.33 * var(--zoom-factor, 1));

  --text-sm: calc(0.875rem * var(--zoom-factor, 1));
  --text-sm--line-height: calc(1.43 * var(--zoom-factor, 1));

  --text-base: calc(1rem * var(--zoom-factor, 1));
  --text-base--line-height: calc(1.5 * var(--zoom-factor, 1));

  --text-lg: calc(1.125rem * var(--zoom-factor, 1));
  --text-lg--line-height: calc(1.56 * var(--zoom-factor, 1));

  --text-xl: calc(1.25rem * var(--zoom-factor, 1));
  --text-xl--line-height: calc(1.4 * var(--zoom-factor, 1));

  --text-2xl: calc(1.5rem * var(--zoom-factor, 1));
  --text-2xl--line-height: calc(1.33 * var(--zoom-factor, 1));

  --text-3xl: calc(1.875rem * var(--zoom-factor, 1));
  --text-3xl--line-height: calc(1.2 * var(--zoom-factor, 1));

  --text-4xl: calc(2.25rem * var(--zoom-factor, 1));
  --text-4xl--line-height: calc(1.11 * var(--zoom-factor, 1));

  --text-5xl: calc(3rem * var(--zoom-factor, 1));
  --text-5xl--line-height: calc(1 * var(--zoom-factor, 1));

  --text-6xl: calc(3.75rem * var(--zoom-factor, 1));
  --text-6xl--line-height: calc(1 * var(--zoom-factor, 1));

  --text-7xl: calc(4.5rem * var(--zoom-factor, 1));
  --text-7xl--line-height: calc(1 * var(--zoom-factor, 1));

  --text-8xl: calc(6rem * var(--zoom-factor, 1));
  --text-8xl--line-height: calc(1 * var(--zoom-factor, 1));

  --text-9xl: calc(8rem * var(--zoom-factor, 1));
  --text-9xl--line-height: calc(1 * var(--zoom-factor, 1));
}
```

Durch die Neudefinition der Variablen im `@theme` werden alle Utility-Klassen automatisch mit den neuen Werten
berechnet.

### 3. HTML-Markup

**Simples Beispiel:**

```html
<button data-zoom-toggle class="zoom:hidden" aria-label="Vergrößern">
  <ZoomInIcon />
  Vergrößern
</button>
<button data-zoom-toggle class="zoom:flex hidden" aria-label="Verkleinern">
  <ZoomOutIcon />
  Verkleinern
</button>
```

### 4. JavaScript für State-Management

```javascript
<script>
  function updateZoom(isZoomed) {
    document.documentElement.classList.toggle("zoom", isZoomed);
    localStorage.setItem("zoom", isZoomed ? "true" : "false");
  }

  function initializeZoom() {
    const savedZoom = localStorage.getItem("zoom");
    const isZoomed = savedZoom === "true";
    updateZoom(isZoomed);
  }

  initializeZoom();

  // Attach event listener to all zoom toggles
  document.querySelectorAll("[data-zoom-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const isZoomed = document.documentElement.classList.contains("zoom");
      updateZoom(!isZoomed);
    });
  });

  // Keyboard shortcut: Shift + Control + Z for zoom toggle
  document.addEventListener("keydown", (event) => {
    if (event.shiftKey && event.ctrlKey && event.key === "Z") {
      const isZoomed = document.documentElement.classList.contains("zoom");
      updateZoom(!isZoomed);
      event.preventDefault();
    }
  });
</script>
```

## Vorteile der Lösung

### Performance

- **Nur ein Reflow beim Toggle** statt hunderte DOM-Updates
- **CSS-only Animation** durch Custom Properties
- **Kein Layout Thrashing** während des Zoomens

### Skalierbarkeit

- **Ein Zoom-Factor** steuert alle Elemente
- **Tailwind-Workflow bleibt gleich**, keine neuen CSS-Klassen
- **TypeScript-Unterstützung** für Custom Variants

### Accessibility (WCAG 2.1 AA-konform)

- **1.4.4 Text auf 200% vergrößerbar**
- **2.1.1 Tastatur-Navigation** (Shift + Control + Z)
- **4.1.2 Korrekte ARIA-Labels**

### Einfach und intuitiv nutzen

```html
<article class="prose zoom:prose-lg">
  <h1 class="zoom:text-4xl text-3xl">Titel wird größer</h1>
  <p class="zoom:text-lg zoom:leading-loose text-base leading-relaxed">Text wird besser lesbar.</p>
</article>
```

## Erweiterungen

### Zoom-Level

```css
:root.zoom-small {
  --zoom-factor: 1.0625;
}
:root.zoom-medium {
  --zoom-factor: 1.125;
}
:root.zoom-large {
  --zoom-factor: 1.25;
}
```

```javascript
const ZOOM_LEVELS = ["", "zoom-small", "zoom-medium", "zoom-large"];
let currentLevel = 0;

const cycleZoom = () => {
  document.documentElement.className = document.documentElement.className.replace(/zoom-\w+/g, "");

  currentLevel = (currentLevel + 1) % ZOOM_LEVELS.length;
  if (ZOOM_LEVELS[currentLevel]) {
    document.documentElement.classList.add(ZOOM_LEVELS[currentLevel]);
  }
};
```

### Responsive Zoom

```css
@media (max-width: 768px) {
  :root.zoom {
    --zoom-factor: 1.25; /* Stärkerer Zoom auf Mobile */
  }
}
```

### Komponenten-spezifische Anpassungen

```css
:root.zoom {
  /* Navigation bleibt kompakt */
  .nav-item {
    --zoom-factor: 1.05;
  }

  /* Content wird stark vergrößert */
  .content-area {
    --zoom-factor: 1.2;
  }

  /* Buttons bekommen mehr Padding */
  .btn {
    padding: calc(0.5rem * var(--zoom-factor, 1)) calc(1rem * var(--zoom-factor, 1));
  }
}
```

## Browser-Support & Fallbacks

**Moderne Browser:** Vollständige Unterstützung für Custom Properties und Custom Variants.

**Fallback für ältere Browser:**

```javascript
if (!CSS.supports("--custom: property")) {
  // Fallback: Klassen-basierte Lösung
  const zoomClasses = {
    "text-base": "text-lg",
    "p-4": "p-6",
    // ...
  };

  const applyZoom = () => {
    document.querySelectorAll("[data-zoomable]").forEach((el) => {
      // Klassen direkt austauschen
    });
  };
}
```

## Fazit

Dank **Tailwind @custom-variant** ist es Junior-Developer-leicht, eine skalierbare, performante und barrierefreie
Zoom-Funktion in eine Website zu integrieren. Durch einmaliges Setup kann man mit gewohnten Tailwind-Utilities
responsive Zoom-Verhalten implementieren. Easy peasy lemon squeezy.
