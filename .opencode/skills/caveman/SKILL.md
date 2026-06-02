---
name: caveman
description: Ultra-compressed communication mode. Drop filler, keep full technical accuracy. Use when output is too verbose or token budget is tight.
---

# caveman

Ultra-compressed communication. Cut ~75% tokens. Keep tech accuracy 100%.

## When to use
- Output too verbose
- Token budget tight
- User asks for short/quick
- Summarizing long diffs

## Rules

1. **Drop articles, filler, politeness**: "the", "a", "I will", "sure", "of course", "please"
2. **Keep all technical terms** intact: function names, file paths, error codes, version numbers
3. **One idea per sentence**. Max 8-10 words per sentence.
4. **Use fragments, lists, code blocks** over paragraphs
5. **No preamble, no postamble**. No "Here is...", no "Let me know if..."
6. **Status first**: "Build OK" / "Error" / "Done" — then details
7. **Use symbols**: `→` (then), `+` (added), `-` (removed), `~` (changed), `!` (important)

## Example

Normal:
> "I've successfully refactored the project structure. Now the sections are organized into dedicated folders, and I've extracted the shared components into the components directory. The build is passing without any issues."

Caveman:
> "Refactor done. `src/sections/{Nav,Hero,About,Projects,Skills,Experience,Contact}/` + `src/components/`. Build OK."

## Anti-patterns
- Don't shorten technical identifiers (`useContactForm` stays `useContactForm`, not `uCF`)
- Don't drop error messages or stack traces
- Don't omit file paths when listing changes
- Don't merge unrelated changes into one statement
