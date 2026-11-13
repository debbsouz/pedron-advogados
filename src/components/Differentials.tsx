import { BookOpen, Clock, Lock, MessagesSquare, ShieldCheck, UserCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { differentials } from '@/config/site'

const iconMap: Record<string, LucideIcon> = {
  UserCheck,
  BookOpen,
  MessagesSquare,
  ShieldCheck,
  Lock,
  Clock,
}

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-cream-50 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                eyebrow="Diferenciais"
                title="Princípios que orientam a nossa atuação."
                description="A forma de trabalhar do escritório é definida por princípios permanentes, e não por promessas de resultado."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2">
              {differentials.map((item, index) => {
                const Icon = iconMap[item.icon] ?? ShieldCheck

                return (
                  <Reveal key={item.id} delay={index * 50} className="bg-cream-50">
                    <article className="flex h-full flex-col p-8 transition-colors duration-500 hover:bg-cream-100 md:p-10">
                      <Icon size={24} strokeWidth={1.25} className="text-gold-600" aria-hidden="true" />
                      <h3 className="mt-8 font-serif text-xl text-ink-900 md:text-2xl">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-ink-600/80">{item.description}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
