import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/cn'

type Variant = 'gold' | 'dark' | 'outlineDark' | 'outlineLight'
type Size = 'md' | 'lg'

type ButtonProps = {
  children: ReactNode
  variant?: Variant
  size?: Size
  /** Rota interna do site (usa o roteador, sem recarregar a página). */
  to?: string
  /** Link externo ou âncora simples. */
  href?: string
  external?: boolean
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  'aria-label'?: string
  disabled?: boolean
}

const variants: Record<Variant, string> = {
  gold: 'bg-gold-500 text-ink-950 hover:bg-gold-400 border border-gold-500 hover:border-gold-400',
  dark: 'bg-ink-900 text-cream-50 hover:bg-ink-700 border border-ink-900 hover:border-ink-700',
  outlineDark:
    'bg-transparent text-ink-900 border border-ink-900/25 hover:border-gold-500 hover:text-gold-700',
  outlineLight:
    'bg-transparent text-cream-50 border border-cream-50/30 hover:border-gold-400 hover:text-gold-300',
}

const sizes: Record<Size, string> = {
  md: 'px-6 py-3 text-[0.7rem]',
  lg: 'px-8 py-4 text-[0.72rem]',
}

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans font-medium uppercase tracking-[0.18em] transition-colors duration-300 disabled:pointer-events-none disabled:opacity-50'

/** Botão institucional com variantes de contraste sobre fundo claro ou escuro. */
export function Button({
  children,
  variant = 'gold',
  size = 'md',
  to,
  href,
  external,
  onClick,
  type = 'button',
  className,
  disabled,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} aria-label={ariaLabel} disabled={disabled}>
      {children}
    </button>
  )
}
