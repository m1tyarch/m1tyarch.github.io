---
name: minimalist-ui
description: "Use when building or refactoring web UI (HTML, CSS, JS/TS, React, Vue, Svelte, Astro, templates). Enforces premium minimalist product design with a restrained palette and crisp structure."
applyTo:
  - "**/*.html"
  - "**/*.css"
  - "**/*.{js,jsx,ts,tsx}"
  - "**/*.{vue,svelte,astro}"
  - "**/*.{md,mdx}"
  - "**/*.{njk,hbs,liquid}"
---
# Minimalist Premium Frontend UI

Use this instruction when creating or updating frontend interfaces.

## Visual Direction

- Build interfaces with premium taste; avoid generic, boilerplate, or visually flat layouts.
- Use a restrained dark palette by default: deep blacks, rich grays, and soft whites.
- If the user explicitly requests a light theme, switch to a restrained light palette and keep the same premium minimal style.
- Keep structure crisp with clear hierarchy and generous, intentional whitespace.
- Remove visual noise; every element must have a purpose.

## Shape System

- Use one consistent corner radius system across buttons, cards, media, inputs, and containers.
- Prefer Apple-like soft corners (squircle feel / rounded-2xl style).
- Do not mix multiple corner styles in the same screen unless explicitly requested.

## Motion And Interaction

- Make links and buttons feel premium with smooth transitions and responsive active states.
- Include subtle press feedback (for example, active scale) on interactive elements.
- Avoid flashy effects, aggressive gradients, and unnecessary animation.
- Keep motion minimal, calm, and purposeful.

## UX Constraints

- Prioritize readability and ease of use over decorative effects.
- Ensure responsive behavior across desktop and mobile with consistent spacing rhythm.
- Keep component density balanced: not cramped, not sparse.
