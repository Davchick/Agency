import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { TrendingUp, Settings, BarChart3, Users } from 'lucide-react'

const advantages = [
  {
    icon: TrendingUp,
    title: 'Рост с первого дня',
    description: 'Запускаем кампании за 3-5 дней. Первые заявки — в первую неделю работы.',
  },
  {
    icon: Settings,
    title: 'Индивидуальный подход',
    description: 'Каждый проект уникален. Анализируем вашу нишу и строим стратегию с нуля.',
  },
  {
    icon: BarChart3,
    title: 'Прозрачная аналитика',
    description: 'Еженедельные отчёты с понятными метриками. Вы всегда знаете, куда идёт бюджет.',
  },
  {
    icon: Users,
    title: 'Партнёрские отношения',
    description: 'Мы не подрядчик, мы — часть вашей команды. На связи 24/7 в рабочее время.',
  },
]

const Advantages = () => {
  return (
    <Section variant="alt">
      <Container>
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Преимущества
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
              Почему выбирают нас
            </h2>
          </div>
        </FadeIn>

        {/* Сетка */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <FadeIn key={item.title} delay={index * 100}>
              <div
                className="text-center group"
              >
                {/* Иконка */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                  <item.icon
                    size={28}
                    className="text-accent group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Текст */}
                <h3 className="text-lg font-semibold text-text mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Advantages
