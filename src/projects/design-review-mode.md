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

## Why I built it

Browser prototypes are useful because the artifact behaves like the real thing, but they do not naturally come with the convenient point-and-comment review flow people expect from design tools.

## What it is

A lightweight review layer for live browser prototypes. A reviewer opens a special link, enters their name, then clicks an element or drags across an area to leave feedback. No GitHub account is needed.

Comments stay attached to the screen and context where they were added. Pins use each reviewer’s first-name initial and color, so feedback from several people is still easy to scan.

## For the prototype owner

Every screen’s feedback appears in one inbox. Marking a comment Done removes its pin from the prototype but keeps it in the inbox as history. Hosted comments are retained for 90 days.

## Built to travel

The widget is framework-neutral, MIT licensed, and can be added to any website its owner can edit. A small manifest generates one shared review session with a route-specific link for each important screen.

## Current state

Live as an open-source project with a hosted demo and comment service. The Beacon billing prototype is the first full implementation; its implementation PR requires Dialpad GitHub access.
