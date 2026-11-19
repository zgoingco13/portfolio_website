import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

// Email goes to the contact page; Instagram (@zgoing.co) is deactivated for now, so its link won't load until it's back.
const socialLinks = [
  { href: "https://www.linkedin.com/in/czarinagoingco/", label: "LinkedIn", icon: Linkedin, external: true },
  { href: "/contact", label: "Contact", icon: Mail, external: false },
  { href: "https://www.instagram.com/zgoing.co/", label: "Instagram (@zgoing.co)", icon: Instagram, external: true },
]

/**
 * Forest footer, one row: logo + copyright (center), "currently open to" note with
 * LinkedIn / contact / Instagram icons (right). The note replaced the rust CTA panel +
 * Breath Strip; the contact page turns it off (the icons stay).
 */
export function Footer({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className="bg-forest">
      <div className="mx-auto grid w-full items-center gap-10 px-6 py-12 lg:w-3/4 lg:px-0 md:grid-cols-[1fr_auto_1fr]">
        {/* Left — kept empty so the logo sits in the true center */}
        <div className="hidden md:block" aria-hidden="true" />

        {/* Center — logo with copyright underneath */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/" className="transition-opacity hover:opacity-75">
            <Image src="/logo/logo-nav-cream.svg" alt="Z Goingco" width={131} height={48} />
          </Link>
          <p className="font-sans text-[11px] uppercase tracking-[1.8px] text-sand/60">
            {`© ${new Date().getFullYear()} Czarina ‘Z’ Goingco`}
          </p>
        </div>

        {/* Right — currently open to, with the social icons underneath */}
        <div className="flex flex-col items-center text-center md:items-end md:text-right">
          {showCta && (
            <>
              <span className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-honey">
                Currently open to
              </span>
              <h2 className="mt-2 font-display leading-none text-sand" style={{ fontSize: "26px" }}>
                UX/UI roles and freelance.
              </h2>
              <p
                className="mt-3 font-serif font-light italic text-sand/80"
                style={{ fontSize: "14px", lineHeight: 1.5 }}
              >
                Have a role or project in mind, or just want to say hello?
              </p>
            </>
          )}
          <div className={`flex items-center gap-6 ${showCta ? "mt-4" : ""}`}>
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sand/60 transition-colors hover:text-honey"
                aria-label={link.label}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
