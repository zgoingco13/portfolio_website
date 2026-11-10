"use client"

import { useEffect, useCallback, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const PHOTOS: { src: string; alt: string; position?: string }[] = [
  { src: "/images/nature-carousel/nature-01.jpg", alt: "Orange sunset glowing behind a dark mountain ridgeline" },
  { src: "/images/nature-carousel/nature-21.jpg", alt: "Four climbers in helmets smiling below a red sandstone wall" },
  { src: "/images/nature-carousel/nature-02.jpg", alt: "Lily pads and white agapanthus in a lush garden" },
  { src: "/images/nature-carousel/nature-22.jpg", alt: "Tandem skydiving selfie in free fall above farmland" },
  { src: "/images/nature-carousel/nature-03.jpg", alt: "Climber high on a red sandstone wall" },
  { src: "/images/nature-carousel/nature-23.jpg", alt: "Thumbs-up climbing selfie high in red sandstone", position: "center 45%" },
  { src: "/images/nature-carousel/nature-04.jpg", alt: "Pond with lily pads under a tree canopy" },
  { src: "/images/nature-carousel/nature-24.jpg", alt: "Climber cheering with arms raised below a granite spire", position: "center 30%" },
  { src: "/images/nature-carousel/nature-05.jpg", alt: "Alpine lake below granite cliffs and pines" },
  { src: "/images/nature-carousel/nature-25.jpg", alt: "Group photo at a women's climbing meetup in a bouldering gym", position: "center 45%" },
  { src: "/images/nature-carousel/nature-06.jpg", alt: "Selfie above a turquoise glacier lake" },
  { src: "/images/nature-carousel/nature-26.jpg", alt: "Hiker squeezing through a narrow granite slot", position: "center 80%" },
  { src: "/images/nature-carousel/nature-07.jpg", alt: "Hiker on a boardwalk across a glacial river flat" },
  { src: "/images/nature-carousel/nature-27.jpg", alt: "Thumbs-up selfie in a mosquito head net at a forest campsite", position: "center 25%" },
  { src: "/images/nature-carousel/nature-08.jpg", alt: "Two hikers resting on a rocky ridge facing snowy peaks" },
  { src: "/images/nature-carousel/nature-28.jpg", alt: "Waving with a headlamp inside a limestone cave" },
  { src: "/images/nature-carousel/nature-09.jpg", alt: "Hiker on a forested mountain trail", position: "center 30%" },
  { src: "/images/nature-carousel/nature-29.jpg", alt: "Two climbers smiling on a granite ledge at sunrise" },
  { src: "/images/nature-carousel/nature-10.jpg", alt: "Two people at a viewpoint over a glaciered valley" },
  { src: "/images/nature-carousel/nature-30.jpg", alt: "Climber leading a route on a shaded rock wall above the trees" },
  { src: "/images/nature-carousel/nature-11.jpg", alt: "Turquoise lake in a forested valley under big clouds" },
  { src: "/images/nature-carousel/nature-31.jpg", alt: "Climbing selfie on a ledge high above a forested valley", position: "center 40%" },
  { src: "/images/nature-carousel/nature-12.jpg", alt: "Elk crossing a road beside a pine forest" },
  { src: "/images/nature-carousel/nature-32.jpg", alt: "Bouldering on an indoor climbing wall" },
  { src: "/images/nature-carousel/nature-13.jpg", alt: "Hiker sitting on rocks above a turquoise lake" },
  { src: "/images/nature-carousel/nature-33.jpg", alt: "Thumbs up at a chained anchor high on a crag", position: "center 20%" },
  { src: "/images/nature-carousel/nature-14.jpg", alt: "Close-up of leaves beside a small waterfall" },
  { src: "/images/nature-carousel/nature-34.jpg", alt: "Dog licking a climber's face at the base of a crag", position: "center 35%" },
  { src: "/images/nature-carousel/nature-15.jpg", alt: "Cyclist by a pond lined with boulders and palm trees" },
  { src: "/images/nature-carousel/nature-35.jpg", alt: "Triathlon finisher with a medal and a purple road bike by the beach", position: "center 35%" },
  { src: "/images/nature-carousel/nature-16.jpg", alt: "Bike at the top of wooden stairs down to the ocean" },
  { src: "/images/nature-carousel/nature-36.jpg", alt: "Race finisher with a medal and a purple road bike by a whale mural", position: "center 35%" },
  { src: "/images/nature-carousel/nature-17.jpg", alt: "City skyline and water seen past green treetops" },
  { src: "/images/nature-carousel/nature-37.jpg", alt: "Friends floating in inner tubes in a clear river canyon" },
  { src: "/images/nature-carousel/nature-18.jpg", alt: "Two hikers holding a Quandary Peak 14,271 sign at the summit" },
  { src: "/images/nature-carousel/nature-38.jpg", alt: "Climber on a pocketed rock face among trees" },
  { src: "/images/nature-carousel/nature-19.jpg", alt: "Hiker in a wildflower meadow among tall pines", position: "center 25%" },
  { src: "/images/nature-carousel/nature-39.jpg", alt: "Resting on a summit boulder with two dogs and a valley view", position: "center 60%" },
  { src: "/images/nature-carousel/nature-20.jpg", alt: "Alpine lake below a scree slope and snowy peak" },
]

const TOTAL = PHOTOS.length
const GAP = 2 // px between photos
const VISIBLE = 4 // photos across
const SECONDS_PER_PHOTO = 10 // drift speed: one photo width every 10s
const NUDGE_MS = 600 // arrow-click glide duration

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2)

export function OutdoorCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const stepRef = useRef(0) // one photo width + gap, in px
  const offsetRef = useRef(0)
  const pausedRef = useRef(false)
  const reducedRef = useRef(false)
  const nudgeRef = useRef<{ from: number; to: number; start: number } | null>(null)

  const applyTransform = useCallback(() => {
    const loop = stepRef.current * TOTAL
    if (!trackRef.current || loop === 0) return
    const x = ((offsetRef.current % loop) + loop) % loop
    trackRef.current.style.transform = `translate3d(${-x}px, 0, 0)`
  }, [])

  // Measure photo width; keep it right on resize
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const oldStep = stepRef.current
      const cell = (el.clientWidth - GAP * (VISIBLE - 1)) / VISIBLE
      stepRef.current = cell + GAP
      // keep the same photo in view after a resize
      if (oldStep > 0) offsetRef.current *= stepRef.current / oldStep
      applyTransform()
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [applyTransform])

  // Respect prefers-reduced-motion, including live changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    reducedRef.current = mq.matches
    const handler = (e: MediaQueryListEvent) => (reducedRef.current = e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  // Continuous drift + arrow glides, one animation loop
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000 // clamp after tab switches
      last = now
      const nudge = nudgeRef.current
      if (nudge) {
        const t = Math.min((now - nudge.start) / NUDGE_MS, 1)
        offsetRef.current = nudge.from + (nudge.to - nudge.from) * easeInOut(t)
        if (t === 1) nudgeRef.current = null
      } else if (!pausedRef.current && !reducedRef.current) {
        offsetRef.current += (stepRef.current / SECONDS_PER_PHOTO) * dt
      }
      applyTransform()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [applyTransform])

  // Arrows glide one photo; snap to whole photos so the strip lines up
  const move = useCallback((dir: 1 | -1) => {
    const step = stepRef.current
    if (step === 0) return
    const from = offsetRef.current
    const to = dir === 1 ? (Math.floor(from / step + 0.01) + 1) * step : (Math.ceil(from / step - 0.01) - 1) * step
    if (reducedRef.current) {
      offsetRef.current = to
      applyTransform()
    } else {
      nudgeRef.current = { from, to, start: performance.now() }
    }
  }, [applyTransform])

  const prev = useCallback(() => move(-1), [move])
  const next = useCallback(() => move(1), [move])

  // Two copies of the strip so it loops seamlessly
  const strip = [...PHOTOS, ...PHOTOS]

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Photos from the outdoors"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
      onFocus={() => (pausedRef.current = true)}
      onBlur={() => (pausedRef.current = false)}
    >
      {/* Drifting strip — 4 visible, 4:3 aspect ratio, 2px gaps */}
      <div ref={trackRef} className="flex will-change-transform" style={{ gap: `${GAP}px` }}>
        {strip.map((photo, i) => {
          const isCopy = i >= TOTAL
          return (
            <div
              key={i}
              className="relative aspect-[4/3] shrink-0 overflow-hidden"
              style={{ width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
              aria-hidden={isCopy || undefined}
            >
              <Image
                src={photo.src}
                alt={isCopy ? "" : photo.alt}
                fill
                className="object-cover"
                style={{ objectPosition: photo.position ?? "center" }}
                sizes="25vw"
                priority={i < VISIBLE}
              />
            </div>
          )
        })}
      </div>

      {/* Prev arrow */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-200 hover:scale-105"
        style={{
          background: "rgba(240, 230, 208, 0.92)",
          borderColor: "var(--color-sand-edge)",
          color: "var(--color-charcoal)",
        }}
        aria-label="Previous photo"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Next arrow */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border transition-transform duration-200 hover:scale-105"
        style={{
          background: "rgba(240, 230, 208, 0.92)",
          borderColor: "var(--color-sand-edge)",
          color: "var(--color-charcoal)",
        }}
        aria-label="Next photo"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}
