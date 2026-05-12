import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { href: "https://www.linkedin.com/in/czarinagoingco/", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:zgoingco.design@gmail.com", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="bg-forest">
      <div className="mx-auto max-w-6xl px-6 md:px-16 lg:px-[100px] py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <Link href="/" className="flex items-center transition-opacity hover:opacity-75">
            <Image
              src="/logo/logo-cream.svg"
              alt="Z Goingco"
              width={48}
              height={32}
            />
          </Link>

          <p className="font-sans text-[11px] uppercase tracking-[1.8px] text-sand/60">
            © {new Date().getFullYear()} Czarina &apos;Z&apos; Goingco
          </p>

          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sand/50 transition-colors hover:text-honey"
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
