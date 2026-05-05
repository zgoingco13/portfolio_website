"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

interface OutdoorCarouselProps {
  images?: {
    src: string
    alt: string
  }[]
  interval?: number // in milliseconds
}

const defaultImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=400&fit=crop",
    alt: "Mountain landscape at golden hour",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&h=400&fit=crop",
    alt: "Forest trail in morning mist",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&h=400&fit=crop",
    alt: "Lake reflection with mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1600&h=400&fit=crop",
    alt: "Rolling hills at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1600&h=400&fit=crop",
    alt: "Waterfall in lush forest",
  },
]

export function OutdoorCarousel({
  images = defaultImages,
  interval = 7000,
}: OutdoorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, [images.length])

  useEffect(() => {
    const timer = setInterval(nextSlide, interval)
    return () => clearInterval(timer)
  }, [nextSlide, interval])

  return (
    <div className="relative h-24 w-full overflow-hidden sm:h-28 md:h-32">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradient for better text contrast if needed */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/30" />
        </div>
      ))}

      {/* Progress indicators */}
      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-6 bg-cream"
                : "w-1.5 bg-cream/40 hover:bg-cream/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
