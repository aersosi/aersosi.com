# Arthur Ersosi | Design Engineer

## Personal website and blog

Front-end developer and UI/UX designer with 9+ years of design expertise and 7+ years of web development experience from
Hamburg, Germany. This repository contains the source code for my personal website and portfolio built with Astro.

---

### Project Structure

This project follows an extended Astro structure with additional directories for organization. Here's the current
project structure:

```
/
├── public/              # Static assets served directly
│   ├── favicons/        # Favicon files
│   ├── fonts/           # Web fonts
│   └── img/             # Images
├── src/                 # Source code
│   ├── _definitions/    # Type definitions
│   ├── components/      # UI components
│   │   ├── containers/  # Container components
│   │   ├── elements/    # Basic UI elements (buttons, links, etc.)
│   │   ├── entries/     # Entry components for articles/projects
│   │   ├── global/      # Global components (navigation, footer)
│   │   ├── head/        # Head elements (meta, seo, etc.)
│   │   └── layouts/     # Layout components
│   ├── content/         # Content collections
│   │   ├── articles/    # Blog articles
│   │   ├── pages/       # Static pages content
│   │   └── projects/    # Project portfolio entries
│   ├── images/          # Images processed by Astro
│   ├── lib/             # Utilities and shared code
│   │   ├── icons/       # SVG icon components
│   │   ├── scripts/     # JavaScript/TypeScript utilities
│   │   └── shared/      # Shared constants and classes
│   ├── pages/           # Page routes
│   └── styles/          # CSS/SCSS styles
├── docs/                # Documentation
└── package.json         # Project dependencies and scripts
```

- `src/pages/`: Contains `.astro` and `.md` files that become routes based on their file names
- `src/components/`: Reusable UI components organized in subdirectories by purpose
- `src/content/`: Content collections for blog posts, projects, and static pages
- `src/lib/`: Shared utilities, icons, and JavaScript/TypeScript code
- `src/images/`: Images processed by Astro's optimization pipeline
- `src/styles/`: Global CSS styles and component-specific stylesheets
- `public/`: Static assets that are served directly without processing

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run start`        | Alias for `npm run dev`                          |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro`        | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |
| `npm run lint`         | Run ESLint on .ts, .js, and .astro files         |
| `npm run lint:fix`     | Fix linting issues automatically                 |
| `npm run format`       | Format code with Prettier                        |
| `npm run format:check` | Check if files are properly formatted            |
| `npm run prettier:all` | Run Prettier on all files                        |

## Technologies

This website is built with [Astro](https://astro.build), a modern static site generator that delivers lightning-fast
performance. The project also uses:

- [Tailwind CSS](https://tailwindcss.com) for styling
- [MDX](https://mdxjs.com) for content
- [TypeScript](https://www.typescriptlang.org) for type safety

## Features

**Light/Dark Mode**

- Allows users to switch between light and dark mode
- Light/Dark Mode can be triggered via navigation button or sidenav button on mobile
- Light/Dark Mode can also be triggered using the keyboard shortcut Shift + Control + D

**Content Zoom**

- Allows users to increase/decrease text and content size
- Content zoom can be triggered via navigation button or sidenav button on mobile
- Content zoom can also be triggered using the keyboard shortcut Shift + Control + Z

**Reading Progress Bar**

- Visual indicator showing the reading progress in article and project pages
- Automatically updates as the user scrolls through the content
- Visually integrated into the navigation bar for a clean interface
- Intelligently excluded from non-content pages like the home page and listing pages

**Image Slideshow & Zoom**

- Interactive carousel component for displaying multiple images
- Full-screen zoom functionality with zoom in/out controls
- Smooth navigation between images with arrow keys and buttons
- Keyboard shortcuts for enhanced accessibility

**Responsive Navigation**

- Desktop: Traditional horizontal navigation in header
- Mobile: Slide-out side navigation (sidenav) for better mobile experience
- Touch-friendly navigation controls optimized for mobile devices

## Learn More

For more information about Astro, check out their official [documentation](https://docs.astro.build).
