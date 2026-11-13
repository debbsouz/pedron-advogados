import { contact, site } from '@/config/site'

/** Remove tudo que não for dígito, preservando apenas números para links. */
export function digitsOnly(value?: string | null): string {
  return (value ?? '').replace(/\D/g, '')
}

/**
 * Normaliza um número brasileiro para o formato internacional exigido pelo
 * `tel:` e pelo WhatsApp. Números sem DDI recebem o prefixo 55 (Brasil).
 * Retorna null quando não há dígitos suficientes para um número válido.
 */
function toInternational(phone?: string | null): string | null {
  const digits = digitsOnly(phone)
  if (digits.length < 10) return null
  return digits.startsWith('55') ? digits : `55${digits}`
}

/**
 * Link de WhatsApp (wa.me) para um número informado.
 * Retorna null quando o número não é válido.
 */
export function getWhatsAppLink(phone?: string | null, message?: string): string | null {
  const international = toInternational(phone)
  if (!international) return null
  const query = message ? `?text=${encodeURIComponent(message)}` : ''
  return `https://wa.me/${international}${query}`
}

/**
 * Link telefônico (`tel:`) para discagem direta em dispositivos móveis.
 * Retorna null quando o número não é válido.
 */
export function getPhoneLink(phone?: string | null): string | null {
  const international = toInternational(phone)
  if (!international) return null
  return `tel:+${international}`
}

/** Link de e-mail (mailto:) para o endereço institucional. Null se não informado. */
export function getMailLink(subject?: string): string | null {
  const email = contact.email.trim() || site.email.trim()
  if (!email) return null
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : ''
  return `mailto:${email}${query}`
}

/**
 * Link de busca no Google Maps a partir do endereço textual.
 * Usa um link explícito quando informado; caso contrário, gera a busca pelo
 * endereço — sem inventar coordenadas. Retorna null se não houver endereço.
 */
export function getMapLink(address?: string | null, explicitLink?: string | null): string | null {
  const custom = (explicitLink ?? '').trim()
  if (custom) return custom
  const query = (address ?? '').trim()
  if (!query) return null
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/**
 * URL de incorporação do Google Maps (iframe) a partir do endereço textual.
 * Não requer chave de API e não inventa coordenadas. Null se não houver endereço.
 */
export function getMapEmbedUrl(address?: string | null): string | null {
  const query = (address ?? '').trim()
  if (!query) return null
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}
