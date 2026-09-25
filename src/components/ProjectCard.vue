<template>
  <article class="project-row" :class="project.status">
    <header class="project-header">
      <div class="summary">
        <div class="meta">
          <StatusPill :status="project.status" />
          <span v-if="project.shippedAt" class="date">{{ formatDate(project.shippedAt) }}</span>
        </div>

        <h2 class="title">{{ project.title }}</h2>
        <p class="one-liner">
          <span class="tldr">TL;DR</span>
          <span>{{ project.oneLiner }}</span>
        </p>
      </div>

      <a
        v-if="primaryLink"
        :href="primaryLink.url"
        target="_blank"
        rel="noopener"
        class="preview-link"
        :aria-label="`Preview ${project.title}`"
      >
        Preview URL <span aria-hidden="true">↗</span>
      </a>
    </header>

    <div class="talks">
      <section class="talk real-talk">
        <h3>Real talk</h3>
        <div class="talk-body" v-html="project.realTalkHtml"></div>
      </section>

      <section class="talk nerd-talk">
        <h3>Nerd talk</h3>
        <div class="talk-body" v-html="project.nerdTalkHtml"></div>
      </section>
    </div>

    <footer v-if="otherLinks.length || project.tags?.length" class="project-footer">
      <div v-if="project.tags?.length" class="tags" aria-label="Project tags">
        <span v-for="t in project.tags" :key="t" class="tag">{{ t }}</span>
      </div>

      <nav v-if="otherLinks.length" class="related-links" :aria-label="`More ${project.title} links`">
        <a v-for="link in otherLinks" :key="link.label" :href="link.url" target="_blank" rel="noopener">
          {{ link.label }} <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </footer>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import StatusPill from './StatusPill.vue'

const props = defineProps({
  project: { type: Object, required: true }
})

function isRealUrl(url) {
  return url && url !== '#' && !url.startsWith('javascript:')
}

const validLinks = computed(() => (props.project.links || []).filter(link => isRealUrl(link.url)))
const primaryLink = computed(() => validLinks.value[0] || null)
const otherLinks = computed(() => validLinks.value.slice(1))

function formatDate(iso) {
  if (!iso) return ''
  const date = new Date(iso)
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  return `${month} '${String(date.getFullYear()).slice(-2)}`
}
</script>

<style scoped>
.project-row {
  padding: clamp(28px, 4.5vw, 56px);
  border: 1px solid var(--line);
  border-radius: 24px;
  background: color-mix(in oklch, var(--surface) 94%, transparent);
  box-shadow: 0 1px 0 oklch(26% 0.03 255 / 0.06);
  min-width: 0;
}

.project-header {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: clamp(24px, 5vw, 72px);
  align-items: start;
  padding-bottom: clamp(24px, 3vw, 36px);
  border-bottom: 1px solid var(--line);
}

.summary { min-width: 0; }

.meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.date {
  color: var(--text-muted);
  font-size: 0.72rem;
  font-family: var(--font-mono);
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.title {
  margin: 0 0 12px;
  color: var(--text);
  font-family: var(--font-serif);
  font-size: clamp(2.15rem, 4.6vw, 4.6rem);
  font-weight: 400;
  letter-spacing: -0.045em;
  line-height: 0.98;
  text-wrap: balance;
}

.one-liner {
  display: flex;
  gap: 12px;
  align-items: baseline;
  max-width: 65ch;
  margin: 0;
  color: var(--text-muted);
  font-size: clamp(1rem, 1.4vw, 1.12rem);
  line-height: 1.55;
  overflow-wrap: anywhere;
}

.tldr {
  flex: 0 0 auto;
  color: var(--accent-dark);
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 650;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.preview-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 0 5px;
  color: var(--accent-dark);
  border-bottom: 1px solid currentColor;
  font-family: var(--font-serif);
  font-size: 1rem;
  text-decoration: none;
  white-space: nowrap;
  transition: color 160ms ease, gap 180ms var(--ease-out);
}

.preview-link:hover {
  color: var(--text);
  gap: 12px;
}

.talks {
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(280px, 0.65fr);
  gap: clamp(40px, 7vw, 96px);
  padding: clamp(30px, 4.5vw, 54px) 0;
}

.talk { min-width: 0; }

.talk h3 {
  margin: 0 0 18px;
  font-family: var(--font-serif);
  font-size: clamp(1.45rem, 2.4vw, 2rem);
  font-weight: 400;
  line-height: 1;
}

.real-talk h3 { color: var(--accent); }
.nerd-talk h3 { color: var(--plum); }

.talk-body {
  color: var(--text);
  font-family: var(--font-serif);
  font-size: clamp(1.08rem, 1.6vw, 1.32rem);
  line-height: 1.58;
}

.nerd-talk .talk-body {
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 0.94rem;
  line-height: 1.55;
}

.talk-body :deep(p) { margin: 0 0 0.9em; }
.talk-body :deep(p:last-child) { margin-bottom: 0; }

.talk-body :deep(ul) {
  margin: 0;
  padding: 0;
  list-style: none;
}

.talk-body :deep(li) {
  position: relative;
  margin: 0 0 12px;
  padding-left: 18px;
}

.talk-body :deep(li)::before {
  content: "–";
  position: absolute;
  left: 0;
  color: var(--plum);
}

.talk-body :deep(a) {
  color: var(--accent-dark);
  text-underline-offset: 0.16em;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: end;
  padding-top: 20px;
  border-top: 1px solid var(--line);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tag {
  padding: 4px 7px;
  color: var(--text-muted);
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
}

.related-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px 18px;
}

.related-links a {
  color: var(--text-muted);
  font-size: 0.78rem;
  text-underline-offset: 0.2em;
}

.related-links a:hover { color: var(--accent-dark); }

@media (max-width: 800px) {
  .talks {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 620px) {
  .project-row {
    padding: 24px 20px 26px;
    border-radius: 18px;
    overflow-x: clip;
  }

  .project-header { grid-template-columns: 1fr; gap: 16px; }
  .preview-link { justify-self: start; }

  .title {
    font-size: clamp(2.15rem, 12vw, 3.2rem);
    overflow-wrap: anywhere;
  }

  .one-liner {
    align-items: flex-start;
    flex-direction: column;
    gap: 7px;
  }

  .talks { padding: 30px 0; }
  .project-footer { align-items: start; flex-direction: column; }
  .related-links { justify-content: flex-start; }
}
</style>
