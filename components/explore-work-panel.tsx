"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FootstepTrail } from "@/components/footstep-trail"

export interface ExploreSlide {
  title: string
  image: string
  logo?: string
  /** Share of the image's width the devices actually fill (0–1), so the logo can match it */
  contentWidth?: number
}

const INTERVAL_MS = 1500 // time each case study stays up
const STEP_GAP = 26 // px between footprints in the CTA trail
const PRINT_W = 20 // px, matches FootstepTrail
const BOX_ASPECT = 2 / 1 // preview image box (wider than the 4:3 thumbnails, so it's shorter)
const THUMB_ASPECT = 4 / 3 // the thumbnails themselves
// A 4:3 thumbnail drawn inside the wider box only fills this share of its width
const FIT = Math.min(1, THUMB_ASPECT / BOX_ASPECT)

/**
 * Homepage hero, right column: a mini "case study hero" that rotates through the
 * case studies (logo on top when the study has one, its devices below). Only the
 * "Explore my work" button links to /work. Off for reduced-motion users. Hovering "Explore my work" sends a
 * footstep trail walking away from the button, out to the preview's right edge.
 */
export function ExploreWorkPanel({ slides }: { slides: ExploreSlide[] }) {
  const [index, setIndex] = useState(0)
  // The CTA trail runs from the button to the site's right margin (the nearest
  // [data-site-margins] container's content edge), so measure that distance.
  const trailRef = useRef<HTMLDivElement>(null)
  const [trailWidth, setTrailWidth] = useState(0)

  useEffect(() => {
    const el = trailRef.current
    if (!el) return
    const measure = () => {
      const box = el.closest("[data-site-margins]") as HTMLElement | null
      if (!box) return
      const rightEdge = box.getBoundingClientRect().right - parseFloat(getComputedStyle(box).paddingRight)
      setTrailWidth(Math.max(0, rightEdge - el.getBoundingClientRect().left))
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])
  const trailCount = trailWidth > PRINT_W ? Math.floor((trailWidth - PRINT_W) / STEP_GAP) + 1 : 0

  useEffect(() => {
    if (slides.length < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), INTERVAL_MS)
    return () => clearInterval(t)
  }, [slides.length])

  return (
    <div>
      {/* Rotating mini hero — every slide sits in the same grid cell, so the box keeps the tallest slide's height */}
      <div className="grid">
        {slides.map((slide, i) => (
          <div
            key={slide.title}
            aria-hidden={i !== index}
            className={`flex flex-col items-center justify-end transition-opacity duration-500 ease-in-out [grid-area:1/1] ${
              i === index ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            {slide.logo ? (
              <Image
                src={slide.logo}
                alt={`${slide.title} logo`}
                width={1200}
                height={300}
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="h-auto"
                style={{ width: `${Math.round((slide.contentWidth ?? 0.92) * FIT * 100)}%` }}
                priority={i === 0}
              />
            ) : (
              <span
                className="text-center font-serif font-bold leading-none text-foreground"
                style={{ fontSize: "var(--text-h2)" }}
              >
                {slide.title}
              </span>
            )}
            <div className="relative mt-3 w-full" style={{ aspectRatio: BOX_ASPECT }}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                sizes="(max-width: 1024px) 90vw, 35vw"
                className="object-contain"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <p className="coordinate" style={{ fontSize: "clamp(10px, 1vw, 13px)", letterSpacing: "2.5px" }}>
          Featured work
        </p>
        <p
          className="mt-3 font-serif font-bold leading-tight text-foreground"
          style={{ fontSize: "clamp(26px, 3.75vw, 42px)" }}
        >
          Let&rsquo;s start exploring
        </p>
        {/* Button centered; hovering it sends the footprints walking away from it, out to the site's
            right margin. The row ignores the pointer so only the button itself triggers the hover. */}
        <div className="group pointer-events-none mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div aria-hidden="true" />
          <Link
            href="/work"
            className="pointer-events-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-rust px-6 py-3 font-sans text-xs font-medium uppercase tracking-[2px] md:px-8 md:py-4 md:text-sm text-sand transition-colors group-hover:bg-ember"
          >
            Explore my work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 md:h-5 md:w-5" />
          </Link>
          <div ref={trailRef} className="relative h-3 min-w-0">
            {trailCount > 0 && (
              <FootstepTrail
                variant="below"
                count={trailCount}
                spacing={STEP_GAP}
                className="left-0 top-1/2"
                style={{ width: trailWidth }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
