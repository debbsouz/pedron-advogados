import { PageHeader } from '@/components/ui/PageHeader'
import { PendingTag } from '@/components/ui/PendingTag'
import { Reveal } from '@/components/ui/Reveal'
import { useSeo } from '@/lib/useSeo'
import { getMailLink } from '@/lib/contact'
import { contact, seo, showPlaceholders, site } from '@/config/site'

export function Privacy() {
  useSeo({ title: seo.privacy.title, description: seo.privacy.description, path: '/politica-de-privacidade' })

  const mailLink = getMailLink('Privacidade e proteção de dados')

  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Política de Privacidade"
        description="Esta política descreve como o PEDRON ADVOGADOS realiza o tratamento de dados pessoais no contexto de suas atividades institucionais e de contato, em conformidade com a Lei nº 13.709/2018 (LGPD)."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            {showPlaceholders ? (
              <div className="mb-12 border-l-2 border-gold-500/60 bg-cream-200/60 px-5 py-4">
                <PendingTag label="Revisão jurídica pendente" />
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Este documento deve ser revisado e validado pelo escritório e, se necessário, por
                  assessoria especializada em proteção de dados antes da publicação, com a inclusão
                  da identificação completa do controlador e do canal do encarregado de dados.
                </p>
              </div>
            ) : null}

            <div className="legal-prose">
              <h2>1. Informações gerais</h2>
              <p>
                Esta Política de Privacidade aplica-se ao site institucional do {site.name} e aos
                contatos realizados por meio dos canais disponibilizados nesta página. Ao navegar
                pelo site ou enviar uma mensagem, o visitante declara ter lido e compreendido as
                condições descritas neste documento.
              </p>

              <h2>2. Dados pessoais tratados</h2>
              <p>
                São tratados apenas os dados necessários ao atendimento das finalidades descritas
                nesta política, entre os quais podem estar:
              </p>
              <ul>
                <li>Dados de identificação e contato, como nome, e-mail e telefone, informados voluntariamente em formulários ou canais de atendimento;</li>
                <li>Conteúdo das mensagens encaminhadas ao escritório;</li>
                <li>Dados técnicos de navegação, como endereço IP, tipo de dispositivo e páginas acessadas, quando aplicável.</li>
              </ul>

              <h2>3. Finalidades do tratamento</h2>
              <ul>
                <li>Responder solicitações, dúvidas e pedidos de contato;</li>
                <li>Viabilizar a análise preliminar de demandas encaminhadas ao escritório;</li>
                <li>Manter registros de atendimento e cumprir obrigações legais e regulatórias;</li>
                <li>Aprimorar a experiência de navegação e a segurança do site.</li>
              </ul>

              <h2>4. Bases legais</h2>
              <p>
                O tratamento fundamenta-se nas hipóteses legais previstas na LGPD, especialmente o
                consentimento do titular, o cumprimento de obrigação legal ou regulatória, o
                exercício regular de direitos e o legítimo interesse do escritório, sempre
                observados os direitos e as liberdades fundamentais do titular.
              </p>

              <h2>5. Compartilhamento de dados</h2>
              <p>
                Os dados pessoais não são comercializados. Podem ser compartilhados apenas quando
                necessário ao atendimento das finalidades informadas, com prestadores de serviços
                que atuem em nome do escritório, ou em razão de determinação legal ou judicial.
              </p>

              <h2>6. Direitos do titular</h2>
              <p>O titular pode solicitar, a qualquer momento:</p>
              <ul>
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso, correção ou atualização de seus dados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Informações sobre compartilhamentos realizados;</li>
                <li>Revogação do consentimento, quando o tratamento tiver essa base legal.</li>
              </ul>

              <h2>7. Cookies e tecnologias similares</h2>
              <p>
                O site pode utilizar cookies estritamente necessários ao seu funcionamento e, caso
                sejam implementadas ferramentas de análise de tráfego, o visitante será informado de
                forma adequada, com a possibilidade de gerenciar as preferências correspondentes.
              </p>

              <h2>8. Segurança e retenção</h2>
              <p>
                São adotadas medidas técnicas e administrativas razoáveis para proteger os dados
                pessoais contra acessos não autorizados, perdas e alterações indevidas. Os dados são
                mantidos apenas pelo período necessário ao cumprimento das finalidades informadas ou
                de obrigações legais aplicáveis.
              </p>

              <h2>9. Contato</h2>
              <p>
                Solicitações relacionadas à proteção de dados podem ser encaminhadas ao escritório
                pelos canais institucionais informados neste site.
              </p>
              {mailLink ? (
                <p>
                  E-mail para assuntos de privacidade: <a href={mailLink}>{contact.email}</a>
                </p>
              ) : (
                <p className="flex flex-wrap items-center gap-3">
                  <span>Canal do encarregado de dados (DPO) ainda não definido.</span>
                  {showPlaceholders ? <PendingTag label="Contato pendente" /> : null}
                </p>
              )}

              <h2>10. Atualizações desta política</h2>
              <p>
                Esta política pode ser atualizada para refletir alterações legislativas ou
                operacionais. Recomenda-se a consulta periódica desta página.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
