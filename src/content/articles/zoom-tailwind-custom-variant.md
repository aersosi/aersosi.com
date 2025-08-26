# Website-Zoom mit Tailwind Custom Variants

_Mehr Barrierefreiheit durch Zoom-Funktion. Elegant integriert mit Tailwind CSS_

## Das Problem

12% der Menschen haben eine Form von Sehbeeinträchtigung. Mit dem demografischen Wandel werden immer mehr ältere
Menschen das Internet nutzen, die oft auf größere Schrift angewiesen sind. Die Browser-Zoom-Funktion hilft, aber
Entwickler haben keine Kontrolle darüber, was und wie vergrößert wird. Eine integrierte Website-Zoom-Funktion gibt dir
die volle Kontrolle über das Nutzererlebnis.

```html
<!-- Mit Tailwind: Custom Zoom Variant -->
<div class="zoom:text-lg zoom:p-6 p-4 text-base">Automatisch größer im Zoom-Modus</div>
```

## Die Lösung: Tailwind Custom Variants

### 1. Custom Variant definieren

Genau wie `dark:` für Dark Mode kannst du eine `zoom:` Variant definieren:

```css
@custom-variant zoom (&:where(.zoom, .zoom *));
```

**Alternative mit Data-Attributes:**

```css
@custom-variant zoom (&:where([data-zoom="true"], [data-zoom="true"] *));
```

Diese Custom Variant aktiviert Tailwind-Klassen wie `zoom:text-xl` nur wenn das HTML-Element die entsprechende Klasse
oder das Data-Attribut hat.

**Ein bisschen CSS, ein bisschen JavaScript, ein Button. Fertig.**

### 2. CSS Custom Properties System

```css
@custom-variant zoom (&:where(.zoom, .zoom *));

:root {
  --zoom-factor: 1;
}

:root.zoom {
  --zoom-factor: 1.125;

  /* Spezielle Styles für tailwindcss/typography  */
  .prose-base {
    font-size: calc(1rem * var(--zoom-factor, 1));
    line-height: calc(1.75 * var(--zoom-factor, 1));
  }

  /* Trick 18 für z. B. SVGs */
  svg {
    transform: scale(var(--zoom-factor, 1));
  }
}

/* Das Herzstück. Wir überschreiben die Tailwind Variablen ganz gezielt */
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

Durch die Neudefinition der Tailwind-Theme-Variablen im `@theme`-Block werden alle Utility-Klassen automatisch mit den
neuen Werten berechnet.

### 3. HTML Markup

```html
<button
  data-zoom-toggle
  class="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white"
  aria-label="Vergrößern"
>
  <svg class="zoomInIcon" />
  <svg class="zoomOutIcon hidden" />
  <span class="zoomText">Vergrößern</span>
</button>
```

### 4. JavaScript für State-Management

```javascript
const ZOOM_TEXTS = {
  zoomIn: "Verkleinern",
  zoomOut: "Vergrößern",
};

const isZoomed = () => document.documentElement.classList.contains("zoom");

const updateButtons = (zoomed) => {
  const text = zoomed ? ZOOM_TEXTS.zoomIn : ZOOM_TEXTS.zoomOut;

  document.querySelectorAll("[data-zoom-toggle]").forEach((button) => {
    button.setAttribute("aria-checked", zoomed.toString());
    button.setAttribute("aria-label", text);

    const zoomInIcon = button.querySelector(".zoomIn");
    const zoomOutIcon = button.querySelector(".zoomOut");

    if (zoomInIcon) zoomInIcon.classList.toggle("hidden", !zoomed);
    if (zoomOutIcon) zoomOutIcon.classList.toggle("hidden", zoomed);

    const textEl = button.querySelector(".zoomText");
    if (textEl) textEl.textContent = text;
  });
};

const setZoom = (shouldZoom) => {
  document.documentElement.classList.toggle("zoom", shouldZoom);
  localStorage.setItem("zoom", shouldZoom.toString());
  updateButtons(shouldZoom);
};

const toggleZoom = () => setZoom(!isZoomed());

setZoom(localStorage.getItem("zoom") === "true");

document.querySelectorAll("[data-zoom-toggle]").forEach((button) => {
  button.addEventListener("click", toggleZoom);
});

document.addEventListener("keydown", (e) => {
  if (e.altKey && e.key === "z") {
    toggleZoom();
    e.preventDefault();
  }
});
```

## Vorteile der Lösung

### Performance

- **Nur ein Reflow beim Toggle** statt hunderte DOM-Updates
- **CSS-only Animation** durch Custom Properties
- **Kein Layout Thrashing** während des Zoomens

### Skalierbarkeit

- **Ein Zoom-Factor** steuert alle Elemente
- **Tailwind-Workflow bleibt gleich** - keine neuen CSS-Klassen
- **TypeScript-Unterstützung** für Custom Variants

### Barrierefreiheit (WCAG 2.1 AA konform)

- **1.4.4 Text auf 200% vergrößerbar** ✓
- **2.1.1 Tastatur-Navigation** (Alt+Z) ✓
- **4.1.2 Korrekte ARIA-Labels** ✓

### Developer Experience

```html
<!-- Einfach und intuitiv -->
<article class="prose zoom:prose-lg">
  <h1 class="zoom:text-4xl text-3xl">Titel wird größer</h1>
  <p class="zoom:text-lg zoom:leading-loose text-base leading-relaxed">Text wird besser lesbar.</p>
</article>
```

## Erweiterte Features

### Multiple Zoom-Level

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

@media (prefers-reduced-motion: reduce) {
  :root {
    transition: none; /* Keine Animationen für motion-sensitive User */
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

Dank **Tailwind Custom Variants** ist es Junior-Developer-leicht eine skalierbares, performantes und barrierefreies
Zoom-Feature in eine Website zu integrieren. Durch einmaliges Setup kann man, mit gewohnten Tailwind-Utilities
responsive Zoom-Verhalten implementieren. Easy peasy lemon squeezy.
