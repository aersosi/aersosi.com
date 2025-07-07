---
pubDate: 2025-06-08
title: "Tooltips – (Almost) CSS only but a11y first"
description: "Lorem Ipsum Description"
image:
  url: "/src/images/blog/2.jpg"
  alt: "Lorem Ipsum Image Text"
tags: ["CSS", "A11y", "Tooltip"]
---

### Lorem Ipsum Tooltip

How to trigger the tooltip

```javascript
<script is:inline>
    window.addEventListener('DOMContentLoaded', () => {
    const tooltipElements = document.querySelectorAll('[tooltip-top], [tooltip-right], [tooltip-bottom], [tooltip-left]');
    let activeTooltipDelayMap = new WeakMap();

    tooltipElements.forEach((el) => {
    let delay;

    const show = () => {
    delay = setTimeout(() => {
    el.classList.add('tooltip-active');
}, 500);
    activeTooltipDelayMap.set(el, delay);
};

    const hide = () => {
    clearTimeout(activeTooltipDelayMap.get(el));
    el.classList.remove('tooltip-active');
};

    el.addEventListener('mouseenter', show);
    el.addEventListener('mouseleave', hide);
});

    // Check if mouse is over the tooltip element on the page load
    window.addEventListener('mousemove', function onFirstMouseMove(e) {
    tooltipElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom
    ) {
    // Trigger Tooltip
    const delay = setTimeout(() => {
    el.classList.add('tooltip-active');
}, 500);
    activeTooltipDelayMap.set(el, delay);
}
});

    // Check only at the first mouse move after page load
    window.removeEventListener('mousemove', onFirstMouseMove);
});
});
</script>
```

### Lorem Ipsum Tooltip

```css
/* Configuration */
:root {
    --tooltip-start-position: calc(100% + 4px);
    --tooltip-end-position: calc(100% + 12px);
    --tooltip-transition-duration: 350ms;


    /* Text */
    --tooltip-text-size: 16px;
    --tooltip-text-color: white;

    /* Box */
    --tooltip-padding-x: 0.375rem;
    --tooltip-padding-y: 0.5rem;
    --tooltip-border-radius: 0.375rem;
    --tooltip-bg-color: var(--color-base-700);
}

/* Dark Theme */
:root.dark {
    --tooltip-text-color: black;
    --tooltip-bg-color: var(--color-base-100);
}

/* Base Styles */
[tooltip-top],
[tooltip-right],
[tooltip-bottom],
[tooltip-left] {
    position: relative;

    &::after {
        /* Base */
        content: attr(aria-label); /* Get Text from aria-label */
        display: inline-block;
        position: absolute;
        overflow: hidden;
        pointer-events: none;

        /* Animation */
        opacity: 0;
        transition-duration: var(--tooltip-transition-duration);
        transition-timing-function: ease-out;

        /* Text */
        font-size: var(--tooltip-text-color);
        color: var(--tooltip-text-color);

        /* Box */
        padding-inline: var(--tooltip-padding-y);
        padding-block: var(--tooltip-border-radius);
        border-radius: var(--tooltip-border-radius);
        background-color: var(--tooltip-bg-color);
    }
}

.tooltip-active::after {
    opacity: 1;
}


/* Position Start */
[tooltip-top]::after {
    bottom: var(--tooltip-start-position);
}

[tooltip-right]::after {
    left: var(--tooltip-start-position)
}

[tooltip-bottom]::after {
    top: var(--tooltip-start-position);
}

[tooltip-left]::after {
    right: var(--tooltip-start-position);
}

/* Position End */
.tooltip-active {
    &[tooltip-top]::after {
        bottom: var(--tooltip-end-position);
    }

    &[tooltip-right]::after {
        left: var(--tooltip-end-position);
    }

    &[tooltip-bottom]::after {
        top: var(--tooltip-end-position);
    }

    &[tooltip-left]::after {
        right: var(--tooltip-end-position);
    }
}
```


### Lorem Ipsum Tooltip

```html
<Button aria-label="Tooltip Text"
        tooltip-bottom
        style="--tooltip-bg-color: red"
>
        Button Text
</Button>
```


If you’ve ever felt overwhelmed by the complexity of modern JavaScript frameworks, you’re not alone. Tools like Astro are here to offer a breath of fresh air—removing friction and letting you focus on building.

### Lorem Ipsum Tooltip

Astro was designed with content-focused websites in mind. That means it doesn’t ship unnecessary JavaScript, lets you write plain HTML and Markdown, and only gets complex *when you need it to*.

Key things learners love:
- No client-side JS by default  
- Markdown and MDX support out of the box  
- Use components *only when necessary*  
- Small learning curve, big results  

### A perfect entry point for learners

Astro lets beginners build real, professional-grade sites without a massive ramp-up. You can start with a few Markdown files and scale up as your skills grow.

And because it integrates with your favorite tools—like Tailwind CSS, React components, or CMS APIs—you’re not locked in.

### Final thoughts

If you're looking to build fast, beautiful websites without burning out on boilerplate, **Astro is the perfect place to start**. As you learn, you’ll appreciate its thoughtful design and how much it respects your time.

Start small. Go fast. Stay focused.
