import Image from 'next/image'

interface ImageWithCaptionProps {
  src: string
  caption: string
  wrapperClassName?: string
  objectFit?: 'cover' | 'contain'
  natural?: boolean
}

export function ImageWithCaption({ src, caption, wrapperClassName, objectFit = 'cover', natural }: ImageWithCaptionProps) {
  return (
    <figure className="my-6">
      {natural ? (
        <Image src={src} alt={caption} width={0} height={0} sizes="100vw" className="w-full h-auto rounded-xl" />
      ) : (
        <div className={`relative overflow-hidden rounded-xl ${wrapperClassName ?? 'aspect-video'}`}>
          <Image src={src} alt={caption} fill className={`object-${objectFit}`} />
        </div>
      )}
      <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}
