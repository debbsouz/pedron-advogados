import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { getWhatsAppLink } from '@/lib/contact'
import { centralWhatsApp } from '@/config/site'

/**
 * Atalho flutuante de contato.
 *
 * Enquanto a centralização dos atendimentos em um único número de WhatsApp não
 * estiver implementada (`centralWhatsApp.enabled === false`), NÃO é exibido
 * nenhum número central simulado: o botão apenas direciona o visitante até a
 * seção de contato, onde estão os canais oficiais das unidades e o plantão.
 *
 * Quando a integração futura for habilitada, o botão passa a abrir o WhatsApp
 * central com a mensagem automática definida em `centralWhatsApp.greeting`.
 */
export function WhatsAppFloat() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const centralLink = centralWhatsApp.enabled
    ? getWhatsAppLink(centralWhatsApp.number, centralWhatsApp.greeting)
    : null

  const className =
    'fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full border border-gold-500/60 bg-ink-900 text-gold-400 shadow-lg transition-colors duration-300 hover:bg-gold-500 hover:text-ink-950'

  if (centralLink) {
    return (
      <a
        href={centralLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o PEDRON ADVOGADOS pelo WhatsApp"
        className={className}
        style={{ height: '3.25rem', width: '3.25rem' }}
      >
        <MessageCircle size={22} strokeWidth={1.5} />
      </a>
    )
  }

  return (
    <a
      href={isHome ? '#contato' : '/#contato'}
      aria-label="Fale conosco"
      className={className}
      style={{ height: '3.25rem', width: '3.25rem' }}
    >
      <MessageCircle size={22} strokeWidth={1.5} />
    </a>
  )
}
