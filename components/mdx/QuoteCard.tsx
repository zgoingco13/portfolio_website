import Image from 'next/image'

interface QuoteCardProps {
  name: string
  role: string
  image?: string
  children: React.ReactNode
}

export function QuoteCard({ name, role, image, children }: QuoteCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6">
      <blockquote className="font-serif text-lg italic text-foreground">
        &ldquo;{children}&rdquo;
      </blockquote>
      <div className="mt-auto flex items-center gap-3">
        {image && (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image src={image} alt={name} fill className="object-cover" />
          </div>
        )}
        <div>
          <p className="font-sans text-sm font-medium text-foreground">{name}</p>
          <p className="font-sans text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
