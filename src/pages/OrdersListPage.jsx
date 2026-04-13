import { Plus, Package, Clock, CheckCircle, XCircle, Eye, Calendar, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { mockOrders } from '../data/orders.js'

const statusConfig = {
  new: {
    label: 'Новый',
    icon: Package,
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  in_progress: {
    label: 'В работе',
    icon: Clock,
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
  },
  review: {
    label: 'На согласовании',
    icon: Calendar,
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
  completed: {
    label: 'Завершён',
    icon: CheckCircle,
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  cancelled: {
    label: 'Отменён',
    icon: XCircle,
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
  },
}

const OrdersListPage = () => {
  const orders = mockOrders

  return (
    <>
      <Helmet>
        <title>Мои заказы — Личный кабинет</title>
        <meta name="description" content="Список всех заказов и заявок в личном кабинете" />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          {/* Заголовок */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-text mb-2">Мои заказы</h1>
              <p className="text-text-secondary">
                Всего заявок: {orders.length}
              </p>
            </div>
            <Link to="/dashboard/orders/new">
              <Button variant="primary" size="md">
                <Plus size={18} />
                Новый заказ
              </Button>
            </Link>
          </div>

          {/* Список заказов */}
          {orders.length === 0 ? (
            <div className="text-center py-16">
              <Package size={48} className="text-text-muted mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-text mb-2">Заказов пока нет</h2>
              <p className="text-text-secondary mb-6">
                Оформите первую заявку на услугу
              </p>
              <Link to="/dashboard/orders/new">
                <Button variant="primary" size="md">
                  <Plus size={18} />
                  Создать заказ
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => {
                const status = statusConfig[order.status]
                const StatusIcon = status.icon

                return (
                  <Link
                    key={order.id}
                    to={`/dashboard/orders/${order.id}`}
                    className="block p-6 rounded-xl bg-surface border border-border-light hover:border-accent/30 hover:shadow-card transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-accent/5 flex items-center justify-center shrink-0">
                          <StatusIcon size={22} className="text-accent" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <span className="text-sm font-medium text-text-muted">
                              #{order.id}
                            </span>
                            <span className={`px-2.5 py-0.5 text-xs font-medium rounded-full border ${status.bg} ${status.text} ${status.border}`}>
                              {status.label}
                            </span>
                          </div>
                          <h3 className="font-semibold text-text text-lg mb-1">
                            {order.service}
                          </h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {order.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Wallet size={14} />
                              {order.budget}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-sm text-accent font-medium">
                          Подробнее
                        </span>
                        <Eye size={16} className="text-accent" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </Container>
      </Section>
    </>
  )
}

export default OrdersListPage
