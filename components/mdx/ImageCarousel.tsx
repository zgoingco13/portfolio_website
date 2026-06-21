'use client'

import { Children, isValidElement, useCallback, useState, type ReactNode } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface CarouselSlideProps {
  src: string
  caption: string
}

export function CarouselSlide(_: CarouselSlideProps) {
  return null
}

interface ImageCarouselProps {
  children: ReactNode
}

export function ImageCarousel({ children }: ImageCarouselProps) {
  const slides: CarouselSlideProps[] = Children.toArray(children)
    .filter(isValidElement)
    .map((child) => {
      const props = (child as { props: CarouselSlideProps }).props
      return { src: props.src, caption: props.caption }
    })
    .filter((s) => s.src && s.caption)

  const [index, setIndex] = useState(0)
  const total = slides.length

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + total) % total),
    [total]
  )
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total])

  if (total === 0) return null

  const current = slides[index]

  return (
    <figure className="my-6">
      <div className="relative overflow-hidden rounded-xl bg-card">
        <div className="relative aspect-[2/1] w-full">
          <Image
            key={current.src}
            src={current.src}
            alt={current.caption}
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
        </div>

        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition hover:scale-105"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/90 shadow-sm transition hover:scale-105"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

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
                background:
                  i === index
                    ? 'var(--color-rust, #b85c38)'
                    : 'rgba(0,0,0,0.3)',
              }}
            />
          ))}
        </div>
      </div>
      <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
        {current.caption}
      </figcaption>
    </figure>
  )
}
