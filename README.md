# Vansales — Website

The public marketing site for **Vansales** ([vansales.asia](https://vansales.asia)),
built with Next.js 14 (App Router) and the Vansales design system.

## Stack
- Next.js 14 (App Router), React 18, TypeScript
- Tailwind CSS
- `@vansales/design-system` — vendored under `vendor/` as a packed tarball
- Bilingual EN/TH (server-resolved via a cookie)

## Develop
```sh
pnpm install
pnpm dev            # http://localhost:3000
```

## Environment
Copy `.env.example` → `.env.local` and set:
- `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` — contact form (Web3Forms, client-side submit)

## Design system
The design system is maintained **in a separate project** (synced to claude.ai/design)
and vendored here as a built package: `vendor/vansales-design-system-*.tgz`.
To pick up DS changes, re-pack the DS (`pnpm pack` in the design-system) and replace
the tarball, then `pnpm install`.

## Deploy
Deploys to Vercel as a standard Next.js app — no special configuration needed.
Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in the project's Environment Variables.
