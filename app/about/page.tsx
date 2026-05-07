import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OutdoorCarousel } from "@/components/outdoor-carousel"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Flower2 } from "lucide-react"
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
      <OutdoorCarousel />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
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
              <p className="font-sans text-sm font-medium uppercase tracking-wider text-olive">About</p>
              {/* Cooper Black for key statement */}
              <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl">
                Hi, I&apos;m Sarah
              </h1>

              {/* Eurostile for body text */}
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
        </section>

        {/* Wavy Divider */}
        <div className="wavy-divider mx-auto max-w-6xl" />

        {/* Skills & Tools */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Skills */}
            <div>
              {/* Recoleta for section header */}
              <h2 className="flex items-center gap-2 font-serif text-xl font-medium text-foreground">
                <Flower2 className="h-5 w-5 text-olive" />
                Skills
              </h2>
              {/* Eurostile for list items */}
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

            {/* Tools */}
            <div>
              <h2 className="flex items-center gap-2 font-serif text-xl font-medium text-foreground">
                <Flower2 className="h-5 w-5 text-mustard" />
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

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            {/* Cooper Black for key callout */}
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              <span className="text-balance">
                Interested in working together?
              </span>
            </h2>
            {/* Eurostile for body */}
            <p className="mt-4 max-w-xl font-sans text-muted-foreground">
              I&apos;m currently available for freelance projects and full-time
              opportunities. Let&apos;s create something meaningful.
            </p>
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
