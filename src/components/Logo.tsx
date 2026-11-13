import { useEffect, useState } from 'react'
import { cn } from '@/lib/cn'
import { logo, site } from '@/config/site'

type LogoProps = {
  /** 'dark' = texto claro, para uso sobre fundos escuros. */
  tone?: 'light' | 'dark'
  className?: string
}

/** Brasão provisório construído a partir da identidade descrita (letra P em escudo dourado). */
function CrestMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 58"
      aria-hidden="true"
      className={cn('h-11 w-auto', className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 1.5 45 9.5v18.2c0 12.4-8.9 22.3-21 27.8C11.9 50 3 40.1 3 27.7V9.5L24 1.5Z"
        stroke="var(--color-gold-500)"
        strokeWidth="1.2"
      />
      <path
        d="M24 6.2 40.5 12.5v15.2c0 10.2-7.2 18.3-16.5 22.9-9.3-4.6-16.5-12.7-16.5-22.9V12.5L24 6.2Z"
        stroke="var(--color-gold-500)"
        strokeOpacity="0.35"
        strokeWidth="0.6"
      />
      <text
        x="24"
        y="36"
        textAnchor="middle"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontSize="25"
        fontWeight="500"
        fill="var(--color-gold-500)"
      >
        P
      </text>
    </svg>
  )
}

/** Lockup tipográfico provisório, exibido quando o arquivo oficial não está disponível. */
function TypographicLockup({ isDark, className }: { isDark: boolean; className?: string }) {
  return (
    <span className={cn('flex items-center gap-3', className)} aria-label={site.name}>
      <CrestMark />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-xl tracking-[0.18em]',
            isDark ? 'text-cream-50' : 'text-ink-900',
          )}
        >
          PEDRON
        </span>
        <span
          className={cn(
            'mt-1 font-sans text-[0.55rem] font-medium uppercase tracking-[0.42em]',
            isDark ? 'text-gold-400' : 'text-gold-600',
          )}
        >
          Advogados
        </span>
      </span>
    </span>
  )
}

/**
 * Logotipo do escritório.
 * Utiliza o arquivo oficial informado em `logo` (src/config/site.ts).
 * Se o arquivo ainda não existir, cai automaticamente para o lockup
 * tipográfico provisório (brasão com a letra P + PEDRON ADVOGADOS).
 */
export function Logo({ tone = 'light', className }: LogoProps) {
  const isDark = tone === 'dark'
  const source = isDark ? logo.srcLight || logo.src : logo.src
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    setFailed(false)
  }, [source])

  if (source && !failed) {
    return (
      <img
        src={source}
        alt={logo.alt}
        onError={() => setFailed(true)}
        className={cn('h-11 w-auto object-contain', className)}
        decoding="async"
      />
    )
  }

  return <TypographicLockup isDark={isDark} className={className} />
}
