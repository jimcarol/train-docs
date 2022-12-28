# BLEACHCYBER SERVICES


## Quick Start

Install the dependencies:

```bash
yarn install
```

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run test coverage
yarn coverage
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom Koa middlewares
 |--models\         # Db models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.ts          # Koa app
 |--index.ts        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3000/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.