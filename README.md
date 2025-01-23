# Motarchitecture

Motarchitecture is a SvelteKit project with dynamic routing, i18n translation system, Tailwind CSS, and Decap CMS integration for admin panel.
This project was developed and engineered by **CodigoDemente**. 🚀

## Project Structure

- **`.svelte-kit/`**: Contains generated files and build artifacts for SvelteKit.
- **`src/`**: Contains the source code for the application.
  - **`lib/`**: Contains reusable components and utilities.
  - **`routes/`**: Contains the route definitions and components for the application.
  - **`styles/`**: Contains global styles.
  - **`types/`**: Contains TypeScript type definitions.
- **`static/`**: Contains static assets like images and the `admin` folder for Decap CMS.
- **`tailwind.config.js`**: Configuration file for Tailwind CSS.
- **`postcss.config.js`**: Configuration file for PostCSS.
- **`svelte.config.js`**: Configuration file for Svelte.
- **`vite.config.ts`**: Configuration file for Vite.
- **`tsconfig.json`**: TypeScript configuration file.
- **`package.json`**: Contains the project metadata and dependencies.

## Dependencies

### DevDependencies

- **@eslint/compat**: Provides compatibility for ESLint configurations.
- **@sveltejs/adapter-auto**: Automatically selects the best adapter for your SvelteKit project based on your environment.
- **@sveltejs/adapter-netlify**: Adapter for deploying SvelteKit projects to Netlify.
- **@sveltejs/kit**: The core library for building SvelteKit applications.
- **@tabler/icons-svelte**: Svelte components for Tabler Icons.
- **autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **eslint**: A tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.
- **eslint-config-prettier**: Turns off all rules that are unnecessary or might conflict with Prettier.
- **eslint-plugin-svelte3**: ESLint plugin for Svelte 3 components.
- **postcss**: A tool for transforming CSS with JavaScript plugins.
- **prettier**: An opinionated code formatter.
- **prettier-plugin-svelte**: Prettier plugin for Svelte files.
- **svelte**: The core library for building Svelte applications.
- **svelte-check**: A tool for type-checking Svelte components.
- **svelte-preprocess**: A Svelte preprocessor to transform code before compilation.
- **tailwindcss**: A utility-first CSS framework.
- **typescript**: A superset of JavaScript that adds static types.
- **vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.
- **vitest**: A Vite-native unit test framework.

## Getting Started

### Install Dependencies

Install the project dependencies using `pnpm` (or `npm` or `yarn`):

```sh
pnpm install
```

### Development Server

Start the development server:

```sh
pnpm run dev
```

## License

This project is licensed under the MIT License.

Enjoy coding with passion and creativity! 💃
