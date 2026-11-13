import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Gerencia a posição de rolagem em cada navegação:
 * com hash, rola suavemente até a seção; sem hash, retorna ao topo.
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.replace('#', ''))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
