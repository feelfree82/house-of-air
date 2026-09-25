---
slug: pr-previews
title: PR Previews That Don't Die
oneLiner: A tiny reminder system for keeping long-lived prototype links available.
status: live
shippedAt: 2026-05-01
tags: [automation, previews, workflow]
links:
  - { label: "Project link", url: "#" }
---

## Real talk

Prototype links have a habit of dying precisely when someone finally has time to look at them. A review ends, a few weeks pass, and the useful reference has vanished behind an expired deployment.

I made a tiny reminder system that watches the previews I care about and tells me before one disappears. If a demo is coming up, I can also refresh it deliberately instead of discovering the dead link while I am presenting.

Most days it does absolutely nothing. That is the point: old-but-useful prototypes stay dependable without preview maintenance becoming another weekly ritual.

## Nerd talk

- Stores the preview, repository, and age context needed to identify expiring deployments.
- Surfaces reminders only when a tracked preview is approaching its limit.
- Includes a manual refresh path for an upcoming demo or review.
- Keeps routine maintenance local and quiet instead of introducing another dashboard.
- Treats the original preview URL as the durable reference whenever the host allows it.
