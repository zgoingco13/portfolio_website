import Image from 'next/image'

interface PersonaCardProps {
  name: string
  role: string
  image?: string
  description: string
}

export function PersonaCard({ name, role, image, description }: PersonaCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      {image && (
        <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
          <Image src={image} alt={name} fill className="object-cover" />
        </div>
      )}
      <h3 className="font-serif font-bold text-lg text-foreground">{name}</h3>
      <p className="font-sans text-sm text-honey">{role}</p>
      <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
