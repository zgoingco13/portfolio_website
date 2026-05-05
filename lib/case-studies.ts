export interface CaseStudy {
  slug: string
  title: string
  description: string
  coverImage: string
  heroImage: string
  tags: string[]
  overview: string
  role: string
  timeline: string
  problem: string
  process: string[]
  solution: string
  results: string[]
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-app-redesign",
    title: "Reimagining Personal Finance",
    description:
      "A complete UX overhaul of a fintech mobile app, making money management intuitive and stress-free for young professionals.",
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1920&h=1080&fit=crop",
    tags: ["UX Research", "Product Design", "Mobile App"],
    overview:
      "Neobank approached me to redesign their mobile banking app from the ground up. The existing app had low engagement rates and users found it difficult to track their spending habits effectively.",
    role: "Lead UX Designer",
    timeline: "4 months",
    problem:
      "Users struggled with understanding their financial health at a glance. The existing dashboard was cluttered with information, and key features were buried deep in navigation. User research revealed that 68% of users opened the app but left within 30 seconds.",
    process: [
      "Conducted 24 user interviews and analyzed behavioral data from 10,000+ users",
      "Created detailed user personas and journey maps identifying key pain points",
      "Led design sprints with cross-functional teams to ideate solutions",
      "Developed and tested 3 prototype iterations with 50+ users",
      "Collaborated closely with engineering on feasibility and implementation",
    ],
    solution:
      "I designed a new visual hierarchy that surfaces the most important information—current balance, recent transactions, and spending insights—immediately upon opening the app. Introduced a 'Financial Health Score' that gamifies good money habits, and simplified the navigation from 7 tabs to 4 intuitive sections.",
    results: [
      "156% increase in daily active users within 3 months",
      "User session duration increased from 28 seconds to 2.4 minutes",
      "App Store rating improved from 3.2 to 4.7 stars",
      "Feature adoption rate for budgeting tools increased by 89%",
    ],
  },
  {
    slug: "healthcare-portal",
    title: "Patient Portal Transformation",
    description:
      "Designing an accessible healthcare portal that empowers patients to take control of their medical journey.",
    coverImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=800&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop",
    tags: ["UX Research", "Accessibility", "Web Design"],
    overview:
      "A major healthcare network needed a patient portal that could serve users of all ages and technical abilities, while meeting strict HIPAA compliance requirements.",
    role: "Senior UX Designer",
    timeline: "6 months",
    problem:
      "The existing portal had a 40% abandonment rate during registration. Elderly patients required phone support for simple tasks, and the system lacked mobile responsiveness entirely.",
    process: [
      "Audited existing portal against WCAG 2.1 AA accessibility standards",
      "Conducted contextual inquiry sessions with patients across age groups",
      "Partnered with healthcare professionals to understand clinical workflows",
      "Created an accessible design system with comprehensive documentation",
      "Ran usability testing sessions with screen reader users",
    ],
    solution:
      "Built a clean, high-contrast interface with adjustable text sizing and full keyboard navigation. Simplified the information architecture to surface appointment scheduling, test results, and messaging prominently. Added progressive disclosure to complex medical information.",
    results: [
      "Registration completion rate increased to 94%",
      "Support calls reduced by 62%",
      "WCAG 2.1 AAA compliance achieved",
      "Patient satisfaction scores increased from 3.1 to 4.5/5",
    ],
  },
  {
    slug: "ecommerce-checkout",
    title: "Streamlining the Checkout Experience",
    description:
      "Reducing cart abandonment through thoughtful UX improvements and trust-building design patterns.",
    coverImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&h=1080&fit=crop",
    tags: ["E-commerce", "Conversion Optimization", "A/B Testing"],
    overview:
      "An established e-commerce brand was experiencing a 73% cart abandonment rate. I was brought in to identify friction points and design a checkout flow that converts.",
    role: "UX Designer",
    timeline: "3 months",
    problem:
      "Users were dropping off at multiple stages: account creation, shipping information, and payment. Trust indicators were minimal, and the mobile experience was particularly problematic.",
    process: [
      "Analyzed Hotjar recordings and funnel data to identify drop-off points",
      "Benchmarked checkout flows from 15 top-performing e-commerce sites",
      "Designed a guest checkout option with optional account creation",
      "Implemented A/B testing framework for iterative improvements",
      "Created mobile-first designs with thumb-friendly interaction zones",
    ],
    solution:
      "Redesigned the checkout as a single-page experience with clear progress indicators. Added trust badges, security messaging, and transparent pricing throughout. Introduced address auto-complete and saved payment methods for returning customers.",
    results: [
      "Cart abandonment reduced from 73% to 41%",
      "Mobile conversion rate increased by 127%",
      "Average order value increased by 18%",
      "Guest checkout adoption reached 45% of all purchases",
    ],
  },
  {
    slug: "saas-onboarding",
    title: "SaaS Onboarding Reimagined",
    description:
      "Creating an onboarding experience that transforms new users into power users through progressive education.",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop",
    tags: ["Product Design", "User Onboarding", "B2B"],
    overview:
      "A B2B project management tool had strong features but struggled with user retention. New users weren't discovering the platform's most valuable capabilities.",
    role: "Product Designer",
    timeline: "4 months",
    problem:
      "Only 23% of trial users completed their first project. The learning curve was steep, and users felt overwhelmed by the feature set without understanding how each tool could benefit their workflow.",
    process: [
      "Mapped the 'aha moments' through analysis of power user behavior",
      "Designed personalized onboarding paths based on user roles and goals",
      "Created interactive tutorials that teach through doing",
      "Developed an empty state strategy that guides users naturally",
      "Built a progressive feature disclosure system",
    ],
    solution:
      "Introduced a 'first project wizard' that walks users through core features while helping them accomplish real work. Added contextual tooltips, a searchable help center, and milestone celebrations to maintain engagement.",
    results: [
      "Trial-to-paid conversion increased from 8% to 19%",
      "First project completion rate reached 67%",
      "Time to value reduced from 14 days to 3 days",
      "Support tickets for new users decreased by 54%",
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug)
}

export function getAdjacentCaseStudies(slug: string): {
  previous: CaseStudy | null
  next: CaseStudy | null
} {
  const currentIndex = caseStudies.findIndex((study) => study.slug === slug)

  return {
    previous: currentIndex > 0 ? caseStudies[currentIndex - 1] : null,
    next:
      currentIndex < caseStudies.length - 1
        ? caseStudies[currentIndex + 1]
        : null,
  }
}
