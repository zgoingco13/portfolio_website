import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import { getAllCaseStudies } from "@/lib/content"
import { Compass, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Work · Czarina Goingco · zgoingco",
  description:
    "Selected case studies across wellness, neurodiversity, healthcare, and outdoor culture.",
}

export default function WorkPage() {
  const studies = getAllCaseStudies()

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
                Selected work · case studies
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
              Projects across wellness, neurodiversity, healthcare, and outdoor
              culture — research, prototyping, and validation from start to finish.
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
              {studies.map((study) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-rust/60 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {study.thumbnailImage ?? study.coverImage ? (
                      <Image
                        src={(study.thumbnailImage ?? study.coverImage)!}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className="p-6">
                    <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-rust">
                      {study.projectType} · {study.year}
                    </p>
                    <h2 className="mt-2 font-serif font-bold text-xl text-foreground">
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

      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
