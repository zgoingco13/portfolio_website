import Link from 'next/link'
import Image from 'next/image'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { getAllCaseStudies } from '@/lib/content'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Case Studies — Sarah Chen',
  description: 'In-depth UX case studies exploring research, design process, and outcomes.',
}

export default function CaseStudiesPage() {
  const studies = getAllCaseStudies()

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-sans text-sm font-medium uppercase tracking-wider text-mustard">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl text-white md:text-5xl">Case Studies</h1>
          <p className="mt-4 max-w-2xl font-sans text-base leading-relaxed text-white/70">
            In-depth explorations of my design process — from research and discovery through to
            final outcomes.
          </p>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24">
          {studies.length === 0 ? (
            <p className="font-sans text-white/50">No case studies yet.</p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {studies.map((study, i) => (
                <Link
                  key={study.slug}
                  href={`/case-studies/${study.slug}`}
                  className={`group block overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-burnt-orange/60 hover:shadow-lg ${
                    i === 0 ? 'md:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      i === 0 ? 'aspect-[21/9]' : 'aspect-[4/3]'
                    }`}
                  >
                    {study.coverImage ? (
                      <Image
                        src={study.coverImage}
                        alt={study.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="h-full w-full bg-muted" />
                    )}
                  </div>
                  <div className={`p-6 ${i === 0 ? 'md:p-8' : ''}`}>
                    <p className="font-sans text-xs font-medium uppercase tracking-wider text-mustard">
                      {study.projectType} · {study.year}
                    </p>
                    <h2
                      className={`mt-2 font-serif font-medium text-white ${
                        i === 0 ? 'text-2xl md:text-3xl' : 'text-xl'
                      }`}
                    >
                      {study.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 font-sans text-sm text-white/70">
                      {study.summary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags?.map((tag, j) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 font-sans text-xs font-medium uppercase tracking-wide text-foreground ${
                            j % 2 === 0 ? 'bg-mustard/40' : 'bg-olive/30'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-1 font-sans text-sm font-medium text-burnt-orange">
                      View case study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  )
}
