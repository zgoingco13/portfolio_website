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
import { ImageCarousel, CarouselSlide } from './ImageCarousel'
import { ComparisonGrid } from './ComparisonGrid'
import { Video } from './Video'
import { PhoneVideo } from './PhoneVideo'
import { YouTube } from './YouTube'
import { ConceptPoster } from './ConceptPoster'

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
  ImageCarousel,
  CarouselSlide,
  ComparisonGrid,
  Video,
  PhoneVideo,
  YouTube,
  ConceptPoster,
}

/** Base component map — CaseStudyHeader requires frontmatter to be bound via getMdxComponents. */
/** Markdown links: external ones open in a new tab. */
function MdxLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const external = typeof props.href === 'string' && /^https?:\/\//.test(props.href)
  return external ? <a {...props} target="_blank" rel="noopener noreferrer" /> : <a {...props} />
}

const baseComponents = {
  a: MdxLink,
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
  ImageCarousel,
  CarouselSlide,
  ComparisonGrid,
  Video,
  PhoneVideo,
  YouTube,
  ConceptPoster,
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
