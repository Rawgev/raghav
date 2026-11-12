// ── TYPES ─────────────────────────────────────────────────────────

export type SkillVariant = 'violet' | 'pink' | 'teal'

export interface Skill {
  label: string
  variant: SkillVariant
  x: number
  y: number
}

export type ProjectType = 'mern' | 'portfolio' | 'fullstack' | 'ai-fullstack'

export interface Project {
  id: string
  type: ProjectType
  title: string
  subtitle: string
  description: string
  url: string
  liveLink: string
  techIcons: string[]
  floatTags?: string[]
  image: string
  imageFit?: 'cover' | 'contain'

}

export interface ExperienceItem {
  id: string
  title: string
  company: string
  type: string
  period: string
  badge: string
  subtitle?: string
  link?: string
  bullets: string[]
}

export interface Socials {
  github: string
  instagram: string
  linkedin: string
}

export interface Personal {
  name: string
  location: string
  email: string
  portfolioUrl: string
  roles: string[]
  socials: Socials
}

// ── PERSONAL ─────────────────────────────────────────────────────
export const personal: Personal = {
  name: 'Raghav',
  location: 'India',
  email: 'raghavchauhan1706@gmail.com',         // 🔧 update this
  portfolioUrl: 'raghav-lac.vercel.app',        // 🔧 update once deployed
  roles: [
    'Full Stack Developer',
    'Next.js & React Developer',
    'Software Developer',
    'AI Systems Developer',
  ],
  socials: {
    github: 'https://github.com/Rawgev',                       // 🔧 update
    instagram: 'https://www.instagram.com/bhonduraghav/',        // 🔧 update
    linkedin: 'https://www.linkedin.com/in/raghav-chauhan-012498404' // 🔧 update
  },
}

// ── TECH STACK (about section pills) ─────────────────────────────
export const techStack: string[] = [
  'React.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'
]

// ── SKILLS ORBIT ─────────────────────────────────────────────────
export const skills: Skill[] = [
  // orbit 1 (inner) — violet
  { label: 'React', variant: 'violet', x: 0, y: -100 },
  { label: 'Next.js', variant: 'violet', x: 105, y: 0 },
  { label: 'Node.js', variant: 'violet', x: 0, y: 100 },
  { label: 'TypeScript', variant: 'violet', x: -105, y: 0 },

  // orbit 2 (outer diagonal) — pink & teal
  { label: 'PostgreSQL', variant: 'pink', x: 110, y: -110 },
  { label: 'Tailwind', variant: 'pink', x: 110, y: 110 },
  { label: 'Git', variant: 'teal', x: -110, y: 110 },
  { label: 'MongoDB', variant: 'teal', x: -110, y: -110 },
]
// ── PROJECTS ─────────────────────────────────────────────────────
export const projects: Project[] = [

  {
    id: 'kiroku',
    type: 'mern',
    title: 'Kiroku',
    subtitle: 'Anime & Manga',
    description: 'A full-stack, responsive anime & manga tracking platform built with TypeScript, React 18, Express, and MongoDB, integrating GraphQL (AniList) and REST (MangaDex) APIs.',
    url: 'kirokuvault.vercel.app',
    liveLink: 'https://kirokuvault.vercel.app',
    techIcons: ['Re', 'Ts', 'Nd', 'Ex', 'Mg', 'Gr', 'R'],
    floatTags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'GraphQL', 'REST APIs'],
    image: '/projects/kiroku.png',
    imageFit: 'contain'
  },
  {
    id: 'portfolio',
    type: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'This Website',
    description: 'My personal developer portfolio built with React. Features scroll animations, an orbiting skills section, typewriter effects and a dark violet aesthetic.',
    url: 'rawgev.vercel.app',
    liveLink: 'https://rawgev.vercel.app/',
    techIcons: ['Re', 'Tw', 'Vt', 'Ts'],
    floatTags: ['React', 'Tailwind', 'Vite', 'CSS'],
    image: '/projects/portfolio.png',
    imageFit: 'cover'
  },
  {
    id: 'ai-crm-hcp-module',
    type: 'fullstack',
    title: 'Pharmaxora',
    subtitle: 'AI CRM HCP Module',
    description: 'An enterprise-grade, AI-first Healthcare Professional (HCP) CRM module featuring conversational LangGraph.js agents for compliant interaction logging, human-in-the-loop review, Next.js App Router, and PostgreSQL via Prisma.',
    url: 'pharmaxora.vercel.app',
    liveLink: 'https://pharmaxora.vercel.app/',
    techIcons: ['Nx', 'Ts', 'Lg', 'Pg', 'Pr', 'Tw'],
    floatTags: ['Next.js', 'TypeScript', 'LangGraph.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    image: '/projects/crm.png',
    imageFit: 'contain'
  },
]


// ── EXPERIENCE ───────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    id: 'soft7-dev',
    title: 'Full Stack Developer',
    company: 'Soft7 Technology',
    type: 'Remote',
    period: 'May 2026 – November 2026',
    badge: 'Full Stack',
    subtitle: 'Developed Collabix for the company as an integrated web platform and desktop application',
    link: 'https://collabix.soft7.in',
    bullets: [
      'Built a full-stack project management platform using Next.js 15, PostgreSQL, and secure authentication.',
      'Designed 7 PostgreSQL migrations covering projects, tasks, sprints, multi-tenancy, RBAC, and activity tracking.',
      'Implemented secure dual-token authentication with CSRF protection, bcrypt hashing, and fine-grained RBAC middleware for permission-based API access.',
      'Built dashboard aggregation services for real-time project progress, workload, and activity analytics.',
      'Developed a production-ready Electron desktop companion with background screen capture, Web Workers, and optimized JPEG streaming.',
    ],
  },
  {
    id: 'soft7-bde',
    title: 'Business Development Executive',
    company: 'Soft7 Technology',
    type: 'Remote',
    period: 'February 2026 – May 2026',
    badge: 'Tech Sales',
    subtitle: 'Technical sales for WhatsApp Business API and business messaging solutions',
    bullets: [
      'Consulted business owners on WhatsApp Business API integration, pricing, and use cases, translating technical capabilities into clear business value.',
      'Conducted 60+ daily outreach calls to identify and qualify potential clients.',
      'Demonstrated WhatsApp Business API workflows, including bulk messaging, automation, and Meta-compliant messaging practices.',
    ],
  },
]
