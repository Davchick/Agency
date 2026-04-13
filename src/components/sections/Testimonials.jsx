import { useState, useEffect, useCallback } from 'react'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Алексей Петров',
    role: 'CEO, TechStart',
    text: 'За 3 месяца работы стоимость заявки снизилась на 40%. Команда глубоко погрузилась в нашу нишу и нашла каналы, которые раньше не работали.',
    rating: 5,
  },
  {
    name: 'Мария Козлова',
    role: 'Маркетинг-директор, ModaShop',
    text: 'Наконец-то агентство, которое говорит на языке цифр, а не обещаний. Еженедельные отчёты, понятная аналитика, реальный ROI.',
    rating: 5,
  },
  {
    name: 'Дмитрий Волков',
    role: 'Основатель, ServicePro',
    text: 'Работаем вместе уже год. Количество обращений выросло в 3 раза, а стоимость привлечения клиента стала ниже на 35%.',
    rating: 5,
  },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goTo = useCallback(
    (index) => {
      if (isAnimating) return
      setIsAnimating(true)
      setCurrent(index)
      setTimeout(() => setIsAnimating(false), 500)
    },
    [isAnimating]
  )

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <Section>
      <Container>
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Отзывы
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
              Что говорят клиенты
            </h2>
          </div>
        </FadeIn>

        {/* Слайдер */}
        <FadeIn delay={200}>
          <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-surface rounded-2xl p-8 md:p-12 border border-border-light shadow-card text-center">
                      {/* Звёзды */}
                      <div className="flex justify-center gap-1 mb-6">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-warning fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>

                      {/* Цитата */}
                      <Quote
                        size={32}
                        className="mx-auto mb-6 text-accent/20"
                      />
                      <p className="text-lg md:text-xl text-text leading-relaxed mb-8">
                        {testimonial.text}
                      </p>

                      {/* Автор */}
                      <div>
                        <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 flex items-center justify-center mb-3">
                          <span className="text-lg font-semibold text-accent">
                            {testimonial.name.charAt(0)}
                          </span>
                        </div>
                        <div className="font-semibold text-text">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Навигация */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full border border-border-light text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Точки */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${current === index
                      ? 'w-8 bg-accent'
                      : 'bg-border hover:bg-border-dark'
                    }
                  `}
                  aria-label={`Отзыв ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2 rounded-full border border-border-light text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
              aria-label="Следующий отзыв"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}

export default Testimonials
