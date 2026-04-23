# Wild Track Kits — Agent Guidelines

## Project goal
Create a clean, professional website for educational animal tracking kits for children and schools.

The design should be:
- sober
- mostly white
- easy to read
- inspired by Apple-style layout (full-width sections, strong hero, minimal clutter)

---

## Tech constraints
- Use **React + Vite**
- Use **plain CSS only**
- Do NOT introduce heavy UI frameworks (no Tailwind, no component libraries)
- Avoid unnecessary dependencies
- Keep the project simple and beginner-friendly

---

## Design system

### Colors
Use the defined CSS variables from `src/styles/theme.css`.

General rules:
- Background: mostly white
- Primary text: dark blue (`--text-main`)
- Accent colors: used sparingly
- No heavy colored sections except rare emphasis blocks

---

## Layout rules
- Sections are **full width**
- Content inside sections is **centered with max-width**
- Keep strong spacing and hierarchy
- Prefer vertical rhythm over visual clutter

---

## Code structure
- Keep components simple and readable
- Prefer splitting into components when a section grows
- Use folder structure like:

src/
  components/
  data/
  styles/

---

## Content rules
- Language: **French**
- Tone: educational, clear, professional
- Audience: teachers, parents, outdoor educators

---

## What to avoid
- No complex abstractions
- No over-engineering
- No unnecessary libraries
- No breaking existing layout or responsiveness

---

## When modifying code
- Preserve responsiveness
- Preserve existing structure unless explicitly refactoring
- Prefer incremental improvements over full rewrites

---

## Typical tasks
- Split large pages into components
- Improve layout consistency
- Add new pages (shop, about, schools)
- Keep styling consistent with theme

