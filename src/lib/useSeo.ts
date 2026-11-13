import { useEffect } from 'react'

type UseSeoOptions = {
  title: string
  description: string
  /** Caminho relativo da página, usado para canonical e Open Graph. */
  path?: string
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.setAttribute('content', content)
}

/**
 * Atualiza título, descrição, canonical e Open Graph conforme a página ativa.
 * Estrutura leve, sem dependências externas, preparada para indexação.
 */
export function useSeo({ title, description, path = '/' }: UseSeoOptions) {
  useEffect(() => {
    document.title = title

    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)

    const canonicalHref = `${window.location.origin}${path}`
    setMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalHref
  }, [title, description, path])
}
