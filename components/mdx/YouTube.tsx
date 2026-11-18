interface YouTubeProps {
  id: string
  title: string
  caption?: string
  /** Start and end times in seconds, to play just one part of a long video. */
  start?: number
  end?: number
  figureClassName?: string
}

/** Responsive 16:9 YouTube embed. Uses youtube-nocookie so no tracking cookies until play. */
export function YouTube({ id, title, caption, start, end, figureClassName }: YouTubeProps) {
  const params = new URLSearchParams({ rel: '0' })
  if (start) params.set('start', String(start))
  if (end) params.set('end', String(end))
  return (
    <figure className={figureClassName ?? 'my-6'}>
      <div className="relative aspect-video overflow-hidden rounded-xl bg-charcoal">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
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
