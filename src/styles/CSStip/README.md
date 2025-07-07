### Applying a Tooltip to an Element

To apply a tooltip to an element, the element must have:

1. A `tooltip-*` attribute to define the position of the tooltip.
   Available positions:
    - `tooltip-top`
    - `tooltip-right`
    - `tooltip-bottom`
    - `tooltip-left`

2. An `aria-label` attribute to define the text content of the tooltip.

Example:
```html
<button tooltip-top aria-label="This is a tooltip">
   Hover over me
</button>
```

Notes:
- The `tooltip-*` attribute determines where the tooltip will appear relative to the element.
- The tooltip system builds the tooltip dynamically using the `aria-label` content, so adding `aria-label` is mandatory.
- Additional customization can be achieved by adding `data-*` attributes (see examples below).

---

### Customizing Tooltips with Data Attributes

The CSS tooltips support optional `data-*` attributes that allow you to override the default styles
defined in the CSS variables. These attributes provide a powerful way to dynamically configure tooltips
directly in your markup.

Available Data Attributes:

1. `data-tooltip-text-size`:
    - Customize the font size of the tooltip text.
    - Value format: `<number>` followed by a unit (e.g., `16px`, `1rem`).

2. `data-tooltip-text-color`:
    - Change the color of the tooltip text.
    - Value format: A valid CSS `<color>` (e.g., `#ffffff`, `rgb(255, 255, 255)`, or `blue`).

3. `data-tooltip-bg-color`:
    - Modify the background color of the tooltip.
    - Value format: A valid CSS `<color>`.

4. `data-tooltip-padding-x` and `data-tooltip-padding-y`:
    - Adjust the horizontal (`x`) and vertical (`y`) padding inside the tooltip box.
    - Value format: A CSS `<length>` value (e.g., `0.5rem`, `8px`).

5. `data-tooltip-border-radius`:
    - Set the border-radius of the tooltip box for rounded corners.
    - Value format: A CSS `<length>` value (e.g., `0.375rem`, `5px`).

6. `data-tooltip-max-width`:
    - Set the maximum width of the tooltip box.
    - This prevents extra-long content from stretching the tooltip.
    - Value format: A CSS `<length>` value (e.g., `12ch`, `150px`).
    - Default value: `12ch` (approximately 12 characters wide).

7. `data-tooltip-start-position` and `data-tooltip-end-position`:
    - Position the tooltip when it appears (`start`) or becomes active (`end`).
    - Value format: CSS `<length>` values (e.g., `4px`, `2rem`).

8. `data-tooltip-transition-duration`:
    - Adjust the tooltip's transition duration.
    - Value format: A valid time duration (e.g., `350ms`, `0.5s`).

Notes:
- Each `data-*` attribute is optional. If an attribute is not defined, the CSS fallback value from the
  `:root` custom properties (`var(...)`) will be used instead.
- To ensure customization via data attributes, make sure the tooltip container has at least one of the
  `tooltip-*` classes (`tooltip-top`, `tooltip-right`, `tooltip-bottom`, or `tooltip-left`).

---

### Example with all Data Attributes

Example:
```html
<button tooltip-top
        aria-label="Custom Tooltip"
        data-tooltip-text-size="14px"
        data-tooltip-text-color="red"
        data-tooltip-bg-color="#000000"
        data-tooltip-padding-x="1rem"
        data-tooltip-padding-y="1.5rem"
        data-tooltip-border-radius="0.5rem"
        data-tooltip-max-width="16ch"
        data-tooltip-start-position="8px"
        data-tooltip-end-position="16px"
        data-tooltip-transition-duration="500ms">
   Hover over me
</button>
```
