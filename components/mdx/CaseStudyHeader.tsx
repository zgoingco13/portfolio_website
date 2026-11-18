import Image from 'next/image'
import { Video } from './Video'
import type { CaseStudyFrontmatter } from '@/lib/content'
import { CoordinateRow } from '@/components/CoordinateRow'

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
      <div className="flex w-full items-center gap-2">
        <div className="relative flex-1" style={{ height: 'min(420px, 44vw)' }}>
          <Image
            src={heroWatch}
            alt={heroWatchAlt ?? `${title} — watch`}
            fill
            className="object-contain object-right"
            priority
          />
        </div>
        <div className="relative flex-1" style={{ height: 'min(420px, 44vw)' }}>
          <Image
            src={heroPhone}
            alt={heroPhoneAlt ?? `${title} — phone`}
            fill
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
    <div className="mb-12 flex flex-col gap-6">
      {heroLogo && (
        <div className="relative w-full" style={{ height: 'min(160px, 14vw)' }}>
          <Image src={heroLogo} alt={`${title} logo`} fill className="object-contain object-center" priority />
        </div>
      )}
      <div className="relative w-full" style={{ height: 'min(460px, 60vw)' }}>
        <Image
          src={heroDevices}
          alt={heroDevicesAlt ?? `${title} on devices`}
          fill
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
  return (
    <div className="mb-12 flex flex-col gap-6">
      {/* Row 1: banner full width */}
      {heroLogo && (
        <Image
          src={heroLogo}
          alt={`${title} banner`}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full rounded-xl"
          priority
        />
      )}

      {/* Row 2: laptop · phone · laptop */}
      <div className="grid w-full grid-cols-[5fr_2fr_5fr] items-center gap-2 md:gap-4 lg:-mx-[6%] lg:w-[112%]">
        <Image
          src={heroLaptopLeft}
          alt={`${title} on a laptop`}
          width={0}
          height={0}
          sizes="40vw"
          className="h-auto w-full"
          priority
        />
        <Image
          src={heroPhone}
          alt={`${title} AR Fit Guide on a phone`}
          width={0}
          height={0}
          sizes="20vw"
          className="h-auto w-full"
          priority
        />
        <Image
          src={heroLaptopRight}
          alt={`${title} results on a laptop`}
          width={0}
          height={0}
          sizes="40vw"
          className="h-auto w-full"
          priority
        />
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
