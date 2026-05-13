import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import { getAllCaseStudies, getAllAcademicProjects } from "@/lib/content"
import { Compass, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Work · Czarina Goingco · zgoingco",
  description:
    "Selected case studies and academic projects across wellness, neurodiversity, healthcare, and outdoor culture.",
}

export default function WorkPage() {
  const studies = getAllCaseStudies()
  const projects = getAllAcademicProjects()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="pb-8 pt-16 md:pt-24">
          <div className="mx-auto w-full px-6 lg:w-3/4 lg:px-0">
            <div
              className="flex items-center"
              style={{ gap: "10px", marginBottom: "14px" }}
            >
              <Compass size={13} strokeWidth={2} color="var(--color-rust)" />
              <span className="coordinate">
                Selected work · case studies and academic projects
              </span>
            </div>
            <h1
              className="mt-3 font-display leading-none text-foreground"
              style={{ fontSize: "var(--text-hero-lg)" }}
            >
              The{" "}
              <span style={{ color: "var(--color-rust)" }}>work.</span>
            </h1>
            <p
              className="mt-4 max-w-2xl font-serif font-light italic text-muted-foreground"
              style={{ fontSize: "var(--text-subhead)" }}
            >
              Twelve projects across wellness, neurodiversity, healthcare, and
              outdoor culture — some are deep case studies, some are shorter
              explorations.
            </p>
          </div>
        </section>

        {/* ── Case studies ── */}
        <section className="mx-auto w-full px-6 lg:w-3/4 lg:px-0 pb-16 pt-12">
          {/* Section header */}
          <div className="mb-4 flex items-end gap-4">
            <h2
              className="font-serif font-bold text-foreground"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Case studies
            </h2>
            <div
              className="mb-1 flex-1"
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, var(--color-rust), transparent)",
              }}
            />
            <span className="coordinate mb-1">
              {studies.length} of {studies.length}
            </span>
          </div>
          <p
            className="mb-8 font-serif font-light italic text-muted-foreground"
            style={{ fontSize: "14px" }}
          >
            Long-form investigations — 12 to 16 week design projects with full
            research, prototyping, and validation.
          </p>

          {studies.length === 0 ? (
            <p className="font-sans text-muted-foreground">
              No case studies yet.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {studies.map((study, i) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className={`group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-rust/60 hover:shadow-lg ${
                    i === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
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
                  <div className={`p-6 ${i === 0 ? "md:p-8" : ""}`}>
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-rust">
                      {study.projectType} · {study.year}
                    </p>
                    <h2
                      className={`mt-2 font-serif font-bold text-foreground ${
                        i === 0 ? "text-2xl md:text-3xl" : "text-xl"
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
                            j % 2 === 0 ? "bg-honey/40" : "bg-moss/30"
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

        {/* ── Divider ── */}
        <div className="mx-auto w-full px-6 lg:w-3/4 lg:px-0">
          <div
            style={{
              height: "1px",
              background: "var(--color-sand-edge)",
              margin: "0 0 64px",
            }}
          />
        </div>

        {/* ── Academic projects ── */}
        <section className="mx-auto w-full px-6 lg:w-3/4 lg:px-0 pb-24">
          {/* Section header */}
          <div className="mb-4 flex items-end gap-4">
            <h2
              className="font-serif font-bold text-foreground"
              style={{ fontSize: "var(--text-h2)" }}
            >
              Academic projects
            </h2>
            <div
              className="mb-1 flex-1"
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, var(--color-rust), transparent)",
              }}
            />
            <span className="coordinate mb-1">
              {projects.length} projects
            </span>
          </div>
          <p
            className="mb-8 font-serif font-light italic text-muted-foreground"
            style={{ fontSize: "14px" }}
          >
            Shorter explorations from coursework — sprints, redesigns, and
            exercises in different design problems.
          </p>

          {projects.length === 0 ? (
            <div className="rounded-2xl border border-border bg-card p-12 text-center">
              <p className="font-serif text-xl text-muted-foreground">
                Projects coming soon.
              </p>
              <p className="mt-2 font-sans text-sm text-muted-foreground/60">
                Academic project files will appear here once added to
                content/academic-projects/.
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
                            j % 2 === 0 ? "bg-honey/40" : "bg-moss/30"
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
