---
slug: snoopy
title: Snoopy
oneLiner: A research pipeline that turns structured product analytics into readable briefs.
status: live
shippedAt: 2026-02-23
tags: [python, analytics, research, automation]
links:
  - { label: "Project link", url: "#" }
---

## Real talk

Product analytics often arrives in one of two unhelpful forms: a dashboard that expects me to find the story myself, or a confident summary that makes it hard to see whether the maths is trustworthy.

Snoopy separates those jobs. Code gathers the data, calculates the measures, and checks the result. Only then does a language model turn the structured output into a brief a designer or product manager can read quickly.

The rule is simple: code does the maths; the language model does the writing. I can change the research question without giving up that boundary.

## Nerd talk

- Reusable Python stages gather data, calculate funnels, rates, and comparisons, then validate the output.
- Exact measures are resolved before any generative writing begins.
- Interpretation context is added as structured input rather than left for the model to infer.
- The final brief and its underlying results are saved for later inspection.
- Inputs, calculations, and prompts can change independently while the verification pipeline stays intact.
