interface CoordinateRowProps {
  text: string
  className?: string
}

export function CoordinateRow({ text, className }: CoordinateRowProps) {
  return (
    <div className={`coordinate-row${className ? ` ${className}` : ""}`}>
      <div className="coordinate-line" />
      <span className="coordinate">{text}</span>
    </div>
  )
}
