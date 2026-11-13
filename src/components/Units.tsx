import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Button } from '@/components/ui/Button'
import { Media } from '@/components/ui/Media'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getMapLink, getPhoneLink } from '@/lib/contact'
import { units } from '@/config/site'

type UnitsProps = {
  /** Ajusta os links de âncora conforme a rota atual. */
  resolveHref: (hash: string) => string
}

/**
 * Seção "Nossas Unidades".
 * Cada unidade física recebe apresentação própria, com endereço, telefone
 * clicável, botão de contato e link para o Google Maps. As fotografias são
 * exclusivas de cada unidade e não são misturadas.
 */
export function Units({ resolveHref }: UnitsProps) {
  return (
    <section id="unidades" className="bg-cream-100 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Nossas Unidades"
            title="Duas unidades, um mesmo padrão de atendimento."
            description="O PEDRON ADVOGADOS mantém duas unidades físicas na região, com estrutura de atendimento própria em cada uma delas."
          />
        </Reveal>

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-28">
          {units.map((unit, index) => {
            const reversed = index % 2 === 1
            const phoneLink = getPhoneLink(unit.phone)
            const mapLink = getMapLink(unit.address, unit.mapLink)
            const [primaryImage, secondaryImage] = unit.images

            return (
              <Reveal key={unit.id}>
                <article className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
                  {/* Composição fotográfica da unidade */}
                  <div className={cn('lg:col-span-6', reversed && 'lg:order-2')}>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-7 aspect-4/5 overflow-hidden bg-ink-900">
                        <Media
                          src={primaryImage}
                          alt={`Ambiente da ${unit.name}`}
                          label={`Fotografia principal — ${unit.name}`}
                        />
                      </div>
                      <div className="col-span-5 aspect-3/4 self-end overflow-hidden bg-ink-900">
                        <Media
                          src={secondaryImage}
                          alt={`Detalhe interno da ${unit.name}`}
                          label={`Fotografia secundária — ${unit.name}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dados da unidade */}
                  <div className={cn('lg:col-span-6 lg:pl-4', reversed && 'lg:order-1 lg:pl-0 lg:pr-4')}>
                    <span className="font-serif text-5xl text-gold-600/45">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <h3 className="mt-4 font-serif text-3xl text-ink-900 md:text-4xl">{unit.name}</h3>
                    {unit.subtitle ? (
                      <p className="mt-2 font-sans text-[0.7rem] uppercase tracking-[0.24em] text-gold-700">
                        {unit.subtitle}
                      </p>
                    ) : null}

                    <dl className="mt-9 space-y-6">
                      <div className="flex items-start gap-4">
                        <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
                        <div>
                          <dt className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-muted">
                            Endereço
                          </dt>
                          <dd className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-600/85">
                            {unit.address}
                          </dd>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <Phone size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-600" aria-hidden="true" />
                        <div>
                          <dt className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-muted">
                            Telefone
                          </dt>
                          <dd className="mt-1.5 text-sm text-ink-600/85">
                            {phoneLink ? (
                              <a
                                href={phoneLink}
                                className="transition-colors hover:text-gold-700"
                              >
                                {unit.phone}
                              </a>
                            ) : (
                              unit.phone
                            )}
                          </dd>
                        </div>
                      </div>
                    </dl>

                    <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                      <Button to={resolveHref('#contato')} variant="dark">
                        Falar com esta unidade
                      </Button>

                      {mapLink ? (
                        <a
                          href={mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 font-sans text-[0.7rem] uppercase tracking-[0.18em] text-gold-700 transition-colors hover:text-gold-600"
                        >
                          Ver no Google Maps
                          <ArrowUpRight size={14} strokeWidth={1.75} />
                        </a>
                      ) : null}
                    </div>
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
