import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { useSeo } from '@/lib/useSeo'
import { navigation, seo } from '@/config/site'

export function NotFound() {
  useSeo({ title: seo.notFound.title, description: seo.notFound.description, path: '/404' })

  return (
    <section className="flex min-h-screen items-center bg-ink-950 py-32">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-sans text-[0.62rem] uppercase tracking-[0.4em] text-gold-500">
            Página não encontrada
          </span>
          <p className="mt-8 font-serif text-[clamp(4rem,14vw,9rem)] leading-none text-cream-50/15">404</p>
          <h1 className="mt-4 font-serif text-headline text-cream-50">
            O conteúdo que você procura não está disponível.
          </h1>
          <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-cream-50/60">
            O endereço acessado pode ter sido alterado ou removido. Utilize os atalhos abaixo para
            retornar à navegação principal.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/" variant="gold" size="lg">
              Voltar ao início
            </Button>
            <Button to="/#contato" variant="outlineLight" size="lg">
              Fale conosco
            </Button>
          </div>

          <nav aria-label="Atalhos de navegação" className="mt-14 border-t border-cream-50/10 pt-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    to={`/${item.href}`}
                    className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-cream-50/55 transition-colors hover:text-gold-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}
