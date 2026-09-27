---
slug: bank-logo-catalog
title: Bank Logo Catalog
oneLiner: One API for bank logos worldwide, growing country by country.
status: live
shippedAt: 2026-09-28
tags: [developer-tool, api, fintech, open-source]
links:
  - { label: "Explore the catalog", url: "https://feelfree82.github.io/bank-logo-catalog/" }
  - { label: "Source on GitHub", url: "https://github.com/feelfree82/bank-logo-catalog" }
---

## Real talk

I had hundreds of bank logos and no good way for another product to use them. A folder full of images is useful to a designer, but awkward for an app: bundle the folder and the app gets heavier, or build a delivery system before the first logo appears.

I am turning the collection into a searchable catalog instead. An app can identify a bank, request one record, and load one logo. The rest of the collection stays out of the build.

The long-term goal is simple: any bank, anywhere, through one API. The first public beta covers India and the USA. Japan and Canada are next. Each record keeps its review status visible while the catalog continues to improve.

## Nerd talk

- 765 public beta records across two country catalogs.
- Compact name-and-alias indexes support local search without downloading images.
- Stable institution IDs resolve to individual JSON records and revisioned logo URLs.
- India records include separate compact icons and wordmarks when both are available.
- The first version is static and cacheable, with no signup or application server.
- The public explorer and source repository include a private correction and rights-holder contact.
