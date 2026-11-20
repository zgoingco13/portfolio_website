"use client"

import { useEffect, useCallback, useRef, useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

interface Photo {
  src: string
  alt: string
  /** Short caption shown in the pop-up */
  caption: string
  year?: string
  place?: string
  position?: string
}

// Year / place come from the original photos' date + GPS (or a sign / race bib in the shot); left out where unknown.
const PHOTOS: Photo[] = [
  { src: "/images/nature-carousel/nature-01.jpg", alt: "Orange sunset glowing behind a dark mountain ridgeline", caption: "Last light over the ridgeline.", year: "2025", place: "Red Rock Canyon, Nevada" },
  { src: "/images/nature-carousel/nature-21.jpg", alt: "Four climbers in helmets smiling below a red sandstone wall", caption: "Climbing crew below the sandstone.", year: "2025", place: "Red Rock Canyon, Nevada" },
  { src: "/images/nature-carousel/nature-02.jpg", alt: "Lily pads and white agapanthus in a lush garden", caption: "Lily pads and agapanthus in the gardens.", year: "2025", place: "The Huntington Library, San Marino, California" },
  { src: "/images/nature-carousel/nature-22.jpg", alt: "Tandem skydiving selfie in free fall above farmland", caption: "Tandem skydive, mid free fall.", year: "2015", place: "Oxnard, California" },
  { src: "/images/nature-carousel/nature-03.jpg", alt: "Climber high on a red sandstone wall", caption: "High on a red sandstone wall.", year: "2025", place: "Red Rock Canyon, Nevada" },
  { src: "/images/nature-carousel/nature-23.jpg", alt: "Thumbs-up climbing selfie high in red sandstone", caption: "Thumbs up from high in the sandstone.", year: "2025", place: "Red Rock Canyon, Nevada", position: "center 45%" },
  { src: "/images/nature-carousel/nature-04.jpg", alt: "Pond with lily pads under a tree canopy", caption: "A quiet pond under the trees.", year: "2025", place: "The Huntington Library, San Marino, California" },
  { src: "/images/nature-carousel/nature-24.jpg", alt: "Climber cheering with arms raised below a granite spire", caption: "Celebrating below a granite spire.", year: "2025", place: "Cathedral Peak, Yosemite National Park", position: "center 30%" },
  { src: "/images/nature-carousel/nature-05.jpg", alt: "Alpine lake below granite cliffs and pines", caption: "Alpine lake below granite cliffs.", year: "2025", place: "Yosemite National Park" },
  { src: "/images/nature-carousel/nature-25.jpg", alt: "Group photo at a women's climbing meetup in a bouldering gym", caption: "Ladies Climbing Coalition meetup.", year: "2026", place: "Sender One Lakewood", position: "center 45%" },
  { src: "/images/nature-carousel/nature-06.jpg", alt: "Selfie above a turquoise glacier lake", caption: "Above a turquoise glacier lake.", year: "2025", place: "Lake Louise, Banff National Park" },
  { src: "/images/nature-carousel/nature-26.jpg", alt: "Hiker squeezing through a narrow granite slot", caption: "Squeezing through a granite slot.", year: "2025", place: "Joshua Tree National Park", position: "center 80%" },
  { src: "/images/nature-carousel/nature-07.jpg", alt: "Hiker on a boardwalk across a glacial river flat", caption: "Boardwalk across the glacial flats.", year: "2025", place: "Lake Louise, Banff National Park" },
  { src: "/images/nature-carousel/nature-27.jpg", alt: "Thumbs-up selfie in a mosquito head net at a forest campsite", caption: "Mosquito season at camp.", year: "2025", place: "Yosemite National Park", position: "center 25%" },
  { src: "/images/nature-carousel/nature-40.jpg", alt: "Hiker holding the Strawberry Peak summit sign with mountains behind", caption: "Made it to the Strawberry Peak sign.", year: "2024", place: "Strawberry Peak, San Gabriel Mountains", position: "center 25%" },
  { src: "/images/nature-carousel/nature-08.jpg", alt: "Two hikers resting on a rocky ridge facing snowy peaks", caption: "A break facing the snowy peaks.", year: "2025", place: "Plain of Six Glaciers, Banff National Park" },
  { src: "/images/nature-carousel/nature-28.jpg", alt: "Waving with a headlamp inside a limestone cave", caption: "Exploring a limestone cave.", year: "2025", place: "Sequoia National Park" },
  { src: "/images/nature-carousel/nature-09.jpg", alt: "Hiker on a forested mountain trail", caption: "On the trail through the forest.", year: "2025", place: "Plain of Six Glaciers trail, Banff National Park", position: "center 30%" },
  { src: "/images/nature-carousel/nature-29.jpg", alt: "Two climbers smiling on a granite ledge at sunrise", caption: "Sunrise from a granite ledge.", year: "2025", place: "Tahquitz Rock, Idyllwild, California" },
  { src: "/images/nature-carousel/nature-10.jpg", alt: "Two people at a viewpoint over a glaciered valley", caption: "Looking out over a glaciered valley.", year: "2025", place: "Columbia Icefield, Jasper National Park" },
  { src: "/images/nature-carousel/nature-30.jpg", alt: "Climber leading a route on a shaded rock wall above the trees", caption: "Leading a route above the trees.", year: "2024", place: "Malibu Creek State Park, California" },
  { src: "/images/nature-carousel/nature-11.jpg", alt: "Turquoise lake in a forested valley under big clouds", caption: "Turquoise lake under big clouds.", year: "2025", place: "Peyto Lake, Banff National Park" },
  { src: "/images/nature-carousel/nature-31.jpg", alt: "Climbing selfie on a ledge high above a forested valley", caption: "Belay selfie high above the valley.", year: "2025", place: "Tahquitz Rock, Idyllwild, California", position: "center 40%" },
  { src: "/images/nature-carousel/nature-12.jpg", alt: "Elk crossing a road beside a pine forest", caption: "An elk crossing the road.", year: "2025", place: "Canadian Rockies" },
  { src: "/images/nature-carousel/nature-32.jpg", alt: "Bouldering on an indoor climbing wall", caption: "Working a problem on the bouldering wall.", year: "2025", place: "Sender One Playa Vista" },
  { src: "/images/nature-carousel/nature-13.jpg", alt: "Hiker sitting on rocks above a turquoise lake", caption: "Sitting above a turquoise lake.", year: "2025", place: "Lake Louise, Banff National Park" },
  { src: "/images/nature-carousel/nature-33.jpg", alt: "Thumbs up at a chained anchor high on a crag", caption: "Thumbs up at the anchor.", year: "2024", place: "Malibu Creek State Park, California", position: "center 20%" },
  { src: "/images/nature-carousel/nature-14.jpg", alt: "Close-up of leaves beside a small waterfall", caption: "Leaves beside a small waterfall.", year: "2025", place: "Sequoia & Kings Canyon National Parks" },
  { src: "/images/nature-carousel/nature-34.jpg", alt: "Dog licking a climber's face at the base of a crag", caption: "A crag dog says hi.", year: "2024", place: "Angeles National Forest, California", position: "center 35%" },
  { src: "/images/nature-carousel/nature-15.jpg", alt: "Cyclist by a pond lined with boulders and palm trees", caption: "Riding past a boulder-lined pond.", year: "2025", place: "Santa Barbara, California" },
  { src: "/images/nature-carousel/nature-35.jpg", alt: "Triathlon finisher with a medal and a purple road bike by the beach", caption: "Finished the Hermosa Beach Triathlon.", year: "2024", place: "Hermosa Beach, California", position: "center 35%" },
  { src: "/images/nature-carousel/nature-41.jpg", alt: "Hiker holding the Strawberry Peak summit sign overhead on the summit trail", caption: "Strawberry Peak summit, sign held high.", year: "2024", place: "Strawberry Peak, San Gabriel Mountains" },
  { src: "/images/nature-carousel/nature-16.jpg", alt: "Bike at the top of wooden stairs down to the ocean", caption: "Bike parked at the top of the beach stairs.", year: "2025", place: "Santa Barbara, California" },
  { src: "/images/nature-carousel/nature-36.jpg", alt: "Race finisher with a medal and a purple road bike by a whale mural", caption: "Race finish by the whale mural.", year: "2024", place: "Long Beach, California", position: "center 35%" },
  { src: "/images/nature-carousel/nature-17.jpg", alt: "City skyline and water seen past green treetops", caption: "The skyline and the Space Needle through the trees.", year: "2022", place: "Seattle, Washington" },
  { src: "/images/nature-carousel/nature-37.jpg", alt: "Friends floating in inner tubes in a clear river canyon", caption: "River day with friends.", year: "2024", place: "Big Sur River Gorge, California" },
  { src: "/images/nature-carousel/nature-18.jpg", alt: "Two hikers holding a Quandary Peak 14,271 sign at the summit", caption: "Summit sign at 14,271 ft.", year: "2024", place: "Quandary Peak, Colorado" },
  { src: "/images/nature-carousel/nature-38.jpg", alt: "Climber on a pocketed rock face among trees", caption: "Climbing a pocketed overhang.", year: "2024", place: "Malibu Creek State Park, California" },
  { src: "/images/nature-carousel/nature-19.jpg", alt: "Hiker in a wildflower meadow among tall pines", caption: "Wildflowers among the pines.", year: "2024", place: "Summit County, Colorado", position: "center 25%" },
  { src: "/images/nature-carousel/nature-39.jpg", alt: "Resting on a summit boulder with two dogs and a valley view", caption: "Summit rest with the dogs.", year: "2024", place: "Malibu, California", position: "center 60%" },
  { src: "/images/nature-carousel/nature-20.jpg", alt: "Alpine lake below a scree slope and snowy peak", caption: "Alpine lake below a scree slope.", year: "2024", place: "Colorado" },
]

const TOTAL = PHOTOS.length
const GAP = 2 // px between photos
const VISIBLE = 4 // photos across on tablet/desktop (2 on phones — set by the cell classes below)
const SECONDS_PER_PHOTO = 4 // drift speed: one photo width every 4s

export function OutdoorCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const stepRef = useRef(0) // one photo width + gap, in px
  const offsetRef = useRef(0)
  const hoverRef = useRef(false)
  const reducedRef = useRef(false)
  const openRef = useRef(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  openRef.current = openIndex !== null

  // New random order on every visit (each photo once per loop). Shuffled after the first
  // render so server and browser agree; the strip fades in once it's shuffled.
  const [order, setOrder] = useState<number[]>(() => PHOTOS.map((_, i) => i))
  const [shuffled, setShuffled] = useState(false)
  useEffect(() => {
    const o = PHOTOS.map((_, i) => i)
    for (let i = o.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[o[i], o[j]] = [o[j], o[i]]
    }
    setOrder(o)
    setShuffled(true)
  }, [])

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
      // Read the real photo width (2 across on phones, 4 elsewhere — see the cell classes)
      const first = trackRef.current?.firstElementChild as HTMLElement | null
      const cell = first ? first.getBoundingClientRect().width : (el.clientWidth - GAP * (VISIBLE - 1)) / VISIBLE
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

  // Continuous drift — pauses on hover and while a photo is open
  useEffect(() => {
    let raf = 0
    let last = performance.now()
    const tick = (now: number) => {
      const dt = Math.min(now - last, 100) / 1000 // clamp after tab switches
      last = now
      if (!hoverRef.current && !openRef.current && !reducedRef.current) {
        offsetRef.current += (stepRef.current / SECONDS_PER_PHOTO) * dt
      }
      applyTransform()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [applyTransform])

  // Pop-up: Esc closes, page doesn't scroll behind it, focus goes to Close and comes back after
  const closeRef = useRef<HTMLButtonElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const close = useCallback(() => setOpenIndex(null), [])
  useEffect(() => {
    if (openIndex === null) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close()
    window.addEventListener("keydown", onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = prevOverflow
      openerRef.current?.focus()
    }
  }, [openIndex, close])

  // Two copies of the (shuffled) strip so it loops seamlessly
  const strip = [...order, ...order].map((idx) => ({ ...PHOTOS[idx], idx }))
  const open = openIndex !== null ? PHOTOS[openIndex] : null
  const meta = open ? [open.year, open.place].filter(Boolean).join(" · ") : ""

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        aria-roledescription="carousel"
        aria-label="Photos from the outdoors"
        onMouseEnter={() => (hoverRef.current = true)}
        onMouseLeave={() => (hoverRef.current = false)}
      >
        {/* Drifting strip — 4 visible (2 on phones), 5:4 photos, 2px gaps. Click a photo to open it. */}
        <div
          ref={trackRef}
          className={`flex will-change-transform transition-opacity duration-500 ${shuffled ? "opacity-100" : "opacity-0"}`}
          style={{ gap: `${GAP}px` }}
        >
          {strip.map((photo, i) => {
            const isCopy = i >= TOTAL
            return (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  openerRef.current = e.currentTarget
                  setOpenIndex(photo.idx)
                }}
                className="relative aspect-[5/4] w-[var(--cell-w-sm)] shrink-0 cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-rust sm:w-[var(--cell-w)]"
                style={{ "--cell-w-sm": `calc((100% - ${GAP}px) / 2)`, "--cell-w": `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` } as React.CSSProperties}
                aria-hidden={isCopy || undefined}
                tabIndex={isCopy ? -1 : undefined}
                aria-label={isCopy ? undefined : `Open photo: ${photo.alt}`}
              >
                <Image
                  src={photo.src}
                  alt={isCopy ? "" : photo.alt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: photo.position ?? "center" }}
                  sizes="(max-width: 640px) 50vw, 25vw"
                  priority={i < VISIBLE}
                />
              </button>
            )
          })}
        </div>
      </div>

      {/* Pop-up: darker, blurred page behind; click outside the photo or "Close" to exit */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={open.caption}
          onClick={close}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-black/60 p-4 backdrop-blur-sm md:p-8"
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-sand/95 px-4 py-2 font-sans text-xs font-medium uppercase tracking-[1.8px] text-charcoal transition-colors hover:bg-sand md:right-8 md:top-8"
          >
            Close <X className="h-4 w-4" />
          </button>
          <figure
            onClick={(e) => e.stopPropagation()}
            className="flex max-w-[92vw] flex-col items-center rounded-xl bg-sand p-3 shadow-2xl md:p-4"
          >
            <Image
              src={open.src}
              alt={open.alt}
              width={1600}
              height={1200}
              sizes="90vw"
              className="h-auto max-h-[72svh] w-auto max-w-full rounded-lg object-contain"
            />
            <figcaption className="mt-3 max-w-xl px-2 pb-1 text-center">
              {meta && (
                <p className="coordinate" style={{ fontSize: "11px", letterSpacing: "2px" }}>
                  {meta}
                </p>
              )}
              <p className={`font-serif text-base italic text-foreground ${meta ? "mt-1" : ""}`}>{open.caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
