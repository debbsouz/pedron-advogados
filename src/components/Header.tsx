import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/cn'
import { Logo } from '@/components/Logo'
import { Button } from '@/components/ui/Button'
import { useActiveSection } from '@/hooks/useActiveSection'
import { getPhoneLink } from '@/lib/contact'
import { contact, navigation, units } from '@/config/site'

const sectionIds = navigation.map((item) => item.href.replace('#', ''))

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(sectionIds, isHome)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const solid = scrolled || !isHome

  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`)

  const contactLines = [
    ...units.map((unit) => ({ id: unit.id, label: unit.subtitle ?? unit.name, phone: unit.phone })),
    { id: 'plantao', label: 'Plantão', phone: contact.plantao },
  ]

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:bg-gold-500 focus:px-4 focus:py-2 focus:text-xs focus:uppercase focus:tracking-widest focus:text-ink-950"
      >
        Ir para o conteúdo
      </a>

      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500',
          solid
            ? 'border-b border-cream-50/10 bg-ink-950/92 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent',
        )}
      >
        <div className="container-x flex h-[5.25rem] items-center justify-between gap-6">
          <Link to="/" aria-label="Página inicial — PEDRON ADVOGADOS">
            <Logo tone="dark" className={cn('transition-opacity duration-300', solid ? 'opacity-100' : 'opacity-95')} />
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-9 lg:flex">
            {navigation.map((item) => {
              const isActive = isHome && activeSection === item.href.replace('#', '')
              return (
                <Link
                  key={item.href}
                  to={resolveHref(item.href)}
                  className={cn(
                    'relative py-2 font-sans text-[0.72rem] uppercase tracking-[0.2em] transition-colors duration-300',
                    isActive ? 'text-gold-400' : 'text-cream-50/70 hover:text-cream-50',
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      'absolute -bottom-0.5 left-0 h-px bg-gold-500 transition-all duration-500',
                      isActive ? 'w-full' : 'w-0',
                    )}
                  />
                </Link>
              )
            })}
          </nav>

          <div className="hidden lg:block">
            <Button
              to={resolveHref('#contato')}
              variant="outlineLight"
              className="px-6 py-2.5 text-[0.66rem]"
            >
              Contato
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            className="flex h-11 w-11 items-center justify-center border border-cream-50/20 text-cream-50 transition-colors hover:border-gold-500 hover:text-gold-400 lg:hidden"
          >
            {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Menu mobile em tela cheia */}
      <div
        id="menu-mobile"
        className={cn(
          'fixed inset-0 z-40 bg-ink-950 transition-opacity duration-400 lg:hidden',
          menuOpen ? 'pointer-events-auto visible opacity-100' : 'pointer-events-none invisible opacity-0',
        )}
        aria-hidden={!menuOpen}
      >
        <div className="container-x flex h-full flex-col justify-between overflow-y-auto pb-10 pt-32">
          <nav aria-label="Navegação mobile" className="flex flex-col">
            {navigation.map((item, index) => (
              <Link
                key={item.href}
                to={resolveHref(item.href)}
                onClick={() => setMenuOpen(false)}
                className="group flex items-baseline gap-4 border-b border-cream-50/10 py-5 transition-colors"
              >
                <span className="font-sans text-[0.6rem] tracking-[0.2em] text-gold-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-serif text-3xl text-cream-50 transition-colors group-hover:text-gold-400">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div className="mt-10 space-y-4">
            <div className="rule-gold w-full" />
            <p className="font-sans text-[0.62rem] uppercase tracking-[0.28em] text-cream-50/40">
              Contato direto
            </p>
            <div className="space-y-2.5 font-sans text-sm">
              {contactLines.map((line) => {
                const phoneLink = getPhoneLink(line.phone)
                return (
                  <p key={line.id} className="flex items-center justify-between gap-4">
                    <span className="text-cream-50/50">{line.label}</span>
                    {phoneLink ? (
                      <a href={phoneLink} className="text-cream-50/85 transition-colors hover:text-gold-400">
                        {line.phone}
                      </a>
                    ) : (
                      <span className="text-cream-50/50">A informar</span>
                    )}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
