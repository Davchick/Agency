import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { useAuth } from '../context/AuthContext.jsx'
import { Package, Plus, TrendingUp, Clock, CheckCircle, ArrowRight, Settings } from 'lucide-react'

// Mock данные заказов
const mockOrders = [
  {
    id: '1001',
    service: 'Контекстная реклама',
    status: 'in_progress',
    statusLabel: 'В работе',
    date: '12 апреля 2026',
    budget: '30 000 ₽',
  },
  {
    id: '998',
    service: 'SEO-продвижение',
    status: 'completed',
    statusLabel: 'Завершён',
    date: '28 марта 2026',
    budget: '40 000 ₽',
  },
]

const statusStyles = {
  new: 'bg-blue-50 text-blue-600 border-blue-200',
  in_progress: 'bg-warning/10 text-warning border-warning/20',
  completed: 'bg-success/10 text-success border-success/20',
  cancelled: 'bg-error/10 text-error border-error/20',
}

const DashboardPage = () => {
  const { user } = useAuth()
  const orders = mockOrders

  return (
    <>
      <Helmet>
        <title>Личный кабинет — Агентство интернет-рекламы</title>
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <Container>
          {/* Приветствие */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">
              Добро пожаловать, {user?.name}!
            </h1>
            <p className="text-text-secondary">
              Управляйте заказами и отслеживайте прогресс
            </p>
          </div>

          {/* Быстрые действия */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <Link to="/dashboard/orders/new" className="group p-6 rounded-xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <Plus size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text mb-1 group-hover:text-accent transition-colors">Новый заказ</h3>
              <p className="text-sm text-text-secondary">Оформить заявку на услугу</p>
            </Link>

            <Link to="/dashboard/orders" className="group p-6 rounded-xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <Package size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text mb-1 group-hover:text-accent transition-colors">Мои заказы</h3>
              <p className="text-sm text-text-secondary">Все заявки и статусы</p>
            </Link>

            <Link to="/dashboard/profile" className="group p-6 rounded-xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 group-hover:scale-110 transition-all duration-300">
                <Settings size={24} className="text-accent" />
              </div>
              <h3 className="font-semibold text-text mb-1 group-hover:text-accent transition-colors">Профиль</h3>
              <p className="text-sm text-text-secondary">Настройки аккаунта</p>
            </Link>
          </div>

          {/* Статистика */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="p-6 rounded-xl bg-background-alt border border-border-light">
              <div className="flex items-center gap-3 mb-3">
                <Package size={20} className="text-accent" />
                <span className="text-sm text-text-secondary">Всего заказов</span>
              </div>
              <div className="text-3xl font-bold text-text">{orders.length}</div>
            </div>
            <div className="p-6 rounded-xl bg-background-alt border border-border-light">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-warning" />
                <span className="text-sm text-text-secondary">В работе</span>
              </div>
              <div className="text-3xl font-bold text-text">
                {orders.filter((o) => o.status === 'in_progress').length}
              </div>
            </div>
            <div className="p-6 rounded-xl bg-background-alt border border-border-light">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle size={20} className="text-success" />
                <span className="text-sm text-text-secondary">Завершены</span>
              </div>
              <div className="text-3xl font-bold text-text">
                {orders.filter((o) => o.status === 'completed').length}
              </div>
            </div>
          </div>

          {/* Активные заказы */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-text">Активные заказы</h2>
            <Link to="/dashboard/orders" className="text-sm text-accent hover:underline font-medium flex items-center gap-1">
              Все заказы
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <Link
                key={order.id}
                to={`/dashboard/orders/${order.id}`}
                className="block p-6 rounded-xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center shrink-0">
                      <TrendingUp size={22} className="text-accent" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-medium text-text-muted">
                          #{order.id}
                        </span>
                        <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${statusStyles[order.status]}`}>
                          {order.statusLabel}
                        </span>
                      </div>
                      <h3 className="font-semibold text-text">{order.service}</h3>
                      <p className="text-sm text-text-secondary mt-1">
                        Создан: {order.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-text">{order.budget}</div>
                    <span className="text-sm text-accent hover:underline">Подробнее →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default DashboardPage
