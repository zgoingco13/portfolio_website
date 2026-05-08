import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getCaseStudy, getAllCaseStudies } from '@/lib/content'
import { getMdxComponents } from '@/components/mdx'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

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
    title: `${item.frontmatter.title} — Czarina 'Z' Goingco`,
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
        <article className="mdx-content mx-auto max-w-6xl px-6 py-12 md:py-16">
          <Link
            href="/case-studies"
            className="mb-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-muted-foreground transition-colors hover:text-rust"
          >
            <ArrowLeft className="h-4 w-4" />
            All case studies
          </Link>
          <MDXRemote source={content} components={components} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
