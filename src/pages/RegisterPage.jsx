import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { UserPlus, AlertCircle, Eye, EyeOff } from 'lucide-react'

const RegisterPage = () => {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Введите имя'
    if (!formData.email.trim()) {
      newErrors.email = 'Введите email'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Некорректный email'
    }
    if (!formData.phone.trim()) newErrors.phone = 'Введите телефон'
    if (!formData.password) {
      newErrors.password = 'Введите пароль'
    } else if (formData.password.length < 8) {
      newErrors.password = 'Минимум 8 символов'
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Пароли не совпадают'
    }
    if (!formData.agree) {
      newErrors.agree = 'Необходимо согласие'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)
    setTimeout(() => {
      const result = register(formData.name, formData.email, formData.phone, formData.password)
      setLoading(false)
      if (result.success) {
        navigate('/dashboard')
      }
    }, 1000)
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

  return (
    <>
      <Helmet>
        <title>Регистрация — Агентство интернет-рекламы</title>
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 min-h-screen flex items-center">
        <Container>
          <div className="max-w-md mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/5 flex items-center justify-center mb-6">
                <UserPlus size={28} className="text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
                Создать аккаунт
              </h1>
              <p className="text-text-secondary">
                Зарегистрируйтесь для оформления заказов
              </p>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {Object.keys(errors).length > 0 && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-error/5 border border-error/20 text-error text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  Проверьте правильность заполнения полей
                </div>
              )}

              <div>
                <label htmlFor="reg-name" className="block text-sm font-medium text-text-secondary mb-2">
                  Имя *
                </label>
                <input
                  id="reg-name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Иван Иванов"
                  className={`w-full px-4 py-3.5 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.name ? 'border-error' : 'border-border-light'}`}
                />
                {errors.name && <p className="mt-1.5 text-sm text-error">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="reg-email" className="block text-sm font-medium text-text-secondary mb-2">
                    Email *
                  </label>
                  <input
                    id="reg-email"
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
                  <label htmlFor="reg-phone" className="block text-sm font-medium text-text-secondary mb-2">
                    Телефон *
                  </label>
                  <input
                    id="reg-phone"
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
                <label htmlFor="reg-password" className="block text-sm font-medium text-text-secondary mb-2">
                  Пароль *
                </label>
                <div className="relative">
                  <input
                    id="reg-password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Минимум 8 символов"
                    className={`w-full px-4 py-3.5 pr-12 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.password ? 'border-error' : 'border-border-light'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-muted hover:text-text-secondary transition-colors"
                    aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="mt-1.5 text-sm text-error">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="reg-confirm" className="block text-sm font-medium text-text-secondary mb-2">
                  Повторите пароль *
                </label>
                <div className="relative">
                  <input
                    id="reg-confirm"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Повторите пароль"
                    className={`w-full px-4 py-3.5 pr-12 rounded-lg bg-surface border text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200 ${errors.confirmPassword ? 'border-error' : 'border-border-light'}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 min-w-[44px] min-h-[44px] flex items-center justify-center text-text-muted hover:text-text-secondary transition-colors"
                    aria-label={showConfirmPassword ? 'Скрыть пароль' : 'Показать пароль'}
                  >
                    {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.confirmPassword && <p className="mt-1.5 text-sm text-error">{errors.confirmPassword}</p>}
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

              <Button type="submit" loading={loading} fullWidth size="lg">
                Зарегистрироваться
              </Button>

              <p className="text-sm text-text-secondary text-center pt-2">
                Уже есть аккаунт?{' '}
                <Link to="/login" className="text-accent hover:underline font-medium">
                  Войти
                </Link>
              </p>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default RegisterPage
