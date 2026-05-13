import type { Metadata } from "next"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import { Compass, Clock, Mail, Linkedin, FileText, MapPin } from "lucide-react"

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

        {/* ────────── SECTION 1–3: HERO + PHOTO + CURRENTLY (two-column on desktop) ────────── */}
        <section
          className="mx-auto w-full px-6 lg:w-3/4 lg:px-0"
          style={{
            paddingTop: "var(--space-12)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16 md:items-start">

            {/* ── LEFT: eyebrow → headline → subhead → bio ── */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                <Compass size={12} strokeWidth={2} color="var(--color-rust)" />
                <span style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "var(--color-rust)",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                }}>
                  My journey · how I got here
                </span>
              </div>

              <h1 style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(40px, 6vw, 56px)",
                fontWeight: 400,
                color: "var(--color-charcoal)",
                lineHeight: 1.05,
                marginBottom: "20px",
              }}>
                Same hands, new <span style={{ color: "var(--color-rust)" }}>tools.</span>
              </h1>

              <p style={{
                fontFamily: "var(--font-mid)",
                fontStyle: "italic",
                fontWeight: 300,
                fontSize: "18px",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                marginBottom: "32px",
              }}>
                An interaction designer based in Los Angeles, working at the
                intersection of healthcare, outdoor culture, and human-centered
                storytelling.
              </p>

              <p style={{
                fontFamily: "var(--font-mid)",
                fontWeight: 400,
                fontSize: "16px",
                color: "var(--text-primary)",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}>
                My background as an orthopedic technician shapes how I approach care
                and accessibility, while my love for trails and climbing shapes how I
                think about adventure, sustainability, and the gear that supports them.
              </p>

              <p style={{
                fontFamily: "var(--font-mid)",
                fontWeight: 400,
                fontSize: "16px",
                color: "var(--text-primary)",
                lineHeight: 1.7,
              }}>
                My work spans wellness apps, outdoor tools, and emotional design —
                all built to foster connection through shared experience.
              </p>
            </div>

            {/* ── RIGHT: photo + caption → Currently ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>

              {/* Photo */}
              <div>
                <div style={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden",
                  position: "relative",
                }}>
                  <Image
                    src="/images/about/canada.jpeg"
                    alt="Czarina exploring downtown Jasper"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "35% 30%" }}
                    priority
                  />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
                  <MapPin size={11} strokeWidth={2} color="var(--color-rust)" />
                  <span style={{
                    fontFamily: "var(--font-mid)",
                    fontStyle: "italic",
                    fontWeight: 300,
                    fontSize: "12px",
                    color: "var(--text-secondary)",
                    lineHeight: 1.4,
                  }}>
                    Exploring downtown Jasper, AB, Canada
                  </span>
                </div>
              </div>

              {/* Currently */}
              <div>
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Clock size={12} strokeWidth={2} color="var(--color-rust)" />
              <span style={{
                fontFamily: "var(--font-body)",
                fontSize: "11px",
                fontWeight: 500,
                color: "var(--color-rust)",
                textTransform: "uppercase",
                letterSpacing: "1.5px",
              }}>
                Currently
              </span>
            </div>
            <div style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, var(--color-rust), transparent)",
              opacity: 0.4,
            }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <div>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 700, fontSize: "16px", color: "var(--text-primary)" }}>
                Reading
              </span>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 400, fontSize: "16px", color: "var(--text-primary)", lineHeight: 1.5, marginLeft: "4px" }}>
                · <em>The Overstory</em> by Richard Powers + <em>Why Fish Don&apos;t Exist</em> by Lulu Miller
              </span>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 700, fontSize: "16px", color: "var(--text-primary)" }}>
                Last adventure
              </span>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 400, fontSize: "16px", color: "var(--text-primary)", lineHeight: 1.5, marginLeft: "4px" }}>
                · Climbing in Red Rocks, Las Vegas — with friends
              </span>
            </div>
            <div>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 700, fontSize: "16px", color: "var(--text-primary)" }}>
                Find me
              </span>
              <span style={{ fontFamily: "var(--font-mid)", fontWeight: 400, fontSize: "16px", color: "var(--text-primary)", lineHeight: 1.5, marginLeft: "4px" }}>
                · Struggling on my senior capstone for SMC&apos;s IxD program
              </span>
            </div>
          </div>
              </div> {/* close Currently wrapper */}
            </div>   {/* close right column */}
          </div>     {/* close grid */}
        </section>

        {/* ────────── SECTION 4: TIMELINE ────────── */}
        <section
          className="mx-auto w-full px-6 lg:w-3/4 lg:px-0"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "32px" }}>
            <h2 style={{
              fontFamily: "var(--font-mid)",
              fontWeight: 700,
              fontSize: "24px",
              color: "var(--color-charcoal)",
              margin: 0,
              flexShrink: 0,
            }}>
              My journey
            </h2>
            <div style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, var(--color-rust), transparent)",
              opacity: 0.4,
            }} />
          </div>

          <div style={{ position: "relative" }}>
            {/* Dashed vertical trail */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "6px",
                top: "6px",
                bottom: "6px",
                width: "1px",
                background: "repeating-linear-gradient(to bottom, var(--color-rust) 0px, var(--color-rust) 3px, transparent 3px, transparent 6px)",
                zIndex: 0,
              }}
            />

            {timeline.map((row, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  display: "flex",
                  gap: "20px",
                  paddingBottom: i < timeline.length - 1 ? "28px" : 0,
                }}
              >
                {/* Dot */}
                <div style={{
                  width: "13px",
                  height: "13px",
                  borderRadius: "50%",
                  background: row.dotColor,
                  border: "2px solid var(--color-sand)",
                  flexShrink: 0,
                  position: "relative",
                  zIndex: 1,
                  marginTop: "3px",
                }} />

                {/* Content */}
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "4px" }}>
                    <span style={{
                      fontFamily: "var(--font-hero)",
                      fontSize: "18px",
                      color: "var(--color-forest)",
                      lineHeight: 1,
                    }}>
                      {row.year}
                    </span>
                    <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--color-rust)",
                      textTransform: "uppercase",
                      letterSpacing: "1.2px",
                    }}>
                      · {row.eyebrow}
                    </span>
                  </div>
                  <p style={{
                    fontFamily: "var(--font-mid)",
                    fontSize: "13px",
                    lineHeight: "1.55",
                    color: "var(--color-charcoal)",
                    margin: 0,
                  }}>
                    {row.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ────────── SECTION 5: CATHEDRAL PHOTO ────────── */}
        <section
          className="mx-auto w-full px-6 lg:w-3/4 lg:px-0"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <div style={{
            width: "100%",
            aspectRatio: "21 / 9",
            borderRadius: "var(--radius-md)",
            overflow: "hidden",
            position: "relative",
          }}>
            <Image
              src="/images/about/cathedral.jpeg"
              alt="Climbing at Cathedral Peaks in Yosemite, CA"
              fill
              className="object-cover"
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "10px" }}>
            <MapPin size={11} strokeWidth={2} color="var(--color-rust)" />
            <span style={{
              fontFamily: "var(--font-mid)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "12px",
              color: "var(--text-secondary)",
              lineHeight: 1.4,
            }}>
              Climbing at Cathedral Peaks in Yosemite, CA
            </span>
          </div>
        </section>

        {/* ────────── SECTION 6: REACH OUT ────────── */}
        <section
          className="mx-auto w-full px-6 lg:w-3/4 lg:px-0"
          style={{
            paddingTop: "var(--space-10)",
            paddingBottom: "var(--space-10)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 500,
              color: "var(--color-rust)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}>
              Reach out
            </span>
            <div style={{
              flex: 1,
              height: "1px",
              background: "linear-gradient(to right, var(--color-rust), transparent)",
              opacity: 0.4,
            }} />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href="https://www.linkedin.com/in/czarinagoingco/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.4)",
                border: "0.5px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--text-primary)",
              }}
            >
              <Linkedin size={14} strokeWidth={2} color="var(--color-rust)" />
              <span style={{ fontFamily: "var(--font-mid)", fontSize: "14px", fontWeight: 500 }}>LinkedIn</span>
            </a>
            <a
              href="mailto:zgoingco.design@gmail.com"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.4)",
                border: "0.5px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--text-primary)",
              }}
            >
              <Mail size={14} strokeWidth={2} color="var(--color-rust)" />
              <span style={{ fontFamily: "var(--font-mid)", fontSize: "14px", fontWeight: 500 }}>Email</span>
            </a>
            <a
              href="/files/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                padding: "14px 16px",
                background: "rgba(255,255,255,0.4)",
                border: "0.5px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
                textDecoration: "none",
                color: "var(--text-primary)",
              }}
            >
              <FileText size={14} strokeWidth={2} color="var(--color-rust)" />
              <span style={{ fontFamily: "var(--font-mid)", fontSize: "14px", fontWeight: 500 }}>Resume PDF</span>
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
