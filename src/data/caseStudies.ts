export interface CaseStudyHero {
  src?: string;
  alt?: string;
  placeholder?: string;
}

export interface CaseStudy {
  slug: string;
  href: string;
  pageTitle: string;
  breadcrumb: string;
  title: string;
  subtitle: string;
  hero: CaseStudyHero;
  preview: CaseStudyHero;
  tags: string[];
  filterTags: string[];
  industry: string;
  navTag: string;
  isFeaturedOnIndex?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'scandalous',
    href: '/case-studies/scandalous/',
    pageTitle: 'Scandalous — Case Study',
    breadcrumb: 'Scandalous',
    title: 'Brand architect for a cannabis chocolate startup.',
    subtitle:
      'Identity, packaging, custom chocolate molds, investor decks, and go-to-market across five regulated states, each with its own compliance gauntlet. $500K+ raised. 13+ SKUs on shelves. Nine years and counting.',
    hero: { src: '/Images/Scandalous/scandalous-cs-gfx-1.webp', alt: 'Scandalous case study graphic' },
    preview: { src: '/Images/Scandalous/scandalous-cs-gfx-2.webp', alt: 'Scandalous case study preview' },
    tags: ['Brand Development', 'Packaging', 'Product Commercialization', 'Regulated CPG', 'Cannabis'],
    filterTags: ['brand', 'gtm'],
    industry: 'Regulated Cannabis / Consumer CPG',
    navTag: 'Brand · GTM',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'kraft-heinz',
    href: '/case-studies/kraft-heinz/',
    pageTitle: 'Kraft Heinz / MiO — Case Study',
    breadcrumb: 'Kraft Heinz / MiO',
    title: "Rebuilding MiO's digital shelf into a conversion system",
    subtitle:
      'Led the digital shelf rebuild for MiO. UX and multi-channel creative consolidated into one conversion system that contributed to measurable Amazon sales lift.',
    hero: { src: '/Images/MiO/mio-cs-gfx-1.webp', alt: 'MiO digital shelf case study graphic' },
    preview: { src: '/Images/MiO/mio-cs-gfx-2.webp', alt: 'MiO digital shelf preview' },
    tags: ['CPG', 'eCommerce', 'Creative Direction', 'Enterprise'],
    filterTags: ['design'],
    industry: 'CPG · Enterprise eCommerce',
    navTag: 'Design · CPG',
  },
  {
    slug: 'pocn',
    href: '/case-studies/pocn/',
    pageTitle: 'POCN — Case Study',
    breadcrumb: 'POCN',
    title: 'Driving Efficiency in Programmatic Media for Regulated Healthcare',
    subtitle:
      'Managed $1.7M+ in pharmaceutical media across 30+ concurrent HCP campaigns. Compounding efficiency gains while consistently hitting contracted KPIs in a regulated environment.',
    hero: { src: '/Images/POCN/pocn-cs-gfx-1.webp', alt: 'POCN case study graphic' },
    preview: { src: '/Images/POCN/pocn-cs-gfx-2.webp', alt: 'POCN case study preview' },
    tags: ['Performance', 'Healthcare', 'Programmatic', 'HCP Marketing'],
    filterTags: ['performance'],
    industry: 'Healthcare · Pharma',
    navTag: 'Performance · Healthcare',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'infinity',
    href: '/case-studies/infinity/',
    pageTitle: 'Infinity — Case Study',
    breadcrumb: 'Infinity',
    title: 'Built the brand architecture and creative systems that unlocked $10M+ in licensing deals.',
    subtitle:
      'Created the naming strategy, brand identity, and packaging systems for two distinct brand lines, giving the sales team the creative foundation that supported $10M+ in partnerships with Disney, Nickelodeon, the MLBPA, and major sports franchises.',
    hero: { src: '/Images/Infinity/infinity-cs-gfx-1.webp', alt: 'Infinity Sports Water licensed CPG lineup' },
    preview: { src: '/Images/Infinity/infinity-cs-gfx-2.webp', alt: 'Infinity case study preview' },
    tags: ['Brand Architecture', 'Packaging', 'Licensed CPG', 'Sales Enablement'],
    filterTags: ['brand', 'design'],
    industry: 'Licensed Consumer Products',
    navTag: 'Brand · Licensing',
  },
  {
    slug: 'sigil',
    href: '/case-studies/sigil/',
    pageTitle: 'SIGIL — Case Study',
    breadcrumb: 'SIGIL',
    title: 'Zero-to-launch brand and product system for a Kickstarter-funded tabletop game',
    subtitle:
      'Built the visual identity, board system, packaging, and production-ready assets for a strategy dueling game that raised $22K+ on Kickstarter at 303% of goal.',
    hero: { src: '/Images/Sigil/sigil-cs-gfx-1.webp', alt: 'SIGIL case study graphic' },
    preview: { src: '/Images/Sigil/sigil-cs-gfx-2.webp', alt: 'SIGIL case study preview' },
    tags: ['Brand Identity', 'Packaging', 'Product Design', 'Tabletop'],
    filterTags: ['brand', 'design'],
    industry: 'Brand Identity · Product Design',
    navTag: 'GTM · Brand',
  },
  {
    slug: 'triax',
    href: '/case-studies/triax/',
    pageTitle: 'Triax — Case Study',
    breadcrumb: 'Triax',
    title: 'B2B SaaS Messaging & Demand Gen Overhaul for Energy Enterprise Prospects',
    subtitle:
      'Rebuilt technical messaging, implemented Salesforce and Pardot workflows, and helped move Hess and Shell into late-stage enterprise sales conversations during a five-month turnaround before a company-wide RIF.',
    hero: { src: '/Images/Triax/triax-cs-gfx-1.webp', alt: 'Triax case study graphic' },
    preview: { src: '/Images/Triax/triax-cs-gfx-2.webp', alt: 'Triax case study preview' },
    tags: ['B2B SaaS', 'Content', 'Demand Gen', 'Enterprise'],
    filterTags: ['performance', 'gtm'],
    industry: 'B2B SaaS · Demand Gen',
    navTag: 'B2B SaaS · Demand Gen',
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudyNeighbors(slug: string): { prev?: CaseStudy; next?: CaseStudy } {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  if (i === -1) return {};
  return {
    prev: i > 0 ? caseStudies[i - 1] : undefined,
    next: i < caseStudies.length - 1 ? caseStudies[i + 1] : undefined,
  };
}
