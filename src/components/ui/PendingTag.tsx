import { cn } from '@/lib/cn'
import { PENDING_LABEL, showPlaceholders } from '@/config/site'

type PendingTagProps = {
  label?: string
  className?: string
  /** Tom do marcador conforme o fundo da seção. */
  tone?: 'light' | 'dark'
}

/**
 * Marcador visual para informações ainda não fornecidas pelo escritório.
 * Controlado globalmente por `showPlaceholders` em src/config/site.ts.
 */
export function PendingTag({ label = PENDING_LABEL, className, tone = 'light' }: PendingTagProps) {
  if (!showPlaceholders) return null

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 font-sans text-[0.58rem] uppercase tracking-[0.2em]',
        tone === 'dark'
          ? 'border-gold-500/35 text-gold-400'
          : 'border-ink-900/15 text-muted',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn('h-1 w-1 rounded-full', tone === 'dark' ? 'bg-gold-400' : 'bg-gold-600')}
      />
      {label}
    </span>
  )
}
