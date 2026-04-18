import { useIsMobile } from '../../hooks/useIsMobile'
import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import MernCard from './MernCard'
import PortfolioCard from './PortfolioCard'
import { projects } from '../../data'

export default function Projects() {
  const isMobile = useIsMobile()
  return (
    <FadeSection>
      <section id="projects" style={{ padding: '5rem 3rem', maxWidth: 1180, margin: '0 auto' }}>
        <SectionLabel>A small selection of recent projects</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '1.2rem', marginTop: '1.5rem' }}>
          {projects.map(project => {
            if (project.type === 'mern')      return <MernCard      key={project.id} project={project} />
            if (project.type === 'portfolio') return <PortfolioCard key={project.id} project={project} />
            return null
          })}
        </div>
      </section>
    </FadeSection>
  )
}
