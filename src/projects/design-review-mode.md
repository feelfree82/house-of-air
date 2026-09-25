---
slug: design-review-mode
title: Design Review Mode
oneLiner: Figma-style comments for live browser prototypes: point, click, comment, and share.
status: live
shippedAt: 2026-09-18
tags: [vue, design-review, prototypes]
links:
  - { label: "Hosted demo", url: "https://review-prototype.netlify.app" }
  - { label: "Public project on GitHub", url: "https://github.com/amitdialpad/review-prototype" }
  - { label: "Beacon implementation (Dialpad access)", url: "https://github.com/dialpad/design/pull/120" }
---

## Real talk

Review is becoming part of my design workflow. Once I finish a prototype, I use the Review skill to push it from my local workspace to Beacon. It gives me one link that I can open myself or share with anyone.

I usually review it first. I click through the real experience and comment directly wherever something breaks, the spacing feels wrong, or an interaction needs work. It feels like talking to the prototype: I point to the exact place and explain what I want to change.

When I am finished, I simply tell Codex, “I’m done.” It gathers the open comments, works out the changes, updates the same prototype, verifies the deployed fixes, and gives me the same link back. Then I can repeat the cycle myself or invite someone else into it.

## Nerd talk

- The commenting tool upgrades itself through a version manifest.
- Repository, branch, pull request, session, and original-link context are remembered privately.
- Only unhandled comments are retrieved; updates return to the same pull request and URL.
- A comment is recorded as implemented only after its deployed fix is verified. The reviewer still decides when to mark it Done.
- Concurrent agents cannot overwrite one another’s progress, and mismatched repositories, sessions, URLs, comment IDs, or commit SHAs are rejected.
