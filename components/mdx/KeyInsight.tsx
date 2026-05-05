export function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-xl border-l-4 border-burnt-orange bg-card p-6">
      <p className="mb-2 font-sans text-xs font-medium uppercase tracking-wider text-burnt-orange">
        Key Insight
      </p>
      <div className="font-serif text-lg leading-relaxed text-white/90">{children}</div>
    </div>
  )
}
