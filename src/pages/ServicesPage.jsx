import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import ServicesHero from '../components/sections/ServicesHero.jsx'
import ProcessSteps from '../components/sections/ProcessSteps.jsx'
import ServicesCTA from '../components/sections/ServicesCTA.jsx'
import { services } from '../data/services.js'
import { ArrowRight } from 'lucide-react'

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Услуги — Агентство интернет-рекламы</title>
        <meta name="description" content="Контекстная реклама, таргетированная реклама, SEO-продвижение, SMM. Подберём оптимальное решение для вашего бизнеса." />
      </Helmet>

      <ServicesHero />

      {/* Сетка услуг */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative p-8 md:p-10 bg-surface rounded-2xl border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                    <Icon size={28} className="text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Подробнее
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>
              )
            })}
          </div>
        </Container>
      </Section>

      <ProcessSteps />

      {/* Почему выбирают нас — кратко */}
      <Section variant="alt">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-text mb-4">
              Цифры говорят сами за себя
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Завершённых проектов' },
              { value: '98%', label: 'Клиентов довольны' },
              { value: '35%', label: 'Снижение стоимости заявки' },
              { value: '5 лет', label: 'Опыта на рынке' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ServicesCTA />
    </>
  )
}

export default ServicesPage
