# Reception Register Web UI

Reception Register Web UI reference.

## STEP 1: Setup **.env.local** file.

- Create a .env.local file with the following details in it.
  ```
  VITE_PUBLIC_API_URL=http://[HOST:PORT]/api
  VITE_PUBLIC_DEBUG=true
  ```
- **NOTE**: If you are using docker-compose, use the following .env config.
  ```
  VITE_PUBLIC_API_URL=http://[HOST:PORT]/api
  VITE_PUBLIC_DEBUG=false
  ```

## STEP 2: How to run the development server?

- Command: `npm run dev`

## Others

- ### Linting
  - ES Lint has been configured, use command: `npm run lint`
- ### Building
  - The code is written using latest ES standards, to build, use comamnd: `npm run build`

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
