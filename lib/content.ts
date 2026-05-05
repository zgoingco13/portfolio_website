import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentRoot = path.join(process.cwd(), 'content')

export interface CaseStudyFrontmatter {
  title: string
  tagline: string
  slug: string
  year: number
  projectType: string
  duration: string
  role: string[]
  team: string[]
  tools: string[]
  tags: string[]
  coverImage?: string
  summary: string
  featured: boolean
  order: number
  heroVariant?: 'default' | 'product-and-logo'
  heroWatch?: string
  heroPhone?: string
  heroLogo?: string
}

export interface AcademicProjectFrontmatter {
  title: string
  slug: string
  year: number
  role: string[]
  tags: string[]
  coverImage: string
  summary: string
  order: number
}

function getSlugs(collection: string): string[] {
  const dir = path.join(contentRoot, collection)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace('.mdx', ''))
}

function getItem<T>(
  collection: string,
  slug: string
): { frontmatter: T; content: string; slug: string } | null {
  const filePath = path.join(contentRoot, collection, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data as T, content, slug }
}

export function getCaseStudy(slug: string) {
  return getItem<CaseStudyFrontmatter>('case-studies', slug)
}

export function getAllCaseStudies(): (CaseStudyFrontmatter & { slug: string })[] {
  return getSlugs('case-studies')
    .map((slug) => {
      const item = getCaseStudy(slug)
      return item ? { ...item.frontmatter, slug } : null
    })
    .filter(Boolean)
    .sort((a, b) => (a!.order ?? 99) - (b!.order ?? 99)) as (CaseStudyFrontmatter & {
    slug: string
  })[]
}

export function getAcademicProject(slug: string) {
  return getItem<AcademicProjectFrontmatter>('academic-projects', slug)
}

export function getAllAcademicProjects(): (AcademicProjectFrontmatter & { slug: string })[] {
  return getSlugs('academic-projects')
    .map((slug) => {
      const item = getAcademicProject(slug)
      return item ? { ...item.frontmatter, slug } : null
    })
    .filter(Boolean)
    .sort((a, b) => (a!.order ?? 99) - (b!.order ?? 99)) as (AcademicProjectFrontmatter & {
    slug: string
  })[]
}
