# PEV Software Engineer Technical Assessment

## Overview

This is a full-stack web application built with React (Vite) for the client and Node.js/Express for the server. The app demonstrates fetching and displaying data (e.g., FBI wanted persons) with search, pagination, and detail views.

## Folder Structure

```
├── assesment.md                # Assessment instructions
├── index.html                  # Main HTML entry point
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite configuration
├── vitest.config.ts            # Vitest configuration for testing
├── public/                     # Static assets
│   └── vite.svg
├── src/
│   ├── client/                 # Frontend React app
│   │   ├── App.tsx             # Main App component
│   │   ├── HomePage.tsx        # Home page component
│   │   ├── index.css           # Global styles
│   │   ├── main.tsx            # React entry point
│   │   ├── tsconfig.json       # Client TypeScript config
│   │   ├── vite-env.d.ts       # Vite environment types
│   │   ├── assets/             # Client assets
│   │   ├── components/         # Reusable UI components
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Error.tsx
│   │   │   ├── Loading.tsx
│   │   │   ├── Pagination.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── WantedCard.tsx
│   │   │   ├── WantedDetailModal.tsx
│   │   │   └── __tests__/      # Component tests
│   │   ├── hooks/              # Custom React hooks
│   │   │   └── wanted.ts
│   │   ├── pages/              # Page-level components
│   │   │   ├── DetailPage.tsx
│   │   │   ├── HomePage.tsx
│   │   │   └── __tests__/      # Page tests
│   ├── server/                 # Backend server
│   │   ├── main.ts             # Server entry point
│   │   └── services/           # Service layer (API calls)
│   │       ├── fbiService.ts
│   │       └── fbiService.test.ts
│   ├── test/                   # Test setup (e.g., MSW)
│   │   └── mswSetup.ts
│   └── types/                  # Shared types and schemas
│       └── wanted.zod.ts
```

## Decisions Made

- **Vite + React**: Chosen for fast development, hot module reload, and modern tooling.
- **TypeScript**: Used throughout for type safety and maintainability.
- **Component Structure**: UI split into reusable components for clarity and testability.
- **Custom Hooks**: Encapsulate data fetching and logic for separation of concerns.
- **Vitest**: Used for unit testing React components and server logic.
- **MSW (Mock Service Worker)**: For mocking API responses in tests.
- **Zod**: For runtime validation of API data.
- **Pagination & Search**: Implemented for usability and scalability.
- **Modal for Details**: Improves UX by allowing quick access to more info without navigation.
- **TanStack Query**: Used for efficient client-side data fetching, caching, and state management. TanStack Query was chosen because it simplifies asynchronous data handling, provides built-in caching, background updates, and reduces boilerplate code compared to manual state management.
- **Backend Caching (Node.js)**: Requests to external APIs are cached on the backend to reduce latency, minimize redundant network calls, and improve reliability. This ensures faster response times for frequently accessed data and helps handle rate limits or downtime from third-party APIs.

For further details, see the code comments and test files in the respective folders.

## How to Run

To run the project locally:

1. **Install dependencies**

   ```sh
   npm install
   ```

2. **Start the development server**

   ```sh
   npm run dev
   ```

3. **Run tests**

   ```sh
   npm test
   ```
