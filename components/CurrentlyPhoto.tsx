'use client'

import Image from 'next/image'
import { useEffect, useState, type ReactNode } from 'react'
import { Camera } from 'lucide-react'

interface CurrentlyPhotoProps {
  /** Photo shown in the pop-up. If omitted, the text renders as plain text. */
  src?: string
  /** Alt text and caption for the photo. */
  alt: string
  children: ReactNode
}

export function CurrentlyPhoto({ src, alt, children }: CurrentlyPhotoProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!src) return <>{children}</>

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Show photo: ${alt}`}
        className="cursor-zoom-in rounded-sm text-left focus-visible:outline-2 focus-visible:outline-offset-2"
        style={{
          font: 'inherit',
          color: 'inherit',
          background: 'none',
          border: 'none',
          padding: 0,
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: 'var(--color-rust)',
          textUnderlineOffset: '4px',
          outlineColor: 'var(--color-rust)',
        }}
      >
        {children}
        <Camera
          size={13}
          strokeWidth={2}
          color="var(--color-rust)"
          aria-hidden="true"
          style={{ display: 'inline', marginLeft: '6px', verticalAlign: '-1px' }}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex cursor-zoom-out flex-col items-center justify-center gap-4 bg-black/55 p-6 backdrop-blur-sm"
        >
          <Image
            src={src}
            alt={alt}
            width={0}
            height={0}
            sizes="90vw"
            className="h-auto max-h-[80vh] w-auto max-w-[90vw] cursor-default rounded-xl object-contain p-3 md:p-4"
            style={{ backgroundColor: '#F0E6D0' }}
            onClick={(e) => e.stopPropagation()}
          />
          <p
            className="max-w-3xl text-center font-sans text-lg italic"
            style={{ color: '#F0E6D0', textShadow: '0 1px 4px rgba(0,0,0,0.6)' }}
          >
            {alt}
          </p>
        </div>
      )}
    </>
  )
}
