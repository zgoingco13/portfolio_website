/**
 * A plain CSS laptop: dark bezel with a notch around the screen, and an aluminium base.
 * The screen is a 16:10 box; whatever goes inside should fill it (absolute inset-0).
 */
export function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full px-[5%]">
      <div className="relative rounded-t-[14px] border border-[#3b3b3e] bg-[#0c0c0d] p-[2%] pb-[2.4%] shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
        <div className="absolute left-1/2 top-0 z-10 h-[10px] w-[11%] -translate-x-1/2 rounded-b-[6px] bg-black" />
        <div className="relative aspect-[16/10] overflow-hidden rounded-[3px] bg-[#1e130e]">{children}</div>
      </div>
      <div className="relative -mx-[6%] h-[clamp(9px,1.4vw,15px)] rounded-b-[14px] bg-gradient-to-b from-[#c4c6cb] via-[#9a9ca1] to-[#5f6166] shadow-[0_8px_16px_rgba(0,0,0,0.18)]">
        <div className="absolute left-1/2 top-0 h-[45%] w-[13%] -translate-x-1/2 rounded-b-[6px] bg-[#86888d]" />
      </div>
    </div>
  )
}
