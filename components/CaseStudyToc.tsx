'use client'

import { useEffect, useState } from 'react'

type Item = { id: string; title: string }

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

/*
 * "On this page" navigation for case studies.
 * - Wide screens (1280px+): a fixed list in the left margin, shown from the top of the page, that highlights the section you're reading.
 * - Smaller screens: a "Contents" button in the bottom-right corner that opens the same list.
 * Sections come from each <Section title="…"> heading, so new sections appear automatically.
 */
export function CaseStudyToc() {
  const [items, setItems] = useState<Item[]>([])
  const [active, setActive] = useState<string>('')
  const [inArticle, setInArticle] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Collect the section headings and give each one an anchor id
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLHeadingElement>('article section > h2'))
    const found = headings.map((h) => {
      const id = h.id || slugify(h.textContent || '')
      h.id = id
      h.style.scrollMarginTop = '96px' // keep the title clear of the sticky top nav
      return { id, title: h.textContent || '' }
    })
    setItems(found)
  }, [])

  // Highlight the section being read, and only show the nav while inside the article
  useEffect(() => {
    if (!items.length) return
    const onScroll = () => {
      const line = window.innerHeight * 0.3
      let current = items[0].id
      for (const { id } of items) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActive(current)
      // Visible from the top of the page; hidden once the article ends (so it doesn't sit over the CTA and footer)
      const article = document.querySelector('article')
      if (article) {
        const notPastEnd = article.getBoundingClientRect().bottom > window.innerHeight * 0.6
        setInArticle(notPastEnd)
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [items])

  if (items.length < 3) return null

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    history.replaceState(null, '', `#${id}`)
    setMenuOpen(false)
  }

  const list = (
    <ol className="toc-list">
      {items.map(({ id, title }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            onClick={(e) => {
              e.preventDefault()
              go(id)
            }}
            className={id === active ? 'toc-link is-active' : 'toc-link'}
            aria-current={id === active ? 'location' : undefined}
          >
            {title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <style>{TOC_CSS}</style>

      {/* Wide screens: fixed list in the left margin */}
      <nav aria-label="On this page" className={`toc-rail ${inArticle ? 'is-visible' : ''}`}>
        <p className="toc-eyebrow">On this page</p>
        {list}
      </nav>

      {/* Smaller screens: floating button + pop-up list */}
      <div className={`toc-fab-wrap ${inArticle ? 'is-visible' : ''}`}>
        {menuOpen && (
          <nav aria-label="On this page" className="toc-sheet">
            <p className="toc-eyebrow">On this page</p>
            {list}
          </nav>
        )}
        <button
          type="button"
          className="toc-fab"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? 'Close' : 'Contents'}
        </button>
      </div>
    </>
  )
}

const TOC_CSS = `
.toc-eyebrow {
  font-family: var(--font-sans); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
  color: var(--color-rust); margin: 0 0 0.75rem 0;
}
.toc-list { list-style: none; margin: 0; padding: 0; border-left: 1px solid var(--color-sand-edge); }
.toc-list li { margin: 0; }
.toc-link {
  display: block; padding: 0.3rem 0 0.3rem 0.85rem; margin-left: -1px; border-left: 2px solid transparent;
  font-family: var(--font-sans); font-size: 0.78rem; letter-spacing: 0.06em; text-transform: uppercase;
  color: var(--color-charcoal); opacity: 0.65; text-decoration: none; line-height: 1.35;
  transition: color 0.2s, opacity 0.2s, border-color 0.2s;
}
.toc-link:hover { opacity: 1; color: var(--color-charcoal); text-shadow: 0.4px 0 0 currentColor; }
.toc-link.is-active { opacity: 1; color: var(--color-rust); font-weight: 700; border-left-color: var(--color-rust); }

.toc-rail {
  display: none; position: fixed; top: 128px; left: 1.25rem; width: calc(12.5vw - 2.5rem); z-index: 30;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.toc-rail.is-visible { opacity: 1; pointer-events: auto; }

.toc-fab-wrap {
  position: fixed; right: 1rem; bottom: 1rem; z-index: 40; display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem;
  opacity: 0; pointer-events: none; transition: opacity 0.3s;
}
.toc-fab-wrap.is-visible { opacity: 1; pointer-events: auto; }
.toc-fab {
  font-family: var(--font-sans); font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase;
  background: var(--color-forest); color: var(--color-sand); border: none; border-radius: 999px;
  padding: 0.65rem 1.1rem; box-shadow: 0 4px 14px rgba(31,42,34,0.25); cursor: pointer;
}
.toc-sheet {
  background: var(--color-sand); border: 1px solid var(--color-sand-edge); border-radius: 0.75rem;
  padding: 1rem 1.25rem; box-shadow: 0 8px 24px rgba(31,42,34,0.18); max-height: 70vh; overflow-y: auto; min-width: 220px;
}

@media (min-width: 1280px) {
  .toc-rail { display: block; }
  .toc-fab-wrap { display: none; }
}
`
