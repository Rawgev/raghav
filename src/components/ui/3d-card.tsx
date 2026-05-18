import { useRef } from 'react'
import type { MouseEvent } from 'react'
import type { Project } from '../../data'

interface Floating3DCardProps {
  project: Project
}

export function Floating3DCard({ project }: Floating3DCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia('(hover: none)').matches) return

    const card = cardRef.current
    if (!card) return

    const { left, top, width, height } = card.getBoundingClientRect()
    const x = event.clientX - left
    const y = event.clientY - top
    const rotateX = ((y - height / 2) / height) * 10
    const rotateY = ((x - width / 2) / width) * -10

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`
  }

  const handleMouseLeave = () => {
    if (!cardRef.current) return
    cardRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return (
    <div className="w-full" style={{ perspective: '1200px' }}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative overflow-hidden rounded-[18px] border border-violet-400/20 bg-[#100e1f] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] transition-transform duration-300 ease-out hover:border-violet-300/45 sm:p-5 md:p-7"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div style={{ transform: 'translateZ(54px)' }}>
            <p className="mb-3 break-all text-[0.68rem] font-semibold tracking-[0.12em] text-violet-300/60 sm:text-xs sm:tracking-[0.18em]">
              {project.url}
            </p>
            <h3 className="text-xl font-black italic leading-tight text-[#ede8ff] sm:text-2xl md:text-3xl">
              {project.title} - {project.subtitle}
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-6 text-[#a99dd6] md:text-base md:leading-7">
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.techIcons.map(tech => (
                <span
                  key={tech}
                  className="grid h-9 w-9 place-items-center rounded-full border border-violet-400/20 bg-violet-500/10 text-xs font-bold text-violet-200/75"
                >
                  {tech}
                </span>
              ))}
            </div>
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full justify-center rounded-sm bg-violet-400 px-5 py-3 text-sm font-bold text-[#080611] transition-colors hover:bg-violet-300 sm:w-auto"
              style={{ transform: 'translateZ(24px)' }}
            >
              Live Site
            </a>
          </div>

          <div
            className="relative min-h-[210px] overflow-hidden rounded-md border border-violet-300/20 bg-black/40 sm:min-h-[250px] md:min-h-[320px]"
            style={{ transform: 'translateZ(88px)' }}
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
              className={`h-full min-h-[210px] w-full opacity-90 transition duration-300 group-hover:scale-105 group-hover:opacity-100 sm:min-h-[250px] md:min-h-[320px] ${project.imageFit === 'contain'
                  ? 'object-contain bg-[#090611] p-2'
                  : 'object-cover object-top'
                }`} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#100e1f] via-[#100e1f]/25 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {(project.floatTags ?? project.techIcons).map(tag => (
                <span
                  key={tag}
                  className="rounded-sm border border-violet-300/25 bg-[#120b24]/80 px-3 py-1 text-xs font-semibold text-violet-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
