import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
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
    title: `${item.frontmatter.title} — Sarah Chen`,
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
            className="mb-10 inline-flex items-center gap-2 font-sans text-sm uppercase tracking-wider text-white/60 transition-colors hover:text-burnt-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            All academic projects
          </Link>

          {/* Inline header for academic projects (lighter than CaseStudyHeader) */}
          <header className="mb-12 border-b border-border pb-10">
            <p className="font-sans text-xs font-medium uppercase tracking-wider text-mustard">
              {frontmatter.year}
            </p>
            <h1 className="mt-3 font-display text-4xl text-white md:text-5xl">
              {frontmatter.title}
            </h1>
            <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/70">
              {frontmatter.summary}
            </p>
            {frontmatter.role?.length > 0 && (
              <div className="mt-6">
                <p className="font-sans text-xs font-medium uppercase tracking-wider text-mustard">
                  Role
                </p>
                <p className="mt-1 font-sans text-sm text-white/90">
                  {frontmatter.role.join(' · ')}
                </p>
              </div>
            )}
            {frontmatter.tags?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag, i) => (
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

          <MDXRemote source={content} components={components} />
        </article>
      </main>
      <Footer />
    </div>
  )
}
