// ── PERSONAL ─────────────────────────────────────────────────────
export const personal = {
  name: 'Raghav',
  location: 'India',
  email: 'raghavchauhan1706@gmail.com',          // 🔧 update this
  portfolioUrl: 'raghav.vercel.app',  // 🔧 update once deployed
  roles: [
    'Full Stack Developer',
    'React Developer',
    'MERN Stack Dev',
    'Problem Solver',
  ],
  socials: {
    github:    'https://github.com/Rawgev',        // 🔧 update
    instagram: 'https://www.instagram.com/bhonduraghav/',     // 🔧 update
  },
}

// ── TECH STACK (about section pills) ─────────────────────────────
export const techStack = [
  'MongoDB', 'React.js', 'Express', 'Node.js', 'JavaScript',
]

// ── SKILLS ORBIT ─────────────────────────────────────────────────
export const skills = [
  // orbit 1 — violet
  { label: 'React',      variant: 'violet', x:    0, y: -100 },
  { label: 'Node.js',    variant: 'violet', x:  100, y:    0 },
  { label: 'Express',    variant: 'violet', x:    0, y:  100 },
  { label: 'MongoDB',    variant: 'violet', x: -100, y:    0 },
  // orbit 2 — pink
  { label: 'REST APIs',  variant: 'pink',   x: -155, y:    0 },
  { label: 'Git',        variant: 'pink',   x: -110, y:  110 },
  { label: 'Tailwind',   variant: 'pink',   x:    0, y: -155 },
  // orbit 3 — teal
  { label: 'Docker',     variant: 'teal',   x:  142, y: -142 },
  { label: 'Vercel',     variant: 'teal',   x:  200, y:    0 },
  { label: 'Postman',    variant: 'teal',   x: -200, y:    0 },
  { label: 'VS Code',    variant: 'teal',   x:    0, y:  200 },
  { label: 'Linux',      variant: 'teal',   x: -142, y: -142 },
]

// ── PROJECTS ─────────────────────────────────────────────────────
export const projects = [
  {
    id: 'mern-todo',
    type: 'mern',
    title: 'MERN Todo App',
    subtitle: 'Task Manager',
    description: 'A full-stack todo app built with the MERN stack. Create, update, delete and manage tasks with a clean UI and persistent MongoDB storage.',
    url: 'mern-todo-app-sable-five.vercel.app',
    liveLink: 'https://mern-todo-app-sable-five.vercel.app',
    techIcons: ['Re', 'Nd', 'Ex', 'Mg'],
  },
  {
    id: 'portfolio',
    type: 'portfolio',
    title: 'Personal Portfolio',
    subtitle: 'This Website',
    description: 'My personal developer portfolio built with React. Features scroll animations, an orbiting skills section, typewriter effects and a dark violet aesthetic.',
    url: 'raghav.vercel.app',           // 🔧 update
    liveLink: '#',                       // 🔧 update once deployed
    techIcons: ['Re', 'Tw', 'Vt', 'Js'],
    floatTags: ['React', 'Tailwind', 'Vite', 'CSS'],
  },
]

// ── EXPERIENCE ───────────────────────────────────────────────────
export const experience = [
  {
    id: 'soft7',
    title: 'web developer intern',
    company: 'SOFT7 Technology',
    type: 'Remote',
    period: 'Feb 2026 – Apr 2026',
    badge: 'Web Dev',
    bullets: [
      'Worked as a Web Developer on a CRM (Customer Relationship Management) tool',
      'Developed responsive and user-friendly frontend components',
      'Integrated REST APIs to handle dynamic data and backend communication',
      'Implemented features like customer data management and lead tracking',
      'Improved dashboard UI for better data visualization and user experience',
      'Collaborated with team members to enhance functionality and fix bugs',
      'Ensured code quality by writing clean, maintainable, and scalable code',
      'Gained hands-on experience in debugging and performance optimization',
    ],
  },
]
