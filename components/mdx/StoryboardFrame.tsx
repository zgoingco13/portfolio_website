import Image from 'next/image'

interface StoryboardFrameProps {
  image: string
  caption: string
}

export function StoryboardFrame({ image, caption }: StoryboardFrameProps) {
  return (
    <figure className="storyboard-frame overflow-hidden rounded-xl border border-border">
      <div className="relative aspect-[4/3]">
        <Image src={image} alt={caption} fill className="object-cover" />
      </div>
      <figcaption className="bg-card px-4 py-3 font-sans text-xs text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}
