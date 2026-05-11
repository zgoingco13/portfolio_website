"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/"
  if (href === "/work") {
    return (
      pathname === "/work" ||
      pathname.startsWith("/case-studies") ||
      pathname.startsWith("/academic-projects")
    )
  }
  return pathname === href || pathname.startsWith(href)
}

export function Navigation() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-75">
          <Image
            src="/logo/logo-forest.svg"
            alt="Z Goingco"
            width={48}
            height={32}
            priority
          />
        </Link>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(pathname, link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "nav-link font-sans text-xs uppercase tracking-[1.5px] transition-colors hover:text-foreground",
                    active ? "font-bold text-rust" : "font-medium text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-background px-6 pb-6 md:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "block font-sans text-xs uppercase tracking-[1.5px] transition-colors hover:text-foreground",
                      active ? "font-bold text-rust" : "font-medium text-muted-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
