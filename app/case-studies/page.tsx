import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TopoWatermark } from '@/components/TopoWatermark'
import { CoordinateRow } from '@/components/CoordinateRow'
import { RustCtaPanel } from '@/components/RustCtaPanel'
import { BreathStrip } from '@/components/BreathStrip'
import { getAllCaseStudies } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Case Studies — Czarina 'Z' Goingco",
  description: 'In-depth UX case studies exploring research, design process, and outcomes.',
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero with topo watermark */}
        <section className="relative overflow-hidden bg-background pb-8 pt-16 md:pt-24">
          <TopoWatermark />
          <div className="relative mx-auto max-w-6xl px-6">
            <CoordinateRow text={`${studies.length} case studies · 2022 – 2026`} />
            <h1
              className="mt-3 font-display leading-none text-foreground"
              style={{ fontSize: "var(--text-hero-lg)" }}
            >
              Case studies
            </h1>
            <p
              className="mt-4 max-w-2xl font-serif font-light italic text-muted-foreground"
              style={{ fontSize: "var(--text-subhead)" }}
            >
              In-depth explorations of my design process — from research and discovery through to final outcomes.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
          {studies.length === 0 ? (
            <p className="font-sans text-muted-foreground">No case studies yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {studies.map((study, i) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className={`group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-rust/60 hover:shadow-lg ${
                    i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    {study.coverImage ? (
                      <Image
                        src={study.coverImage}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className={`p-6 ${i === 0 ? 'md:p-8' : ''}`}>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-rust">
                      {study.projectType} · {study.year}
                    </p>
                    <h2
                      className={`mt-2 font-serif font-bold text-foreground ${
                        i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                    >
                      {study.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 font-sans text-sm text-muted-foreground">
                      {study.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags?.map((tag, j) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-foreground ${
                            j % 2 === 0 ? 'bg-honey/40' : 'bg-moss/30'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-1 font-sans text-sm font-medium text-rust">
                      View case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
