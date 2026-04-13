import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: 'Главная', path: '/' },
    { label: 'О нас', path: '/about' },
    { label: 'Услуги', path: '/services' },
    { label: 'Кейсы', path: '/cases' },
    { label: 'Контакты', path: '/contact' },
  ]

  const services = [
    { label: 'Контекстная реклама', path: '/services/context' },
    { label: 'Таргетированная реклама', path: '/services/targeted' },
    { label: 'SEO-продвижение', path: '/services/seo' },
    { label: 'SMM', path: '/services/smm' },
  ]

  const socials = [
    { name: 'Telegram', icon: Send, url: 'https://t.me/' },
  ]

  return (
    <footer className="bg-background-alt border-t border-border-light">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Колонка 1: О компании */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="text-xl font-semibold text-text tracking-tight hover:text-accent transition-colors"
            >
              Ледовских<span className="text-accent">.</span>agency
            </Link>
            <p className="mt-4 text-sm text-text-secondary leading-relaxed">
              Агентство интернет-рекламы. 
              Помогаем бизнесу расти через эффективные digital-решения.
            </p>
          </div>

          {/* Колонка 2: Навигация */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Навигация
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 3: Услуги */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Услуги
            </h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Колонка 4: Контакты */}
          <div>
            <h3 className="text-sm font-semibold text-text uppercase tracking-wider mb-4">
              Контакты
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79001234567"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Phone size={16} />
                  +7 (900) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ledovskikh.agency"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                >
                  <Mail size={16} />
                  info@ledovskikh.agency
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-secondary">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                Россия
              </li>
            </ul>

            {/* Соцсети */}
            <div className="flex gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] min-w-[44px] flex items-center justify-center p-2.5 rounded-lg bg-background border border-border-light text-text-secondary hover:text-accent hover:border-accent/30 transition-all duration-200"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Низ */}
        <div className="py-6 border-t border-border-light flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {currentYear} ИП Ледовских Ксения Андреевна. Все права защищены.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              to="/terms"
              className="text-xs text-text-muted hover:text-text-secondary transition-colors"
            >
              Условия использования
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
