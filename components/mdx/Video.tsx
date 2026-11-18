'use client'

import { useEffect, useState } from 'react'
import { LaptopFrame } from './LaptopFrame'

interface VideoProps {
  src: string
  caption: string
  title?: string
  poster?: string
  wrapperClassName?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  /** Click the video to view it larger. Hides the inline controls (the large view has them). */
  lightbox?: boolean
  /** Fit inside wrapperClassName's box instead of using the video's own shape. */
  objectFit?: 'cover' | 'contain'
  figureClassName?: string
  /** Show the video on a laptop screen. */
  frame?: 'laptop'
}

export function Video({
  src,
  caption,
  title,
  poster,
  wrapperClassName,
  autoPlay = false,
  loop = false,
  muted = false,
  lightbox = false,
  objectFit,
  figureClassName,
  frame,
}: VideoProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const videoClass =
    frame === 'laptop'
      ? 'absolute inset-0 h-full w-full object-cover object-top'
      : objectFit
        ? `absolute inset-0 h-full w-full object-${objectFit}`
        : 'block h-auto w-full'

  const videoEl = (
    <video
      src={src}
      poster={poster}
      controls={!lightbox}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
      className={videoClass}
      aria-label={caption}
    />
  )

  const frameClass = `relative overflow-hidden rounded-xl ${wrapperClassName ?? ''}`
  const media =
    frame === 'laptop' ? <LaptopFrame>{videoEl}</LaptopFrame> : <div className={frameClass}>{videoEl}</div>

  return (
    <>
      <figure className={figureClassName ?? 'my-6'}>
        {title && (
          <p className="mb-3 text-center font-sans text-sm font-semibold uppercase tracking-widest text-muted-foreground">
            {title}
          </p>
        )}
        {lightbox ? (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`img-spin block w-full cursor-zoom-in rounded-xl focus-visible:outline-2 focus-visible:outline-rust`}
            aria-label={`Enlarge video: ${caption}`}
          >
            {media}
          </button>
        ) : (
          media
        )}
        <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
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
          <video
            src={src}
            poster={poster}
            autoPlay
            loop={loop}
            muted
            controls
            playsInline
            className="h-auto max-h-[82vh] w-auto max-w-[90vw] cursor-default rounded-xl"
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
