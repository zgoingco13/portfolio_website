import { cn } from "@/lib/utils"

/**
 * Boot prints that walk in when the parent `.group` is hovered.
 * Shape is one print from the footsteps-Z mark (public/logo/footsteps-z-*.svg).
 * CSS only (see TRAIL_CSS): each print fades in after its own delay; on hover-out they all fade at once.
 */

type Variant = "below" | "border"

// One print from the footsteps-Z mark, pointing right (toe on the right).
function Print() {
  return (
    <svg viewBox="338 44 120 52" className="block h-full w-full fill-current" aria-hidden="true">
      <path d="M456,73.6c0-25.8-30.8-31.4-58.8-24.6-11.8,2.8-16.2,5.6-20.7,6.7l4.5,35.8c4.5,2.2,10.1,5.6,19,7.8,25.2,5.6,56,0,56-25.8Z" />
      <path d="M368.6,91l-4.5-35.8c-10.1-1.7-23.5,1.7-23.5,17.4s13.4,20.2,28,18.5Z" />
    </svg>
  )
}

// Hover behaviour lives here so the effect is self-contained (React 19 hoists and dedupes this <style>)
const TRAIL_CSS = `
.footstep { opacity: 0; transition: opacity 200ms ease-out; }
.group:hover .footstep, .group:focus-visible .footstep { opacity: 0.85; transition-delay: var(--step-delay); }
@media (prefers-reduced-motion: reduce) {
  .group:hover .footstep, .group:focus-visible .footstep { transition: none; }
}
`

const STEP_MS = 70 // delay between prints
const PRINT_W = 20 // px
const PRINT_H = 9 // px
const STRIDE = 5 // px sideways offset between left and right foot

interface Step {
  left: string
  top: string
  angle: number // walking direction, degrees
  foot: 1 | -1 // left/right foot
}

// Prints walking left → right across the card, just under the picture
function belowSteps(count = 14): Step[] {
  return Array.from({ length: count }, (_, i) => ({
    left: `${4 + (92 * i) / (count - 1)}%`,
    top: "0px",
    angle: 0,
    foot: i % 2 === 0 ? 1 : -1,
  }))
}

// Prints walking clockwise around the card edge, starting top-left
function borderSteps(perSide = { x: 16, y: 17 }): Step[] {
  const steps: Step[] = []
  const inset = 12 // px in from the edge
  const add = (left: string, top: string, angle: number) =>
    steps.push({ left, top, angle, foot: steps.length % 2 === 0 ? 1 : -1 })
  for (let i = 0; i < perSide.x; i++) add(`calc(${inset}px + (100% - ${inset * 2}px) * ${i / perSide.x})`, `${inset}px`, 0)
  for (let i = 0; i < perSide.y; i++) add(`calc(100% - ${inset}px)`, `calc(${inset}px + (100% - ${inset * 2}px) * ${i / perSide.y})`, 90)
  for (let i = 0; i < perSide.x; i++) add(`calc(100% - ${inset}px - (100% - ${inset * 2}px) * ${i / perSide.x})`, `calc(100% - ${inset}px)`, 180)
  for (let i = 0; i < perSide.y; i++) add(`${inset}px`, `calc(100% - ${inset}px - (100% - ${inset * 2}px) * ${i / perSide.y})`, 270)
  return steps
}

export function FootstepTrail({ variant, className }: { variant: Variant; className?: string }) {
  const steps = variant === "below" ? belowSteps() : borderSteps()
  const stepMs = variant === "below" ? STEP_MS : 30
  return (
    <div aria-hidden="true" className={cn("footstep-trail pointer-events-none absolute", className)}>
      <style href="footstep-trail" precedence="default">
        {TRAIL_CSS}
      </style>
      {steps.map((s, i) => (
        <span
          key={i}
          className="footstep absolute text-rust"
          style={
            {
              left: s.left,
              top: s.top,
              width: PRINT_W,
              height: PRINT_H,
              "--step-delay": `${i * stepMs}ms`,
              transform: `translate(-50%, -50%) rotate(${s.angle}deg) translateY(${(s.foot * STRIDE) / 2}px) scaleY(${s.foot})`,
            } as React.CSSProperties
          }
        >
          <Print />
        </span>
      ))}
    </div>
  )
}
