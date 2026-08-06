# Repository instructions

## Scope

- This repository contains a Next.js 16 marketing site written in TypeScript.
- Preserve the existing business logic, content, and user interface unless a task explicitly requests a product change.
- Use only paths relative to the repository root in commands, documentation, configuration, and code. Do not add machine-specific absolute paths.

## Environment and installation

- Use Node.js 22 LTS (Next.js requires Node.js 20.9 or newer).
- Use npm because `package-lock.json` is the authoritative lock file.
- Install dependencies from the repository root with `npm ci`.
- Do not replace or bypass the lock file, and do not use pnpm or Yarn for this repository.

## Required checks

Run all applicable checks before handing off changes:

1. `npm run lint`
2. `npm test` when a `test` script exists in `package.json`
3. `npm run build`
4. `git diff --check`

Report any check that could not be run and why.

## Repository hygiene

- Never commit secrets, credentials, tokens, private keys, or `.env` files.
- Never commit dependencies or generated output, including `node_modules/`, `.next/`, `out/`, `build/`, `coverage/`, or `*.tsbuildinfo`.
- Keep secrets in the environment or the secret store provided by Codex Cloud or GitHub Actions.
- Do not invent environment variables. Document a variable only when the application actually reads it.
- Keep changes focused and preserve unrelated user changes in the working tree.
