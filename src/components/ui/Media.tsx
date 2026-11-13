import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'

type MediaProps = {
  /** Caminho da imagem real. Vazio exibe o marcador de pendência. */
  src?: string
  alt: string
  /** Rótulo exibido no marcador quando a imagem ainda não foi fornecida. */
  label?: string
  className?: string
  imageClassName?: string
  /** Carrega a imagem imediatamente (usar apenas em elementos acima da dobra). */
  priority?: boolean
}

/**
 * Renderiza uma imagem institucional com lazy loading e proporção preservada.
 *
 * O caminho é configurado previamente em `src/config/site.ts`. Se o arquivo
 * ainda não tiver sido inserido, o componente detecta a falha de carregamento
 * e exibe automaticamente um marcador visual sóbrio ("Imagem pendente"),
 * sem quebrar o layout.
 */
export function Media({ src, alt, label = 'Imagem institucional', className, imageClassName, priority }: MediaProps) {
  const [failed, setFailed] = useState(false)

  // Reinicia o estado quando o caminho muda (ex.: troca de unidade exibida).
  useEffect(() => {
    setFailed(false)
  }, [src])

  const showPlaceholder = !src || failed

  if (!showPlaceholder) {
    return (
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => setFailed(true)}
        className={cn('h-full w-full object-cover', imageClassName, className)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={`${alt} (imagem pendente de fornecimento)`}
      className={cn(
        'relative flex h-full w-full items-center justify-center overflow-hidden',
        'bg-ink-900 bg-grain',
        className,
      )}
    >
      <div className="absolute inset-3 border border-cream-50/10" />
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <span className="font-sans text-[0.6rem] uppercase tracking-[0.32em] text-gold-500">
          Imagem pendente
        </span>
        <span className="max-w-[22ch] font-sans text-xs leading-relaxed text-cream-50/45">{label}</span>
      </div>
    </div>
  )
}
