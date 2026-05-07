import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OutdoorCarousel } from "@/components/outdoor-carousel"
import { CaseStudyCard } from "@/components/case-study-card"
import { getAllCaseStudies } from "@/lib/content"
import Link from "next/link"
import { ArrowRight, Mountain, Sun } from "lucide-react"

export default function HomePage() {
  const allStudies = getAllCaseStudies()
  const [featuredStudy, ...otherStudies] = allStudies

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <OutdoorCarousel />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-sans text-sm font-medium uppercase tracking-wider text-white/60">Good morning</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            <span className="text-balance">
              {"Czarina \"Z\" Goingco"}
            </span>
          </h1>
          <p className="mt-4 max-w-4xl font-serif text-xl text-white/90 md:text-2xl">
            An interaction designer working at the intersection of healthcare, outdoor culture, and human-centered storytelling.
          </p>
          <div className="mt-4 flex items-center gap-2 text-white/60">
            <Mountain className="h-4 w-4 text-mustard" />
            <Sun className="h-4 w-4 text-mustard" />
            <span className="font-sans text-sm italic">Based in Los Angeles — designing between hikes and climbs, happiest on trails</span>
          </div>
          <p className="mt-6 max-w-4xl font-sans text-base leading-relaxed text-white/80 md:text-lg">
            My background as an orthopedic technician shapes how I approach care and accessibility, and my love of trails and climbing shapes how I think about adventure, resilience, and the gear that supports them. My work spans wellness apps, outdoor tools, and emotional design, all built to foster connection through shared experience.
          </p>
          <div className="mt-8">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-burnt-orange px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-terracotta hover:shadow-md"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Wavy Divider */}
        <div className="wavy-divider mx-auto max-w-6xl" />

        {/* Case Studies Section */}
        <section id="work" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-12 flex items-center justify-between">
            {/* Recoleta for section header */}
            <h2 className="font-serif text-2xl font-medium text-foreground">Selected Work</h2>
          </div>

          {allStudies.length === 0 ? (
            <p className="font-sans text-white/50">No case studies yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              <CaseStudyCard
                slug={featuredStudy.slug}
                title={featuredStudy.title}
                description={featuredStudy.summary}
                coverImage={featuredStudy.coverImage}
                tags={featuredStudy.tags}
                featured
              />
              {otherStudies.map((study) => (
                <CaseStudyCard
                  key={study.slug}
                  slug={study.slug}
                  title={study.title}
                  description={study.summary}
                  coverImage={study.coverImage}
                  tags={study.tags}
                />
              ))}
            </div>
          )}
        </section>

        {/* Contact CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <p className="font-sans text-sm font-medium uppercase tracking-wider text-olive">Contact</p>
            {/* Cooper Black for key statement */}
            <h2 className="mt-4 font-display text-3xl text-foreground md:text-4xl">
              <span className="text-balance">
                {"Let's create something groovy together."}
              </span>
            </h2>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-burnt-orange px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-terracotta hover:shadow-md"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
