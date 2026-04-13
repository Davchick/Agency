import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { LogIn, AlertCircle, Eye, EyeOff } from 'lucide-react'

const LoginPage = () => {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    if (!email.trim() || !password) {
      setError('Заполните все поля')
      return
    }

    setLoading(true)
    // Placeholder: mock-авторизация
    setTimeout(() => {
      const result = login(email, password)
      setLoading(false)
      if (result.success) {
        navigate('/dashboard')
      }
    }, 1000)
  }

  return (
    <>
      <Helmet>
        <title>Вход в аккаунт — Агентство интернет-рекламы</title>
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24 min-h-screen flex items-center">
        <Container>
          <div className="max-w-md mx-auto">
            {/* Заголовок */}
            <div className="text-center mb-10">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-accent/5 flex items-center justify-center mb-6">
                <LogIn size={28} className="text-accent" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
                Вход в аккаунт
              </h1>
              <p className="text-text-secondary">
                Введите данные для входа в личный кабинет
              </p>
            </div>

            {/* Форма */}
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {error && (
                <div className="flex items-center gap-3 p-4 rounded-lg bg-error/5 border border-error/20 text-error text-sm">
                  <AlertCircle size={18} className="shrink-0" />
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-text-secondary mb-2">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ivan@company.ru"
                  className="w-full px-4 py-3.5 rounded-lg bg-surface border border-border-light text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
                />
              </div>

              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-text-secondary mb-2">
                  Пароль
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    className="w-full px-4 py-3.5 pr-12 rounded-lg bg-surface border border-border-light text-text placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-all duration-200"
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
              </div>

              <Button type="submit" loading={loading} fullWidth size="lg">
                Войти
              </Button>

              <div className="text-center space-y-2 pt-2">
                <p className="text-sm text-text-secondary">
                  Нет аккаунта?{' '}
                  <Link to="/register" className="text-accent hover:underline font-medium">
                    Зарегистрироваться
                  </Link>
                </p>
              </div>
            </form>

            {/* Преимущества */}
            <div className="mt-12 p-6 rounded-xl bg-background-alt border border-border-light">
              <h3 className="text-sm font-semibold text-text mb-4">
                Зачем регистрироваться?
              </h3>
              <ul className="space-y-3">
                {[
                  'Оформлять заказы на услуги',
                  'Отслеживать статус заказов',
                  'Видеть историю обращений',
                  'Быстро повторять заказы',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}

export default LoginPage
