# Kodo Website

Marketing site for Kodo, built with Next.js, Tailwind CSS, and Framer Motion.

The project is adapted around Kodo as an edtech product for prompt practice, reading AI-generated code, and more conscious work with AI tools.

## 🚀 Quick Start

```shell
npm ci
npm run dev
```

## 🛠 Tech Stack

```typescript
{
  "framework": "Next.js",
  "language": "TypeScript",
  "styling": "Tailwind CSS",
  "animation": "Framer Motion",
  "build": "Turbopack",
}
```

---

Use this repo as the landing foundation for Kodo and continue replacing placeholder media, real forms, and product screenshots.

## Codex Cloud

The repository is prepared for remote Codex tasks using GitHub. One-time environment setup:

1. Connect `TemnovTema/portfollio-temnov` to Codex Cloud and select `main` as the base branch.
2. Use Node.js 22 LTS. Python and other runtimes are not required.
3. Set the setup script to:

   ```shell
   npm ci
   ```

4. Do not add environment variables or secrets: the current application does not read any at install, lint, test, or build time.
5. Enable internet access during setup so npm can download packages from the registry. The current checks do not otherwise require external services.

For every task, Codex should run `npm run lint`, run `npm test` if a test script is added, run `npm run build`, and run `git diff --check`. Keep generated files and dependencies out of Git. Codex can prepare branches and pull requests while the local computer is offline once the GitHub repository and Codex Cloud environment are connected.
