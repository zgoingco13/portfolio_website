"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { OutdoorCarousel } from "@/components/outdoor-carousel"
import { useState } from "react"
import { Mail, Linkedin, Twitter, Flower2 } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <OutdoorCarousel />

      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Left Column - Info */}
            <div>
              <p className="font-sans text-sm font-medium uppercase tracking-wider text-olive">Contact</p>
              {/* Cooper Black for hero headline */}
              <h1 className="mt-4 font-display text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
                <span className="text-balance">
                  Let&apos;s work together
                </span>
              </h1>
              <div className="mt-2 flex items-center gap-2">
                <Flower2 className="h-4 w-4 text-burnt-orange" />
                <span className="font-sans text-sm italic text-muted-foreground">New adventures await</span>
              </div>

              {/* Eurostile for body text */}
              <p className="mt-6 font-sans leading-relaxed text-muted-foreground">
                Have a project in mind? I&apos;d love to hear about it. Send me
                a message and I&apos;ll get back to you within 24 hours.
              </p>

              <div className="mt-12">
                {/* Recoleta for subhead */}
                <h2 className="font-serif text-lg font-medium text-foreground">
                  Or reach out directly
                </h2>

                <div className="mt-6 space-y-4">
                  <Link
                    href="mailto:hello@sarahchen.design"
                    className="flex items-center gap-3 font-sans text-foreground transition-colors hover:text-burnt-orange"
                  >
                    <Mail className="h-5 w-5" />
                    hello@sarahchen.design
                  </Link>

                  <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-foreground transition-colors hover:text-burnt-orange"
                  >
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </Link>

                  <Link
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-foreground transition-colors hover:text-burnt-orange"
                  >
                    <Twitter className="h-5 w-5" />
                    Twitter
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="rounded-full bg-olive/30 p-4">
                    <Mail className="h-8 w-8 text-olive" />
                  </div>
                  {/* Recoleta for success message */}
                  <h2 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                    Message sent!
                  </h2>
                  <p className="mt-2 font-sans text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 font-sans text-sm text-burnt-orange underline transition-colors hover:text-terracotta"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    {/* Eurostile for labels */}
                    <label
                      htmlFor="name"
                      className="block font-sans text-sm font-medium uppercase tracking-wide text-foreground"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-burnt-orange focus:outline-none focus:ring-1 focus:ring-burnt-orange"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-sans text-sm font-medium uppercase tracking-wide text-foreground"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-burnt-orange focus:outline-none focus:ring-1 focus:ring-burnt-orange"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-sans text-sm font-medium uppercase tracking-wide text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-burnt-orange focus:outline-none focus:ring-1 focus:ring-burnt-orange"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Eurostile for button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-burnt-orange px-6 py-3 font-sans text-sm font-semibold uppercase tracking-wider text-cream transition-all hover:bg-terracotta hover:shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
