import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import Button from '../common/Button.jsx'
import {
  Target,
  Megaphone,
  Search,
  Users,
  ArrowRight,
} from 'lucide-react'

const servicesData = [
  {
    icon: Target,
    title: 'Контекстная реклама',
    description: 'Яндекс.Директ — показываем您的广告 тем, кто уже ищет ваши товары или услуги',
    path: '/services/context',
  },
  {
    icon: Megaphone,
    title: 'Таргетированная реклама',
    description: 'VK Ads, myTarget — точный показ по интересам, возрасту и поведению аудитории',
    path: '/services/targeted',
  },
  {
    icon: Search,
    title: 'SEO-продвижение',
    description: 'Выводим сайт в топ выдачи — бесплатный трафик из поисковых систем',
    path: '/services/seo',
  },
  {
    icon: Users,
    title: 'SMM',
    description: 'Ведение соцсетей, контент-стратегия, взаимодействие с аудиторией',
    path: '/services/smm',
  },
]

const ServicesGrid = () => {
  return (
    <Section id="services">
      <Container>
        {/* Заголовок секции */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Услуги
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
            Полный спектр
            <br />
            digital-услуг
          </h2>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            Подбираем оптимальный набор каналов для достижения ваших бизнес-целей
          </p>
        </div>

        {/* Сетка услуг */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, index) => (
            <Link
              key={service.path}
              to={service.path}
              className={`
                group relative p-8 md:p-10
                bg-surface rounded-2xl
                border border-border-light
                hover:border-accent/30
                transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                hover:shadow-card-hover hover:-translate-y-1
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Иконка */}
              <div className="w-14 h-14 rounded-xl bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <service.icon
                  size={28}
                  className="text-accent group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Контент */}
              <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Ссылка */}
              <div className="flex items-center gap-2 text-sm font-medium text-accent opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Подробнее
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </div>

              {/* Градиент при наведении */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="secondary" size="lg" className="group">
              Все услуги
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  )
}

export default ServicesGrid
