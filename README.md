# Arthur Ersosi | Design Engineer
## Personal website and blog

Front-end developer and UI/UX designer with 9+ years of design expertise and 7+ years of web development experience from Hamburg, Germany.

---

### Project Structure

The template follows a typical Astro project structure. You'll find the following key directories and files:

```
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

- `src/pages/`: Contains `.astro` and `.md` files. Each file becomes a route in your project based on its name.
- `src/components/`: Ideal for placing your Astro/React/Vue/Svelte/Preact components.
- `public/`: For static assets such as images that you want to serve directly.

### Commands

```json
	"scripts": {
		"dev": "astro dev",
		"start": "astro dev",
		"build": "astro build",
		"preview": "astro preview",
		"astro": "astro",
		"lint": "eslint . --ext .ts,.js,.astro",
		"lint:fix": "npm run lint -- --fix",
		"format": "prettier --write .",
		"format:check": "prettier --check .",
		"prettier:all": "npx prettier --write ."
	}
```

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## Learn more - Explore more through Astro's official [documentation](https://docs.astro.build).

