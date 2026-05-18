// ── TYPES ─────────────────────────────────────────────────────────

export type SkillVariant = 'violet' | 'pink' | 'teal'

export interface Skill {
  label: string
  variant: SkillVariant
  x: number
  y: number
}

export type ProjectType = 'mern' | 'portfolio'

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
    'React Developer',
    'MERN Stack Dev',
    'Problem Solver',
  ],
  socials: {
    github:    'https://github.com/Rawgev',                       // 🔧 update
    instagram: 'https://www.instagram.com/bhonduraghav/',        // 🔧 update
    linkedin: 'https://www.linkedin.com/in/raghav-chauhan-012498404' // 🔧 update
  },
}

// ── TECH STACK (about section pills) ─────────────────────────────
export const techStack: string[] = [
  'MongoDB', 'React.js', 'Express', 'Node.js', 'JavaScript', 'TypeScript'
]

// ── SKILLS ORBIT ─────────────────────────────────────────────────
export const skills: Skill[] = [
  // orbit 1 — violet
  { label: 'React',     variant: 'violet', x:    0, y: -100 },
  { label: 'Node.js',   variant: 'violet', x:  100, y:    0 },
  { label: 'Express',   variant: 'violet', x:    0, y:  100 },
  { label: 'MongoDB',   variant: 'violet', x: -120, y:    0 },

  // orbit 2 — pink
  { label: 'REST APIs', variant: 'pink',   x: -190, y:    0 },
  { label: 'Git',       variant: 'pink',   x: -120, y:  120 },
  { label: 'Tailwind',  variant: 'pink',   x:    0, y: -165 },

  // orbit 3 — teal
  { label: 'Docker',    variant: 'teal',   x:  150, y: -145 },
  { label: 'Vercel',    variant: 'teal',   x:  220, y:    0 },
  { label: 'Postman',   variant: 'teal',   x: -250, y:    0 },
  { label: 'VS Code',   variant: 'teal',   x:    0, y:  220 },
  { label: 'Linux',     variant: 'teal',   x: -150, y: -145 },
]
// ── PROJECTS ─────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'mern-todo',
    type: 'mern',
    title: 'MERN Todo App',
    subtitle: 'Task Manager',
    description: 'A full-stack todo app built with the MERN stack. Create, update, delete and manage tasks with a clean UI and persistent MongoDB storage.',
    url: 'mern-todo-app-sable-five.vercel.app',
    liveLink: 'https://mern-todo-app-sable-five.vercel.app',
    techIcons: ['Re', 'Nd', 'Ex', 'Mg'],
    floatTags:  ['React', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/projects/todolist.png',
    imageFit: 'cover'
  },
  {
    id: 'portfolio',
    type: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'This Website',
    description: 'My personal developer portfolio built with React. Features scroll animations, an orbiting skills section, typewriter effects and a dark violet aesthetic.',
    url: 'raghav-lac.vercel.app',           // 🔧 update
    liveLink: 'https://raghav-lac.vercel.app/', // 🔧 update once deployed
    techIcons: ['Re', 'Tw', 'Vt', 'Ts'],
    floatTags: ['React', 'Tailwind', 'Vite', 'CSS'],
     image: '/projects/portfolio.png',
     imageFit: 'cover'
  },
  {
    id: 'ai-crm-hcp-module',
    type: 'mern',
    title: 'AI CRM HCP Module',
    subtitle: 'Healthcare CRM',
    description: 'An AI-powered CRM module for managing HCP data, improving customer workflows and supporting smarter relationship management through a clean dashboard experience.',
    url: 'ai-crm-hcp-module.vercel.app',
    liveLink: 'https://ai-crm-hcp-module.vercel.app',
    techIcons: ['Py', 'Js', 'Cs', 'Ht'],
    floatTags: ['Python', 'JavaScript', 'CSS', 'HTML'],
    image: '/projects/crm.png',
    imageFit: 'cover'
  },
  {
  id: 'task-manager-app',
  type: 'mern',
  title: 'Task Manager App',
  subtitle: 'Productivity Management',
  description: 'A modern MERN-based task management application that helps users organize tasks, manage workflows, track progress, and improve productivity through a responsive and clean dashboard interface.',
  url: 'your-task-manager-link.vercel.app',
  liveLink: 'https://task-manager-cyan-rho.vercel.app/',
  techIcons: ['Mn', 'Js', 'Tw', 'Re'],
  floatTags: ['MongoDB', 'JavaScript', 'Tailwind', 'React'],
  image: '/projects/task-manager.png',
  imageFit: 'contain'
},
]

// ── EXPERIENCE ───────────────────────────────────────────────────
export const experience: ExperienceItem[] = [
  {
    id: 'soft7',
    title: 'web developer intern',
    company: 'SOFT7 Technology',
    type: 'Remote',
    period: 'Feb 2026 – Apr 2026',
    badge: 'Web Dev',
    bullets:[
  'Worked on frontend development for a CRM tool',
  'Built responsive UI components and integrated REST APIs',
  'Implemented customer and lead management features',
  'Improved dashboard UI and fixed bugs',
  'Maintained clean and scalable codebase',
  'Gained experience in debugging and optimization',
],
  },
]
