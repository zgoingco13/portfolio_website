export function StoryboardGrid({ children }: { children: React.ReactNode }) {
  return <div className="storyboard-grid grid gap-4 md:grid-cols-3 items-stretch">{children}</div>
}
