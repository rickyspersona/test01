# CLAUDE.md — test01 Project Standards

This file supplements the global `~/.claude/CLAUDE.md`. Karpathy behavioral
guidelines (sections I-IV) take priority.

## Project: test01

A simple static HTML/CSS/JS webpage. No framework, no build step.

## Stack

- Plain HTML5 + CSS3 + vanilla JavaScript (ES2020+)
- No external dependencies (no CDN, no npm)
- Single-page site, ~1-3 sections

## Style

- 2-space indentation in HTML/CSS/JS
- Mobile-responsive (use flexbox or grid, no fixed pixel widths)
- Dark mode default (matches demo-workflow aesthetic)
- Semantic HTML5 elements (`<header>`, `<main>`, `<section>`, `<footer>`)

## File Layout

```
test01/
├── README.md
├── CLAUDE.md
├── AGENTS.md        # required before final push
├── index.html       # main page
├── style.css        # all styles
└── script.js        # all behavior
```

## Verification (project-specific)

A task is done when:
1. `python3 -m http.server 8000` serves index.html without error
2. HTML validates (no broken tags)
3. CSS validates (no syntax errors)
4. JS runs without console errors in browser
5. Site is mobile-responsive (visual check at 375px width)

## Commit Conventions

Use conventional-commits prefix per global CLAUDE.md.