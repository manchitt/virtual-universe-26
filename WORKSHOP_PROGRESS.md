# GitHub Virtual Universe '26 Workshop — Progress Report

## Summary of Completed Hands-on Work

### Section 1: The Modern GitHub Experience
1. **Tutorial 1 · Attach Images to an Issue from CLI**
   - **Issue created:** [#4 — Menu prices show $NaN](https://github.com/manchitt/virtual-universe-26/issues/4)
   - **Attachment:** `menu-prices.png#Menu board showing $NaN` uploaded directly from the CLI via `gh issue create --attach`.
   - **Learning concept:** Demonstrates attaching screenshots directly to issues from headless CI/CD test runners (e.g. Playwright) or local terminals.

2. **Tutorial 2 · Create a Stacked Pull Request**
   - **Stack created:** [Stack #3](https://github.com/manchitt/virtual-universe-26/stack/3)
   - **Layer 1 (Bottom):** [PR #1 — Add espresso to the menu](https://github.com/manchitt/virtual-universe-26/pull/1) (`menu/espresso` merging into `main`).
   - **Layer 2 (Top):** [PR #2 — Add latte to the menu](https://github.com/manchitt/virtual-universe-26/pull/2) (`menu/latte` merging into `menu/espresso`).
   - **Learning concept:** Breaking large features into atomic, dependent pull requests where each layer is individually reviewable and GitHub Stacks allows merging them together downstack.

3. **Open Source Maintainer Controls**
   - Explored maintainer configuration features: participation boundaries, archive pull requests queue, and rate limiting pull requests from non-collaborators.

---

### Section 2: Agentic Software Development with GitHub Copilot
1. **Part 1 · Custom Skill Creation & Enhancement**
   - Modified `.github/skills/issue-to-pr/SKILL.md` to require clear "How to test" instructions in generated draft PR bodies.
   - Pushed skill enhancements to `main`.
   - Filed [Issue #5 — Add a list command to universe-notes](https://github.com/manchitt/virtual-universe-26/issues/5).
   - Implemented `universe-notes/list.js` and `npm run list` to group highlights by topic.
   - Opened draft [PR #6 — Fix #5: Add a list command to universe-notes](https://github.com/manchitt/virtual-universe-26/pull/6).

2. **Part 2 · Tools & Connectors**
   - Updated `.github/skills/issue-to-pr/SKILL.md` with instructions for the Context7 Expert agent and MCP connector to fetch live API/runtime documentation rather than stale model weights.

3. **Part 3 · Security Code Review**
   - Added automated security review verification step to `.github/skills/issue-to-pr/SKILL.md` to catch high/critical vulnerabilities prior to PR opening.
   - Pushed update to `main`.
   - Filed [Issue #7 — Add a search command to universe-notes](https://github.com/manchitt/virtual-universe-26/issues/7).
   - Implemented `universe-notes/search.js` (`npm run search -- <word>`) with safe substring matching and fixed directory resolution.
   - Opened draft [PR #8 — Fix #7: Add a search command to universe-notes](https://github.com/manchitt/virtual-universe-26/pull/8) including test steps and security assessment.

4. **Part 4 · Automations**
   - Documented trigger mechanics for turning skills into scheduled or event-driven agent tasks via Copilot Automations.

---

### Section 3: GitHub Universe Highlights & Final Exercise
1. **Issue Artifacts**
   - Created [Issue #9 — My GitHub Universe '26 cheat sheet](https://github.com/manchitt/virtual-universe-26/issues/9) with uploaded & aligned astronaut badge.
   - Attached **Issue Artifact 1**: [GitHub Universe 2026 cheat sheet](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/1)
   - Attached **Issue Artifact 2**: [How Copilot built this](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/2)
   - Attached **Issue Artifact 3**: [Badger easter egg card](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/3) rendered and uploaded from `easter-egg.html`.
