"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Short muted clip that fades in over a card's static thumbnail while the card is hovered.
 * Desktop only (a real mouse); touch devices and reduced-motion visitors keep the still image.
 * Place inside the thumbnail box; the card (nearest <a>) is the hover target. While the clip plays,
 * the box gets a `data-hover-playing` attribute so the still image can fade out
 * (e.g. `[&[data-hover-playing]>img]:opacity-0` on the box).
 *
 * `src` is the .mp4 (devices on solid Sand). If a .webm with the same name exists it has a
 * transparent background, so the page's ridges and topo lines show through — used everywhere
 * except Safari, which doesn't draw WebM transparency.
 */
export function HoverVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [source, setSource] = useState<string | undefined>(undefined)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!canHover || reduced) return
    const ua = navigator.userAgent
    const isSafari = /^((?!chrome|chromium|android|crios|fxios|edg).)*safari/i.test(ua)
    setSource(isSafari ? src : src.replace(/\.mp4$/, ".webm"))
    const video = ref.current
    const card = video?.closest("a")
    if (!video || !card) return
    // The thumbnail box gets data-hover-playing while the clip runs, so the still image can fade out
    const box = video.parentElement
    const start = () => {
      video.currentTime = 0
      video
        .play()
        .then(() => {
          setPlaying(true)
          box?.setAttribute("data-hover-playing", "")
        })
        .catch(() => {})
    }
    const stop = () => {
      setPlaying(false)
      box?.removeAttribute("data-hover-playing")
      video.pause()
    }
    card.addEventListener("mouseenter", start)
    card.addEventListener("mouseleave", stop)
    card.addEventListener("focus", start)
    card.addEventListener("blur", stop)
    return () => {
      card.removeEventListener("mouseenter", start)
      card.removeEventListener("mouseleave", stop)
      card.removeEventListener("focus", start)
      card.removeEventListener("blur", stop)
    }
  }, [src])

  return (
    <video
      ref={ref}
      src={source}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      tabIndex={-1}
      className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
        playing ? "opacity-100" : "opacity-0"
      } ${className ?? ""}`}
    />
  )
}
