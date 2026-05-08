interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-6 font-serif font-bold text-2xl text-foreground">{title}</h2>
      <div>{children}</div>
    </section>
  )
}
