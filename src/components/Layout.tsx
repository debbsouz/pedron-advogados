import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'

export type LayoutContext = {
  /** Converte um hash de âncora em rota válida conforme a página atual. */
  resolveHref: (hash: string) => string
}

export function Layout() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const resolveHref = (hash: string) => (isHome ? hash : `/${hash}`)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main id="conteudo" className="flex-1">
        <Outlet context={{ resolveHref } satisfies LayoutContext} />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
