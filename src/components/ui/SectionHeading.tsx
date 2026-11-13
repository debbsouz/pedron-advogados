import { cn } from '@/lib/cn'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

/** Cabeçalho editorial padrão das seções institucionais. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'
  const isCentered = align === 'center'

  return (
    <div className={cn('max-w-3xl', isCentered && 'mx-auto text-center', className)}>
      <div className={cn('flex items-center gap-4', isCentered && 'justify-center')}>
        <span className="h-px w-8 bg-gold-500" aria-hidden="true" />
        <span className="font-sans text-[0.65rem] uppercase tracking-[0.34em] text-gold-600">
          {eyebrow}
        </span>
      </div>

      <h2
        className={cn(
          'mt-6 text-headline text-balance',
          isDark ? 'text-cream-50' : 'text-ink-900',
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            'mt-6 text-pretty text-base leading-relaxed md:text-lg',
            isDark ? 'text-cream-50/65' : 'text-ink-600/80',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
