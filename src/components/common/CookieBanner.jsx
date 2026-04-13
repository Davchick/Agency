import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { X, Settings } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'cookie_consent'

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!consent) {
      // Показать через 1 секунду после загрузки
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-surface border border-border-light rounded-2xl shadow-card p-5 md:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm text-text mb-2">
                Мы используем файлы cookie для корректной работы сайта, анализа поведения пользователей
                и улучшения качества обслуживания.
              </p>
              <p className="text-xs text-text-secondary">
                Продолжая использовать сайт, вы соглашаетесь с{' '}
                <Link to="/privacy" className="text-accent hover:underline">
                  политикой конфиденциальности
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={handleAccept}
                className="px-5 py-2.5 text-sm font-medium rounded-full bg-accent text-white hover:bg-accent-hover transition-colors"
              >
                Принять
              </button>
              <Link
                to="/privacy"
                className="p-2.5 rounded-full text-text-secondary hover:text-text hover:bg-background-alt transition-colors"
                aria-label="Подробнее"
              >
                <Settings size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
