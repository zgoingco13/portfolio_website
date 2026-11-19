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
                so the preview starts just below the fold. Carousel height = 15% of the width. */}
            <div
              className="relative flex w-full flex-col items-center justify-center pb-24 pt-10"
              style={{ minHeight: "calc(100svh - 116px - 15vw)" }}
            >
              <div className="flex items-center justify-center gap-2" style={{ marginBottom: "14px" }}>
                <Compass size={16} strokeWidth={2} color="var(--color-rust)" />
                <span className="coordinate">UX/UI Designer · Los Angeles, CA · 33.844° N · 118.388° W</span>
              </div>
              <h1
                className="mt-4 max-w-4xl font-display leading-none text-foreground"
                style={{ fontSize: "var(--text-hero-xl)" }}
              >
                Czarina <span className="text-rust">&lsquo;Z&rsquo;</span> Goingco
              </h1>
              <p
                className="mt-5 max-w-2xl mx-auto font-serif font-light italic text-muted-foreground"
                style={{ fontSize: "var(--text-subhead)" }}
              >
                An interaction designer working at the intersection of healthcare, outdoor culture, and human-centered storytelling.
              </p>
              <div className="flex items-center justify-center gap-2" style={{ marginTop: "14px" }}>
                <Sun size={16} strokeWidth={2} color="var(--color-amber)" />
                <span className="coordinate" style={{ letterSpacing: "1.5px", fontSize: "10px" }}>
                  Designing between hikes and climbs · Happiest on trails
                </span>
              </div>
              {/* "Scroll down" cue at the bottom of the first screen — fades out once the visitor scrolls */}
              <ScrollHint className="absolute bottom-6 left-1/2 -translate-x-1/2" />
            </div>

            {/* Below the name — rotating preview of the work, straight to /work */}
            {slides.length > 0 && (
              <div className="w-full max-w-3xl">
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
