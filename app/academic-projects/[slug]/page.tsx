import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { CoordinateRow } from '@/components/CoordinateRow'
import { RustCtaPanel } from '@/components/RustCtaPanel'
import { BreathStrip } from '@/components/BreathStrip'
import { getAcademicProject, getAllAcademicProjects } from '@/lib/content'
import { getMdxComponents } from '@/components/mdx'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = getAllAcademicProjects()
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const item = getAcademicProject(slug)
  if (!item) return { title: 'Not Found' }
  return {
    title: `${item.frontmatter.title} — Czarina 'Z' Goingco`,
    description: item.frontmatter.summary,
  }
}

export default async function AcademicProjectPage({ params }: PageProps) {
  const { slug } = await params
  const item = getAcademicProject(slug)
  if (!item) notFound()

  const { frontmatter, content } = item
  const components = getMdxComponents()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <article className="mdx-content mx-auto max-w-4xl px-6 py-12 md:py-16">
          <Link
            href="/academic-projects"
            className="mb-10 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[1.5px] text-muted-foreground transition-colors hover:text-rust"
          >
            <ArrowLeft className="h-4 w-4" />
            All academic projects
          </Link>

          <header className="mb-12 rounded-xl border border-border pb-10 pt-8">
            <div className="px-6">
              <CoordinateRow text={`Academic work · ${frontmatter.year}`} />
              <h1
                className="mt-3 font-display leading-none text-foreground"
                style={{ fontSize: "var(--text-hero-lg)" }}
              >
                {frontmatter.title}
              </h1>
              <p
                className="mt-4 max-w-2xl font-serif font-light italic text-muted-foreground"
                style={{ fontSize: "var(--text-subhead)" }}
              >
                {frontmatter.summary}
              </p>
              {frontmatter.role?.length > 0 && (
                <div className="mt-6">
                  <p className="font-sans text-[11px] font-medium uppercase tracking-[2px] text-rust">
                    Role
                  </p>
                  <p className="mt-1 font-sans text-sm text-foreground">
                    {frontmatter.role.join(' · ')}
                  </p>
                </div>
              )}
              {frontmatter.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag: string, i: number) => (
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
            </div>
          </header>

          <MDXRemote source={content} components={components} />
        </article>
      </main>

      <RustCtaPanel />
      <BreathStrip />
      <Footer />
    </div>
  )
}
