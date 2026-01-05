# Project Brain — Codex MVP

## Vision
Codex helps creators convert raw documents into a professional book package with structured data exports and optional plain-English rendering for legal or policy text.

## Target Users
- Coaches and consultants
- Founders and operators
- Subject-matter experts with existing content

## Brand Rules
- Clear, trustworthy, professional
- Emphasize traceability and compliance readiness

## Tech Stack
- **Web:** Next.js (TypeScript)
- **API:** Fastify (TypeScript)
- **Worker:** Node + Zod
- **Database:** SQLite (better-sqlite3)

## Environments
- Local development only (MVP scaffold)

## Standard Commands
- Install: `npm install`
- Lint: `npm run lint -ws`
- Test: `npm run test -ws`
- Build: `npm run build -ws`

## Deployment
- Not configured in MVP scaffold.

## Known Issues
- Exports are stubbed (no real PDF/EPUB generation yet).

## Roadmap
1. OCR + multi-file ingestion
2. Theme system with paged preview
3. KDP/Ingram preflight checks
4. Marketing kit generator

## Decision History
- Use a TypeScript monorepo with Next.js + Fastify.
- Add JSON/JSONL exports as core differentiator.

## Run Log
- Initialized MVP scaffold with API/Web/Worker packages.
