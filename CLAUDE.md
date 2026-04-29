# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server on :3000
npm run dev:bot      # Express bot server (separate process)
npm run build        # Vite production build → dist/
npm run preview      # Preview built dist/
npm run start:bot    # Production bot server (serves dist/ + handles Telegram webhook)
```

No test suite. No lint script configured.

## Environment Variables

Frontend (Vite — must be prefixed `VITE_`):
- `VITE_GEMINI_API_KEY` — Gemini API key for AIChat widget
- `VITE_AVIVA_FEED_BASE` — Base URL for AVIVA video feed proxy (optional; enables `/aviva-feed` proxy in dev)

Bot server (`.env` or system env):
- `TG_TOKEN` — Telegram bot token (required)
- `WEBHOOK_SECRET` — Secret path segment for webhook endpoint (default: `AVIVA_WEBHOOK_SECRET`)
- `CHANNEL_ID` — Telegram channel ID to filter posts from
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` — if set, videos upload to Cloudinary instead of local disk
- `CLOUDINARY_FOLDER` — Cloudinary folder (default: `aviva`)
- `AVIVA_STORAGE_DIR` — Override local video storage path
- `PORT` — Bot server port (default: 8080)

See `.env.bot.example` for full reference.

## Architecture

**Two separate processes, one repo:**

1. **Frontend** — React 19 SPA (Vite + TypeScript), entry at `index.tsx` → `App.tsx`. No router; single-page with scroll sections. Tailwind classes used inline.

2. **Bot server** — `server/server.js` (ESM, Node.js). Receives Telegram webhook posts from a channel, downloads videos via Bot API, stores them locally or uploads to Cloudinary, and writes metadata to `assets/aviva/videos.json`. Also serves the built `dist/` as static files in production (Render.com deployment).

**Data flow for AVIVA videos:**
- Telegram channel post with video → webhook hits `POST /tg/:secret` → server downloads file → saves to `assets/aviva/videos/` (or Cloudinary) → appends entry to `assets/aviva/videos.json`.
- `VideoSlider` component fetches `/assets/aviva/videos.json` at runtime to populate the video carousel. Falls back to hardcoded `FALLBACK_CARDS` if fetch fails.
- In dev, set `VITE_AVIVA_FEED_BASE` to proxy `/aviva-feed` requests to a remote server.

**AIChat widget:**
- Lazy-loaded after idle callback (or 2.2s timeout) to avoid blocking initial paint.
- Uses `@google/genai` (Gemini) directly from the browser with `VITE_GEMINI_API_KEY`.
- System prompt hard-coded in `components/AIChat.tsx` with KOL business context (routes, contacts, Russian-language responses).

**Section layout:**
- `App.tsx` defines `SECTION_CONFIG` array mapping section IDs to components.
- Fixed height classes per section in `SECTION_HEIGHT_CLASS` map (e.g. `page-section--h-910`).
- `Reviews` and some sections are commented out — check `App.tsx` before adding new sections.

**Deployment:** Render.com via `render.yaml`. Single web service runs `start:bot` which serves both the SPA and the Telegram webhook endpoint.
