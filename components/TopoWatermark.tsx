export function TopoWatermark() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.13,
      }}
    >
      <svg
        viewBox="0 0 800 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Distant ghost ridges (anchored to bottom) */}
        <g opacity="0.5">
          <polygon points="0,360 80,330 140,340 210,310 280,332 350,308 430,328 500,310 580,330 650,318 720,335 800,328 800,600 0,600" fill="#2D4A33"/>
        </g>
        {/* Topo contour lines floating above */}
        <g fill="none" stroke="#2D4A33" strokeWidth="1">
          <path d="M -20 80 Q 200 50 400 110 T 850 90" />
          <path d="M -20 160 Q 200 130 400 180 T 850 170" />
          <path d="M -20 250 Q 200 220 400 270 T 850 260" />
        </g>
        {/* Optional rust dashed contour (a "trail" line) */}
        <g fill="none" stroke="#B8482E" strokeWidth="1" strokeDasharray="2,4">
          <path d="M -20 200 Q 200 170 400 220 T 850 210" />
        </g>
      </svg>
    </div>
  )
}
