import { Info } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { PendingTag } from '@/components/ui/PendingTag'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { regionalAttendance, showPlaceholders } from '@/config/site'

type RegionalAttendanceProps = {
  /** Ajusta os links de âncora conforme a rota atual. */
  resolveHref: (hash: string) => string
}

/**
 * Apresentação institucional do atendimento regional em Capão da Canoa.
 *
 * IMPORTANTE: Capão da Canoa NÃO é uma unidade física do escritório.
 * Por isso esta seção não exibe endereço, fotografia de filial ou telefone
 * específico — o atendimento é realizado diretamente pelo advogado, por
 * telefone, e o canal dedicado ainda não foi confirmado pelo escritório.
 */
export function RegionalAttendance({ resolveHref }: RegionalAttendanceProps) {
  return (
    <section id="capao-da-canoa" className="bg-cream-200 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow={regionalAttendance.eyebrow}
            title={regionalAttendance.title}
            align="center"
          />

          <p className="mt-6 text-pretty text-base leading-relaxed text-ink-600/85 md:text-lg">
            {regionalAttendance.description}
          </p>

          <div className="mt-10 inline-flex items-start gap-3 border border-ink-900/12 bg-cream-100 px-6 py-5 text-left">
            <Info size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
            <p className="max-w-lg text-sm leading-relaxed text-muted">{regionalAttendance.disclaimer}</p>
          </div>

          {showPlaceholders && !regionalAttendance.phone ? (
            <div className="mt-6 flex justify-center">
              <PendingTag label="Canal telefônico da região a confirmar" />
            </div>
          ) : null}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to={resolveHref('#contato')} variant="gold" size="lg">
              Falar com o escritório
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
