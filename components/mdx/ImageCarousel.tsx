'use client'

import { Children, isValidElement, useCallback, useEffect, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { LaptopFrame } from './LaptopFrame'

interface CarouselSlideProps {
  src: string
  caption: string
  /** Short name for the step picker (only shown when the carousel has `steps`). */
  label?: string
}

export function CarouselSlide(_: CarouselSlideProps) {
  return null
}

interface ImageCarouselProps {
  children: ReactNode
  /** Tailwind aspect class for the image box. Default: aspect-[2/1]. */
  aspectClass?: string
  /** Show a row of numbered step buttons under the image instead of dots. */
  steps?: boolean
  captionClassName?: string
  figureClassName?: string
  /** Show the slides on a laptop screen. */
  frame?: 'laptop'
  /** How each image fills its box. Default: cover (top-aligned inside a laptop). */
  imageFit?: 'cover' | 'contain'
  /** Where the step buttons go when `steps` is on. Default: below. */
  stepsPosition?: 'below' | 'side'
}

export function ImageCarousel({
  children,
  aspectClass = 'aspect-[2/1]',
  steps = false,
  captionClassName,
  figureClassName,
  frame,
  imageFit = 'cover',
  stepsPosition = 'below',
}: ImageCarouselProps) {
  const slides: CarouselSlideProps[] = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => {
      const props = (child as { props: CarouselSlideProps }).props
      return { src: props.src, caption: props.caption, label: props.label }
    })
    .filter((s) => s.src && s.caption)

  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const total = slides.length

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total])
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, prev, next])

  if (total === 0) return null

  const current = slides[index]

  const fitClass =
    imageFit === 'contain' ? 'object-contain' : frame === 'laptop' ? 'object-cover object-top' : 'object-cover'

  const Viewer = ({ inset = false }: { inset?: boolean }) => (
    <div className={inset ? 'absolute inset-0' : 'relative'}>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`relative block w-full cursor-zoom-in ${inset ? 'h-full' : aspectClass}`}
        aria-label={`Enlarge: ${current.caption}`}
      >
        <Image
          key={current.src}
          src={current.src}
          alt={current.caption}
          fill
          className={fitClass}
          sizes="(min-width: 768px) 60vw, 100vw"
        />
      </button>

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition hover:scale-105"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition hover:scale-105"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {!steps && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="rounded-full transition-all"
              style={{
                width: i === index ? '24px' : '6px',
                height: '6px',
                background: i === index ? 'var(--color-rust, #b85c38)' : 'rgba(0,0,0,0.3)',
              }}
            />
          ))}
        </div>
      )}
    </div>
  )

  const stepButtons = slides.map((s, i) => (
    <button
      key={i}
      role="tab"
      aria-selected={i === index}
      onClick={() => setIndex(i)}
      className={`rounded-full border px-3 py-1 text-left font-sans text-xs transition ${
        i === index
          ? 'border-rust bg-rust text-sand'
          : 'border-border bg-card text-muted-foreground hover:border-rust hover:text-rust'
      }`}
    >
      {i + 1}. {s.label ?? `Step ${i + 1}`}
    </button>
  ))

  return (
    <>
      <figure className={figureClassName ?? 'my-6'}>
        <div className={steps && stepsPosition === 'side' ? 'flex items-center gap-4' : ''}>
          <div className={steps && stepsPosition === 'side' ? 'min-w-0 flex-1' : ''}>
            {frame === 'laptop' ? (
              <div className="img-spin relative rounded-xl">
                <LaptopFrame>
                  <Viewer inset />
                </LaptopFrame>
              </div>
            ) : (
              <div className="img-spin relative rounded-xl">
                <div className={`relative overflow-hidden rounded-xl ${imageFit === 'contain' ? 'bg-transparent' : 'bg-card'}`}>
                  <Viewer />
                </div>
              </div>
            )}

            {steps && stepsPosition === 'below' && (
              <div className="mt-3 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Steps">
                {stepButtons}
              </div>
            )}

            <figcaption
              className={`mt-2 text-center font-sans italic ${captionClassName ?? 'text-sm text-muted-foreground'}`}
            >
              {current.caption}
            </figcaption>
          </div>

          {steps && stepsPosition === 'side' && (
            <div className="flex w-32 shrink-0 flex-col gap-2" role="tablist" aria-label="Steps" aria-orientation="vertical">
              {stepButtons}
            </div>
          )}
        </div>
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.caption}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/55 p-6 backdrop-blur-sm"
        >
          <Image
            src={current.src}
            alt={current.caption}
            width={0}
            height={0}
            sizes="90vw"
            className="h-auto max-h-[80vh] w-auto max-w-[90vw] cursor-default rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p
            className="max-w-3xl text-center font-sans text-[1.2rem] italic"
            style={{ color: '#F0E6D0', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
          >
            {current.caption}
          </p>
        </div>
      )}
    </>
  )
}
