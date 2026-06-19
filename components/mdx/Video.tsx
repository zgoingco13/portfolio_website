interface VideoProps {
  src: string
  caption: string
  poster?: string
  wrapperClassName?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
}

export function Video({
  src,
  caption,
  poster,
  wrapperClassName,
  autoPlay = false,
  loop = false,
  muted = false,
}: VideoProps) {
  return (
    <figure className="my-6">
      <div className={`relative overflow-hidden rounded-xl ${wrapperClassName ?? ''}`}>
        <video
          src={src}
          poster={poster}
          controls
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          playsInline
          className="w-full h-auto"
        />
      </div>
      <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  )
}
