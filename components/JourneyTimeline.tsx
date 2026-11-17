'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Camera } from 'lucide-react'
import { CurrentlyPhoto } from '@/components/CurrentlyPhoto'

export interface JourneyRow {
  year: string
  dotColor: string
  eyebrow: string
  description: string
  photo?: string
  photoAlt?: string
}

/**
 * "My journey" timeline.
 * Desktop (lg+): hovering, focusing or clicking a row swaps the photo in a
 * photo panel on the right. The last-selected photo stays put on mouse-out.
 * Mobile: no panel; each eyebrow is a tap-to-open lightbox (CurrentlyPhoto).
 */
export function JourneyTimeline({ rows }: { rows: JourneyRow[] }) {
  // Default to the most recent row that has a photo ("Now").
  const defaultIndex = (() => {
    for (let i = rows.length - 1; i >= 0; i--) if (rows[i].photo) return i
    return 0
  })()
  const [active, setActive] = useState(defaultIndex)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  const activeRow = rows[active]

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-16">
      {/* ── LEFT: timeline ── */}
      <div style={{ position: 'relative' }}>
        {/* Dashed vertical trail */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            left: '6px',
            top: '6px',
            bottom: '6px',
            width: '1px',
            background:
              'repeating-linear-gradient(to bottom, var(--color-rust) 0px, var(--color-rust) 3px, transparent 3px, transparent 6px)',
            zIndex: 0,
          }}
        />

        {rows.map((row, i) => {
          const isActive = i === active
          const select = () => {
            if (row.photo) setActive(i)
          }
          const interactive = isDesktop && !!row.photo

          return (
            <div
              key={i}
              onMouseEnter={select}
              onFocus={select}
              onClick={select}
              tabIndex={interactive ? 0 : undefined}
              role={interactive ? 'button' : undefined}
              aria-pressed={interactive ? isActive : undefined}
              className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{
                position: 'relative',
                display: 'flex',
                gap: '20px',
                paddingBottom: i < rows.length - 1 ? '28px' : 0,
                outlineColor: 'var(--color-rust)',
                cursor: interactive ? 'default' : undefined,
              }}
            >
              {/* Dot */}
              <div
                className={`transition-transform duration-200 ease-out ${isActive ? 'lg:scale-[1.45]' : ''}`}
                style={{
                  width: '13px',
                  height: '13px',
                  borderRadius: '50%',
                  background: row.dotColor,
                  border: '2px solid var(--color-sand)',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                  marginTop: '3px',
                }}
              />

              {/* Content */}
              <div className={`transition-opacity duration-200 ${isActive ? '' : 'lg:opacity-55'}`}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '4px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-hero)',
                      fontSize: '18px',
                      color: 'var(--color-forest)',
                      lineHeight: 1,
                    }}
                  >
                    {row.year}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--color-rust)',
                      textTransform: 'uppercase',
                      letterSpacing: '1.2px',
                    }}
                  >
                    ·{' '}
                    {/* Mobile: tap to open the photo */}
                    <span className="lg:hidden">
                      <CurrentlyPhoto src={row.photo} alt={row.photoAlt ?? row.eyebrow}>
                        {row.eyebrow}
                      </CurrentlyPhoto>
                    </span>
                    {/* Desktop: plain label, photo shows in the panel */}
                    <span className="hidden lg:inline">{row.eyebrow}</span>
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: 'var(--font-mid)',
                    fontSize: '13px',
                    lineHeight: '1.55',
                    color: 'var(--color-charcoal)',
                    margin: 0,
                  }}
                >
                  {row.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* ── RIGHT: photo panel, same height as the timeline (desktop only) ── */}
      <div className="hidden lg:flex" style={{ flexDirection: 'column' }}>
        <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              flex: 1,
              minHeight: 0,
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              background: 'var(--color-sand)',
            }}
          >
            {rows.map((row, i) =>
              row.photo ? (
                <div
                  key={i}
                  aria-hidden={i !== active}
                  className="absolute inset-0 transition-opacity duration-300 ease-out"
                  style={{ opacity: i === active ? 1 : 0 }}
                >
                  {/* Soft blurred fill so portrait, square and landscape shots all sit in one frame */}
                  <Image
                    src={row.photo}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, 1px"
                    className="scale-110 object-cover opacity-60 blur-2xl"
                  />
                  <Image
                    src={row.photo}
                    alt={i === active ? row.photoAlt ?? '' : ''}
                    fill
                    sizes="(min-width: 1024px) 30vw, 1px"
                    className="object-contain"
                  />
                </div>
              ) : null,
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px' }}>
            <Camera size={11} strokeWidth={2} color="var(--color-rust)" aria-hidden="true" />
            <span
              aria-live="polite"
              style={{
                fontFamily: 'var(--font-mid)',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: '12px',
                color: 'var(--text-secondary)',
                lineHeight: 1.4,
              }}
            >
              {activeRow.year} · {activeRow.photoAlt}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
