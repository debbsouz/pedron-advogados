import { Link } from 'react-router-dom'
import {
  Facebook,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  type LucideIcon,
} from 'lucide-react'
import { Logo } from '@/components/Logo'
import { PendingTag } from '@/components/ui/PendingTag'
import { getPhoneLink } from '@/lib/contact'
import { contact, navigation, showPlaceholders, site, social, units } from '@/config/site'

const socialIcons: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
}

const currentYear = new Date().getFullYear()

export function Footer() {
  const activeSocial = social.filter((item) => item.url.trim().length > 0)

  return (
    <footer className="border-t border-cream-50/10 bg-ink-950">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Marca */}
          <div className="lg:col-span-4">
            <Logo tone="dark" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream-50/55">
              {site.description}
            </p>

            <p className="mt-5 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-gold-600">
              {site.oab}
            </p>

            {activeSocial.length > 0 ? (
              <div className="mt-7 flex items-center gap-3">
                {activeSocial.map((item) => {
                  const Icon = socialIcons[item.id] ?? MessageCircle
                  return (
                    <a
                      key={item.id}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} — ${item.handle}`}
                      className="flex h-10 w-10 items-center justify-center border border-cream-50/15 text-cream-50/70 transition-colors hover:border-gold-500 hover:text-gold-400"
                    >
                      <Icon size={17} strokeWidth={1.5} />
                    </a>
                  )
                })}
              </div>
            ) : null}
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé" className="lg:col-span-2">
            <h2 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
              Navegação
            </h2>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={`/${item.href}`}
                    className="font-sans text-sm text-cream-50/65 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Unidades */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
              Unidades
            </h2>
            <ul className="mt-5 space-y-5">
              {units.map((unit) => {
                const phoneLink = getPhoneLink(unit.phone)
                return (
                  <li key={unit.id}>
                    <p className="font-sans text-sm text-cream-50/80">
                      {unit.name}
                      {unit.subtitle ? ` · ${unit.subtitle}` : ''}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-cream-50/45">{unit.address}</p>
                    {phoneLink ? (
                      <a
                        href={phoneLink}
                        className="mt-1.5 inline-block font-sans text-sm text-cream-50/70 transition-colors hover:text-gold-400"
                      >
                        {unit.phone}
                      </a>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Contato */}
          <div className="lg:col-span-3">
            <h2 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
              Contato
            </h2>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-500" aria-hidden="true" />
                <div>
                  <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-cream-50/40">
                    Plantão
                  </p>
                  {contact.plantao && getPhoneLink(contact.plantao) ? (
                    <a
                      href={getPhoneLink(contact.plantao) ?? undefined}
                      className="font-sans text-sm text-cream-50/70 transition-colors hover:text-gold-400"
                    >
                      {contact.plantao}
                    </a>
                  ) : (
                    <PendingTag tone="dark" label="A informar" />
                  )}
                </div>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={15} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-500" aria-hidden="true" />
                <div>
                  <p className="font-sans text-[0.58rem] uppercase tracking-[0.2em] text-cream-50/40">
                    Atendimento regional
                  </p>
                  <p className="font-sans text-sm leading-relaxed text-cream-50/70">
                    Capão da Canoa — atendimento por telefone, sem unidade física.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Aviso institucional OAB */}
        <div className="mt-16 border-t border-cream-50/10 pt-8">
          <p className="max-w-3xl text-xs leading-relaxed text-cream-50/40">
            Este site tem caráter meramente informativo e institucional, em observância ao Código de
            Ética e Disciplina da OAB e ao Provimento nº 205/2021 do Conselho Federal da OAB. Não
            constitui oferta de serviços, captação de clientela, consulta jurídica ou promessa de
            resultados. A análise de qualquer demanda depende de avaliação individualizada.
          </p>
        </div>

        {/* Barra inferior */}
        <div className="mt-8 flex flex-col gap-4 border-t border-cream-50/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-sans text-[0.68rem] text-cream-50/45">
            © {currentYear} {site.name}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {showPlaceholders && (!site.legalName || !site.cnpj) ? (
              <PendingTag tone="dark" label="Razão social / CNPJ pendentes" />
            ) : (
              <span className="font-sans text-[0.68rem] text-cream-50/45">
                {[site.legalName, site.cnpj].filter(Boolean).join(' · ')}
              </span>
            )}
            <Link
              to="/politica-de-privacidade"
              className="font-sans text-[0.68rem] text-cream-50/45 transition-colors hover:text-gold-400"
            >
              Política de Privacidade
            </Link>
            <Link
              to="/aviso-legal"
              className="font-sans text-[0.68rem] text-cream-50/45 transition-colors hover:text-gold-400"
            >
              Aviso Legal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
