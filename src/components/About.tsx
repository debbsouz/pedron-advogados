import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Media } from '@/components/ui/Media'
import { PendingTag } from '@/components/ui/PendingTag'
import { about, images, showPlaceholders } from '@/config/site'

export function About() {
  const [firstImage, secondImage] = images.office

  return (
    <section id="escritorio" className="bg-cream-100 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Composição de imagens */}
          <div className="lg:col-span-5">
            <Reveal className="space-y-5">
              <div className="relative aspect-4/5 overflow-hidden">
                <Media
                  src={firstImage}
                  alt="Ambiente institucional do PEDRON ADVOGADOS"
                  label="Fotografia institucional (ambiente de trabalho — sem identificar unidade)"
                />
              </div>
              <div className="grid grid-cols-5 gap-5">
                <div className="col-span-3 aspect-square overflow-hidden">
                  <Media
                    src={secondImage}
                    alt="Detalhe do ambiente de trabalho do escritório"
                    label="Detalhe institucional (arquitetura ou ambiente)"
                  />
                </div>
                <div className="col-span-2 flex flex-col justify-end border-l border-ink-900/10 pl-5">
                  <span className="font-serif text-4xl text-gold-600">P</span>
                  <span className="mt-2 font-sans text-[0.6rem] leading-relaxed uppercase tracking-[0.22em] text-muted">
                    Advocacia
                    <br />
                    institucional
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Texto institucional */}
          <div className="lg:col-span-7 lg:pl-6">
            <Reveal>
              <SectionHeading eyebrow={about.eyebrow} title={about.title} />

              <div className="mt-8 space-y-5">
                {about.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)} className="text-pretty text-base leading-relaxed text-ink-600/85">
                    {paragraph}
                  </p>
                ))}
              </div>

              {showPlaceholders ? (
                <div className="mt-8 border-l-2 border-gold-500/60 bg-cream-200/60 px-5 py-4">
                  <PendingTag label="Trajetória pendente" />
                  <p className="mt-2 text-sm leading-relaxed text-muted">{about.historyNote}</p>
                </div>
              ) : null}

              <dl className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-ink-900/10 bg-ink-900/10 sm:grid-cols-3">
                {about.highlights.map((item) => (
                  <div key={item.label} className="bg-cream-100 px-6 py-7">
                    <dt className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-gold-600">
                      {item.label}
                    </dt>
                    <dd className="mt-3 font-serif text-xl text-ink-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
