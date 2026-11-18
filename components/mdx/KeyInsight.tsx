export function KeyInsight({
  children,
  label = 'Key Insight',
  compact = false,
}: {
  children: React.ReactNode
  /** Small heading above the text. */
  label?: string
  /** Smaller box and text, for placing several side by side. */
  compact?: boolean
}) {
  return (
    <div
      className={`key-insight rounded-xl bg-forest ${compact ? 'my-0 h-full px-5 py-4' : 'my-6 px-6 py-5'}`}
    >
      <p className="mb-3 font-sans text-[11px] font-medium uppercase tracking-[2px] text-sand/70">
        {label}
      </p>
      <div className={`font-serif leading-relaxed ${compact ? 'text-base' : 'text-lg'}`}>{children}</div>
    </div>
  )
}
