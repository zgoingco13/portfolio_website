import type React from 'react'
import Image from 'next/image'
import { Video } from './Video'
import type { CaseStudyFrontmatter } from '@/lib/content'
import { CoordinateRow } from '@/components/CoordinateRow'

type CSSVars = React.CSSProperties & Record<`--${string}`, string>

/** Logo row shared by the logo heroes. Height comes from .cs-hero-logo in globals.css. */
function HeroLogo({ src, alt, logoH }: { src: string; alt: string; logoH?: string }) {
  return (
    <div className="cs-hero-logo" style={logoH ? ({ '--hero-logo-h': logoH } as CSSVars) : undefined}>
      <Image src={src} alt={alt} fill sizes="100vw" className="object-contain object-center" priority />
    </div>
  )
}

function ProductAndLogoHero({
  heroWatch,
  heroPhone,
  heroLogo,
  title,
  heroWatchAlt,
  heroPhoneAlt,
}: {
  heroWatch: string
  heroPhone: string
  heroLogo?: string
  title: string
  heroWatchAlt?: string
  heroPhoneAlt?: string
}) {
  return (
    <div className="cs-hero">
      {heroLogo && <HeroLogo src={heroLogo} alt={`${title} logo`} logoH="160px" />}

      {/* Watch + phone side-by-side, filling the rest of the first screen */}
      <div className="cs-hero-media flex items-center gap-2" style={{ '--hero-mobile-h': 'min(420px, 44vw)' } as CSSVars}>
        <div className="relative h-full flex-1">
          <Image
            src={heroWatch}
            alt={heroWatchAlt ?? `${title} — watch`}
            fill
            sizes="50vw"
            className="object-contain object-right"
            priority
          />
        </div>
        <div className="relative h-full flex-1">
          <Image
            src={heroPhone}
            alt={heroPhoneAlt ?? `${title} — phone`}
            fill
            sizes="50vw"
            className="object-contain object-left"
            priority
          />
        </div>
      </div>
    </div>
  )
}

function LogoAndDevicesImageHero({
  heroLogo,
  heroDevices,
  heroDevicesAlt,
  title,
}: {
  heroLogo?: string
  heroDevices: string
  heroDevicesAlt?: string
  title: string
}) {
  return (
    <div className="cs-hero">
      {heroLogo && <HeroLogo src={heroLogo} alt={`${title} logo`} />}
      <div className="cs-hero-media" style={{ '--hero-mobile-h': 'min(380px, 60vw)' } as CSSVars}>
        <Image
          src={heroDevices}
          alt={heroDevicesAlt ?? `${title} on devices`}
          fill
          sizes="100vw"
          className="object-contain object-center"
          priority
        />
      </div>
    </div>
  )
}

function DevicesAndLogoHero({
  heroLaptopLeft,
  heroPhone,
  heroLaptopRight,
  heroLogo,
  title,
}: {
  heroLaptopLeft: string
  heroPhone: string
  heroLaptopRight: string
  heroLogo?: string
  title: string
}) {
  const cell = (src: string, alt: string, sizes: string, pos: string) => (
    <div className="relative h-full">
      <Image src={src} alt={alt} fill sizes={sizes} className={`object-contain ${pos}`} priority />
    </div>
  )
  return (
    <div className="cs-hero">
      {heroLogo && <HeroLogo src={heroLogo} alt={`${title} banner`} />}

      {/* laptop · phone · laptop, filling the rest of the first screen */}
      <div
        className="cs-hero-media grid grid-cols-[5fr_2fr_5fr] items-center gap-2 md:gap-4 lg:-mx-[6%] lg:!w-[112%]"
        style={{ '--hero-mobile-h': '34vw' } as CSSVars}
      >
        {cell(heroLaptopLeft, `${title} on a laptop`, '40vw', 'object-right')}
        {cell(heroPhone, `${title} AR Fit Guide on a phone`, '20vw', 'object-center')}
        {cell(heroLaptopRight, `${title} results on a laptop`, '40vw', 'object-left')}
      </div>
    </div>
  )
}

function DefaultHero({ coverImage, title }: { coverImage: string; title: string }) {
  return (
    <div className="cs-hero">
      <div className="cs-hero-media overflow-hidden rounded-2xl" style={{ '--hero-mobile-h': 'min(500px, 75vh)' } as CSSVars}>
        <Image src={coverImage} alt={title} fill sizes="100vw" className="object-contain" priority />
      </div>
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
    heroWatchAlt,
    heroPhoneAlt,
    heroDevices,
    heroDevicesAlt,
    heroLaptopLeft,
    heroLaptopRight,
  } = frontmatter

  return (
    <header className="mb-16">
      {heroVariant === 'product-and-logo' && heroDevices ? (
        <LogoAndDevicesImageHero
          heroLogo={heroLogo}
          heroDevices={heroDevices}
          heroDevicesAlt={heroDevicesAlt}
          title={title}
        />
      ) : heroVariant === 'product-and-logo' && heroWatch && heroPhone ? (
        <ProductAndLogoHero
          heroWatch={heroWatch}
          heroPhone={heroPhone}
          heroLogo={heroLogo}
          title={title}
          heroWatchAlt={heroWatchAlt}
          heroPhoneAlt={heroPhoneAlt}
        />
      ) : heroVariant === 'devices-and-logo' && heroLaptopLeft && heroPhone && heroLaptopRight ? (
        <DevicesAndLogoHero
          heroLaptopLeft={heroLaptopLeft}
          heroPhone={heroPhone}
          heroLaptopRight={heroLaptopRight}
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
        <div className="mx-auto mt-6 w-full max-w-2xl">
          <Video
            src="/images/case-studies/gearsmart/case_study_videos/demo-overview.mp4"
            title="This is GearSmart"
            caption="Holcomb Valley, Big Bear: trip conditions up top, gear grouped by category, and items checked off as you pack."
            frame="laptop"
            autoPlay
            loop
            muted
            lightbox
            figureClassName="my-0"
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
