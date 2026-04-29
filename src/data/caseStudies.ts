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
    href: '/Personal/case-studies/scandalous/',
    pageTitle: 'Scandalous — Case Study',
    breadcrumb: 'Scandalous',
    title: 'Scandalous — Brand system, packaging, and multi-state GTM',
    subtitle:
      'Nine years building a cannabis brand from identity through multi-state licensing. Full ownership of brand strategy, visual system, packaging production, investor materials, and go-to-market across five states.',
    hero: { placeholder: '[Hero image — brand campaign, packaging lineup, or flagship visual]' },
    preview: { placeholder: '[Scandalous brand preview]' },
    tags: ['Brand strategy', 'Packaging', 'GTM', 'Regulated CPG'],
    filterTags: ['brand', 'gtm'],
    industry: 'Regulated cannabis',
    navTag: 'Brand · GTM',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'pocn',
    href: '/Personal/case-studies/pocn/',
    pageTitle: 'POCN — Case Study',
    breadcrumb: 'POCN',
    title: 'Driving Efficiency in Programmatic Media for Regulated Healthcare',
    subtitle:
      'Managed $1.7M+ in pharmaceutical media across 30+ concurrent HCP campaigns — driving compounding efficiency gains while consistently hitting contracted KPIs in a regulated environment.',
    hero: { src: '/Personal/Images/POCN/pocn-cs-gfx-1.jpg', alt: 'POCN case study graphic' },
    preview: { src: '/Personal/Images/POCN/pocn-cs-gfx-2.jpg', alt: 'POCN case study preview' },
    tags: ['Performance', 'Healthcare', 'Programmatic', 'HCP Marketing'],
    filterTags: ['performance'],
    industry: 'Healthcare · Pharma',
    navTag: 'Performance · Healthcare',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'sigil',
    href: '/Personal/case-studies/sigil/',
    pageTitle: 'SIGIL — Case Study',
    breadcrumb: 'SIGIL',
    title: 'Zero-to-launch brand and product system for a Kickstarter-funded tabletop game',
    subtitle:
      'Built the visual identity, board system, packaging, and production-ready assets for a strategy dueling game that raised $22K+ on Kickstarter at 303% of goal.',
    hero: { src: '/Personal/Images/Sigil/sigil-cs-gfx-1.jpg', alt: 'SIGIL case study graphic' },
    preview: { src: '/Personal/Images/Sigil/sigil-cs-gfx-2.jpg', alt: 'SIGIL case study preview' },
    tags: ['Brand Identity', 'Packaging', 'Product Design', 'Tabletop'],
    filterTags: ['brand', 'design'],
    industry: 'Brand Identity · Product Design',
    navTag: 'GTM · Brand',
  },
  {
    slug: 'kraft-heinz',
    href: '/Personal/case-studies/kraft-heinz/',
    pageTitle: 'Kraft Heinz / MiO — Case Study',
    breadcrumb: 'Kraft Heinz / MiO',
    title: "Rebuilding MiO's digital shelf into a conversion system",
    subtitle:
      'Led the digital shelf transformation for MiO — rebuilding UX and multi-channel creative into a unified conversion system that contributed to measurable Amazon sales lift.',
    hero: { src: '/Personal/Images/MiO/mio-cs-gfx-1.jpg', alt: 'MiO digital shelf case study graphic' },
    preview: { src: '/Personal/Images/MiO/mio-cs-gfx-2.jpg', alt: 'MiO digital shelf preview' },
    tags: ['CPG', 'eCommerce', 'Creative Direction', 'Enterprise'],
    filterTags: ['design'],
    industry: 'CPG · Enterprise eCommerce',
    navTag: 'Design · CPG',
  },
  {
    slug: 'triax',
    href: '/Personal/case-studies/triax/',
    pageTitle: 'Triax — Case Study',
    breadcrumb: 'Triax',
    title: 'B2B SaaS Messaging & Demand Gen Overhaul for Energy Enterprise Prospects',
    subtitle:
      'Rebuilt technical messaging, implemented Salesforce and Pardot workflows, and helped move Hess and Shell into late-stage enterprise sales conversations during a five-month turnaround before a company-wide RIF.',
    hero: { src: '/Personal/Images/Triax/triax-cs-gfx-1.jpg', alt: 'Triax case study graphic' },
    preview: { src: '/Personal/Images/Triax/triax-cs-gfx-2.jpg', alt: 'Triax case study preview' },
    tags: ['B2B SaaS', 'Content', 'Demand Gen', 'Enterprise'],
    filterTags: ['performance', 'gtm'],
    industry: 'B2B SaaS · Demand Gen',
    navTag: 'B2B SaaS · Demand Gen',
  },
  {
    slug: 'infinity',
    href: '/Personal/case-studies/infinity/',
    pageTitle: 'Infinity — Case Study',
    breadcrumb: 'Infinity',
    title: 'Infinity — Licensed CPG brand direction and packaging at scale',
    subtitle:
      'Creative Director at Infinity Lifestyle Brands. Led brand direction and packaging across a $10M+ licensed CPG portfolio spanning Disney, MLBPA, and Viacom IP — reconciling licensor guidelines with a coherent brand aesthetic across 50+ SKUs.',
    hero: { placeholder: '[Infinity — licensed CPG packaging lineup]' },
    preview: { placeholder: '[Infinity preview]' },
    tags: ['Brand', 'Licensing', 'CPG', 'Packaging'],
    filterTags: ['brand', 'design'],
    industry: 'Licensed CPG',
    navTag: 'Brand · Licensing',
  },
  {
    slug: 'ark',
    href: '/Personal/case-studies/ark/',
    pageTitle: 'Ark of the Covenant — Case Study',
    breadcrumb: 'Ark of the Covenant',
    title: 'Ark of the Covenant — Independent artist brand built from zero',
    subtitle:
      'Eight years founding and operating an independent music project. 350+ live shows, 2 distribution deals, 20K+ followers, 100K+ streams, and a Mesa/Boogie endorsement — all self-built across brand, booking, production, and audience.',
    hero: { placeholder: '[Ark of the Covenant — tour and album artwork]' },
    preview: { placeholder: '[Ark of the Covenant preview]' },
    tags: ['Brand', 'GTM', 'Music', 'Independent'],
    filterTags: ['brand', 'gtm'],
    industry: 'Music · Independent',
    navTag: 'Brand · GTM',
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
