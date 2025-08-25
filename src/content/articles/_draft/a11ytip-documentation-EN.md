---
pubDate: 2025-06-08
viewerTitle: "a11ytip Docs"
pageDescription: "Official a11ytip documentation"
pageTitle: "a11ytip | Documentation | Arthur Ersosi"
online:
  name: "GitHub"
  href: "https://github.com/aersosi/a11ytip"
  ariaLabel: "a11ytip GitHub Repository"
images:
  [{ src: "src/images/projects/a11ytip/a11ytip-cover.webp", alt: "a11ytip npm package Coverbild" }]
tags: ["CSS", "A11y", "Tooltip"]
---

# a11ytip

Simple, straightforward tooltips.
Easy to implement and to configure. CSS-first with accessibility built in.

- **CSS Variables**: Effortless custom styling
- **Data Attributes**: Granular styling of individual tooltips (Chrome only)
- **Lightweight**: ~7KB CSS (minified) + ~1KB JavaScript (minified)
- **Accessibility first**: Built with screen readers and keyboard navigation in mind
- **Clean design**: Clean, modern aesthetic
- **Theme support**: Light and dark themes included, or just add your own
- **CSS-first architecture**: Minimal JavaScript footprint, maximum flexibility
- **No overengineering**: Simple tooltips that work. No fuss

---

## Installation

1. Install a11ytip:

```bash
npm i @aersosi/a11ytip
```

2. Import minified CSS:

```css
@import "@aersosi/a11ytip/css";
```

3. Import minified JavaScript:

```typescript
import { toggleA11ytip } from "@aersosi/a11ytip/js";

document.addEventListener("DOMContentLoaded", toggleA11ytip);
```

## Usage

**Simplest example:**

```html
<button data-a11ytip-top aria-label="Hover me">Hover me</button>
```

---

## Positioning

```html
<button data-a11ytip-top aria-label="I appear on top!">Hover me</button>
<button data-a11ytip-top-left aria-label="I'm aligned top left!">Hover me</button>
<button data-a11ytip-top-right aria-label="I'm aligned top right!">Hover me</button>

<button data-a11ytip-right aria-label="I appear on the right!">Hover me</button>
<button data-a11ytip-right-top aria-label="I'm aligned right top!">Hover me</button>
<button data-a11ytip-right-bottom aria-label="I'm aligned right bottom!">Hover me</button>

<button data-a11ytip-bottom aria-label="I appear at the bottom!">Hover me</button>
<button data-a11ytip-bottom-left aria-label="I'm aligned bottom left!">Hover me</button>
<button data-a11ytip-bottom-right aria-label="I'm aligned bottom right!">Hover me</button>

<button data-a11ytip-left aria-label="I appear on the left!">Hover me</button>
<button data-a11ytip-left-top aria-label="I'm aligned left top!">Hover me</button>
<button data-a11ytip-left-bottom aria-label="I'm aligned left bottom!">Hover me</button>
```

---

## a11ytip Text

1. The text of an a11ytip is primarily defined via the `aria-label`.
2. **Opt-Out:** Alternatively, you can just use the `data-a11ytip-text` attribute.
3. Both attributes, `aria-label` and `data-a11ytip-text`, can be used simultaneously. In this case, the
   text from `data-a11ytip-text` takes precedence and is displayed.

**Example with both attributes:**

```html
<button data-a11ytip-top aria-label="Close the dialog window" data-a11ytip-text="Close dialog">
  Close
</button>
```

The `data-a11ytip-text` determines the displayed a11ytip text (“Close dialog”), while the `aria-label` remains independent.

---

## Force Active Status

With the `data-a11ytip-active` attribute or the `a11ytip-active` class, the active status of an a11ytip can be
permanently forced.

**Example with data attribute:**

```html
<button data-a11ytip-top data-a11ytip-active aria-label="I'm always visible!">
  No hover needed
</button>
```

**Example with `a11ytip-active` class:**

```html
<button data-a11ytip-top class="a11ytip-active" aria-label="I'm always visible!">
  No hover needed
</button>
```

---

## Configuring a11ytips with a11ytip_config.css

- Override the default configuration according to your needs.
- The CSS variables are self-explanatory and control the properties of all a11ytips.
- All typical color, time, and size values can be used, e.g., #fafafa, 2s, px, etc.

**Default configuration:**

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
  --a11ytip-box-shadow:
    0 1px 3px 0 theme(colors.black / 0.25), 0 1px 2px -1px theme(colors.black / 0.1);
  --a11ytip-max-width: 14ch;

  /* Animation */
  --a11ytip-start-position: calc(100% + 2px);
  --a11ytip-end-position: calc(100% + 8px);
  --a11ytip-transition-duration: 250ms;
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

**Tailwind configuration example:**

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

## Dark Theme and Custom Themes

**The dark theme is triggered in the following cases:**

- `data-dark` attribute: `<body data-dark>`
- `data-theme="dark"` attribute: `<body data-theme="dark">`
- `.dark` class: `<body class="dark">`

You can also create your own custom themes by defining new selectors in the `a11ytip_config.css`.

**For example:**

```css
/* Custom pink theme */

[data-theme="pink"] {
  --a11ytip-text-color: white;
  --a11ytip-bg-color: darkmagenta;
}
```

## Customizing single a11ytip with Data Attributes

The CSS a11ytips support optional `data-*` attributes that allow you to override the default configuration of an individual
a11ytip.

**Note:** Data attribute-based customization is currently only supported in Chrome-based browsers.

**Available data attributes:**

1. `data-a11ytip-*`:
   - **These attributes are supported by all browsers!**
   - Determine where the a11ytip appears relative to the element.
   - Available positions:
   - `data-a11ytip-top` (centered)
   - `data-a11ytip-top-left`
   - `data-a11ytip-top-right`
   - `data-a11ytip-right` (centered)
   - `data-a11ytip-right-top`
   - `data-a11ytip-right-bottom`
   - `data-a11ytip-bottom` (centered)
   - `data-a11ytip-bottom-left`
   - `data-a11ytip-bottom-right`
   - `data-a11ytip-left` (centered)
   - `data-a11ytip-left-top`
   - `data-a11ytip-left-bottom`
   - Value format: No values required, the mere presence of the attribute activates the corresponding position.

2. `data-a11ytip-text`:
   - **This attribute is supported by all browsers!**
   - Defines the text content of the a11ytip.
   - This attribute takes precedence over `aria-label` when both are present.
   - Value format: Any text string.

3. `data-a11ytip-text-size`:
   - Adjusts the font size of the a11ytip text.
   - Value format: `<number>` followed by a unit (e.g., `16px`, `1rem`).

4. `data-a11ytip-text-color`:
   - Changes the color of the a11ytip text.
   - Value format: A valid CSS `<color>` value (e.g., `#ffffff`, `rgb(255, 255, 255)` or `blue`).

5. `data-a11ytip-bg-color`:
   - Changes the background color of the a11ytip.
   - Value format: A valid CSS `<color>` value.

6. `data-a11ytip-padding-left`, `data-a11ytip-padding-right`, `data-a11ytip-padding-top`, and
   `data-a11ytip-padding-bottom`:
   - Adjusts the left, right, top, and bottom padding of the a11ytip box individually.
   - Value format: A CSS `<length>` value (e.g., `0.5rem`, `8px`).

7. `data-a11ytip-border-radius`:
   - Sets the border radius of the a11ytip box for rounded corners.
   - Value format: A CSS `<length>` value (e.g., `0.375rem`, `5px`).

8. `data-a11ytip-box-shadow`:
   - Sets the box shadow of the a11ytip box.
   - Value format: A valid CSS `box-shadow` value (e.g., `0 4px 6px rgba(0, 0, 0, 0.1)`, `none`).

9. `data-a11ytip-max-width`:
   - Sets the maximum width of the a11ytip box.
   - This prevents extremely long content from stretching the a11ytip.
   - Value format: A CSS `<length>` value (e.g., `14ch`, `150px`).

10. `data-a11ytip-start-position` and `data-a11ytip-end-position`:

- Starting point of the a11ytip animation (`start`) and end point (`end`).
- Value format: CSS `<length>` values (e.g., `4px`, `2rem`).

11. `data-a11ytip-transition-duration`:

- Adjusts the transition duration of the a11ytip.
- Value format: A valid time duration (e.g., `350ms`, `0.5s`).

12. `data-a11ytip-delay`:

- Changes the delay before the a11ytip is displayed.
- Value format: A number in milliseconds (e.g., `250`, `1000`).
- Default value: `500` (500 milliseconds).

13. `data-a11ytip-active`:

- Forces the active status of an a11ytip permanently, without requiring a hover event.
- Useful for checking positioning or during development.
- Value format: No values required, the mere presence of the attribute activates the effect.

---

**Example with all available data attributes:**

```html
<button
  data-a11ytip-top
  aria-label="I'm a cheeky a11ytip!"
  data-a11ytip-text="This text will be displayed"
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
>
  Hover me
</button>
```
