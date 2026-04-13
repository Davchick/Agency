import { Link } from 'react-router-dom'
import Button from '../common/Button.jsx'
import Container from '../common/Container.jsx'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Анимированный градиентный фон */}
      <div className="absolute inset-0">
        <div
          className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] animate-float"
          style={{
            background: 'linear-gradient(135deg, #0071E3, #00C7FF)',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[100px] animate-float"
          style={{
            background: 'linear-gradient(135deg, #AF52DE, #FF2D55)',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-[40%] left-[60%] w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] animate-float"
          style={{
            background: 'linear-gradient(135deg, #34C759, #0071E3)',
            animationDelay: '4s',
          }}
        />
      </div>

      {/* Сетка точек */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1D1D1F 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Бейдж */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-pill bg-background-alt border border-border-light mb-8 animate-fade-in-up"
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-text-secondary">
              Агентство интернет-рекламы
            </span>
          </div>

          {/* Заголовок */}
          <h1
            className="text-5xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight text-text mb-6 animate-fade-in-up stagger-1"
          >
            Реклама, которая{' '}
            <span
              className="bg-gradient-to-r from-accent via-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              приносит результат
            </span>
          </h1>

          {/* Подзаголовок */}
          <p
            className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up stagger-2"
          >
            Настраиваем и ведём рекламные кампании в интернете. 
            Привлекаем клиентов, которые готовы покупать.
          </p>

          {/* CTA кнопки */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up stagger-3"
          >
            <Link to="/contact">
              <Button size="lg" className="group">
                Обсудить проект
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
            <Link to="/cases">
              <Button variant="secondary" size="lg">
                Смотреть кейсы
              </Button>
            </Link>
          </div>

          {/* Статистика под CTA */}
          <div
            className="mt-16 grid grid-cols-3 gap-8 animate-fade-in-up stagger-4"
          >
            {[
              { value: '150+', label: 'Проектов' },
              { value: '98%', label: 'Клиентов довольны' },
              { value: '5 лет', label: 'На рынке' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-text">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-border flex items-start justify-center p-1.5">
          <div className="w-1 h-2 bg-text-secondary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Hero
