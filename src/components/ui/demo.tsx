import { BeamsBackground } from '@/components/ui/beams-background'
import { GlowCard } from '@/components/ui/spotlight-card'

export function BeamsBackgroundDemo() {
  return <BeamsBackground />
}

export function Default() {
  return (
    <div className="flex h-screen w-screen flex-row items-center justify-center gap-10">
      <GlowCard />
      <GlowCard />
      <GlowCard />
    </div>
  )
}
