import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { TopoWatermark } from "@/components/TopoWatermark"
import { CoordinateRow } from "@/components/CoordinateRow"
import { RustCtaPanel } from "@/components/RustCtaPanel"
import { BreathStrip } from "@/components/BreathStrip"
import Image from "next/image"
import { Flower2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Czarina 'Z' Goingco",
  description:
    "Learn more about Czarina 'Z' Goingco, a UX Designer passionate about creating thoughtful digital experiences.",
}

const skills = [
  "User Research",
  "Wireframing",
  "Prototyping",
  "Usability Testing",
  "Design Systems",
  "Interaction Design",
  "Information Architecture",
  "Accessibility",
]

const tools = [
  "Figma",
  "Framer",
  "Principle",
  "Maze",
  "Hotjar",
  "Notion",
  "Miro",
  "Adobe Creative Suite",
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero — topo watermark behind */}
        <section className="relative overflow-hidden bg-background">
          <TopoWatermark />
          <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
            <CoordinateRow text="About · Los Angeles, CA · N 34.013° · W 118.310°" />
            <div className="mt-6 grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&h=1000&fit=crop"
                  alt="Czarina 'Z' Goingco"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-center">
                <h1
                  className="font-display leading-none text-foreground"
                  style={{ fontSize: "var(--text-hero-lg)" }}
                >
                  Hi, I&apos;m Sarah
                </h1>

                <div className="mt-6 space-y-4 font-sans text-muted-foreground">
                  <p className="leading-relaxed">
                    I&apos;m a UX Designer based in San Francisco with 6+ years of
                    experience crafting digital products that balance user needs
                    with business goals.
                  </p>
                  <p className="leading-relaxed">
                    My journey into design started with a fascination for how
                    people interact with technology. After studying Human-Computer
                    Interaction at Stanford, I&apos;ve had the privilege of
                    working with startups and Fortune 500 companies alike.
                  </p>
                  <p className="leading-relaxed">
                    I believe the best designs are born from empathy and
                    validated through research. My process is collaborative,
                    iterative, and always centered on the people who will
                    ultimately use what we create.
                  </p>
                  <p className="leading-relaxed">
                    When I&apos;m not pushing pixels, you&apos;ll find me
                    exploring hiking trails, experimenting with film photography,
                    or hunting for the perfect bowl of ramen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-serif font-bold text-xl text-foreground">
                <Flower2 className="h-5 w-5 text-moss" />
                Skills
              </h2>
              <ul className="mt-6 space-y-3">
                {skills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-border pb-3 font-sans text-foreground"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-serif font-bold text-xl text-foreground">
                <Flower2 className="h-5 w-5 text-honey" />
                Tools
              </h2>
              <ul className="mt-6 space-y-3">
                {tools.map((tool) => (
                  <li
                    key={tool}
                    className="border-b border-border pb-3 font-sans text-foreground"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
