# nt_landing_svc

A lightweight Landing Web Subsystem built with React, TypeScript, and Vite. This repository contains the frontend landing page and UI components for the test system.

## Prerequisites

- Node.js 18+ (LTS recommended)
- npm (bundled with Node.js)

## Installation

1. Clone the repository

   git clone <repository-url>
   cd nt_landing_svc

2. Install dependencies

   npm install

3. Environment

- Copy the example env file if you need local env variables:

  cp .env.example .env

- The repository uses VITE_BASE_PATH (see .env.example) for subpath deployments. Adjust VITE_BASE_PATH in your .env when deploying to a subdirectory.

## Usage

Development server:

  npm run dev

Run tests (interactive):

  npm test

Run tests (CI / headless):

  npm run test:run

Build production bundles:

  npm run build

Preview the production build locally:

  npm run preview

Run linting checks:

  npm run lint

Additional test commands:

  npm run test:ui        # Run Vitest with UI
  npm run test:coverage  # Run tests with coverage

All script names above correspond to the project's package.json scripts.

## Contributing

Please follow the repository coding standards and run lint/tests before submitting PRs.

## License

Refer to the project repository for license information.
