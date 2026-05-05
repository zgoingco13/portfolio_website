interface ComparisonGridProps {
  children: React.ReactNode
  labels?: [string, string]
}

export function ComparisonGrid({ children, labels = ['Before', 'After'] }: ComparisonGridProps) {
  return (
    <div className="my-6">
      <div className="mb-3 grid grid-cols-2 gap-4">
        {labels.map((label) => (
          <p
            key={label}
            className="font-sans text-xs font-medium uppercase tracking-wider text-mustard"
          >
            {label}
          </p>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </div>
  )
}
