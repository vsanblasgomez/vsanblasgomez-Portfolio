---
name: handoff
description: Compact the current conversation into a structured handoff document so another agent (or future-you) can continue the work without context loss.
---

# handoff

Produce a self-contained handoff document. Another agent should be able to pick up exactly where you left off.

## When to use
- Long session, context getting large
- Switching agents / models
- User says "save state", "wrap up", "I need to step away"
- End of a work block

## Output format

Write the handoff as a single markdown file with these sections:

### 1. TL;DR (1-3 lines)
The single most important thing. What state is the work in?

### 2. Goal
What the user originally asked for. Quote them if short.

### 3. What's done
- Bullet list of completed items
- Reference file paths with `:line` notation
- Mention any decisions made

### 4. What's pending
- Bullet list of remaining items
- Note any blockers

### 5. Key decisions
- Trade-offs accepted
- Libraries / approaches chosen
- Things explicitly rejected (and why)

### 6. Files touched
```
src/foo/bar.tsx          (created, 120 lines)
src/foo/baz.tsx          (modified, +15 -3)
src/styles.css           (modified, +200)
```

### 7. How to verify
- Commands to run (`npm run build`, `npm run dev`)
- What to look for
- Known quirks

### 8. Open questions
- Anything unresolved
- Things the next agent should ask the user

### 9. Context dump (optional)
Only if critical. Environment vars, API keys in use, weird stack traces, etc.

## Principles

- **Assume zero context**. The next reader knows nothing.
- **Be specific**. File paths, line numbers, exact error messages.
- **No fluff**. Skip the apologies, skip the recap of what we already did in detail.
- **Self-contained**. The doc should not require reading the chat log to understand.
- **Use code blocks** for commands, file lists, snippets.

## Example

```markdown
# Handoff — 2026-06-02 14:30

## TL;DR
Portfolio refactored into section folders. App.tsx is now composition-only. Build passing.

## Goal
User asked: "ordena las secciones en carpetas para encontrarlo todo más fácil"

## What's done
- Created `src/sections/{Nav,Hero,About,Projects,Skills,Experience,Contact}/`
- Extracted widgets: CodeWindow, ProjectCard, SkillCategory, TimelineItem, etc.
- Created shared `src/components/{SectionTitle,LanguageSelector,ThemeToggle}.tsx`
- Created `src/lib/animations.ts` with `fadeUp` variant
- `App.tsx` reduced from 376 → 38 lines

## What's pending
- (none)

## Key decisions
- Barrel `index.ts` per section for clean imports
- Hooks kept in `src/hooks/`, not colocated
- Section margin `.section` is single source of truth (`.section-grid` no longer overrides)

## Files touched
```
src/App.tsx                              (rewritten, 38 lines)
src/sections/...                         (created, 15 files)
src/components/{SectionTitle,LanguageSelector,ThemeToggle}.tsx  (created)
src/lib/animations.ts                    (created)
src/styles.css                           (modified, .section-grid margin fix)
```

## How to verify
- `npm run build` — should pass with no TS errors
- `npm run dev` — open browser, scroll through all sections, switch language 3x

## Open questions
- (none)
```
