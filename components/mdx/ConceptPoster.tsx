'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface ConceptPosterProps {
  /** Concept name shown as the clickable title */
  title: string
  /** Image opened in the overlay */
  src: string
  /** Caption shown under the image in the overlay */
  caption: string
  /** Optional second image shown below the first (e.g. a later storyboard) */
  moreSrc?: string
  /** Caption for the second image */
  moreCaption?: string
}

/**
 * Inline concept title that opens its poster in a full-screen overlay.
 * Same overlay look as ImageWithCaption's lightbox; rendered in a portal so
 * transformed ancestors (reveal animations) can't trap the fixed overlay.
 */
export function ConceptPoster({ title, src, caption, moreSrc, moreCaption }: ConceptPosterProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        className="inline-flex cursor-zoom-in items-baseline gap-1.5 rounded font-semibold text-rust underline decoration-rust/40 decoration-2 underline-offset-4 transition-colors hover:decoration-rust focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
      >
        {title}
        <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0 translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.75">
          <rect x="2" y="2" width="12" height="12" rx="2" />
          <path d="M5 11l2.5-3 2 2L11 8.5 13 11" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={caption}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 cursor-zoom-out overflow-y-auto bg-black/55 p-6 backdrop-blur-sm"
          >
            <div className={`flex min-h-full flex-col items-center gap-4 ${moreSrc ? 'py-6' : 'justify-center'}`}>
              {[
                { s: src, c: caption },
                ...(moreSrc ? [{ s: moreSrc, c: moreCaption ?? '' }] : []),
              ].map(({ s, c }, i) => (
                <figure key={s} className={`flex flex-col items-center gap-4 ${i > 0 ? 'mt-8' : ''}`}>
                  <Image
                    src={s}
                    alt={c}
                    width={0}
                    height={0}
                    sizes="90vw"
                    className="h-auto max-h-[85vh] w-auto max-w-[90vw] cursor-default rounded-xl object-contain p-4 md:p-6"
                    style={{ backgroundColor: '#F0E6D0' }}
                    onClick={(e) => e.stopPropagation()}
                  />
                  <figcaption
                    className="max-w-3xl text-center font-sans text-[1.4rem] italic"
                    style={{ color: '#F0E6D0', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
                  >
                    {c}
                  </figcaption>
                  {i === 0 && moreSrc && (
                    <p className="font-sans text-sm" style={{ color: '#F0E6D0', opacity: 0.8 }}>
                      Scroll down for more ↓
                    </p>
                  )}
                </figure>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </>
  )
}
