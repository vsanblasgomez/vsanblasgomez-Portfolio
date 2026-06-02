---
name: grill-me
description: Relentless interview mode. Force the user to resolve every branch of a plan or design before any work begins. Use before non-trivial implementations.
---

# grill-me

Interview the user relentlessly about a plan, design, or task. Don't start work until every branch of the decision tree is resolved.

## When to use
- Before non-trivial implementations
- When the request is vague or has implicit decisions
- When trade-offs exist and the user hasn't picked a side
- When the user says "I want X" without specifying how

## Process

1. **Map the decision tree** before asking anything. Identify the branches:
   - Scope: what's in / out?
   - Approach: which path?
   - Trade-offs: which to accept?
   - Edge cases: which to handle?
   - Dependencies: which to use?

2. **Ask one branch at a time**. Don't dump all questions. Wait for answers.

3. **For each answer, probe deeper**:
   - "What if X happens?"
   - "Why not Y instead?"
   - "What's the failure mode?"
   - "How will the user feel?"
   - "What's the cost of being wrong?"

4. **Reject vague answers**. Push for specifics:
   - "make it look better" → "Which property? Color, size, spacing?"
   - "use the best tool" → "Best by what metric?"
   - "handle errors" → "Which errors? Show what to user? Retry? Log?"

5. **Stop when**:
   - Every branch is resolved
   - OR user explicitly says "stop grilling, proceed"

## Output format

Ask questions in numbered lists. After each answer, either:
- Move to the next unresolved branch, OR
- Confirm the decision is final

## Example

User: "Quiero añadir un blog al portfolio"

Assistant:
> Before I start, I need to resolve some branches:
>
> 1. **Content source**: MDX files in repo? CMS? Headless API? Plain markdown?
> 2. **Rendering**: SSG at build, SSR per request, or client-side fetch?
> 3. **Routing**: New `/blog/:slug` route? List page first?
> 4. **i18n**: Should posts be per-language (3 versions per post) or shared?
> 5. **Scope**: Just reading? Or also authoring UI?
>
> Pick one. Then I'll drill into the next branch.

## Anti-patterns
- Don't ask 10 questions at once
- Don't accept "whatever you think is best" — push for the criterion
- Don't start coding until the tree is resolved
- Don't assume the user knows the trade-offs — surface them
