import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OutdoorCarousel } from "@/components/outdoor-carousel"
import { SunsetStripe } from "@/components/SunsetStripe"
import { CoordinateRow } from "@/components/CoordinateRow"
import { ThreeRidgeHero } from "@/components/ThreeRidgeHero"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import { CaseStudyCard } from "@/components/case-study-card"
import { getAllCaseStudies } from "@/lib/content"

export default function HomePage() {
  const allStudies = getAllCaseStudies()
  const featured = allStudies.slice(0, 3)

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
          <div className="mx-auto max-w-6xl px-6 pb-36 pt-16 md:pb-48 md:pt-24">
            <CoordinateRow text="UX/UI Designer · N 34.013° · W 118.310°" />
            <h1
              className="mt-4 max-w-3xl font-display leading-none text-foreground"
              style={{ fontSize: "var(--text-hero-xl)" }}
            >
              Czarina <span className="text-rust">&lsquo;Z&rsquo;</span> Goingco
            </h1>
            <p
              className="mt-5 max-w-2xl font-serif font-light italic text-muted-foreground"
              style={{ fontSize: "var(--text-subhead)" }}
            >
              An interaction designer working at the intersection of healthcare, outdoor culture, and human-centered storytelling.
            </p>
          </div>
          <ThreeRidgeHero />
        </section>

        {/* 6. Selected work */}
        <section id="work" className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            {/* Section header row */}
            <div className="mb-12 flex items-end gap-4">
              <h2
                className="font-serif font-bold text-foreground"
                style={{ fontSize: "var(--text-h2)" }}
              >
                Selected work
              </h2>
              <div
                className="mb-1 flex-1"
                style={{
                  height: "1px",
                  background: "linear-gradient(to right, var(--color-rust), transparent)",
                }}
              />
              <span className="coordinate mb-1">
                {featured.length} of {allStudies.length}
              </span>
            </div>

            {allStudies.length === 0 ? (
              <p className="font-sans text-muted-foreground">No case studies yet.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-3">
                {featured.map((study) => (
                  <CaseStudyCard
                    key={study.slug}
                    slug={study.slug}
                    title={study.title}
                    description={study.summary}
                    coverImage={study.coverImage}
                    coverImageAlt={study.coverImageAlt}
                    tags={study.tags}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      {/* 7. Rust CTA panel */}
      <RustCtaPanel />

      {/* 8. Breath Strip — REQUIRED between rust CTA and forest footer */}
      <BreathStrip />

      {/* 9. Forest footer */}
      <Footer />
    </div>
  )
}
