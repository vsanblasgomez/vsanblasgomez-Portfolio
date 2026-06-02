---
name: write-a-skill
description: Create a new skill with proper structure, progressive disclosure, and bundled resources. Use when the user asks to "create a skill", "add a skill", or when you notice a reusable workflow that should be codified.
---

# write-a-skill

A skill is a markdown file that teaches an agent when and how to perform a specific task. It gets loaded only when relevant (progressive disclosure), so keep it lean.

## File structure

```
skills/
└── <category>/
    ├── README.md                        (index of skills in this category)
    └── <skill-name>/
        └── SKILL.md                     (the skill)
```

## SKILL.md anatomy

```markdown
---
name: <kebab-case-name>
description: <one-line: what + when to use>
---

# <Human-readable title>

<2-3 lines max. What this skill does.>

## When to use
- <concrete trigger 1>
- <concrete trigger 2>

## Process / Rules / Steps
<The actual instructions. Use numbered steps, not paragraphs.>

## Examples
<Show 1-2 concrete examples. Before/after is powerful.>

## Anti-patterns
- <what NOT to do>
- <common mistake>
```

## Rules of thumb

1. **Frontmatter is everything**. The `description` is what triggers loading. Write it as: "what it does" + "when to use it". Trigger phrases the user would actually say.

2. **Keep it under ~150 lines**. If longer, split. The whole file gets loaded into context.

3. **Show, don't tell**. One good example beats three paragraphs of explanation.

4. **Use bullet points and code blocks**. Skills are reference material, not prose.

5. **No code that runs**. Skills are instructions for the agent, not scripts to execute. Reference external scripts only if they're static docs.

6. **One skill = one workflow**. Don't bundle "create skill" with "create prompt" with "create agent".

7. **Update the category README.md** when adding a skill. Add a bullet pointing to the new SKILL.md.

## Trigger phrases

When writing the `description`, include phrases a user would actually say:
- "create a skill"
- "add a skill for X"
- "save this as a skill"
- "I always do X this way"

## Bundled resources

If the skill needs reference material that doesn't need to be in every load, add files next to SKILL.md:
```
my-skill/
├── SKILL.md              (always loaded when triggered)
├── examples.md           (loaded only if user asks for examples)
├── checklist.md          (loaded only if user asks for checklist)
└── templates/
    └── template.md
```

Reference them from SKILL.md: "See `examples.md` for the full set."

## Anti-patterns

- **DON'T** write a skill that's just a tutorial — it should change agent behavior
- **DON'T** include setup steps the user already knows
- **DON'T** use vague triggers like "useful for development" — be specific
- **DON'T** duplicate content from other skills — reference them
- **DON'T** make skills project-specific if they're general productivity tools (and vice versa)

## Validation checklist

Before saving, confirm:
- [ ] Frontmatter has `name` and `description` with trigger phrases
- [ ] Body is under ~150 lines
- [ ] At least one concrete example
- [ ] No "this is just a tutorial" content
- [ ] Category README.md updated
- [ ] Path follows the convention: `skills/<category>/<skill-name>/SKILL.md`
