import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Media } from '@/components/ui/Media'
import { PendingTag } from '@/components/ui/PendingTag'
import { showPlaceholders, team } from '@/config/site'

/**
 * Seção "Equipe".
 * Apresenta exclusivamente as duas pessoas que compõem a apresentação
 * institucional do escritório. Não há terceiro profissional e nenhum registro
 * profissional é atribuído sem confirmação.
 */
export function Team() {
  return (
    <section id="equipe" className="bg-cream-200 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Equipe"
            title="Profissionais dedicados a cada caso."
            description="A apresentação institucional do escritório é composta por seus profissionais, com atuação pautada pelo rigor técnico e pelo acompanhamento próximo de cada demanda."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl gap-10 sm:grid-cols-2 sm:gap-12">
          {team.map((member, index) => (
            <Reveal key={member.id} delay={index * 80}>
              <article className="group">
                <div className="relative aspect-3/4 overflow-hidden bg-ink-900">
                  <Media
                    src={member.photo}
                    alt={`Retrato de ${member.name}`}
                    label={`Retrato profissional — ${member.name}`}
                    imageClassName="transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-7 text-center">
                  <h3 className="font-serif text-2xl text-ink-900 md:text-3xl">{member.name}</h3>

                  {member.registration ? (
                    <p className="mt-2 font-sans text-[0.68rem] uppercase tracking-[0.22em] text-gold-700">
                      {member.registration}
                    </p>
                  ) : showPlaceholders ? (
                    <div className="mt-3 flex justify-center">
                      <PendingTag label="Registro profissional a informar" />
                    </div>
                  ) : null}

                  {member.role ? (
                    <p className="mt-2 font-sans text-xs tracking-wide text-muted">{member.role}</p>
                  ) : null}

                  {member.bio ? (
                    <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-ink-600/80">{member.bio}</p>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
