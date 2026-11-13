import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/Logo'
import { Media } from '@/components/ui/Media'
import { PendingTag } from '@/components/ui/PendingTag'
import { images, showPlaceholders, site } from '@/config/site'

type HeroProps = {
  /** Ajusta os links de âncora conforme a rota atual. */
  resolveHref: (hash: string) => string
}

export function Hero({ resolveHref }: HeroProps) {
  return (
    <section
      id="inicio"
      aria-label="Apresentação institucional"
      className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-ink-950 pt-32 pb-14 md:min-h-screen md:pb-20"
    >
      {/* Imagem institucional de fundo — tema jurídico, sem identificar uma unidade */}
      <div className="absolute inset-0 -z-10">
        <Media
          src={images.hero}
          alt="Elementos clássicos do universo jurídico — balança da justiça e livros"
          label="Fotografia institucional de tema jurídico"
          priority
          className="h-full w-full"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/85 to-ink-950/55"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-ink-950/35" />
      </div>

      <div className="container-x w-full">
        <div className="max-w-4xl">
          {/* Logotipo oficial (ou lockup tipográfico provisório) */}
          <Logo tone="dark" className="h-12 md:h-14" />

          <div className="mt-8 flex items-center gap-4">
            <span className="h-px w-10 bg-gold-500" aria-hidden="true" />
            <span className="font-sans text-[0.65rem] uppercase tracking-[0.4em] text-gold-500">
              {site.name}
            </span>
          </div>

          <h1 className="mt-7 text-display text-balance text-cream-50">
            Advocacia conduzida com técnica, discrição e responsabilidade.
          </h1>

          <p className="mt-8 max-w-2xl text-pretty text-base leading-relaxed text-cream-50/70 md:text-lg">
            {site.description} Nosso compromisso é oferecer orientação jurídica criteriosa e
            comunicação clara, respeitando a singularidade de cada demanda.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button to={resolveHref('#contato')} variant="gold" size="lg">
              Fale conosco
              <ArrowRight size={15} strokeWidth={1.75} />
            </Button>
            <Button to={resolveHref('#escritorio')} variant="outlineLight" size="lg">
              Conheça o escritório
            </Button>
          </div>

          {showPlaceholders && !images.hero ? (
            <PendingTag tone="dark" label="Fotografia institucional pendente" className="mt-10" />
          ) : null}
        </div>

        <div className="mt-16 hidden items-center justify-between border-t border-cream-50/10 pt-6 md:flex">
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-cream-50/40">
            Assessoria e consultoria jurídica
          </p>
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-cream-50/40">
            {site.oab}
          </p>
        </div>
      </div>
    </section>
  )
}
