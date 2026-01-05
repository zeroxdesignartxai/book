# Codex MVP

Codex is a minimal, production-ready scaffold for a document-to-book platform. It turns uploads into a structured book draft, supports a guided outline flow, and exports a full publishing package (PDF/EPUB/JSON/JSONL).

## Project Brief
- **Project name:** Codex
- **Goal:** Turn uploaded content into a publish-ready book package with AI-ready JSON/JSONL exports.
- **Target users:** Coaches, founders, consultants, and teams who want to publish professional books fast.
- **Core workflow:**
  1. Upload content
  2. Generate outline
  3. Draft chapters
  4. Export package
- **Platform:** Web
- **Language:** TypeScript
- **Integrations:** None (stubbed for MVP)
- **Must-have:** Structured exports, traceability, legal/plain-English mode, guided workflow
- **Nice-to-have:** OCR, multi-theme layouts, KDP/Ingram preflight
- **Constraints:** Single trim size, local SQLite, no OCR in MVP

## Repository Tree
```
apps/
  api/
    migrations/
    src/
    tests/
  web/
    app/
    public/
  worker/
    src/
    tests/
packages/
  shared/
    src/
    tests/
docs/
  PROJECT_BRAIN.md
  CHANGELOG.md
data/
```

## Setup Commands
```bash
npm install
```

## Local Development
```bash
npm run dev -w apps/api
npm run dev -w apps/web
```

## Quality Pipeline
```bash
npm run lint -ws
npm run test -ws
npm run build -ws
```

## Upgrade Roadmap
1. **Phase 1:** OCR pipeline (Tesseract or paid API), multi-file upload, improved source cleaning.
2. **Phase 2:** Theme system with paged preview and additional trim sizes.
3. **Phase 3:** KDP/Ingram preflight checks, marketing kit generation, versioning.
4. **Phase 4:** Multi-tenant team collaboration, analytics, and billing.

## Export Formats
- `book.pdf`: print-ready (single trim size in MVP)
- `book.epub`: Kindle-ready EPUB
- `book.json`: structured book data with provenance
- `book.jsonl`: AI-ready dataset

## API Overview
Run the API on port 4000. Key endpoints:
- `POST /projects`
- `POST /projects/:id/sources`
- `POST /sources/:id/extract`
- `POST /projects/:id/outline:generate`
- `POST /projects/:id/draft:generate`
- `PATCH /blocks/:id`
- `POST /projects/:id/plain-english:generate`
- `POST /projects/:id/export`
- `GET /projects/:id/exports/latest`
