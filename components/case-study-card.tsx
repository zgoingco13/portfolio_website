import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CaseStudyCardProps {
  slug: string
  title: string
  description: string
  coverImage: string
  coverImageAlt?: string
  tags: string[]
  featured?: boolean
}

const tagColors = [
  "bg-mustard/40 text-foreground",
  "bg-olive/30 text-foreground",
  "bg-mustard/40 text-foreground",
  "bg-olive/30 text-foreground",
]

export function CaseStudyCard({
  slug,
  title,
  description,
  coverImage,
  coverImageAlt,
  tags,
  featured = false,
}: CaseStudyCardProps) {
  return (
    <Link
      href={`/case-studies/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-burnt-orange/50 hover:shadow-lg",
        featured ? "col-span-full" : ""
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden",
          featured ? "aspect-[16/7] md:aspect-[21/7]" : "aspect-[4/3]"
        )}
      >
        <Image
          src={coverImage}
          alt={coverImageAlt ?? title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className={cn("p-6", featured ? "md:p-8" : "")}>
        {/* Recoleta for card titles */}
        <h3
          className={cn(
            "font-serif font-semibold text-foreground",
            featured ? "text-2xl md:text-3xl" : "text-xl"
          )}
        >
          {title}
        </h3>
        {/* Eurostile for description */}
        <p
          className={cn(
            "mt-2 font-sans text-muted-foreground",
            featured ? "text-base" : "text-sm",
            "line-clamp-2"
          )}
        >
          {description}
        </p>
        {/* Eurostile for tags/labels */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={cn(
                "rounded-full px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide",
                tagColors[index % tagColors.length]
              )}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
