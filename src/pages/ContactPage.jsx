import { useState } from 'react'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { Mail, Phone, MapPin, Clock, Send, Check, Send as SendIcon } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Введите имя'
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите телефон'
    }
    if (!formData.agree) {
      newErrors.agree = 'Необходимо согласие на обработку данных'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    // Placeholder для API
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1500)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  if (submitted) {
    return (
      <>
        <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
          <Container>
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto rounded-full bg-success/10 flex items-center justify-center mb-8">
                <Check size={40} className="text-success" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
                Заявка отправлена!
              </h1>
              <p className="text-lg text-text-secondary mb-8">
                Спасибо за обращение. Мы свяжемся с вами в течение рабочего дня.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ name: '', email: '', phone: '', message: '', agree: false })
                }}
                className="text-accent hover:underline font-medium"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          </Container>
        </Section>
      </>
    )
  }

  return (
    <>
      {/* Hero */}
      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <Container>
          <div className="max-w-3xl">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Контакты
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-text">
              Свяжитесь{' '}
              <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
                с нами
              </span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              Расскажите о вашем проекте — мы предложим решение 
              и рассчитаем стоимость
            </p>
          </div>
        </Container>
      </Section>

      {/* Форма + Контакты */}
      <Section variant="alt">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
            {/* Форма */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Ваше имя *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Иванов"
                    className={`w-full px-4 py-3.5 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.name ? 'border-error' : 'border-border-light'}`}
                  />
                  {errors.name && <p className="mt-1.5 text-sm text-error">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ivan@company.ru"
                      className={`w-full px-4 py-3.5 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.email ? 'border-error' : 'border-border-light'}`}
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-error">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                      Телефон *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className={`w-full px-4 py-3.5 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.phone ? 'border-error' : 'border-border-light'}`}
                    />
                    {errors.phone && <p className="mt-1.5 text-sm text-error">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Расскажите о вашем проекте
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Опишите задачу, бюджет и сроки..."
                    rows={5}
                    className="w-full px-4 py-3.5 rounded-lg bg-surface border border-border-light text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 resize-none"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agree"
                      checked={formData.agree}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border-border-light text-accent focus:ring-accent focus:ring-offset-0 cursor-pointer"
                    />
                    <span className="text-sm text-text-secondary">
                      Я согласен на{' '}
                      <a href="/privacy" className="text-accent hover:underline">
                        обработку персональных данных
                      </a>{' '}
                      *
                    </span>
                  </label>
                  {errors.agree && <p className="mt-1.5 text-sm text-error ml-8">{errors.agree}</p>}
                </div>

                <Button
                  type="submit"
                  loading={loading}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {!loading && <SendIcon size={18} />}
                  Отправить заявку
                </Button>
              </form>
            </div>

            {/* Контактная информация */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-text mb-8">
                Контактные данные
              </h2>

              <div className="space-y-6">
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Phone size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-0.5">Телефон</div>
                    <div className="font-medium text-text group-hover:text-accent transition-colors">
                      +7 (900) 123-45-67
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@ledovskikh.agency"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0 group-hover:bg-accent/10 transition-colors">
                    <Mail size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-0.5">Email</div>
                    <div className="font-medium text-text group-hover:text-accent transition-colors">
                      info@ledovskikh.agency
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-0.5">Адрес</div>
                    <div className="font-medium text-text">Россия</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-0.5">Время работы</div>
                    <div className="font-medium text-text">Пн-Пт, 9:00 — 19:00</div>
                  </div>
                </div>
              </div>

              {/* Соцсети */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
                  Мы в соцсетях
                </h3>
                <div className="flex gap-3">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-background-alt border border-border-light text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
                    aria-label="Telegram"
                  >
                    <Send size={20} />
                  </a>
                </div>
              </div>

              {/* Карта placeholder */}
              <div className="mt-10 rounded-xl bg-background-alt border border-border-light overflow-hidden aspect-video flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={32} className="mx-auto text-text-muted mb-3" />
                  <p className="text-sm text-text-muted">
                    Карта будет добавлена позже
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default ContactPage
