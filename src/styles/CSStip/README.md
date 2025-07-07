### Applying a CSStip to an Element

To apply a CSStip to an element, the element must have:

1. A `CSStip-*` attribute to define the position of the CSStip.
   Available positions:
    - `CSStip-top`
    - `CSStip-right`
    - `CSStip-bottom`
    - `CSStip-left`

2. An `aria-label` attribute to define the text content of the CSStip.

Example:
```html
<button CSStip-top aria-label="This is a CSStip">
   Hover over me
</button>
```

Notes:
- The `CSStip-*` attribute determines where the CSStip will appear relative to the element.
- The CSStip system builds the CSStip dynamically using the `aria-label` content, so adding `aria-label` is mandatory.
- Additional customization can be achieved by adding `data-*` attributes (see examples below).

---

### Customizing CSStips with Data Attributes

The CSS CSStips support optional `data-*` attributes that allow you to override the default styles
defined in the CSS variables. These attributes provide a powerful way to dynamically configure CSStips
directly in your markup.

Available Data Attributes:

1. `data-CSStip-text-size`:
    - Customize the font size of the CSStip text.
    - Value format: `<number>` followed by a unit (e.g., `16px`, `1rem`).

2. `data-CSStip-text-color`:
    - Change the color of the CSStip text.
    - Value format: A valid CSS `<color>` (e.g., `#ffffff`, `rgb(255, 255, 255)`, or `blue`).

3. `data-CSStip-bg-color`:
    - Modify the background color of the CSStip.
    - Value format: A valid CSS `<color>`.

4. `data-CSStip-padding-x` and `data-CSStip-padding-y`:
    - Adjust the horizontal (`x`) and vertical (`y`) padding inside the CSStip box.
    - Value format: A CSS `<length>` value (e.g., `0.5rem`, `8px`).

5. `data-CSStip-border-radius`:
    - Set the border-radius of the CSStip box for rounded corners.
    - Value format: A CSS `<length>` value (e.g., `0.375rem`, `5px`).

6. `data-CSStip-max-width`:
    - Set the maximum width of the CSStip box.
    - This prevents extra-long content from stretching the CSStip.
    - Value format: A CSS `<length>` value (e.g., `12ch`, `150px`).
    - Default value: `12ch` (approximately 12 characters wide).

7. `data-CSStip-start-position` and `data-CSStip-end-position`:
    - Position the CSStip when it appears (`start`) or becomes active (`end`).
    - Value format: CSS `<length>` values (e.g., `4px`, `2rem`).

8. `data-CSStip-transition-duration`:
    - Adjust the CSStip's transition duration.
    - Value format: A valid time duration (e.g., `350ms`, `0.5s`).

Notes:
- Each `data-*` attribute is optional. If an attribute is not defined, the CSS fallback value from the
  `:root` custom properties (`var(...)`) will be used instead.
- To ensure customization via data attributes, make sure the CSStip container has at least one of the
  `CSStip-*` classes (`CSStip-top`, `CSStip-right`, `CSStip-bottom`, or `CSStip-left`).

---

### Example with all Data Attributes

Example:
```html
<button CSStip-top
        aria-label="Custom CSStip"
        data-CSStip-text-size="14px"
        data-CSStip-text-color="red"
        data-CSStip-bg-color="#000000"
        data-CSStip-padding-x="1rem"
        data-CSStip-padding-y="1.5rem"
        data-CSStip-border-radius="0.5rem"
        data-CSStip-max-width="16ch"
        data-CSStip-start-position="8px"
        data-CSStip-end-position="16px"
        data-CSStip-transition-duration="500ms">
   Hover over me
</button>
```
