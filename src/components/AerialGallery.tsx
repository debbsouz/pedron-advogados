import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { images } from '@/config/site'

const aerialShots = [
  {
    id: 'cidreira',
    src: images.aerial.cidreira,
    caption: 'Vista aérea — Cidreira/RS',
    label: 'Fotografia aérea da região de Cidreira',
  },
  {
    id: 'magisterio',
    src: images.aerial.magisterio,
    caption: 'Vista aérea — Balneário Pinhal/RS',
    label: 'Fotografia aérea da região de Balneário Pinhal',
  },
]

/**
 * Registro fotográfico aéreo da região de atuação.
 *
 * As imagens reforçam a presença regional do escritório e são complementares:
 * NÃO substituem as fotografias reais das unidades, apresentadas na seção
 * "Nossas Unidades".
 */
export function AerialGallery() {
  return (
    <section id="regiao" className="bg-ink-950 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Registro Aéreo"
            title="Presença regional no Litoral Norte."
            description="O escritório acompanha a dinâmica das cidades onde mantém unidades, com atendimento próximo e conhecimento do contexto local."
            tone="dark"
          />
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {aerialShots.map((shot, index) => (
            <Reveal key={shot.id} delay={index * 80}>
              <figure className="group">
                <div className="relative aspect-16/10 overflow-hidden bg-ink-900">
                  <Media
                    src={shot.src}
                    alt={shot.caption}
                    label={shot.label}
                    imageClassName="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent"
                  />
                  <figcaption className="absolute bottom-0 left-0 p-6 md:p-7">
                    <span className="block h-px w-8 bg-gold-500" aria-hidden="true" />
                    <span className="mt-3 block font-serif text-xl text-cream-50 md:text-2xl">
                      {shot.caption}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8">
          <p className="max-w-2xl font-sans text-xs leading-relaxed text-cream-50/40">
            As imagens aéreas retratam a região de atuação do escritório e têm caráter
            ilustrativo. A apresentação das unidades físicas utiliza fotografias exclusivas
            de cada endereço.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
