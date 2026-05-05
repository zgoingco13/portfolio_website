import Image from 'next/image'

interface Annotation {
  x: number
  y: number
  label: string
}

interface AnnotatedImageProps {
  image: string
  annotations?: Annotation[]
}

export function AnnotatedImage({ image, annotations = [] }: AnnotatedImageProps) {
  return (
    <div className="relative my-6 overflow-hidden rounded-xl">
      <div className="relative aspect-video">
        <Image src={image} alt="Annotated image" fill className="object-cover" />
      </div>
      {annotations.map((a, i) => (
        <div
          key={i}
          className="absolute flex items-center gap-2"
          style={{ left: `${a.x}%`, top: `${a.y}%`, transform: 'translate(-50%, -50%)' }}
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-burnt-orange font-sans text-xs font-bold text-white">
            {i + 1}
          </span>
          <span className="rounded bg-card/90 px-2 py-1 font-sans text-xs text-white backdrop-blur-sm">
            {a.label}
          </span>
        </div>
      ))}
    </div>
  )
}
