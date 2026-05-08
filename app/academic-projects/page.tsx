import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { TopoWatermark } from '@/components/TopoWatermark'
import { CoordinateRow } from '@/components/CoordinateRow'
import { RustCtaPanel } from '@/components/RustCtaPanel'
import { BreathStrip } from '@/components/BreathStrip'
import { getAllAcademicProjects } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: "Academic Projects — Czarina 'Z' Goingco",
  description: 'Course projects and academic UX/design work.',
}

export default function AcademicProjectsPage() {
  const projects = getAllAcademicProjects()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero with topo watermark */}
        <section className="relative overflow-hidden bg-background pb-8 pt-16 md:pt-24">
          <TopoWatermark />
          <div className="relative mx-auto max-w-6xl px-6">
            <CoordinateRow text="Academic work · 2022 – 2026" />
            <h1
              className="mt-3 font-display leading-none text-foreground"
              style={{ fontSize: "var(--text-hero-lg)" }}
            >
              Academic projects
            </h1>
            <p
              className="mt-4 max-w-2xl font-serif font-light italic text-muted-foreground"
              style={{ fontSize: "var(--text-subhead)" }}
            >
              Course projects, design explorations, and academic research from my studies.
            </p>
          </div>
        </section>

        {/* Cards */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-12">
          {projects.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <p className="font-serif text-xl text-muted-foreground">Projects coming soon.</p>
              <p className="mt-2 font-sans text-sm text-muted-foreground/60">
                Academic project files will appear here once added to content/academic-projects/.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/academic-projects/${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-rust/60 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {project.coverImage ? (
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-rust">
                      {project.year}
                    </p>
                    <h2 className="mt-1 font-serif font-bold text-lg text-foreground">
                      {project.title}
                    </h2>
                    <p className="mt-1 line-clamp-2 font-sans text-sm text-muted-foreground">
                      {project.summary}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags?.map((tag, j) => (
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
                    <div className="mt-4 flex items-center gap-1 font-sans text-sm font-medium text-rust">
                      View project
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
