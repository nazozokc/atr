# Contributing to schrun

Thanks for your interest in contributing to `schrun`! Contributions such as bug reports, documentation improvements, and focused code changes are welcome.

## Getting started

- Install [Bun](https://bun.sh/).
- Clone the repository and work from its root directory.
- Install workspace dependencies:

  ```bash
  bun install
  ```

## Making changes

1. Create a branch for your change.
2. Keep changes focused and follow the existing TypeScript style and project conventions.
3. Update the documentation when behavior or usage changes.
4. Run the relevant checks before opening a pull request.

The CLI entry point is `apps/schrun/src/index.ts`. You can run it from the repository root with:

```bash
bun run apps/schrun/src/index.ts --help
```

## Testing

There is currently no test script configured for this app. For changes that affect CLI behavior, manually verify the relevant command using a temporary task file under `~/.config/schrun/`. Avoid committing personal configuration or credentials.

## Pull requests

When opening a pull request, please include:

- A concise description of the problem and the proposed change.
- Any relevant usage or behavior changes.
- The checks or manual verification you performed.

Keep pull requests focused and be open to feedback during review.
