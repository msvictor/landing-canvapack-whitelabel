import { FC } from 'react';
import {
  CalendarCover,
  CalendarManual,
  CalendarPreview,
  Cleaning,
  Depilation,
  FiCheckCircle,
  FiXCircle,
  MainBanner,
  PARSE_INDICATOR,
  PARSE_SEPARATOR,
  Stretching,
  Warranty,
  iPhone,
} from '~/utils';
import {
  AboutSectionWrapper,
  Banner,
  BenefitsSectionWrapper,
  BodyText,
  Button,
  ButtonWrapper,
  Image,
  ImageCard,
  Section,
  SectionTitle,
  VideoSectionWrapper,
  WarrantySectionWrapper,
  Wrapper,
} from './styles';

type Props = {
  desktop?: boolean;
};

const Home: FC<Props> = ({ desktop }) => (
  <Wrapper>
    <Banner image={MainBanner} />

    <Section contrast>
      <VideoSectionWrapper>
        <div>
          <SectionTitle
            alignment={desktop ? 'left' : 'center'}
            title={`Você está cansado de ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}perder horas${PARSE_SEPARATOR.CONTRAST} na frente do celular ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}para criar suas postagens?${PARSE_SEPARATOR.CONTRAST}`}
          />

          <BodyText
            alignment={desktop ? 'left' : 'center'}
            texts={[
              `Então, eu tenho uma ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}boa notícia${PARSE_SEPARATOR.CONTRAST} para te dar, você não vai mais precisar ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}passar por essa situação.${PARSE_SEPARATOR.CONTRAST}`,
              `O ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}Pack de Estética${PARSE_SEPARATOR.CONTRAST} foi criado ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}para ajudar profissionais${PARSE_SEPARATOR.CONTRAST} como você, que querem ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}otimizar tempo${PARSE_SEPARATOR.CONTRAST} na criação das postagens e deixar o perfil atraente, para ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}conquistar mais clientes.${PARSE_SEPARATOR.CONTRAST}`,
            ]}
          />
        </div>

        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/STo8EKNkXzo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={false}
        />
      </VideoSectionWrapper>
    </Section>

    <Section>
      <SectionTitle
        title="Veja o que você vai receber"
        subtitle="ao adquirir o pack de estética"
      />

      <Section>
        <BenefitsSectionWrapper>
          <SectionTitle
            alignment={desktop ? 'left' : 'center'}
            title={`${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}41 Templates${PARSE_SEPARATOR.CONTRAST} para feed (1080x1080)`}
          />

          <section>
            <ImageCard image={Cleaning} />
            <ImageCard image={Stretching} />
            <ImageCard image={Depilation} />
          </section>

          <SectionTitle
            alignment={desktop ? 'left' : 'center'}
            title={`${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}Bônus${PARSE_SEPARATOR.CONTRAST} - Calendário de conteúdo 2023 `}
          />

          <section>
            <ImageCard image={CalendarCover} />
            <ImageCard image={CalendarManual} />
            <ImageCard image={CalendarPreview} />
          </section>
        </BenefitsSectionWrapper>
      </Section>
    </Section>

    <Section contrast>
      <AboutSectionWrapper>
        <div>
          <SectionTitle
            alignment={desktop ? 'left' : 'center'}
            title="O que é o pack ?"
          />
          <section>
            <BodyText
              icon={FiCheckCircle}
              alignment={desktop ? 'left' : 'center'}
              texts={[
                'Mais de 40 templates no Canva para você otimizar seu tempo.',
                'Templates profissionais para profissionalizar o seu perfil.',
                'Simples e fácil de usar. Altere cores, imagens e textos.',
              ]}
            />
          </section>
        </div>
        {desktop && <Image alt="image" src={iPhone} />}
        <div>
          <SectionTitle
            alignment={desktop ? 'right' : 'center'}
            title={`O que o pack ${PARSE_SEPARATOR.CONTRAST}${PARSE_INDICATOR.CONTRAST}não${PARSE_SEPARATOR.CONTRAST} é?`}
          />
          <section>
            <BodyText
              icon={FiXCircle}
              alignment={desktop ? 'right' : 'center'}
              texts={[
                'Não é um plano de assinatura que você fica pagando todo mês.',
                'Não é um único pack de templates idênticos e sem autenticidade.',
                'Não é complicado de editar, mesmo que você seja iniciante no Canva.',
              ]}
            />
          </section>
        </div>
        {!desktop && <Image alt="image" src={iPhone} />}
      </AboutSectionWrapper>

      <ButtonWrapper>
        <Button label="EU QUERO O PACK" />
      </ButtonWrapper>
    </Section>

    <Section>
      <WarrantySectionWrapper>
        <SectionTitle title="Garantia" contrast />
        <Image alt="image" src={Warranty} />
        <BodyText
          contrast
          alignment="center"
          texts={[
            'Se por algum motivo, você não gostar do conteúdo do Pack Advogados e achar que ele não serve para você, é só solicitar o reembolso que devolveremos 100% do seu dinheiro. Sem burocracia nenhuma!',
          ]}
        />
      </WarrantySectionWrapper>
    </Section>
  </Wrapper>
);

export default Home;
