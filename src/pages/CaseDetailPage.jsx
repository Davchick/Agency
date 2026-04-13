import { Link, useParams, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { cases } from '../data/cases.js'
import { ArrowLeft, TrendingUp, Quote } from 'lucide-react'

const CaseDetailPage = () => {
  const { slug } = useParams()
  const caseItem = cases.find((c) => c.slug === slug)

  if (!caseItem) {
    return <Navigate to="/cases" replace />
  }

  return (
    <>
      <Helmet>
        <title>{caseItem.title} — Кейсы агентства</title>
        <meta name="description" content={caseItem.description} />
      </Helmet>

      {/* Hero */}
      <Section className="pt-32 md:pt-36 lg:pt-40 pb-8 md:pb-12 lg:pb-16">
        <Container>
          <Link
            to="/cases"
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Назад к кейсам
          </Link>

          <div className="max-w-4xl">
            <span className="inline-block px-3 py-1 bg-accent/5 text-accent text-sm font-medium rounded-full mb-6">
              {caseItem.industryLabel}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight text-text mb-6">
              {caseItem.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              {caseItem.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Изображение */}
      <Section className="!py-0">
        <Container>
          <div className="rounded-2xl overflow-hidden border border-border-light">
            <img
              src={caseItem.image}
              alt={caseItem.title}
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
        </Container>
      </Section>

      {/* Результаты */}
      <Section variant="alt">
        <Container>
          <h2 className="text-2xl md:text-3xl font-semibold text-text mb-10 text-center">
            Результаты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {caseItem.results.map((result) => (
              <div
                key={result.label}
                className="text-center p-6 rounded-xl bg-surface border border-border-light"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <TrendingUp size={20} className="text-success" />
                  <span className="text-3xl font-bold text-text">{result.value}</span>
                </div>
                <span className="text-sm text-text-secondary">{result.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Задача и Решение */}
      <Section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Задача
              </span>
              <p className="mt-4 text-text-secondary leading-relaxed text-lg">
                {caseItem.task}
              </p>
            </div>
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Решение
              </span>
              <p className="mt-4 text-text-secondary leading-relaxed text-lg">
                {caseItem.solution}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Отзыв */}
      <Section variant="alt">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <Quote size={40} className="mx-auto text-accent/20 mb-6" />
            <blockquote className="text-xl md:text-2xl text-text leading-relaxed mb-8 font-medium">
              «{caseItem.testimonial.text}»
            </blockquote>
            <div>
              <div className="w-14 h-14 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                <span className="text-xl font-semibold text-accent">
                  {caseItem.testimonial.author.charAt(0)}
                </span>
              </div>
              <div className="font-semibold text-text">
                {caseItem.testimonial.author}
              </div>
              <div className="text-sm text-text-secondary">
                {caseItem.testimonial.role}
              </div>
            </div>
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
              Хотите такой же результат?
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Обсудим ваш проект и предложим решение
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-accent hover:bg-white/90 shadow-lg">
                Обсудить проект
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default CaseDetailPage
