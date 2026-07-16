# Tech Test Drive Guide

A step-by-step interactive guide for the Tech Test Drive demo, built with Next.js and deployed to GitHub Pages.

**Live site:** https://lbovboe.github.io/tech-drive-guide/

---

## What's inside

The guide covers four ChatGPT demonstrations:

| # | Section | What it covers |
|---|---|---|
| 1 | **Daily Tech News** | Create a scheduled task that searches and delivers technology news every afternoon |
| 2 | **Principal AWS Architect** | Build a custom GPT that reviews AWS architectures using Well-Architected best practices |
| 3 | **CSV Analyser Skill** | Create and share a reusable skill that analyses SingStat MCP CSV query logs |
| 4 | **Python Code Reviewer** | Build a shared skill that applies consistent Python review standards across a team |

---

## Tech stack

- **[Next.js 16](https://nextjs.org/)** — React framework (App Router)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Utility-first styling
- **[TypeScript](https://www.typescriptlang.org/)** — Type safety
- **[GitHub Pages](https://pages.github.com/)** — Static hosting
- **[GitHub Actions](https://github.com/features/actions)** — CI/CD pipeline

---

## Project structure

```
tech-drive-guide/
├── app/
│   ├── layout.tsx              # Root layout — sidebar, theme provider, header
│   ├── page.tsx                # Landing page with 4 section cards
│   ├── globals.css             # Tailwind imports + CSS variables for dark/light theme
│   ├── icon.svg                # TD favicon
│   ├── schedule/page.tsx       # Section 1: Daily Tech News
│   ├── custom-gpt/page.tsx     # Section 2: Principal AWS Architect
│   ├── csv-analyser/page.tsx   # Section 3: CSV Analyser Skill
│   └── python-reviewer/page.tsx # Section 4: Python Code Reviewer
│
├── components/
│   ├── ThemeProvider.tsx       # Dark/light mode context + localStorage persistence
│   ├── ThemeToggle.tsx         # Sun/Moon toggle button
│   ├── Sidebar.tsx             # Fixed left navigation with active link highlighting
│   ├── CopyButton.tsx          # One-click copy to clipboard with visual feedback
│   ├── PromptBlock.tsx         # Copyable prompt/code block with header bar
│   ├── GuideImage.tsx          # Image with caption
│   ├── StepCard.tsx            # Numbered step with connecting line
│   ├── PageHeader.tsx          # Section header with objective callout
│   └── SectionNav.tsx          # Prev/Next navigation at the bottom of each page
│
├── public/
│   ├── Tech_Test_Drive_Extracted_Images/   # All 24 guide screenshots
│   │   └── image_manifest.csv              # Image index with dimensions
│   └── .nojekyll                           # Prevents GitHub Pages Jekyll processing
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline — builds and deploys on push
│
├── next.config.ts              # Static export config for GitHub Pages
└── README.md
```

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Development — local dev server, no deployment |
| `github-pages` | Production — every push triggers a live deployment |

**main** is your working branch. When you're ready to publish changes, merge `main` into `github-pages` and push.

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server at http://localhost:3000
npm run dev

# Build for production (static export → ./out)
npm run build
```

---

## CI/CD pipeline

The deployment is fully automated via GitHub Actions (`.github/workflows/deploy.yml`).

### How it works

```
Push to github-pages branch
        │
        ▼
┌─────────────────────────────┐
│  CI — Build job             │  Verifies the code compiles correctly
│  1. Checkout code           │
│  2. Install Node 20         │
│  3. npm ci                  │  Clean, reproducible install
│  4. npm run build           │  Produces ./out (static files)
│  5. Upload ./out artifact   │
└────────────┬────────────────┘
             │ passes
             ▼
┌─────────────────────────────┐
│  CD — Deploy job            │  Ships to GitHub Pages automatically
│  • Publish ./out to Pages   │
└─────────────────────────────┘
             │
             ▼
   https://lbovboe.github.io/tech-drive-guide/
```

- **CI** catches build errors before they reach the live site
- **CD** only runs if CI passes (`needs: build`)
- Deployments take ~2 minutes end-to-end
- You can also trigger manually from the **Actions** tab using `workflow_dispatch`

### What makes Next.js work on GitHub Pages

GitHub Pages serves static files only — no Node.js server. Three changes were made to support this:

| Change | Why |
|---|---|
| `output: 'export'` in `next.config.ts` | Builds to `./out` as plain HTML/CSS/JS |
| `basePath: '/tech-drive-guide'` | GitHub serves at `/repo-name/`, not `/` |
| `images: { unoptimized: true }` | Image optimisation requires a server |
| `public/.nojekyll` | Prevents GitHub from blocking `_next/` assets |
| `NEXT_PUBLIC_BASE_PATH` env var | Ensures image `src` paths include the basePath |

---

## Deploying changes

```bash
# 1. Make changes on main
git checkout main
# ... edit files ...
git add -A && git commit -m "your message"

# 2. Merge into github-pages to publish
git checkout github-pages
git merge main

# 3. Push — GitHub Actions handles the rest
git push origin github-pages
```

---

## Theme

The guide defaults to **dark mode**. Users can toggle to light mode using the button in the top-right corner. The preference is saved to `localStorage` and persists across sessions.
