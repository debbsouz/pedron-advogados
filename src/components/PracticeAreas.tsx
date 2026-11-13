import {
  Building2,
  FileCheck2,
  HeartHandshake,
  Landmark,
  Scale,
  Users,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PendingTag } from '@/components/ui/PendingTag'
import { practiceAreas, practiceAreasPlaceholderCount } from '@/config/site'

const iconMap: Record<string, LucideIcon> = {
  Scale,
  Building2,
  Users,
  HeartHandshake,
  Landmark,
  FileCheck2,
}

/**
 * Seção "Áreas de Atuação".
 *
 * As áreas reais ainda não foram validadas pelo escritório. A estrutura visual
 * permanece preparada: enquanto `practiceAreas` estiver vazio, são exibidos
 * espaços reservados identificados como "a confirmar" — sem apresentar
 * especialidades não confirmadas como se fossem definitivas.
 */
export function PracticeAreas() {
  const hasAreas = practiceAreas.length > 0
  const makePlaceholders = () =>
    Array.from({ length: practiceAreasPlaceholderCount }, (_, index) => ({
      id: `area-a-confirmar-${index}`,
      title: 'Área a confirmar',
      summary: 'Especialidade a validar',
      description:
        'Espaço reservado para a área de atuação correspondente, a ser informada após validação pelo escritório.',
      icon: 'Scale',
    }))

  const items = hasAreas ? practiceAreas : makePlaceholders()

  return (
    <section id="areas" className="bg-ink-950 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Áreas de Atuação"
            title="Atuação jurídica com critério técnico."
            description="O PEDRON ADVOGADOS atua de forma consultiva e contenciosa, orientando cada demanda a partir das particularidades do caso e do contexto de cada cliente."
            tone="dark"
            className="lg:max-w-2xl"
          />
          {!hasAreas ? <PendingTag tone="dark" label="Áreas a confirmar" /> : null}
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden border border-cream-50/10 bg-cream-50/10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((area, index) => {
            const Icon = iconMap[area.icon] ?? Scale

            return (
              <Reveal
                key={area.id}
                delay={index * 70}
                className="group relative bg-ink-950 transition-colors duration-500 hover:bg-ink-900"
              >
                <article className="flex h-full flex-col p-8 md:p-10">
                  <div className="flex items-start justify-between">
                    <Icon
                      size={26}
                      strokeWidth={1.25}
                      className="text-gold-500/70 transition-colors duration-500 group-hover:text-gold-400"
                      aria-hidden="true"
                    />
                    <span className="font-serif text-sm text-cream-50/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mt-10 font-serif text-2xl text-cream-50 md:text-[1.75rem]">{area.title}</h3>
                  <p className="mt-3 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-gold-600">
                    {area.summary}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-cream-50/60">{area.description}</p>

                  <span
                    aria-hidden="true"
                    className="mt-8 block h-px w-10 bg-gold-500/50 transition-all duration-500 group-hover:w-20 group-hover:bg-gold-500"
                  />

                  {!hasAreas ? (
                    <PendingTag tone="dark" label="Conteúdo a confirmar" className="mt-6 self-start" />
                  ) : null}
                </article>
              </Reveal>
            )
          })}
        </div>

        {!hasAreas ? (
          <Reveal className="mt-12">
            <p className="mx-auto max-w-2xl border-l-2 border-gold-500/60 bg-ink-900/60 px-5 py-4 text-sm leading-relaxed text-cream-50/55">
              As áreas de atuação serão publicadas após validação pelo escritório. Configure a lista
              em
              <span className="mx-1 font-mono text-xs text-gold-400">src/config/site.ts</span>
              (constante <span className="font-mono text-xs text-gold-400">practiceAreas</span>).
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
