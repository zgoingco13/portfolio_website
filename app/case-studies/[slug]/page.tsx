import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { RustCtaPanel } from '@/components/RustCtaPanel'
import { BreathStrip } from '@/components/BreathStrip'
import { getCaseStudy, getAllCaseStudies } from '@/lib/content'
import { getMdxComponents } from '@/components/mdx'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { CaseStudyToc } from '@/components/CaseStudyToc'

// Hover effect for images on the UGLOO case study: a spinning border in UGLOO's brand colors.
// Scoped to [data-slug="ugloo"] so other case studies keep their own look.
const UGLOO_IMAGE_CSS = `
@property --ugloo-angle { syntax: '<angle>'; initial-value: 0deg; inherits: false; }
@keyframes ugloo-spin { to { --ugloo-angle: 360deg; } }
[data-slug="ugloo"] .img-spin { position: relative; }
/* A glowing orb (bright head + short fading tail) that travels around the frame's edge */
[data-slug="ugloo"] .img-spin::before,
[data-slug="ugloo"] .img-spin::after {
  content: ''; position: absolute; inset: 0; z-index: 2; pointer-events: none;
  border-radius: inherit;
  background: conic-gradient(from var(--ugloo-angle),
    transparent 0deg 338deg,
    #3B3F77 345deg, #BFAEDC 351deg, #BDE2FF 355deg, #4FB0AE 358deg,
    transparent 360deg);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor; mask-composite: exclude;
  opacity: 0; transition: opacity 0.25s ease;
}
[data-slug="ugloo"] .img-spin::after { padding: 2px; }
/* soft glow around the orb */
[data-slug="ugloo"] .img-spin::before { padding: 6px; inset: -3px; filter: blur(5px) brightness(1.15); }
[data-slug="ugloo"] .img-spin:hover::before,
[data-slug="ugloo"] .img-spin:hover::after,
[data-slug="ugloo"] .img-spin:focus-visible::before,
[data-slug="ugloo"] .img-spin:focus-visible::after { opacity: 1; animation: ugloo-spin 5s linear infinite; }
/* Videos: run the orb along the phone's rounded outline */
[data-slug="ugloo"] .img-spin.video-spin::after { inset: calc(1% - 4px) calc(2% - 4px); }
[data-slug="ugloo"] .img-spin.video-spin::before { inset: calc(1% - 7px) calc(2% - 7px); }
@media (prefers-reduced-motion: reduce) {
  [data-slug="ugloo"] .img-spin:hover::before,
  [data-slug="ugloo"] .img-spin:hover::after { animation: none; }
}
`

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies()
  return studies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const item = getCaseStudy(slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.frontmatter.title} | Czarina 'Z' Goingco`,
    description: item.frontmatter.summary,
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const item = getCaseStudy(slug)
  if (!item) notFound()

  const { frontmatter, content } = item
  const components = getMdxComponents(frontmatter)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <article data-slug={slug} className="mdx-content mx-auto w-full px-6 lg:w-3/4 lg:px-0 py-12 md:py-16">
          <Link
            href="/case-studies"
            className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[1.5px] text-muted-foreground transition-colors hover:text-rust"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          {slug === 'ugloo' && <style>{UGLOO_IMAGE_CSS}</style>}
          <MDXRemote source={content} components={components} options={{ blockJS: false }} />
        </article>
        <CaseStudyToc />
      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
