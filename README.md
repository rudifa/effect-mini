# Effect Mini Demo

A minimal demonstration of building robust TypeScript applications using the [Effect](https://effect.website/) library.

This project showcases core Effect concepts including dependency injection, error handling, and generator-based control flow.

## Features

- **Dependency Injection**: Defines abstract services (`Clock`, `Logger`) using `Context.Tag` and provides implementations at runtime.
- **Effect Generator**: Uses `Effect.gen` to write asynchronous, effectful code in a synchronous, imperative style.
- **Typed Error Handling**: Demonstrates how to handle specific error cases (`TooEarly`, `TooLate`) using `Effect.catchTags`.
- **Modern Tooling**: Configured with ESM (`type: module`), `NodeNext` module resolution, and `tsx` for fast execution.

## Prerequisites

- Node.js (v18+ recommended)
- npm

## Installation

Install the dependencies:

```bash
npm install
```

## Usage

Run the program:

```bash
npm run dev
```

This command uses `tsx` to execute `src/main.ts` directly without a separate build step.

## Code Structure

- **`src/services.ts`**: Defines the service interfaces and their "Live" implementations.
  - `Clock`: A service to get the current time.
  - `Logger`: A service to log messages.
- **`src/main.ts`**: The main application logic.
  - Composes services using `Effect.gen`.
  - Validates business logic (working hours between 9 and 17).
  - Handles errors and runs the final effect.
- **`src/errors.ts`**: Custom error classes extending `Data.TaggedError` (implied).

## License

ISC
