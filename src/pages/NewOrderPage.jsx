import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { services } from '../data/services.js'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Package,
  FileText,
  CreditCard,
  Check,
} from 'lucide-react'

const steps = [
  { number: 1, title: 'Услуга', icon: Package },
  { number: 2, title: 'Детали', icon: FileText },
  { number: 3, title: 'Подтверждение', icon: CreditCard },
]

const NewOrderPage = () => {
  const navigate = useNavigate()
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    tariff: '',
    companyName: '',
    website: '',
    description: '',
    budget: '',
    contactName: '',
    phone: '',
    email: '',
    comment: '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const selectedService = services.find((s) => s.slug === formData.service)
  const selectedTariff = selectedService?.pricing.find((p) => p.name === formData.tariff)

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.service) newErrors.service = 'Выберите услугу'
    if (!formData.tariff) newErrors.tariff = 'Выберите тариф'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors = {}
    if (!formData.companyName.trim()) newErrors.companyName = 'Укажите название'
    if (!formData.contactName.trim()) newErrors.contactName = 'Укажите контактное лицо'
    if (!formData.phone.trim()) newErrors.phone = 'Укажите телефон'
    if (!formData.email.trim()) newErrors.email = 'Укажите email'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Некорректный email'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (currentStep === 1 && validateStep1()) {
      setCurrentStep(2)
    } else if (currentStep === 2 && validateStep2()) {
      setCurrentStep(3)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)
    // Имитация отправки
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSuccess(true)
    // Через 2 секунды переходим к списку заказов
    setTimeout(() => {
      navigate('/dashboard/orders')
    }, 2000)
  }

  if (isSuccess) {
    return (
      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="max-w-md mx-auto text-center py-16">
            <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={40} className="text-emerald-600" />
            </div>
            <h1 className="text-2xl font-bold text-text mb-3">Заказ успешно создан!</h1>
            <p className="text-text-secondary mb-6">
              Менеджер свяжется с вами в течение рабочего дня для обсуждения деталей
            </p>
            <p className="text-sm text-text-muted">
              Перенаправляем к списку заказов...
            </p>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <>
      <Helmet>
        <title>Новый заказ — Оформление заявки</title>
        <meta name="description" content="Оформление новой заявки на услугу" />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          {/* Навигация */}
          <button
            onClick={() => navigate(-1)}
            className="min-h-[44px] min-w-[44px] inline-flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-accent transition-colors mb-8 rounded-lg"
          >
            <ArrowLeft size={18} />
            Назад
          </button>

          <h1 className="text-2xl md:text-3xl font-bold text-text mb-8">Новый заказ</h1>

          {/* Шаги */}
          <div className="mb-10">
            <div className="flex items-center justify-between max-w-2xl mx-auto px-2">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  {/* Кружок шага */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      currentStep > step.number
                        ? 'bg-emerald-500 border-emerald-500'
                        : currentStep === step.number
                        ? 'bg-accent border-accent'
                        : 'bg-white border-border-light'
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check size={18} className="text-white" />
                    ) : (
                      <step.icon
                        size={18}
                        className={currentStep === step.number ? 'text-white' : 'text-text-muted'}
                      />
                    )}
                  </div>

                  {/* Линия между шагами */}
                  {index < steps.length - 1 && (
                    <div
                      className={`w-12 sm:w-24 h-0.5 mx-1 sm:mx-2 transition-all duration-300 ${
                        currentStep > step.number ? 'bg-emerald-500' : 'bg-border-light'
                      }`}
                    />
                  )}

                  {/* Подпись */}
                  <div className="ml-2 hidden sm:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? 'text-text' : 'text-text-muted'
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Контент шага */}
          <div className="max-w-3xl mx-auto">
            {/* Шаг 1: Выбор услуги */}
            {currentStep === 1 && (
              <div className="space-y-8">
                {/* Выбор услуги */}
                <div>
                  <label className="block text-sm font-medium text-text mb-3">
                    Выберите услугу <span className="text-error">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.slug}
                        onClick={() => updateField('service', service.slug)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                          formData.service === service.slug
                            ? 'border-accent bg-accent/5'
                            : 'border-border-light hover:border-accent/30'
                        }`}
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                            <service.icon size={20} className="text-accent" />
                          </div>
                          <div>
                            <div className="font-medium text-text">{service.title}</div>
                            <div className="text-xs text-text-secondary mt-1 line-clamp-2">
                              {service.shortDescription}
                            </div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.service && (
                    <div className="flex items-center gap-2 text-error text-sm mt-2">
                      <AlertCircle size={14} />
                      {errors.service}
                    </div>
                  )}
                </div>

                {/* Выбор тарифа */}
                {selectedService && (
                  <div>
                    <label className="block text-sm font-medium text-text mb-3">
                      Выберите тариф <span className="text-error">*</span>
                    </label>
                    <div className="space-y-3">
                      {selectedService.pricing.map((tariff) => (
                        <button
                          key={tariff.name}
                          onClick={() => updateField('tariff', tariff.name)}
                          className={`w-full p-5 rounded-xl border-2 text-left transition-all duration-200 ${
                            formData.tariff === tariff.name
                              ? 'border-accent bg-accent/5'
                              : 'border-border-light hover:border-accent/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="font-semibold text-text">{tariff.name}</span>
                              {tariff.popular && (
                                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-accent/10 text-accent">
                                  Популярный
                                </span>
                              )}
                            </div>
                            <span className="text-lg font-bold text-accent">{tariff.price} ₽</span>
                          </div>
                          <div className="text-sm text-text-secondary mb-3">
                            {tariff.description}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tariff.features.slice(0, 3).map((feature, i) => (
                              <span
                                key={i}
                                className="text-xs text-text-muted bg-background-alt px-2 py-1 rounded"
                              >
                                {feature}
                              </span>
                            ))}
                            {tariff.features.length > 3 && (
                              <span className="text-xs text-text-muted">
                                +{tariff.features.length - 3}
                              </span>
                            )}
                          </div>
                        </button>
                      ))}
                    </div>
                    {errors.tariff && (
                      <div className="flex items-center gap-2 text-error text-sm mt-2">
                        <AlertCircle size={14} />
                        {errors.tariff}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Шаг 2: Детали проекта */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Название компании <span className="text-error">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.companyName}
                      onChange={(e) => updateField('companyName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border bg-surface transition-colors ${
                        errors.companyName
                          ? 'border-error focus:border-error'
                          : 'border-border-light focus:border-accent'
                      } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                      placeholder="ООО Ромашка"
                    />
                    {errors.companyName && (
                      <div className="flex items-center gap-2 text-error text-sm mt-1">
                        <AlertCircle size={14} />
                        {errors.companyName}
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-text mb-2">
                      Сайт
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => updateField('website', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-border-light bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Описание проекта <span className="text-error">*</span>
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => updateField('description', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                    placeholder="Расскажите о вашем проекте, целях и задачах"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Желаемый бюджет
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => updateField('budget', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                    placeholder="50 000 ₽"
                  />
                </div>

                <div className="pt-4 border-t border-border-light">
                  <h3 className="text-sm font-medium text-text mb-4">Контактная информация</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Контактное лицо <span className="text-error">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.contactName}
                        onChange={(e) => updateField('contactName', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border bg-surface transition-colors ${
                          errors.contactName
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="Иван Иванов"
                      />
                      {errors.contactName && (
                        <div className="flex items-center gap-2 text-error text-sm mt-1">
                          <AlertCircle size={14} />
                          {errors.contactName}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text mb-2">
                        Телефон <span className="text-error">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border bg-surface transition-colors ${
                          errors.phone
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="+7 (999) 123-45-67"
                      />
                      {errors.phone && (
                        <div className="flex items-center gap-2 text-error text-sm mt-1">
                          <AlertCircle size={14} />
                          {errors.phone}
                        </div>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-text mb-2">
                        Email <span className="text-error">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={`w-full px-4 py-3 rounded-lg border bg-surface transition-colors ${
                          errors.email
                            ? 'border-error focus:border-error'
                            : 'border-border-light focus:border-accent'
                        } focus:outline-none focus:ring-2 focus:ring-accent/20`}
                        placeholder="mail@example.com"
                      />
                      {errors.email && (
                        <div className="flex items-center gap-2 text-error text-sm mt-1">
                          <AlertCircle size={14} />
                          {errors.email}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text mb-2">
                    Комментарий
                  </label>
                  <textarea
                    value={formData.comment}
                    onChange={(e) => updateField('comment', e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 rounded-lg border border-border-light bg-surface focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
                    placeholder="Дополнительная информация"
                  />
                </div>
              </div>
            )}

            {/* Шаг 3: Подтверждение */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-surface border border-border-light">
                  <h3 className="text-lg font-semibold text-text mb-4">Выбранная услуга</h3>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      {selectedService && <selectedService.icon size={24} className="text-accent" />}
                    </div>
                    <div>
                      <div className="font-semibold text-text">{selectedService?.title}</div>
                      <div className="text-sm text-text-secondary mt-1">
                        Тариф: {selectedTariff?.name}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-accent">{selectedTariff?.price} ₽</div>
                </div>

                <div className="p-6 rounded-xl bg-surface border border-border-light">
                  <h3 className="text-lg font-semibold text-text mb-4">Детали проекта</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Компания</dt>
                      <dd className="font-medium text-text">{formData.companyName}</dd>
                    </div>
                    {formData.website && (
                      <div className="flex justify-between">
                        <dt className="text-text-secondary">Сайт</dt>
                        <dd className="font-medium text-text">{formData.website}</dd>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Контактное лицо</dt>
                      <dd className="font-medium text-text">{formData.contactName}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Телефон</dt>
                      <dd className="font-medium text-text">{formData.phone}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-text-secondary">Email</dt>
                      <dd className="font-medium text-text">{formData.email}</dd>
                    </div>
                    {formData.budget && (
                      <div className="flex justify-between">
                        <dt className="text-text-secondary">Желаемый бюджет</dt>
                        <dd className="font-medium text-text">{formData.budget}</dd>
                      </div>
                    )}
                  </dl>
                  {formData.description && (
                    <div className="mt-4 pt-4 border-t border-border-light">
                      <dt className="text-text-secondary text-sm mb-1">Описание</dt>
                      <dd className="text-text">{formData.description}</dd>
                    </div>
                  )}
                </div>

                <div className="p-4 rounded-lg bg-blue-50 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={20} className="text-blue-600 shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-700">
                      Нажимая «Отправить заявку», вы соглашаетесь с{' '}
                      <Link to="/privacy" className="underline hover:no-underline">
                        политикой конфиденциальности
                      </Link>{' '}
                      и даёте согласие на обработку персональных данных
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Кнопки навигации */}
            <div className="flex items-center justify-between mt-10 pt-6 border-t border-border-light">
              <button
                onClick={handleBack}
                disabled={currentStep === 1}
                className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                  currentStep === 1
                    ? 'text-text-muted cursor-not-allowed'
                    : 'text-text-secondary hover:text-accent'
                }`}
              >
                <ArrowLeft size={18} />
                Назад
              </button>

              {currentStep < 3 ? (
                <Button variant="primary" size="md" onClick={handleNext}>
                  Далее
                  <ArrowRight size={18} />
                </Button>
              ) : (
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleSubmit}
                  loading={isSubmitting}
                >
                  Отправить заявку
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default NewOrderPage
