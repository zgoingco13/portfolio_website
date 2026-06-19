import type { MDXComponents } from 'mdx/types'
import type { CaseStudyFrontmatter } from '@/lib/content'
import { CaseStudyHeader as CaseStudyHeaderImpl } from './CaseStudyHeader'
import { Section } from './Section'
import { QuoteCard } from './QuoteCard'
import { QuoteGrid } from './QuoteGrid'
import { PersonaCard } from './PersonaCard'
import { PersonaGrid } from './PersonaGrid'
import { StoryboardFrame } from './StoryboardFrame'
import { StoryboardGrid } from './StoryboardGrid'
import { AnnotatedImage } from './AnnotatedImage'
import { KeyInsight } from './KeyInsight'
import { ImageWithCaption } from './ImageWithCaption'
import { ComparisonGrid } from './ComparisonGrid'
import { Video } from './Video'

export {
  Section,
  QuoteCard,
  QuoteGrid,
  PersonaCard,
  PersonaGrid,
  StoryboardFrame,
  StoryboardGrid,
  AnnotatedImage,
  KeyInsight,
  ImageWithCaption,
  ComparisonGrid,
  Video,
}

/** Base component map — CaseStudyHeader requires frontmatter to be bound via getMdxComponents. */
const baseComponents = {
  Section,
  QuoteCard,
  QuoteGrid,
  PersonaCard,
  PersonaGrid,
  StoryboardFrame,
  StoryboardGrid,
  AnnotatedImage,
  KeyInsight,
  ImageWithCaption,
  ComparisonGrid,
  Video,
}

/**
 * Returns the full MDX component map.
 * Pass frontmatter to pre-bind it into CaseStudyHeader so the MDX file
 * can use <CaseStudyHeader /> with no props.
 */
export function getMdxComponents(frontmatter?: CaseStudyFrontmatter): MDXComponents {
  return {
    ...baseComponents,
    CaseStudyHeader: frontmatter
      ? () => <CaseStudyHeaderImpl frontmatter={frontmatter} />
      : () => null,
  }
}
