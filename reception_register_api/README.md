# Reception Register API

Reception Register API reference.

## STEP 1: Setup **.env** file.

- Create a .env file with the following details in it.
  ```
  MONGODB_URI=mongodb://[USERNAME:PASSWORD]@[HOST:PORT]/reception-register
  ```
- **NOTE**: If you are using docker-compose, use the following .env config.
  ```
  MONGODB_URI=mongodb://db/reception-register
  ```

## STEP 2: Run in the desired environment.

- ### How to setup-up this project **(development mode)**?

  1. Install dependencies: `npm i --location=project`
  2. Root command: `npm run dev`
  3. How to create an admin user: `npm run dev createsuperuser [email] [firstName] [lastName] [password]`
  4. How to start the server: `npm run dev bootstrap`

- ### How to setup-up this project **(build mode)**?

  1. Install dependencies: `npm i --location=project`
  2. Make the build: `npm run build`
  3. Root command: `npm start`
  4. How to create an admin user: `npm start createsuperuser [email] [firstName] [lastName] [password]`
  5. How to start the server: `npm start bootstrap`

## Other Commands and Setup

- ### Linting
  - ES Lint has been configured, use command: `npm run lint`
- ### Testing
  - Jest and Supertest are configured, use command: `npm run test`
- ### Building
  - The code is written using latest ES standards, to build, use comamnd: `npm run build`
