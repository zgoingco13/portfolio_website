"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Option A: placeholder gradient blocks — replace with real nature photos later
// TODO: add public/images/nature-carousel/ photos and swap these out
const POOL = [
  { gradient: "linear-gradient(135deg, #2D4A33 0%, #6B8A4A 55%, #E8B547 100%)", label: "Dawn Ridge" },
  { gradient: "linear-gradient(160deg, #E8B547 0%, #D87A3A 50%, #B8482E 100%)", label: "Sunset Valley" },
  { gradient: "linear-gradient(135deg, #1F2A22 0%, #2D4A33 60%, #6B8A4A 100%)", label: "Forest Floor" },
  { gradient: "linear-gradient(150deg, #6B8A4A 0%, #2D4A33 50%, #1F2A22 100%)", label: "Alpine Morning" },
  { gradient: "linear-gradient(135deg, #B8482E 0%, #D87A3A 50%, #E8B547 100%)", label: "Ember Sky" },
  { gradient: "linear-gradient(160deg, #1F2A22 0%, #2D4A33 55%, #D87A3A 100%)", label: "Dusk Trail" },
  { gradient: "linear-gradient(135deg, #D87A3A 0%, #E8B547 50%, #F0E6D0 100%)", label: "High Noon" },
  { gradient: "linear-gradient(150deg, #2D4A33 0%, #6B8A4A 35%, #D87A3A 100%)", label: "Golden Hour" },
]

const MAX_OFFSET = POOL.length - 4  // 4

export function OutdoorCarousel() {
  const [offset, setOffset] = useState(0)

  const advance = useCallback(() => {
    setOffset(o => (o >= MAX_OFFSET ? 0 : o + 1))
  }, [])

  useEffect(() => {
    const t = setInterval(advance, 6000)
    return () => clearInterval(t)
  }, [advance])

  const prev = () => setOffset(o => (o <= 0 ? MAX_OFFSET : o - 1))
  const next = () => setOffset(o => (o >= MAX_OFFSET ? 0 : o + 1))

  const visible = [
    POOL[offset % POOL.length],
    POOL[(offset + 1) % POOL.length],
    POOL[(offset + 2) % POOL.length],
    POOL[(offset + 3) % POOL.length],
  ]

  return (
    <div className="group relative w-full">
      {/* 4-up strip, 4:3 aspect, 2px gaps */}
      <div className="grid grid-cols-4 gap-[2px]">
        {visible.map((item, i) => (
          <div
            key={`${offset}-${i}`}
            className="aspect-[4/3] animate-in fade-in duration-500"
            style={{ background: item.gradient }}
            aria-label={item.label}
          />
        ))}
      </div>

      {/* Prev/next — visible on hover */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/50 text-sand opacity-0 transition-opacity group-hover:opacity-100 hover:bg-charcoal/80"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-charcoal/50 text-sand opacity-0 transition-opacity group-hover:opacity-100 hover:bg-charcoal/80"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Position dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
        {Array.from({ length: MAX_OFFSET + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setOffset(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === offset ? "w-4 bg-sand" : "w-1 bg-sand/40 hover:bg-sand/60"
            }`}
            aria-label={`Go to position ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
