interface SectionProps {
  title?: string
  /** Anchor id for the heading (otherwise the table of contents makes one from the title). */
  id?: string
  children: React.ReactNode
}

export function Section({ title, id, children }: SectionProps) {
  return (
    <section className="border-t border-border py-12">
      {title && <h2 id={id} className="mb-6 scroll-mt-24 font-serif font-bold text-2xl text-foreground">{title}</h2>}
      <div>{children}</div>
    </section>
  )
}
