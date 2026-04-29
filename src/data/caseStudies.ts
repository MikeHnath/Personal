export interface CaseStudyThumb {
  src?: string;
  alt?: string;
  placeholder?: string;
}

export interface CaseStudy {
  slug: string;
  href: string;
  client: string;
  industry: string;
  outcome: string;
  tags: string[];
  cardTitle: string;
  cardThumb: CaseStudyThumb;
  homeTitle: string;
  homeThumb?: string;
  navTitle: string;
  navTag: string;
  isFeaturedOnIndex?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'scandalous',
    href: '/Personal/case-studies/scandalous/',
    client: 'THIS · 9-year client',
    industry: 'Cannabis · Regulated consumer',
    outcome: '$500K+ raised · 11–13 SKUs · 5 states · anchor retainer',
    tags: ['brand', 'gtm'],
    cardTitle: 'Built a regulated CPG brand from concept through multi-state commercialization — investor materials, packaging, and go-to-market assets',
    cardThumb: { placeholder: '[Scandalous brand visual]' },
    homeTitle: 'Scandalous — Brand system, packaging, and multi-state GTM',
    navTitle: 'Scandalous — Brand system',
    navTag: 'Brand · GTM',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'pocn',
    href: '/Personal/case-studies/pocn/',
    client: 'POCN · 2022–2024',
    industry: 'Healthcare · Pharma',
    outcome: '$1.7M+ managed · 30 concurrent campaigns · 50+ pharma therapies',
    tags: ['performance'],
    cardTitle: 'Migrated pharma media operations to a proprietary platform while managing $1.7M+ in campaign spend across 30 concurrent campaigns — driving significant annual cost savings',
    cardThumb: { src: '/Personal/Images/POCN/pocn-cs-gfx-2.jpg', alt: '' },
    homeTitle: 'Pharma media management — DSP migration and campaign ops at scale',
    homeThumb: '/Personal/Images/POCN/pocn-cs-gfx-2.jpg',
    navTitle: 'POCN — Pharma media',
    navTag: 'Performance · Healthcare',
    isFeaturedOnIndex: true,
  },
  {
    slug: 'sigil',
    href: '/Personal/case-studies/sigil/',
    client: 'Pine Island Games · 2022–2023',
    industry: 'Brand Identity · Packaging · Product Design',
    outcome: '$22K+ funded · 303% of goal · 347 backers',
    tags: ['brand', 'design'],
    cardTitle: 'SIGIL — Brand identity & product design for a Kickstarter-funded tabletop launch',
    cardThumb: { src: '/Personal/Images/Sigil/sigil-3d-board.webp', alt: 'SIGIL 3D board render' },
    homeTitle: 'SIGIL — Zero-to-launch GTM for original IP',
    navTitle: 'SIGIL — GTM for original IP',
    navTag: 'GTM · Brand',
  },
  {
    slug: 'kraft-heinz',
    href: '/Personal/case-studies/kraft-heinz/',
    client: 'Kraft Heinz via Imaginary · 2020–2021',
    industry: 'CPG · eCommerce',
    outcome: '~8% Amazon lift · 800+ assets · 30 brands · 15 A+ pages',
    tags: ['design'],
    cardTitle: 'Aligned digital shelf strategy with performance-driven creative — contributing to ~8% Amazon sales lift for MiO',
    cardThumb: { src: '/Personal/Images/MiO/mio-cs-gfx-2.jpg', alt: 'MiO digital shelf preview' },
    homeTitle: 'Kraft Heinz — Digital shelf and eComm creative',
    navTitle: 'Kraft Heinz — Digital shelf',
    navTag: 'Design · CPG',
  },
  {
    slug: 'triax',
    href: '/Personal/case-studies/triax/',
    client: 'Triax Technologies · 2021–2022',
    industry: 'B2B SaaS · Demand Gen',
    outcome: '300% webinar growth · Hess & Shell advanced · Salesforce + Pardot from zero',
    tags: ['performance', 'gtm'],
    cardTitle: 'Rebuilt technical messaging and implemented marketing automation to help move Fortune 50 energy prospects into late-stage sales conversations.',
    cardThumb: { src: '/Personal/Images/Triax/triax-cs-gfx-2.jpg', alt: 'Triax enterprise content' },
    homeTitle: 'Triax — B2B SaaS demand gen and enterprise sales enablement',
    homeThumb: '/Personal/Images/Triax/triax-cs-gfx-2.jpg',
    navTitle: 'Triax — B2B SaaS demand gen',
    navTag: 'B2B SaaS · Demand Gen',
  },
  {
    slug: 'infinity',
    href: '/Personal/case-studies/infinity/',
    client: 'Infinity Lifestyle Brands · 2018–2019',
    industry: 'CPG · Licensed consumer',
    outcome: '$10M+ licensing ecosystem · 50+ SKUs · Disney, MLBPA, Viacom',
    tags: ['brand', 'design'],
    cardTitle: 'Rebuilt product positioning and sales materials to transform a limited licensing portfolio into a scalable partnership engine',
    cardThumb: { placeholder: '[Infinity licensed brands]' },
    homeTitle: 'Infinity — Licensed CPG brand direction and packaging at scale',
    navTitle: 'Infinity — Licensed CPG',
    navTag: 'Brand · Licensing',
  },
  {
    slug: 'ark',
    href: '/Personal/case-studies/ark/',
    client: 'Ark of the Covenant · 2008–2016',
    industry: 'Music · Independent',
    outcome: '350+ shows · 20K+ followers · 2 distribution deals · Mesa/Boogie endorsement',
    tags: ['brand', 'gtm'],
    cardTitle: 'Built an independent brand from zero to a nationally touring act through full ownership of product, brand, operations, and growth',
    cardThumb: { placeholder: '[Ark of the Covenant]' },
    homeTitle: 'Ark of the Covenant — Independent artist brand and operations',
    navTitle: 'Ark of the Covenant — Independent artist',
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
