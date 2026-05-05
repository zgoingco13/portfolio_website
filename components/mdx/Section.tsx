interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: SectionProps) {
  return (
    <section className="border-t border-border py-12">
      <h2 className="mb-6 font-serif text-2xl font-medium text-white">{title}</h2>
      <div>{children}</div>
    </section>
  )
}
