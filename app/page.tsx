import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OutdoorCarousel } from "@/components/outdoor-carousel"
import { SunsetStripe } from "@/components/SunsetStripe"
import { ThreeRidgeHero } from "@/components/ThreeRidgeHero"
import { ExploreWorkPanel } from "@/components/explore-work-panel"
import { ScrollHint } from "@/components/scroll-hint"
import { getAllCaseStudies } from "@/lib/content"
import { Compass, Sun } from "lucide-react"

export default function HomePage() {
  const allStudies = getAllCaseStudies()
  // How much of each thumbnail's width the devices fill (measured from the PNGs),
  // so the logo above can be drawn at the same width. Update if a thumbnail changes.
  const DEVICES_WIDTH: Record<string, number> = { gearsmart: 0.91, ugloo: 0.97, bewell: 0.69 }
  const slides = allStudies
    .filter((s) => s.thumbnailImage ?? s.coverImage)
    .map((s) => ({
      title: s.title,
      image: (s.thumbnailImage ?? s.coverImage) as string,
      logo: s.heroLogo,
      contentWidth: DEVICES_WIDTH[s.slug],
    }))

  return (
    <div className="flex min-h-screen flex-col">
      {/* 1. Nav bar */}
      <Navigation />

      {/* 2. Sunset stripe */}
      <SunsetStripe />

      {/* 3. Nature photo carousel */}
      <OutdoorCarousel />

      {/* 4. Sunset stripe */}
      <SunsetStripe />

      <main className="flex-1">
        {/* 5. Hero — three-ridge silhouette anchored to bottom */}
        <section className="relative overflow-hidden">
          <div data-site-margins className="mx-auto flex w-full flex-col items-center gap-6 px-6 pb-36 text-center md:pb-48 lg:w-3/4 lg:px-0">
            {/* Name block fills the rest of the first screen (below the nav, carousel and stripes),
                so the preview starts just below the fold. Carousel height = 20% of the width (5:4 photos, 4 across),
                or 40% on phones (2 across). */}
            <div className="flex min-h-[calc(100svh-116px-40vw)] w-full flex-col items-center sm:min-h-[calc(100svh-116px-20vw)]">
              {/* Sizes follow both width (vw) and height (svh) so the block fits short laptop screens too */}
              <div className="flex w-full flex-1 flex-col items-center justify-center pt-4">
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1" style={{ marginBottom: "clamp(8px, 2svh, 20px)" }}>
                  <Compass className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} color="var(--color-rust)" />
                  <span className="coordinate" style={{ fontSize: "clamp(10px, 1vw, 13px)", letterSpacing: "2.5px" }}>
                    UX/UI Designer · Los Angeles, CA · 33.844° N · 118.388° W
                  </span>
                </div>
                <h1
                  className="max-w-6xl font-display leading-none text-foreground"
                  style={{ fontSize: "clamp(40px, min(9vw, 10svh), 96px)", marginTop: "clamp(6px, 2.2svh, 24px)" }}
                >
                  Czarina <span className="text-rust">&lsquo;Z&rsquo;</span> Goingco
                </h1>
                <p
                  className="mx-auto max-w-4xl font-serif font-light italic text-muted-foreground"
                  style={{ fontSize: "clamp(16px, min(2.2vw, 2.9svh), 28px)", lineHeight: 1.4, marginTop: "clamp(10px, 2.6svh, 28px)" }}
                >
                  An interaction designer working at the intersection of healthcare, outdoor culture, and human-centered storytelling.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1" style={{ marginTop: "clamp(8px, 2svh, 20px)" }}>
                  <Sun className="h-5 w-5 md:h-6 md:w-6" strokeWidth={2} color="var(--color-amber)" />
                  <span className="coordinate" style={{ letterSpacing: "2px", fontSize: "clamp(11px, 1.05vw, 15px)" }}>
                    Designing between hikes and climbs · Happiest on trails
                  </span>
                </div>
              </div>
              {/* "Scroll down" cue at the bottom of the first screen — fades out once the visitor scrolls */}
              <ScrollHint className="pb-4 pt-3" />
            </div>

            {/* Below the name — rotating preview of the work, straight to /work */}
            {slides.length > 0 && (
              // Width capped by the window height so the whole block (logo, image, heading, button)
              // fits on one screen below the sticky nav: block height ≈ 0.67 × width + ~190px.
              <div className="w-full" style={{ maxWidth: "min(72rem, calc((100svh - 330px) * 1.45))" }}>
                <ExploreWorkPanel slides={slides} />
              </div>
            )}
          </div>
          <ThreeRidgeHero />
        </section>
      </main>

      {/* 6. Forest footer (includes the get-in-touch CTA) */}
      <Footer />
    </div>
  )
}
