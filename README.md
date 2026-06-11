# IT Tools Hub

A free software download portal built with Next.js and Tailwind CSS. Browse, search, and download software across categories like Security, Development, Utilities, Browsers, Media, Networking, and Office.

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- Software listing with categories, ratings, and download counts
- Category browsing with sidebar navigation
- Software detail pages with download buttons
- Search functionality
- Responsive design (mobile + desktop)
- Download API that serves files from `public/downloads/`

## Adding Software Files

Place `.zip` or `.exe` files in `public/downloads/`. Each file name must match the `fileName` field in `src/data/software.json`.

```
public/downloads/avast-free-antivirus.zip
public/downloads/vlc-media-player.zip
public/downloads/git.zip
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (header + footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind styles
│   ├── api/download/[slug]/    # Download API route
│   ├── category/[slug]/        # Category listing page
│   └── software/[slug]/        # Software detail page
├── components/                 # Reusable UI components
├── data/                       # Mock data (software.json, categories.json)
└── lib/                        # Utility functions
```

## Tech Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Lucide React (icons)
- TypeScript
