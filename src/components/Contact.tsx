import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MessageCircle,
  Phone,
  Send,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PendingTag } from '@/components/ui/PendingTag'
import { cn } from '@/lib/cn'
import { getMailLink, getMapEmbedUrl, getPhoneLink, getWhatsAppLink } from '@/lib/contact'
import {
  attendanceRoutes,
  contact,
  site,
  social,
  units,
} from '@/config/site'

type FormValues = {
  name: string
  email: string
  phone: string
  locality: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  name: '',
  email: '',
  phone: '',
  locality: '',
  message: '',
  consent: false,
}

const socialIcons: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (values.name.trim().length < 3) {
    errors.name = 'Informe o nome completo.'
  }
  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (!values.locality) {
    errors.locality = 'Selecione a localidade desejada para o atendimento.'
  }
  if (values.message.trim().length < 15) {
    errors.message = 'Descreva brevemente o assunto com ao menos 15 caracteres.'
  }
  if (!values.consent) {
    errors.consent = 'É necessário concordar com o tratamento dos dados para enviar.'
  }

  return errors
}

const fieldClasses =
  'w-full border border-cream-50/15 bg-ink-950/60 px-4 py-3.5 font-sans text-sm text-cream-50 placeholder:text-cream-50/35 transition-colors focus:border-gold-500 focus:outline-none'

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [feedback, setFeedback] = useState<{ tone: 'success' | 'error'; text: string } | null>(null)
  const [sending, setSending] = useState(false)

  const mailLink = getMailLink('Contato pelo site')
  const activeSocial = social.filter((item) => item.url.trim().length > 0)

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target
    const nextValue = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value

    setValues((previous) => ({ ...previous, [name]: nextValue }))
    setErrors((previous) => ({ ...previous, [name]: undefined }))
    setFeedback(null)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validation = validate(values)
    setErrors(validation)

    if (Object.keys(validation).length > 0) {
      setFeedback({ tone: 'error', text: 'Revise os campos destacados antes de enviar.' })
      return
    }

    const route = attendanceRoutes.find((item) => item.id === values.locality)

    const composedMessage = [
      `Nome: ${values.name}`,
      `E-mail: ${values.email}`,
      values.phone ? `Telefone: ${values.phone}` : '',
      route ? `Localidade: ${route.label}` : '',
      '',
      values.message,
    ]
      .filter(Boolean)
      .join('\n')

    // Endpoint configurado: envio direto via API.
    if (contact.formEndpoint) {
      setSending(true)
      try {
        const response = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        })

        if (!response.ok) throw new Error('Falha no envio')

        setFeedback({
          tone: 'success',
          text: 'Mensagem enviada com sucesso. Retornaremos pelo contato informado.',
        })
        setValues(initialValues)
      } catch {
        setFeedback({
          tone: 'error',
          text: 'Não foi possível enviar a mensagem. Tente novamente ou utilize um dos contatos diretos.',
        })
      } finally {
        setSending(false)
      }
      return
    }

    // Sem endpoint: encaminha a mensagem pelo WhatsApp da localidade escolhida.
    const fallbackLink =
      getWhatsAppLink(route?.whatsapp, composedMessage) ?? getMailLink('Contato pelo site') ?? null

    if (fallbackLink) {
      window.open(fallbackLink, '_blank', 'noopener,noreferrer')
      setFeedback({
        tone: 'success',
        text: 'Sua mensagem foi preparada e encaminhada pela localidade selecionada.',
      })
      setValues(initialValues)
      return
    }

    setFeedback({
      tone: 'error',
      text: 'O envio ainda não está configurado. Utilize os canais de contato informados nesta página.',
    })
  }

  return (
    <section id="contato" className="bg-ink-950 py-24 md:py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow="Contato"
            title="Fale com o PEDRON ADVOGADOS."
            description="Envie sua mensagem pelo formulário — escolha a localidade desejada — ou utilize os canais diretos abaixo. O retorno é realizado pelos meios informados."
            tone="dark"
          />
        </Reveal>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Dados de contato */}
          <div className="lg:col-span-5">
            <Reveal className="space-y-10">
              {/* Unidades */}
              <div>
                <h3 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
                  Unidades
                </h3>
                <ul className="mt-5 divide-y divide-cream-50/10 border-y border-cream-50/10">
                  {units.map((unit) => {
                    const phoneLink = getPhoneLink(unit.phone)
                    const whatsappLink = getWhatsAppLink(unit.phone)
                    return (
                      <li key={unit.id} className="py-5">
                        <p className="font-serif text-lg text-cream-50">
                          {unit.name}
                          {unit.subtitle ? (
                            <span className="ml-2 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-gold-600">
                              {unit.subtitle}
                            </span>
                          ) : null}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-cream-50/60">{unit.address}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
                          {phoneLink ? (
                            <a
                              href={phoneLink}
                              className="inline-flex items-center gap-2 font-sans text-sm text-cream-50/85 transition-colors hover:text-gold-400"
                            >
                              <Phone size={15} strokeWidth={1.5} className="text-gold-500" aria-hidden="true" />
                              {unit.phone}
                            </a>
                          ) : null}
                          {whatsappLink ? (
                            <a
                              href={whatsappLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 font-sans text-[0.68rem] uppercase tracking-[0.18em] text-gold-500 transition-colors hover:text-gold-400"
                            >
                              <MessageCircle size={15} strokeWidth={1.5} aria-hidden="true" />
                              WhatsApp
                            </a>
                          ) : null}
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Plantão */}
              <div className="border border-cream-50/12 bg-ink-900/60 px-5 py-5">
                <h3 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-gold-500">
                  Plantão
                </h3>
                {contact.plantao && getPhoneLink(contact.plantao) ? (
                  <a
                    href={getPhoneLink(contact.plantao) ?? undefined}
                    className="mt-3 inline-flex items-center gap-2.5 font-serif text-xl text-cream-50 transition-colors hover:text-gold-400"
                  >
                    <Phone size={17} strokeWidth={1.5} className="text-gold-500" aria-hidden="true" />
                    {contact.plantao}
                  </a>
                ) : (
                  <div className="mt-3">
                    <PendingTag tone="dark" label="Telefone de plantão a informar" />
                  </div>
                )}
                <p className="mt-3 text-xs leading-relaxed text-cream-50/50">
                  Canal separado, destinado ao atendimento de plantão. Não é o número central de
                  atendimento das unidades.
                </p>
              </div>

              {/* E-mail */}
              <div>
                <h3 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
                  E-mail
                </h3>
                {mailLink ? (
                  <a
                    href={mailLink}
                    className="mt-4 inline-flex items-center gap-2 font-sans text-sm text-cream-50/85 transition-colors hover:text-gold-400"
                  >
                    <Mail size={16} strokeWidth={1.5} className="text-gold-500" aria-hidden="true" />
                    {contact.email || site.email}
                  </a>
                ) : (
                  <div className="mt-4">
                    <PendingTag tone="dark" label="E-mail institucional a informar" />
                  </div>
                )}
              </div>

              {/* Redes sociais */}
              <div>
                <h3 className="font-sans text-[0.6rem] uppercase tracking-[0.28em] text-cream-50/40">
                  Redes sociais
                </h3>
                {activeSocial.length > 0 ? (
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    {activeSocial.map((item) => {
                      const Icon = socialIcons[item.id] ?? MessageCircle
                      return (
                        <a
                          key={item.id}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${item.label} — ${item.handle}`}
                          className="flex items-center gap-2.5 border border-cream-50/15 px-4 py-2.5 font-sans text-[0.68rem] uppercase tracking-[0.16em] text-cream-50/75 transition-colors hover:border-gold-500 hover:text-gold-400"
                        >
                          <Icon size={16} strokeWidth={1.5} aria-hidden="true" />
                          {item.label}
                        </a>
                      )
                    })}
                  </div>
                ) : (
                  <p className="mt-4 font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/35">
                    Redes sociais não informadas
                  </p>
                )}
              </div>
            </Reveal>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={handleSubmit} noValidate className="border border-cream-50/12 bg-ink-900/70 p-7 md:p-10">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className="mb-2 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/60">
                      Nome completo *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={values.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'erro-name' : undefined}
                      className={cn(fieldClasses, errors.name && 'border-gold-600')}
                      placeholder="Como devemos chamá-lo"
                    />
                    {errors.name ? (
                      <p id="erro-name" className="mt-2 text-xs text-gold-400">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/60">
                      E-mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'erro-email' : undefined}
                      className={cn(fieldClasses, errors.email && 'border-gold-600')}
                      placeholder="seu.email@exemplo.com"
                    />
                    {errors.email ? (
                      <p id="erro-email" className="mt-2 text-xs text-gold-400">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/60">
                      Telefone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={handleChange}
                      className={fieldClasses}
                      placeholder="(00) 00000-0000"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="locality" className="mb-2 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/60">
                      Localidade de atendimento *
                    </label>
                    <select
                      id="locality"
                      name="locality"
                      value={values.locality}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.locality)}
                      aria-describedby={errors.locality ? 'erro-locality' : undefined}
                      className={cn(fieldClasses, 'appearance-none', errors.locality && 'border-gold-600')}
                    >
                      <option value="">Selecione a localidade</option>
                      {attendanceRoutes.map((route) => (
                        <option key={route.id} value={route.id}>
                          {route.label}
                        </option>
                      ))}
                    </select>
                    {errors.locality ? (
                      <p id="erro-locality" className="mt-2 text-xs text-gold-400">
                        {errors.locality}
                      </p>
                    ) : (
                      <p className="mt-2 text-xs leading-relaxed text-cream-50/40">
                        Capão da Canoa refere-se ao atendimento regional, sem unidade física no local.
                      </p>
                    )}
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-2 block font-sans text-[0.62rem] uppercase tracking-[0.24em] text-cream-50/60">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'erro-message' : undefined}
                      className={cn(fieldClasses, 'resize-none', errors.message && 'border-gold-600')}
                      placeholder="Descreva brevemente o assunto que deseja tratar."
                    />
                    {errors.message ? (
                      <p id="erro-message" className="mt-2 text-xs text-gold-400">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    checked={values.consent}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? 'erro-consent' : undefined}
                    className="mt-1 h-4 w-4 shrink-0 accent-gold-500"
                  />
                  <label htmlFor="consent" className="text-xs leading-relaxed text-cream-50/60">
                    Autorizo o uso dos dados informados exclusivamente para o retorno deste contato,
                    conforme a{' '}
                    <Link to="/politica-de-privacidade" className="text-gold-400 underline underline-offset-2">
                      Política de Privacidade
                    </Link>
                    . *
                  </label>
                </div>
                {errors.consent ? (
                  <p id="erro-consent" className="mt-2 text-xs text-gold-400">
                    {errors.consent}
                  </p>
                ) : null}

                <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center justify-center gap-2.5 border border-gold-500 bg-gold-500 px-8 py-4 font-sans text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ink-950 transition-colors duration-300 hover:bg-gold-400 disabled:opacity-60"
                  >
                    {sending ? 'Enviando...' : 'Enviar mensagem'}
                    <Send size={14} strokeWidth={1.75} />
                  </button>

                  <p className="font-sans text-[0.62rem] uppercase tracking-[0.2em] text-cream-50/35">
                    Campos com * são obrigatórios
                  </p>
                </div>

                {feedback ? (
                  <div
                    role="status"
                    aria-live="polite"
                    className={cn(
                      'mt-6 flex items-start gap-3 border px-4 py-3 text-sm',
                      feedback.tone === 'success'
                        ? 'border-gold-500/40 text-cream-50/85'
                        : 'border-cream-50/20 text-cream-50/75',
                    )}
                  >
                    {feedback.tone === 'success' ? (
                      <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold-400" />
                    ) : (
                      <AlertCircle size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-cream-50/50" />
                    )}
                    <span>{feedback.text}</span>
                  </div>
                ) : null}
              </form>
            </Reveal>
          </div>
        </div>

        {/* Localização das unidades */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {units.map((unit, index) => {
            const embedUrl = getMapEmbedUrl(unit.address)
            return (
              <Reveal key={unit.id} delay={index * 80}>
                <div className="border border-cream-50/12">
                  <div className="border-b border-cream-50/10 px-5 py-4">
                    <p className="font-sans text-[0.6rem] uppercase tracking-[0.24em] text-gold-500">
                      {unit.location}
                    </p>
                    <p className="mt-1.5 text-sm text-cream-50/75">{unit.address}</p>
                  </div>
                  <div className="h-[280px] w-full overflow-hidden bg-ink-900">
                    {embedUrl ? (
                      <iframe
                        title={`Localização — ${unit.name}`}
                        src={embedUrl}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="h-full w-full grayscale-[35%]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <PendingTag tone="dark" label="Mapa a informar" />
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
