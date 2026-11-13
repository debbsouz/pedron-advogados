import { Link } from 'react-router-dom'
import { PageHeader } from '@/components/ui/PageHeader'
import { PendingTag } from '@/components/ui/PendingTag'
import { Reveal } from '@/components/ui/Reveal'
import { useSeo } from '@/lib/useSeo'
import { seo, showPlaceholders, site } from '@/config/site'

export function LegalNotice() {
  useSeo({ title: seo.legal.title, description: seo.legal.description, path: '/aviso-legal' })

  return (
    <>
      <PageHeader
        eyebrow="Institucional"
        title="Aviso Legal"
        description="Informações sobre a natureza do conteúdo publicado neste site e sobre a forma de comunicação adotada pelo escritório."
      />

      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl">
            <div className="legal-prose">
              <h2>Natureza do conteúdo</h2>
              <p>
                Este site tem caráter exclusivamente informativo e institucional. Seu conteúdo tem
                por objetivo apresentar o {site.name}, sua forma de trabalho e os canais de contato
                disponíveis, não constituindo oferta de serviços, captação de clientela ou
                consulta jurídica.
              </p>

              <h2>Comunicação em conformidade com a OAB</h2>
              <p>
                A comunicação institucional observa o Código de Ética e Disciplina da Ordem dos
                Advogados do Brasil e o Provimento nº 205/2021 do Conselho Federal da OAB. Em razão
                disso:
              </p>
              <ul>
                <li>Não são divulgadas promessas de resultado, garantias de êxito ou superlativos;</li>
                <li>Não são apresentados números, prêmios ou estatísticas sem comprovação documental;</li>
                <li>Não são publicados depoimentos ou resultados de clientes sem a verificação de sua adequação às normas aplicáveis;</li>
                <li>As informações são apresentadas de forma sóbria, objetiva e institucional.</li>
              </ul>

              <h2>Ausência de relação profissional</h2>
              <p>
                O envio de mensagem por meio dos canais deste site não estabelece, por si só, relação
                de patrocínio ou de prestação de serviços advocatícios. A constituição do escritório
                depende de avaliação prévia do caso, de verificação de eventual conflito de
                interesses e da formalização contratual correspondente.
              </p>

              <h2>Informações e registros profissionais</h2>
              <p>
                Dados institucionais como razão social, CNPJ, endereço, telefone de contato e
                inscrições profissionais dos advogados devem ser confirmados e informados pelo
                escritório antes da publicação definitiva.
              </p>
              {showPlaceholders ? (
                <p className="flex flex-wrap items-center gap-3">
                  <span>Informações institucionais oficiais pendentes de fornecimento.</span>
                  <PendingTag label="Dados pendentes" />
                </p>
              ) : null}

              <h2>Propriedade intelectual</h2>
              <p>
                Textos, imagens, marca, identidade visual e demais elementos deste site são de
                titularidade do {site.name} ou utilizados com autorização. É vedada a reprodução,
                distribuição ou modificação sem autorização prévia e expressa.
              </p>

              <h2>Links externos</h2>
              <p>
                Eventuais links para sites de terceiros são disponibilizados apenas para
                conveniência. O escritório não se responsabiliza pelo conteúdo, pelas políticas ou
                pelas práticas adotadas por esses sites.
              </p>

              <h2>Proteção de dados</h2>
              <p>
                O tratamento de dados pessoais realizado no contexto deste site é descrito na{' '}
                <Link to="/politica-de-privacidade">Política de Privacidade</Link>.
              </p>

              <h2>Legislação aplicável</h2>
              <p>
                Este aviso é regido pela legislação brasileira. Eventuais controvérsias devem ser
                submetidas ao foro competente, observadas as normas aplicáveis à advocacia.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
