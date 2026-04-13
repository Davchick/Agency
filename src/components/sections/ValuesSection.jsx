import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { Eye, TrendingUp, Handshake, Rocket } from 'lucide-react'

const values = [
  {
    icon: Eye,
    title: 'Прозрачность',
    description: 'Вы видите все метрики, расходы и результаты. Никаких скрытых комиссий и непонятных строк в отчётах.',
  },
  {
    icon: TrendingUp,
    title: 'Результат',
    description: 'Мы работаем по KPI. Если реклама не приносит заявок — мы меняем подход, а не оправдываемся.',
  },
  {
    icon: Handshake,
    title: 'Партнёрство',
    description: 'Мы не подрядчик на одну задачу. Мы вникаем в ваш бизнес и думаем как владельцы.',
  },
  {
    icon: Rocket,
    title: 'Развитие',
    description: 'Постоянно учимся, тестируем новые инструменты и внедряем лучшие практики рынка.',
  },
]

const ValuesSection = () => {
  return (
    <Section>
      <Container>
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Ценности
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
              На чём мы строим работу
            </h2>
          </div>
        </FadeIn>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <FadeIn key={value.title} delay={index * 100}>
              <div
                className="group p-6 md:p-8 rounded-2xl bg-surface border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Иконка */}
                <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <value.icon
                    size={28}
                    className="text-accent group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Текст */}
                <h3 className="text-lg font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default ValuesSection
