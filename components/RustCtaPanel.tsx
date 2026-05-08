import Link from "next/link"

export function RustCtaPanel() {
  return (
    <section
      className="flex flex-col items-start justify-between gap-8 px-8 py-12 md:flex-row md:items-center md:px-14 md:py-16"
      style={{ background: "var(--color-rust)", color: "var(--text-on-rust)" }}
    >
      <div className="max-w-lg">
        <span
          className="font-sans text-[11px] font-medium uppercase tracking-[2px]"
          style={{ color: "var(--color-honey)" }}
        >
          Currently open to
        </span>
        <h2
          className="mt-2 font-display leading-none"
          style={{ fontSize: "26px" }}
        >
          UX/UI roles
          <br />
          and freelance.
        </h2>
        <p
          className="mt-3 font-serif font-light italic"
          style={{ fontSize: "13px", lineHeight: "1.5", maxWidth: "380px", opacity: 0.92 }}
        >
          If you&apos;re working on something at the intersection of wellness, neurodiversity, or thoughtful product design — let&apos;s talk.
        </p>
      </div>
      <Link
        href="/contact"
        className="flex-shrink-0 rounded-md px-[18px] py-[10px] font-sans text-[11px] font-medium uppercase tracking-[1.8px] transition-opacity hover:opacity-80"
        style={{ background: "var(--color-sand)", color: "var(--color-charcoal)" }}
      >
        Get in touch →
      </Link>
    </section>
  )
}
