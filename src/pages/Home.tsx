import { useOutletContext } from 'react-router-dom'
import type { LayoutContext } from '@/components/Layout'
import { useSeo } from '@/lib/useSeo'
import { seo } from '@/config/site'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { PracticeAreas } from '@/components/PracticeAreas'
import { Units } from '@/components/Units'
import { RegionalAttendance } from '@/components/RegionalAttendance'
import { AerialGallery } from '@/components/AerialGallery'
import { Differentials } from '@/components/Differentials'
import { Team } from '@/components/Team'
import { Contact } from '@/components/Contact'

export function Home() {
  const { resolveHref } = useOutletContext<LayoutContext>()

  useSeo({ title: seo.home.title, description: seo.home.description, path: '/' })

  return (
    <>
      <Hero resolveHref={resolveHref} />
      <About />
      <PracticeAreas />
      <Units resolveHref={resolveHref} />
      <RegionalAttendance resolveHref={resolveHref} />
      <AerialGallery />
      <Differentials />
      <Team />
      <Contact />
    </>
  )
}
