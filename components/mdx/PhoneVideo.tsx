'use client'

import { useEffect, useState } from 'react'

interface PhoneVideoProps {
  src: string
  poster?: string
  label: string
}

// The phone recordings have white corners outside the phone body; this clip trims them.
const PHONE_CLIP = 'inset(1% 2% round 16% / 8%)'

/** A looping phone-screen recording, clipped to the phone outline. Click to view it larger. */
export function PhoneVideo({ src, poster, label }: PhoneVideoProps) {
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
        className="img-spin video-spin block w-full max-w-[280px] cursor-zoom-in"
        style={{ borderRadius: '16% / 8%' }}
        aria-label={`Enlarge video: ${label}`}
      >
        <div className="overflow-hidden" style={{ clipPath: PHONE_CLIP }}>
          <video
            src={src}
            poster={poster}
            autoPlay
            loop
            muted
            playsInline
            className="block w-full"
            aria-label={label}
          />
        </div>
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out items-center justify-center bg-black/55 p-6 backdrop-blur-sm"
        >
          <div
            className="overflow-hidden"
            style={{ clipPath: PHONE_CLIP, height: '88vh', aspectRatio: '340 / 688', maxWidth: '90vw' }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={src}
              poster={poster}
              autoPlay
              loop
              muted
              playsInline
              className="block h-full w-full cursor-default object-contain"
            />
          </div>
        </div>
      )}
    </>
  )
}
