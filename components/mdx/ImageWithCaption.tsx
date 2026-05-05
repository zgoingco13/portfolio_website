import Image from 'next/image'

interface ImageWithCaptionProps {
  src: string
  caption: string
}

export function ImageWithCaption({ src, caption }: ImageWithCaptionProps) {
  return (
    <figure className="my-6">
      <div className="relative aspect-video overflow-hidden rounded-xl">
        <Image src={src} alt={caption} fill className="object-cover" />
      </div>
      <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}
