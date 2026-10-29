import Image from 'next/image'
import type { CaseStudyFrontmatter } from '@/lib/content'
import { CoordinateRow } from '@/components/CoordinateRow'

function ProductAndLogoHero({
  heroWatch,
  heroPhone,
  heroLogo,
  title,
}: {
  heroWatch: string
  heroPhone: string
  heroLogo?: string
  title: string
}) {
  return (
    <div className="mb-12 flex flex-col gap-6">
      {/* Row 1: logo full width */}
      {heroLogo && (
        <div className="relative w-full" style={{ height: 'min(160px, 14vw)' }}>
          <Image
            src={heroLogo}
            alt={`${title} logo`}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      )}

      {/* Row 2: watch + phone side-by-side, same width as logo row above */}
      <div className="flex w-full items-center gap-6">
        <div className="relative flex-1" style={{ height: 'min(320px, 32vw)' }}>
          <Image
            src={heroWatch}
            alt={`${title} — watch`}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
        <div className="relative flex-1" style={{ height: 'min(320px, 32vw)' }}>
          <Image
            src={heroPhone}
            alt={`${title} — phone`}
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </div>
  )
}

function DefaultHero({ coverImage, title }: { coverImage: string; title: string }) {
  return (
    <div
      className="relative mb-10 w-full overflow-hidden rounded-2xl"
      style={{ height: 'min(500px, 75vh)' }}
    >
      <Image src={coverImage} alt={title} fill className="object-contain" priority />
    </div>
  )
}

export function CaseStudyHeader({ frontmatter }: { frontmatter: CaseStudyFrontmatter }) {
  const {
    title,
    tagline,
    projectType,
    year,
    duration,
    role,
    team,
    tools,
    tags,
    coverImage,
    heroVariant,
    heroWatch,
    heroPhone,
    heroLogo,
  } = frontmatter

  return (
    <header className="mb-16">
      {heroVariant === 'product-and-logo' && heroWatch && heroPhone ? (
        <ProductAndLogoHero
          heroWatch={heroWatch}
          heroPhone={heroPhone}
          heroLogo={heroLogo}
          title={title}
        />
      ) : coverImage ? (
        <DefaultHero coverImage={coverImage} title={title} />
      ) : null}

      <CoordinateRow text={[projectType, String(year), duration].filter(Boolean).join(' · ')} />
      <h1 className="mt-3 font-display leading-none text-foreground" style={{ fontSize: "var(--text-hero-xl)" }}>{title}</h1>
      <p className="mt-4 max-w-3xl font-serif font-light italic text-muted-foreground" style={{ fontSize: "var(--text-subhead)" }}>{tagline}</p>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: 'Year', value: String(year) },
          { label: 'Duration', value: duration },
          { label: 'Role', value: role?.join(' · ') },
          { label: 'Team', value: team?.join(', ') },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-4">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-honey">
              {label}
            </p>
            <p className="mt-1 font-sans text-sm leading-snug text-foreground">{value}</p>
          </div>
        ))}
      </div>

      {title === 'GearSmart' && (
        <div className="mt-4 overflow-hidden rounded-xl">
          <video
            src="/images/case-studies/gearsmart/case_study_videos/demo-overview.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full"
          />
        </div>
      )}

      {tools?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-border bg-card px-3 py-1 font-sans text-xs text-muted-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      )}

      {tags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={tag}
              className={`rounded-full px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-foreground ${
                i % 2 === 0 ? 'bg-honey/40' : 'bg-moss/30'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  )
}
