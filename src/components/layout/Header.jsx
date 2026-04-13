import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../common/Button.jsx'
import { Menu, X, User, LogOut, Package, Settings } from 'lucide-react'
import { useAuth } from '../../context/AuthContext.jsx'

const navItems = [
  { label: 'Главная', path: '/' },
  { label: 'О нас', path: '/about' },
  { label: 'Услуги', path: '/services' },
  { label: 'Кейсы', path: '/cases' },
  { label: 'Контакты', path: '/contact' },
]

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const { isAuthenticated, user, logout } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setUserMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    navigate('/')
  }

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-background/80 backdrop-blur-xl shadow-header'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Логотип */}
          <Link
            to="/"
            className="text-xl font-semibold text-text tracking-tight hover:text-accent transition-colors duration-300"
          >
            Ледовских<span className="text-accent">.</span>agency
          </Link>

          {/* Десктоп навигация */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium
                  transition-colors duration-200
                  ${location.pathname === item.path
                    ? 'text-accent bg-accent/5'
                    : 'text-text-secondary hover:text-text hover:bg-background-alt'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background-alt transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-sm font-medium text-accent">
                      {user?.name?.charAt(0).toUpperCase() || 'U'}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-text">{user?.name}</span>
                </button>

                {/* Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 bg-surface rounded-xl border border-border-light shadow-card overflow-hidden animate-slide-down">
                    <div className="px-4 py-3 border-b border-border-light">
                      <p className="text-sm font-medium text-text">{user?.name}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{user?.email}</p>
                    </div>
                    <div className="py-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-background-alt hover:text-text transition-colors"
                      >
                        <Settings size={16} />
                        Мой кабинет
                      </Link>
                      <Link
                        to="/dashboard/orders"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-text-secondary hover:bg-background-alt hover:text-text transition-colors"
                      >
                        <Package size={16} />
                        Мои заказы
                      </Link>
                    </div>
                    <div className="border-t border-border-light py-1">
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-error hover:bg-error/5 transition-colors"
                      >
                        <LogOut size={16} />
                        Выйти
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="ghost" size="sm">Войти</Button>
                </Link>
                <Link to="/contact">
                  <Button size="sm">Оставить заявку</Button>
                </Link>
              </>
            )}
          </div>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-text hover:bg-background-alt transition-colors"
            aria-label={mobileOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Мобильное меню оверлей */}
      <div
        className={`
          lg:hidden fixed inset-0 z-40 bg-background
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${mobileOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-full pointer-events-none'
          }
        `}
        style={{ top: 0 }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
          {navItems.map((item, i) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                text-3xl font-semibold text-text hover:text-accent transition-all duration-300
                ${mobileOpen
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }
              `}
              style={{ transitionDelay: mobileOpen ? `${100 + i * 75}ms` : '0ms' }}
            >
              {item.label}
            </Link>
          ))}

          {/* Мобильная авторизация */}
          <div
            className={`
              mt-4 flex flex-col items-center gap-4 transition-all duration-300
              ${mobileOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
              }
            `}
            style={{ transitionDelay: mobileOpen ? '500ms' : '0ms' }}
          >
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <User size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-medium text-text">{user?.name}</p>
                    <p className="text-sm text-text-secondary">{user?.email}</p>
                  </div>
                </div>
                <Link to="/dashboard" onClick={() => setMobileOpen(false)}>
                  <Button variant="secondary">Мой кабинет</Button>
                </Link>
                <button onClick={handleLogout} className="text-sm text-error hover:underline">
                  Выйти
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)}>
                  <Button variant="secondary" size="lg">Войти</Button>
                </Link>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  <Button size="lg">Оставить заявку</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Закрытие dropdown при клике вне */}
      {userMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setUserMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header
