export function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl bg-forest px-6 py-5">
      <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[2px] text-honey">
        Key Insight
      </p>
      <div className="font-serif text-lg leading-relaxed text-sand">{children}</div>
    </div>
  )
}
