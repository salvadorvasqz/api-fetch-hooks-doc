

# Api Fetch Hooks

![Website Preview](./public/api-fetch-hooks.png)

<a href="https://salvadorvasqz.github.io/api-fetch-hooks-doc/" target="_blank">Live Website</a>

## Overview

This project is a demo built with <a href="https://astro.build/" target="_blank">Astro</a>, integrating React components and styled using <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. It demonstrates a simple site structure with layouts, and static assets.

## Project Structure

```
astro.config.mjs         # Astro configuration
package.json             # Project dependencies and scripts
tsconfig.json            # TypeScript configuration
public/                  # Static assets (SVGs, videos)
src/
	layouts/               # Astro layouts
		layout.astro
	pages/                 # Site pages
		404.astro
		doc.md
		index.astro
	styles/                # Global styles
		global.css
```

## Key Features

- **Astro Framework:** Fast static site generation with support for multiple frontend frameworks.
- **Tailwind CSS:** Utility-first CSS for rapid UI development.
- **Custom Layouts:** Shared layout (`layout.astro`) for consistent page structure.
- **Static Assets:** SVGs and videos in `public/` for use in pages and components.

## Getting Started

1. **Install dependencies:**
	 ```powershell
	 npm install
	 ```

2. **Run the development server:**
	 ```powershell
	 npm run dev
	 ```

3. **Build for production:**
	 ```powershell
	 npm run build
	 ```

4. **Preview the production build:**
	 ```powershell
	 npm run preview
	 ```

## Usage

- Add new pages in `src/pages/` using `.astro` or Markdown.
- Create or updates components in `src/components/`.
- Customize global styles in `src/styles/global.css`.
- Update layout in `src/layouts/layout.astro`.

