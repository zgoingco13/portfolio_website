interface YouTubeProps {
  id: string
  title: string
  caption?: string
}

/** Responsive 16:9 YouTube embed. Uses youtube-nocookie so no tracking cookies until play. */
export function YouTube({ id, title, caption }: YouTubeProps) {
  return (
    <figure className="my-6">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-charcoal">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?rel=0`}
          title={title}
          loading="lazy"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-sans text-sm italic text-muted-foreground">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
