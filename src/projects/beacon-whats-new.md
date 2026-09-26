---
slug: beacon-whats-new
title: Beacon What's New Drawer
oneLiner: A small in-product feed that makes design-system changes easier to discover.
status: building
shippedAt: 2026-05-08
tags: [design-system, release-notes, vue]
links:
  - { label: "Preview", url: "#" }
  - { label: "Source", url: "#" }
---

## Real talk

People rarely pause their work because a separate changelog might contain something relevant. Usually they discover a design-system change only after the old pattern stops behaving the way they expect.

I built a small “What’s New” drawer inside the tool itself. It brings the useful part of recent releases to the place where people are already working, in short explanations rather than a wall of technical notes.

It should feel like a considerate heads-up, not another inbox asking for attention.

## Nerd talk

- The drawer reads published release metadata instead of maintaining a second manual feed.
- Entries are presented inside the product context where a change becomes relevant.
- Release language is shortened for scanning while preserving a path to the full detail.
- Read state can keep previously seen updates from repeatedly demanding attention.
- The project is still being built, so its interaction and publishing contract may change.
