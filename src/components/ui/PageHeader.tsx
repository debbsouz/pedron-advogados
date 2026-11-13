import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/ui/SectionHeading'

type PageHeaderProps = {
  eyebrow: string
  title: string
  description?: string
  children?: ReactNode
}

/** Faixa de abertura das páginas internas, alinhada ao header fixo. */
export function PageHeader({ eyebrow, title, description, children }: PageHeaderProps) {
  return (
    <section className="bg-ink-950 pb-16 pt-36 md:pb-20 md:pt-44">
      <div className="container-x">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone="dark"
          className="max-w-3xl"
        />
        {children ? <div className="mt-10">{children}</div> : null}
      </div>
    </section>
  )
}
