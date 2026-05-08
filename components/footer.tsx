import Link from "next/link"
import { Linkedin, Twitter, Dribbble, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://dribbble.com", label: "Dribbble", icon: Dribbble },
  { href: "mailto:goingco_czarina_pari@student.smc.edu", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="wavy-divider" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Eurostile for captions/UI text */}
          <p className="font-sans text-sm text-muted-foreground">
            © {new Date().getFullYear()} Czarina 'Z' Goingco. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-burnt-orange"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
