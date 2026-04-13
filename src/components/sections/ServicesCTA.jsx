import { useState } from 'react'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import Button from '../common/Button.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { services } from '../../data/services.js'
import { Send, Check } from 'lucide-react'

const ServicesCTA = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Placeholder для API
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', phone: '', service: '' })
    }, 1500)
  }

  if (submitted) {
    return (
      <Section variant="accent">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]" style={{ background: 'white' }} />
        </div>
        <Container className="relative z-10">
          <FadeIn>
            <div className="max-w-xl mx-auto text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-6">
                <Check size={32} className="text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Заявка отправлена!
              </h2>
              <p className="text-white/80 mb-8">
                Мы свяжемся с вами в ближайшее время для обсуждения деталей.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-white underline hover:no-underline"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          </FadeIn>
        </Container>
      </Section>
    )
  }

  return (
    <Section variant="accent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]" style={{ background: 'white' }} />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Быстрая заявка
              </h2>
              <p className="text-white/80 text-lg">
                Оставьте контакты — мы перезвоним и подберём услугу
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="cta-name" className="block text-sm font-medium text-white/70 mb-2">
                Ваше имя
              </label>
              <input
                id="cta-name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Иван Иванов"
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="cta-phone" className="block text-sm font-medium text-white/70 mb-2">
                Телефон
              </label>
              <input
                id="cta-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+7 (___) ___-__-__"
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="cta-service" className="block text-sm font-medium text-white/70 mb-2">
                Какая услуга интересует?
              </label>
              <select
                id="cta-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all duration-200 appearance-none"
              >
                <option value="" className="bg-text text-white">Выберите услугу</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug} className="bg-text text-white">
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <Button
              type="submit"
              loading={loading}
              className="w-full bg-white text-accent hover:bg-white/90 py-4 text-lg"
            >
              {!loading && <Send size={18} />}
              Отправить заявку
            </Button>

            <p className="text-xs text-white/50 text-center">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="/privacy" className="underline hover:no-underline">
                политикой конфиденциальности
              </a>
            </p>
          </form>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}

export default ServicesCTA
