import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { Search, Map, Rocket, LineChart, FileText } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Аудит',
    description: 'Анализируем текущую ситуацию, конкурентов и целевую аудиторию',
  },
  {
    icon: Map,
    title: 'Стратегия',
    description: 'Разрабатываем план действий с конкретными KPI и сроками',
  },
  {
    icon: Rocket,
    title: 'Запуск',
    description: 'Настраиваем и запускаем рекламные кампании за 3-5 дней',
  },
  {
    icon: LineChart,
    title: 'Оптимизация',
    description: 'Еженедельно анализируем и улучшаем показатели',
  },
  {
    icon: FileText,
    title: 'Отчёт',
    description: 'Предоставляем понятные отчёты с метриками и рекомендациями',
  },
]

const ProcessSteps = () => {
  return (
    <Section variant="alt">
      <Container>
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Процесс
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
              Как мы работаем
            </h2>
          </div>
        </FadeIn>

        {/* Steps */}
        <div className="relative">
          {/* Линия (десктоп) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border-light" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <FadeIn key={step.title} delay={index * 80}>
                <div className="relative text-center lg:text-left">
                  {/* Номер шага */}
                  <div className="w-24 h-24 mx-auto lg:mx-0 rounded-full bg-surface border-2 border-border-light flex items-center justify-center mb-6 relative z-10 group hover:border-accent/30 hover:shadow-card transition-all duration-300">
                    <step.icon size={32} className="text-accent" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                  </div>

                  {/* Текст */}
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default ProcessSteps
