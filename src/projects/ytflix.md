---
slug: ytflix
title: YTFLIX
oneLiner: I got bored with the YouTube UI, so I made a Chrome extension that turns YouTube into Netflix.
status: live
shippedAt: 2026-09-09
tags: [chrome-extension, youtube, javascript, open-source, stupid-project]
links:
  - { label: "Get YTFLIX on GitHub", url: "https://github.com/amitdialpad/ytflix-extension" }
---

## Real talk

I got bored with the YouTube UI, so I made a Chrome extension that turns it into Netflix. That is the whole origin story. I wanted my actual YouTube library to feel less like a feed and more like something I would deliberately sit down to watch.

It keeps my recommendations, subscriptions, history, playlists, search, account, and the native player. It just gives the surrounding experience a cinematic streaming-library costume. Useless project #4984, made unnecessarily well.

If you want to fix a bug or add another feature, raise a pull request. Let’s make it properly useless together.

## Nerd talk

- Built with plain JavaScript and CSS on Chrome Manifest V3.
- Reworks the existing YouTube interface; it does not replace the native player or user data.
- Uses no API key, analytics service, YouTube API integration, or build step.
- Installs as an unpacked Chrome extension from the public repository.
- The repository includes the full install, update, testing, and contribution workflow.
