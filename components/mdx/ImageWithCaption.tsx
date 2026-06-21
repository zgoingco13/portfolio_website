'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ImageWithCaptionProps {
  src: string
  caption: string
  wrapperClassName?: string
  objectFit?: 'cover' | 'contain'
  natural?: boolean
  lightbox?: boolean
  captionClassName?: string
}

export function ImageWithCaption({
  src,
  caption,
  wrapperClassName,
  objectFit = 'cover',
  natural,
  lightbox,
  captionClassName,
}: ImageWithCaptionProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const imageEl = natural ? (
    <Image
      src={src}
      alt={caption}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto rounded-xl"
    />
  ) : (
    <div className={`relative overflow-hidden rounded-xl ${wrapperClassName ?? 'aspect-video'}`}>
      <Image src={src} alt={caption} fill className={`object-${objectFit}`} />
    </div>
  )

  return (
    <>
      <figure className="my-6">
        {lightbox ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="block w-full cursor-zoom-in rounded-xl transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-rust"
            aria-label={`Enlarge: ${caption}`}
          >
            {imageEl}
          </button>
        ) : (
          imageEl
        )}
        <figcaption className={`mt-2 text-center font-sans text-sm italic ${captionClassName ?? 'text-muted-foreground'}`}>
          {caption}
        </figcaption>
      </figure>

      {lightbox && open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/55 p-6 backdrop-blur-sm"
        >
          <Image
            src={src}
            alt={caption}
            width={0}
            height={0}
            sizes="90vw"
            className="h-auto max-h-[85vh] w-auto max-w-[90vw] cursor-default rounded-xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p
            className="max-w-3xl text-center font-sans text-[1.4rem] italic"
            style={{ color: '#F0E6D0', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
          >
            {caption}
          </p>
        </div>
      )}
    </>
  )
}
