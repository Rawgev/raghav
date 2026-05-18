import FadeSection from '../ui/FadeSection'
import SectionLabel from '../ui/SectionLabel'
import { Floating3DCard } from '../ui/3d-card'
import { GlowCard } from '../ui/spotlight-card'
import { projects } from '../../data'

export default function Projects() {
  return (
    <FadeSection>
      <section id="projects" style={{ padding: '5rem 3rem', maxWidth: 1180, margin: '0 auto' }}>
        <SectionLabel>A small selection of recent projects</SectionLabel>

        <div className="mt-6 grid grid-cols-1 gap-8">
          {projects.map(project => (
            <GlowCard
              key={project.id}
              customSize
              glowColor={project.type === 'portfolio' ? 'purple' : 'blue'}
              className="w-full overflow-visible rounded-[18px] border-0 bg-transparent p-0 shadow-none"
            >
              <Floating3DCard project={project} />
            </GlowCard>
          ))}
        </div>
      </section>
    </FadeSection>
  )
}
