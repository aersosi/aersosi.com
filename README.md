# Arthur Ersosi | Design Engineer

## Personal website and blog

Front-end developer and UI/UX designer with 9+ years of design expertise and 7+ years of web development experience from
Hamburg, Germany. This repository contains the source code for my personal website and portfolio built with Astro.

---

### Project Structure

This project follows an extended Astro structure with additional directories for organization.
Here's the current project structure:

```
/
├── public/              # Static assets served directly
│   ├── favicons/        # Favicon files
│   ├── fonts/           # Web fonts
│   └── img/             # Images
├── src/                 # Source code
│   ├── _definitions/    # Type definitions
│   ├── components/      # UI components
│   ├── content/         # Content collections
│   ├── images/          # Images processed by Astro
│   ├── layouts/         # Page layouts
│   ├── pages/           # Page routes
│   ├── shared/          # Shared utilities
│   └── styles/          # CSS/SCSS styles
├── docs/                # Documentation
└── package.json         # Project dependencies and scripts
```

- `src/pages/`: Contains `.astro` and `.md` files that become routes based on their file names
- `src/components/`: Reusable UI components for the website
- `src/layouts/`: Page layout templates used across multiple pages
- `src/content/`: Content collections for blog posts and other structured content
- `src/styles/`: Global styles and Tailwind configuration
- `public/`: Static assets that are served directly without processing

### Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
|:-----------------------|:-------------------------------------------------|
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

**Light/Dark theme**
- Light/Dark theme can also be triggered using the keyboard shortcut Option/Alt + D


## Learn More

For more information about Astro, check out their official [documentation](https://docs.astro.build).

