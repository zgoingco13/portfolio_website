'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface StoryboardFrameProps {
  image: string
  caption: string
}

export function StoryboardFrame({ image, caption }: StoryboardFrameProps) {
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
      <figure className="storyboard-frame flex h-full flex-col overflow-hidden rounded-xl border border-border">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="img-spin relative block aspect-[4/3] w-full shrink-0 cursor-zoom-in"
          aria-label={`Enlarge: ${caption}`}
        >
          <Image src={image} alt={caption} fill className="object-cover" />
        </button>
        <figcaption className="flex-1 bg-card px-4 py-3 font-sans text-xs text-muted-foreground">
          {caption}
        </figcaption>
      </figure>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/55 p-6 backdrop-blur-sm"
        >
          <Image
            src={image}
            alt={caption}
            width={0}
            height={0}
            sizes="90vw"
            className="h-auto max-h-[80vh] w-auto max-w-[90vw] cursor-default rounded-xl object-contain p-4 md:p-6"
            style={{ backgroundColor: '#F0E6D0' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p
            className="max-w-3xl text-center font-sans text-[1.2rem] italic"
            style={{ color: '#F0E6D0', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
          >
            {caption}
          </p>
        </div>
      )}
    </>
  )
}
