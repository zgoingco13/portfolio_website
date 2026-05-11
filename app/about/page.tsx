import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import { Compass, Clock, Mail, Linkedin, FileDown } from "lucide-react"

export const metadata: Metadata = {
  title: "About · Czarina Goingco · zgoingco",
  description:
    "An interaction designer based in Los Angeles, working at the intersection of healthcare, outdoor culture, and human-centered storytelling.",
}

const timeline = [
  {
    year: "2019",
    dotColor: "var(--color-moss)",
    eyebrow: "Science",
    description: "Graduated UC San Diego with a BS in Biochemistry & Chemistry.",
  },
  {
    year: "2020",
    dotColor: "#B8A968",
    eyebrow: "Detour",
    description:
      "Pandemic year. Managed a specialty coffee shop — learned how to run small operations under hard constraints.",
  },
  {
    year: "2021",
    dotColor: "var(--color-honey)",
    eyebrow: "Lab",
    description: "Returned to science as a research assistant.",
  },
  {
    year: "2022",
    dotColor: "var(--color-amber)",
    eyebrow: "Care",
    description: "Certified as an orthopedic technician.",
  },
  {
    year: "2022 – 2025",
    dotColor: "var(--color-amber)",
    eyebrow: "Clinic · TMPN Ortho",
    description:
      "Three years at TMPN Ortho — fitting casts, splinting fractures, and learning how care lands when it's hands-on.",
  },
  {
    year: "2024 – 2025",
    dotColor: "var(--color-rust)",
    eyebrow: "REI",
    description:
      "Sales floor + visual merchandising at REI — fitting gear, learning the rhythms of an outdoor community.",
  },
  {
    year: "2024",
    dotColor: "var(--color-rust)",
    eyebrow: "Pivot",
    description:
      "Started Santa Monica College's Interaction Design program while still seeing patients on weekends.",
  },
  {
    year: "2026",
    dotColor: "var(--color-forest)",
    eyebrow: "Now · SMC",
    description:
      "Graduating SMC with a BS in Interaction Design. Open to UX/UI roles and freelance.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* ── Section 1: Hero ── */}
        <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_300px] md:gap-16">
            {/* Left: bio */}
            <div>
              <div
                className="flex items-center"
                style={{ gap: "10px", marginBottom: "14px" }}
              >
                <Compass size={13} strokeWidth={2} color="var(--color-rust)" />
                <span className="coordinate">The path · how I got here</span>
              </div>

              <h1
                className="font-display leading-none text-foreground"
                style={{ fontSize: "var(--text-hero-lg)" }}
              >
                Same hands, new{" "}
                <span style={{ color: "var(--color-rust)" }}>tools.</span>
              </h1>

              <p
                className="mt-5 max-w-2xl font-serif font-light italic text-muted-foreground"
                style={{ fontSize: "var(--text-subhead)" }}
              >
                An interaction designer based in Los Angeles, working at the
                intersection of healthcare, outdoor culture, and human-centered
                storytelling.
              </p>
            </div>

            {/* Right: headshot */}
            <div
              className="relative overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Image
                src="/images/about/canada.jpeg"
                alt="Portrait of Czarina Goingco"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* ── Section 2: Long bio ── */}
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <p
            style={{
              fontFamily: "var(--font-mid)",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: "1.65",
              color: "var(--text-primary)",
              maxWidth: "640px",
            }}
          >
            My background as an orthopedic technician shapes how I approach care
            and accessibility, while my love for trails and climbing shapes how I
            think about adventure, sustainability, and the gear that supports
            them. My work spans across wellness apps, outdoor tools, and
            emotional design — all built to foster connection through shared
            experience.
          </p>
        </section>

        {/* ── Section 3: Timeline ── */}
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div style={{ maxWidth: "640px" }}>
            {/* Header */}
            <div className="mb-8 flex items-center gap-4">
              <h2
                style={{
                  fontFamily: "var(--font-mid)",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "var(--color-charcoal)",
                  flexShrink: 0,
                  margin: 0,
                }}
              >
                The path
              </h2>
              <div
                style={{
                  flex: 1,
                  height: "1px",
                  background:
                    "linear-gradient(to right, var(--color-rust), transparent)",
                }}
              />
            </div>

            {/* Rows */}
            <div className="relative">
              {/* Dashed vertical line — stops at last dot */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "6px",
                  top: "6px",
                  bottom: "6px",
                  width: "1px",
                  background:
                    "repeating-linear-gradient(to bottom, var(--color-rust) 0px, var(--color-rust) 3px, transparent 3px, transparent 6px)",
                  zIndex: 0,
                }}
              />

              {timeline.map((row, i) => (
                <div
                  key={i}
                  className="relative flex"
                  style={{
                    gap: "20px",
                    paddingBottom: i < timeline.length - 1 ? "28px" : 0,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "13px",
                      height: "13px",
                      borderRadius: "50%",
                      background: row.dotColor,
                      border: "2px solid var(--color-sand)",
                      flexShrink: 0,
                      position: "relative",
                      zIndex: 1,
                      marginTop: "3px",
                    }}
                  />

                  {/* Content */}
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-hero)",
                        fontSize: "18px",
                        color: "var(--color-charcoal)",
                        lineHeight: 1,
                      }}
                    >
                      {row.year}
                    </div>
                    <div
                      className="coordinate"
                      style={{
                        letterSpacing: "1.5px",
                        marginTop: "3px",
                        marginBottom: "5px",
                      }}
                    >
                      {row.eyebrow}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-mid)",
                        fontSize: "13px",
                        lineHeight: "1.55",
                        color: "var(--color-charcoal)",
                        margin: 0,
                      }}
                    >
                      {row.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 4: Casual photo ── */}
        <section
          className="mx-auto max-w-6xl px-6"
          style={{ marginTop: "40px", marginBottom: "40px" }}
        >
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "21 / 9",
              borderRadius: "var(--radius-md)",
            }}
          >
            <Image
              src="/images/about/cathedral.jpeg"
              alt="Climbing at Cathedral — Z outdoors"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* ── Section 5: Currently ── */}
        <section className="mx-auto max-w-6xl px-6 pb-12">
          <div
            style={{
              maxWidth: "520px",
              background: "rgba(255,255,255,0.5)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-md)",
              padding: "18px 20px",
            }}
          >
            <div
              className="flex items-center"
              style={{ gap: "8px", marginBottom: "10px" }}
            >
              <Clock size={11} strokeWidth={2} color="var(--color-rust)" />
              <span className="coordinate" style={{ letterSpacing: "1.8px" }}>
                Currently
              </span>
            </div>

            <div
              style={{
                fontFamily: "var(--font-mid)",
                fontSize: "13px",
                lineHeight: "1.6",
                color: "var(--color-charcoal)",
              }}
            >
              <div>
                <strong>Reading</strong> ·{" "}
                <em>The Overstory</em> by Richard Powers +{" "}
                <em>Why Fish Don&apos;t Exist</em> by Lulu Miller
              </div>
              <div style={{ marginTop: "6px" }}>
                <strong>Last adventure</strong> · Climbing in Red Rocks, Las
                Vegas — with friends
              </div>
              <div style={{ marginTop: "6px" }}>
                <strong>Currently</strong> · Surviving my last semester in
                SMC&apos;s IxD program
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Reach out ── */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <span
            className="coordinate"
            style={{
              letterSpacing: "1.8px",
              display: "block",
              marginBottom: "12px",
            }}
          >
            Reach out
          </span>

          <div
            className="grid gap-3 sm:grid-cols-3"
            style={{ maxWidth: "520px" }}
          >
            <a
              href="https://www.linkedin.com/in/czarinagoingco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] rounded-md border border-border bg-background transition-colors hover:bg-white"
              style={{
                padding: "10px 12px",
                fontFamily: "var(--font-mid)",
                fontSize: "12px",
                color: "var(--color-charcoal)",
                textDecoration: "none",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Linkedin size={14} strokeWidth={2} color="var(--color-forest)" />
              LinkedIn
            </a>

            <a
              href="mailto:zgoingco.design@gmail.com"
              className="flex items-center gap-[10px] rounded-md border border-border bg-background transition-colors hover:bg-white"
              style={{
                padding: "10px 12px",
                fontFamily: "var(--font-mid)",
                fontSize: "12px",
                color: "var(--color-charcoal)",
                textDecoration: "none",
                borderRadius: "var(--radius-md)",
              }}
            >
              <Mail size={14} strokeWidth={2} color="var(--color-forest)" />
              Email
            </a>

            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] rounded-md border border-border bg-background transition-colors hover:bg-white"
              style={{
                padding: "10px 12px",
                fontFamily: "var(--font-mid)",
                fontSize: "12px",
                color: "var(--color-charcoal)",
                textDecoration: "none",
                borderRadius: "var(--radius-md)",
              }}
            >
              <FileDown size={14} strokeWidth={2} color="var(--color-forest)" />
              Resume PDF
            </a>
          </div>
        </section>
      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
