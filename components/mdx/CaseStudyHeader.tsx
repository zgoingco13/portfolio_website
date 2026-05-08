import Image from 'next/image'
import type { CaseStudyFrontmatter } from '@/lib/content'

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
    <div className="mb-12">
      {/*
        Desktop: watch | logo | phone in a single row, vertically centered.
        Mobile: logo on top, then watch + phone side-by-side below.
      */}

      {/* Mobile layout (hidden on md+): logo dominant, products below side-by-side */}
      <div className="md:hidden">
        {heroLogo && (
          <div className="mb-5 flex justify-center">
            <div className="relative h-36 w-full max-w-[280px]">
              <Image src={heroLogo} alt={`${title} logo`} fill className="object-contain" priority />
            </div>
          </div>
        )}
        <div className="flex items-center gap-3">
          <div className="relative h-36 flex-1">
            <Image src={heroWatch} alt={`${title} — watch`} fill className="object-contain" priority />
          </div>
          <div className="relative h-36 flex-1">
            <Image src={heroPhone} alt={`${title} — phone`} fill className="object-contain" priority />
          </div>
        </div>
      </div>

      {/* Desktop triptych (hidden below md): centered composition, tight gap */}
      <div className="hidden items-center justify-center gap-8 md:flex lg:gap-12">
        {/* Left — watch, supporting role */}
        <div
          className="relative shrink-0"
          style={{ width: 'min(200px, 20vw)', height: 'min(240px, 24vw)' }}
        >
          <Image
            src={heroWatch}
            alt={`${title} — watch`}
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Center — logo, dominant: ~55% of the row, up to 640px */}
        <div
          className="relative shrink-0"
          style={{ width: 'min(640px, 54vw)', height: 'min(480px, 40vw)' }}
        >
          <Image
            src={heroLogo ?? heroWatch}
            alt={`${title} logo`}
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Right — phone, supporting role */}
        <div
          className="relative shrink-0"
          style={{ width: 'min(200px, 20vw)', height: 'min(240px, 24vw)' }}
        >
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
      style={{ height: 'min(400px, 60vh)' }}
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

      <p className="font-sans text-sm font-medium uppercase tracking-wider text-mustard">
        {projectType}
      </p>
      <h1 className="mt-3 font-display text-4xl text-foreground md:text-5xl lg:text-6xl">{title}</h1>
      <p className="mt-4 max-w-3xl font-serif text-xl text-muted-foreground">{tagline}</p>

      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { label: 'Year', value: String(year) },
          { label: 'Duration', value: duration },
          { label: 'Role', value: role?.join(' · ') },
          { label: 'Team', value: team?.join(', ') },
        ].map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-4">
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-mustard">
              {label}
            </p>
            <p className="mt-1 font-sans text-sm leading-snug text-foreground">{value}</p>
          </div>
        ))}
      </div>

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
                i % 2 === 0 ? 'bg-mustard/40' : 'bg-olive/30'
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
