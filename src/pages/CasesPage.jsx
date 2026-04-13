import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import CasesHero from '../components/sections/CasesHero.jsx'
import CasesGrid from '../components/sections/CasesGrid.jsx'
import { ArrowRight } from 'lucide-react'

const CasesPage = () => {
  return (
    <>
      <Helmet>
        <title>Кейсы — Агентство интернет-рекламы</title>
        <meta name="description" content="Реальные результаты наших клиентов. Контекстная реклама, таргет, SEO, SMM — с конкретными цифрами." />
      </Helmet>

      <CasesHero />
      <CasesGrid />

      {/* CTA */}
      <Section variant="accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]" style={{ background: 'white' }} />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Хотите такой же результат?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Расскажите о вашем бизнесе — мы предложим стратегию
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 shadow-lg group">
                Обсудить проект
                <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default CasesPage
