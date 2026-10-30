# GitHub Virtual Universe '26 Workshop — Verified Status Report

## 1. Verified Completed Exercises

### Section 1: The Modern GitHub Experience
* **Tutorial 1 · Attach Images to an Issue from CLI**
  - **Status:** Verified Complete.
  - **Artifact:** [Issue #4 — Menu prices show $NaN](https://github.com/manchitt/virtual-universe-26/issues/4) with Playwright screenshot uploaded via `gh issue create --attach`.
* **Tutorial 2 · Create a Stacked Pull Request (Mona's Café Menu)**
  - **Status:** Verified Complete and Merged.
  - **Artifacts:**
    - [PR #1 — Add espresso to the menu](https://github.com/manchitt/virtual-universe-26/pull/1) (`menu/espresso` into `main`) — **MERGED**
    - [PR #2 — Add latte to the menu](https://github.com/manchitt/virtual-universe-26/pull/2) (`menu/latte` into `menu/espresso`) — **MERGED**
    - [Stack #3](https://github.com/manchitt/virtual-universe-26/stack/3)
    - Executed `gh stack merge --yes --merge`; fast-forwarded `main` locally with `01-github-latest-features/create-a-stacked-pr/menu.md` containing espresso ($3.00) and latte ($4.50).

### Section 2: Agentic Software Development with GitHub Copilot (Project Code & Skill Files)
* **Part 1 · Skill Requirement & Universe Notes Implementation**
  - **Status:** Verified Complete.
  - **Artifacts:**
    - `.github/skills/issue-to-pr/SKILL.md` updated and pushed to `main` (requires "How to test" section).
    - [Issue #5 — Add a list command to universe-notes](https://github.com/manchitt/virtual-universe-26/issues/5).
    - Created `universe-notes/list.js` and `"list": "node list.js"` in `universe-notes/package.json`. Tested with `npm run list`.
    - [Draft PR #6 — Fix #5: Add a list command to universe-notes](https://github.com/manchitt/virtual-universe-26/pull/6) with test steps.
* **Part 3 · Search Command Implementation**
  - **Status:** Verified Complete.
  - **Artifacts:**
    - [Issue #7 — Add a search command to universe-notes](https://github.com/manchitt/virtual-universe-26/issues/7).
    - Created `universe-notes/search.js` and `"search": "node search.js"` in `universe-notes/package.json`. Tested with `npm run search -- stacked`.
    - [Draft PR #8 — Fix #7: Add a search command to universe-notes](https://github.com/manchitt/virtual-universe-26/pull/8).

### Section 3: GitHub Universe Highlights & Issue Artifacts
* **Attach a Cheat Sheet Artifact**
  - **Status:** Verified Complete.
  - **Artifacts:**
    - [Issue #9 — My GitHub Universe '26 cheat sheet](https://github.com/manchitt/virtual-universe-26/issues/9) with right-aligned astronaut image.
    - [Artifact #1: GitHub Universe 2026 cheat sheet](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/1)
    - [Artifact #2: How Copilot built this](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/2)
    - [Artifact #3: Badger easter egg card](https://github.com/manchitt/virtual-universe-26/issues/9/artifacts/3) (rendered via headless Chrome).

---

## 2. Prepared in Code vs. Pending in GitHub Copilot App

The following workshop steps require the interactive **GitHub Copilot App** GUI (or session extensions) and cannot be executed via the local terminal/git toolchain:

| Exercise | Prepared / Local State | Pending Copilot App Action |
|---|---|---|
| **Section 2 · Part 1** | Skill file updated on `main`, issue #5 created, PR #6 created | Run `/issue-to-pr 5` inside the Copilot App chat |
| **Section 2 · Part 2** | Skill file updated to specify Context7 MCP connector usage | Add Context7 MCP server under Copilot App `Customize -> Add server -> HTTP` |
| **Section 2 · Part 3** | Skill file updated with security review rule, issue #7 and PR #8 created | Run `/security-review` in Copilot App chat on PR #6 |
| **Section 2 · Part 4** | Prompt text and configuration instructions documented | Open `Automations -> New Automation` in Copilot App, configure "Issue to PR", and run |

---

## 3. Codespace Access Status

* **Codespace detected:** `solitary-troll-4qg7vqwqpw6g2j7p6` at `https://solitary-troll-4qg7vqwqpw6g2j7p6.github.dev/`.
* **CLI Access Blocker:** `gh codespace` returned HTTP 403 (missing `codespace` scope).
  * **To unlock:** Run `gh auth refresh -h github.com -s codespace` in your terminal and approve the browser prompt.
* **Safari Automation Blocker:** "Allow JavaScript from Apple Events" is disabled in Safari Settings -> Developer.
