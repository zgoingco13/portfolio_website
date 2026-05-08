export function ThreeRidgeHero() {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0" aria-hidden="true">
      <svg
        viewBox="0 0 800 280"
        preserveAspectRatio="xMidYMid slice"
        className="w-full"
        style={{ height: "clamp(120px, 22vw, 280px)" }}
      >
        <polygon
          points="0,180 60,165 110,170 170,150 230,162 290,140 360,158 430,138 500,155 570,142 640,158 720,148 800,160 800,280 0,280"
          fill="#2D4A33"
          opacity="0.10"
        />
        <polygon
          points="0,210 80,185 140,195 210,165 280,182 350,158 430,178 500,160 580,180 650,168 720,185 800,178 800,280 0,280"
          fill="#2D4A33"
          opacity="0.18"
        />
        <polygon
          points="0,250 100,210 180,225 260,180 340,210 420,165 510,200 590,170 680,195 760,180 800,205 800,280 0,280"
          fill="#2D4A33"
          opacity="0.32"
        />
      </svg>
    </div>
  )
}
