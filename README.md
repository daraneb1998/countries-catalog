# Countries Catalog

Live Deployment
- Github Page: https://daraneb1998.github.io/countries-catalog/
- Vercel: https://countries-catalog-nine.vercel.app/

# Project Structure
- `/src`: Root folder of the application containing the following sub-folders:
    - `/__test__`: Contain unit tests.
    - `/assets`: Images and other static resources.
    - `/components`: Contains all application components based on single responsibility
    - `/Constants`: Contains all constants used in the application
    - `/router`: Contains all routing components
    - `/services`: Contains all custom hooks for interfacing and interacting with external APIs
    - `/stores`: Contains a default state used in the application and store configuration powered by Pinia
    - `/types`: Contains all intefaces and types for typescript
    - `/utilities`: Contains all helper functions used in other parts of the application
    - `/views`: Contains all pages existing in the application
- `/.github`: Contains a yaml file for Github Page deployment.
- `/.vscode`: Contains a development setup for working IDE
- `/404.html`: Handles 404 Page Not Found

# Tech Stacks
- Vue 3
- Typescript
- Tailwind CSS
- Pinia - state management
- Vitest - unit test
- Cypress - (TODO - Time not favorable lol)
- Github Actions Integration

# Demo
<img width="1421" alt="Screenshot 2024-06-17 at 7 49 03 in the evening" src="https://github.com/daraneb1998/countries-catalog/assets/42088542/929c0bd7-108f-4975-9e31-268401d87665">

<img width="1440" alt="Screenshot 2024-06-17 at 7 55 24 in the evening" src="https://github.com/daraneb1998/countries-catalog/assets/42088542/04766d11-ad8e-460b-92d7-28e512e80e14">


# Functionalities
- Search by country name
- Page Pagination
- Sorting
- Responsiveness
- Offline Mode (Load Content Once)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
yarn test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
yarn build
yarn test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```
