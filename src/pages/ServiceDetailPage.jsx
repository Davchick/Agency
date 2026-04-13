import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { services } from '../data/services.js'
import { ArrowLeft, Check, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border-light">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-base md:text-lg font-medium text-text group-hover:text-accent transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-text-secondary shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}
      >
        <p className="text-text-secondary leading-relaxed">{answer}</p>
      </div>
    </div>
  )
}

const ServiceDetailPage = () => {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    return <Navigate to="/services" replace />
  }

  const Icon = service.icon

  return (
    <>
      <Helmet>
        <title>{service.title} — Агентство интернет-рекламы</title>
        <meta name="description" content={service.fullDescription} />
      </Helmet>

      {/* Hero */}
      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <Container>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Назад к услугам
          </Link>

          <div className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-accent/5 flex items-center justify-center mb-8">
              <Icon size={32} className="text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-text">
              {service.title}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              {service.fullDescription}
            </p>
          </div>
        </Container>
      </Section>

      {/* Что включено */}
      <Section variant="alt">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-10">
            Что включено
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border-light">
                <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-success" />
                </div>
                <span className="text-text-secondary">{feature}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Почему выбирают нас */}
      <Section>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-10">
            Почему выбирают нас
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyUs.map((reason) => (
              <div key={reason} className="p-6 rounded-xl bg-background-alt border border-border-light">
                <Check size={20} className="text-accent mb-3" />
                <p className="text-sm text-text-secondary leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Тарифы */}
      <Section variant="alt">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-10">
            Тарифы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.pricing.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'border-accent shadow-card-hover bg-surface'
                    : 'border-border-light bg-surface hover:shadow-card'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full">
                    Популярный
                  </span>
                )}
                <h3 className="text-xl font-semibold text-text mb-2">{plan.name}</h3>
                <div className="mb-1">
                  <span className="text-3xl font-bold text-text">{plan.price}</span>
                  <span className="text-text-secondary ml-1">₽/мес</span>
                </div>
                <p className="text-sm text-text-secondary mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <Button
                    variant={plan.popular ? 'primary' : 'secondary'}
                    fullWidth
                  >
                    Выбрать
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-10">
            Частые вопросы
          </h2>
          <div className="max-w-3xl">
            {service.faq.map((item) => (
              <AccordionItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]" style={{ background: 'white' }} />
        </div>
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Обсудим ваш проект?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Оставьте заявку — подберём оптимальный тариф под ваши задачи
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 shadow-lg">
                Оставить заявку
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ServiceDetailPage
