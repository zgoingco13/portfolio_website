"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CoordinateRow } from "@/components/CoordinateRow"
import { useState } from "react"
import { Mail, Linkedin } from "lucide-react"
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({ name: "", email: "", message: "" })
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        <section>
          <div className="mx-auto max-w-6xl px-6 md:px-16 lg:px-[100px] py-16 md:py-24">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              {/* Left — info */}
              <div>
                <CoordinateRow text="Send a signal" />
                <h1
                  className="mt-4 font-display leading-none text-foreground"
                  style={{ fontSize: "var(--text-hero-lg)" }}
                >
                  Let&apos;s work together
                </h1>
                <p
                  className="mt-4 font-serif font-light italic text-muted-foreground"
                  style={{ fontSize: "var(--text-subhead)" }}
                >
                  Have a project in mind? I&apos;d love to hear about it. Send
                  me a message and I&apos;ll get back to you within 24 hours.
                </p>

                <div className="mt-12">
                  <h2 className="font-serif font-bold text-lg text-foreground">
                    Or reach out directly
                  </h2>
                  <div className="mt-6 space-y-4">
                    <Link
                      href="mailto:zgoingco.design@gmail.com"
                      className="flex items-center gap-3 font-sans text-foreground transition-colors hover:text-rust"
                    >
                      <Mail className="h-5 w-5" />
                      zgoingco.design@gmail.com
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/czarinagoingco/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 font-sans text-foreground transition-colors hover:text-rust"
                    >
                      <Linkedin className="h-5 w-5" />
                      LinkedIn
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right — form */}
              <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
                {isSubmitted ? (
                  <div className="flex h-full flex-col items-center justify-center text-center">
                    <div className="rounded-full bg-moss/30 p-4">
                      <Mail className="h-8 w-8 text-moss" />
                    </div>
                    <h2 className="mt-6 font-serif font-bold text-2xl text-foreground">
                      Message sent!
                    </h2>
                    <p className="mt-2 font-sans text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you soon.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 font-sans text-sm text-rust underline transition-colors hover:text-ember"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
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
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
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
                        className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
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
                          setFormState({
                            ...formState,
                            message: e.target.value,
                          })
                        }
                        className="mt-2 w-full resize-none rounded-lg border border-border bg-background px-4 py-3 font-sans text-foreground placeholder:text-muted-foreground focus:border-rust focus:outline-none focus:ring-1 focus:ring-rust"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-full bg-rust px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[1.8px] text-sand transition-all hover:bg-ember hover:shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
