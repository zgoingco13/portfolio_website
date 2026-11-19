"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const HINT_CSS = `
@keyframes scroll-hint-drift {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
.scroll-hint-arrow { animation: scroll-hint-drift 1.3s ease-in-out infinite; }
@media (prefers-reduced-motion: reduce) {
  .scroll-hint-arrow { animation: none; }
}
`

/** "Scroll to see more" label + arrow (brand Rust) for the homepage hero. Fades out once the visitor scrolls. */
export function ScrollHint({ className }: { className?: string }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none text-rust transition-opacity duration-500 ${className ?? ""}`}
      style={{ opacity: visible ? 0.75 : 0 }}
    >
      <style href="scroll-hint" precedence="default">
        {HINT_CSS}
      </style>
      <div className="flex flex-col items-center gap-1">
        <span className="font-sans text-[10px] font-medium uppercase tracking-[2.5px] opacity-70">
          Scroll to see more
        </span>
        <ChevronDown className="scroll-hint-arrow h-11 w-11" strokeWidth={1.75} />
      </div>
    </div>
  )
}
