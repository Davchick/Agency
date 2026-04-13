import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Container from '../components/common/Container.jsx'
import Section from '../components/common/Section.jsx'
import Button from '../components/common/Button.jsx'
import { mockOrders } from '../data/orders.js'
import {
  ArrowLeft,
  Calendar,
  Wallet,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Circle,
  Clock,
  TrendingUp,
  MessageSquare,
  AlertCircle,
} from 'lucide-react'

const statusConfig = {
  new: {
    label: 'Новый',
    bg: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  in_progress: {
    label: 'В работе',
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
  },
  review: {
    label: 'На согласовании',
    bg: 'bg-purple-50',
    text: 'text-purple-600',
    border: 'border-purple-200',
  },
  completed: {
    label: 'Завершён',
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
  },
  cancelled: {
    label: 'Отменён',
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-200',
  },
}

const OrderDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const order = mockOrders.find((o) => o.id === id)
  const status = order ? statusConfig[order.status] : null

  if (!order) {
    return (
      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          <div className="text-center py-16">
            <AlertCircle size={48} className="text-text-muted mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-text mb-2">Заказ не найден</h1>
            <p className="text-text-secondary mb-6">
              Заказ с номером #{id} не существует
            </p>
            <Link to="/dashboard/orders">
              <Button variant="primary" size="md">
                <ArrowLeft size={18} />
                К списку заказов
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    )
  }

  return (
    <>
      <Helmet>
        <title>Заказ #{order.id} — {order.service}</title>
        <meta name="description" content={order.description} />
      </Helmet>

      <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20">
        <Container>
          {/* Навигация */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-6"
          >
            <ArrowLeft size={18} />
            Назад
          </button>

          {/* Заголовок заказа */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <h1 className="text-2xl md:text-3xl font-bold text-text">
                Заказ #{order.id}
              </h1>
              <span className={`px-3 py-1 text-sm font-medium rounded-full border ${status.bg} ${status.text} ${status.border}`}>
                {status.label}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-text mb-2">{order.service}</h2>
            <p className="text-text-secondary">{order.description}</p>
          </div>

          {/* Информация о заказе */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="p-5 rounded-xl bg-surface border border-border-light">
              <div className="flex items-center gap-3 mb-2">
                <Calendar size={20} className="text-accent" />
                <span className="text-sm text-text-secondary">Дата создания</span>
              </div>
              <div className="text-lg font-semibold text-text">{order.date}</div>
            </div>
            <div className="p-5 rounded-xl bg-surface border border-border-light">
              <div className="flex items-center gap-3 mb-2">
                <Wallet size={20} className="text-accent" />
                <span className="text-sm text-text-secondary">Бюджет</span>
              </div>
              <div className="text-lg font-semibold text-text">{order.budget}</div>
            </div>
            <div className="p-5 rounded-xl bg-surface border border-border-light">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp size={20} className="text-accent" />
                <span className="text-sm text-text-secondary">Статус</span>
              </div>
              <div className="text-lg font-semibold text-text">{status.label}</div>
            </div>
          </div>

          {/* Результаты (если завершён) */}
          {order.results && (
            <div className="mb-10 p-6 rounded-xl bg-emerald-50/50 border border-emerald-100">
              <h3 className="text-lg font-semibold text-text mb-4">Результаты</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {order.results.trafficGrowth}
                  </div>
                  <div className="text-sm text-text-secondary">Рост трафика</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {order.results.positionsTop10}
                  </div>
                  <div className="text-sm text-text-secondary">В ТОП-10</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {order.results.conversionIncrease}
                  </div>
                  <div className="text-sm text-text-secondary">Рост конверсии</div>
                </div>
              </div>
            </div>
          )}

          {/* Таймлайн */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-text mb-6">Хронология выполнения</h3>
            <div className="relative">
              {/* Вертикальная линия */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-border-light" />

              <div className="space-y-6">
                {order.timeline.map((step, index) => {
                  const isCompleted = step.status === 'completed'
                  const isInProgress = step.status === 'in_progress'

                  return (
                    <div key={index} className="relative flex gap-6">
                      {/* Иконка статуса */}
                      <div className="relative z-10 shrink-0">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                            isCompleted
                              ? 'bg-emerald-500 border-emerald-500'
                              : isInProgress
                              ? 'bg-amber-500 border-amber-500'
                              : 'bg-white border-border-light'
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 size={20} className="text-white" />
                          ) : isInProgress ? (
                            <Clock size={20} className="text-white" />
                          ) : (
                            <Circle size={20} className="text-text-muted" />
                          )}
                        </div>
                      </div>

                      {/* Контент */}
                      <div className="flex-1 pb-6">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                          <h4 className="font-semibold text-text">{step.title}</h4>
                          <span className="text-sm text-text-muted">{step.date}</span>
                        </div>
                        <p className="text-text-secondary">{step.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Менеджер */}
          {order.manager && (
            <div className="mb-10 p-6 rounded-xl bg-surface border border-border-light">
              <h3 className="text-lg font-semibold text-text mb-4">Ваш менеджер</h3>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                    <User size={24} className="text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-text">{order.manager.name}</div>
                    <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                      <Mail size={14} />
                      {order.manager.email}
                    </div>
                    <div className="flex items-center gap-2 text-text-secondary text-sm mt-1">
                      <Phone size={14} />
                      {order.manager.phone}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border-light">
                <Button variant="outline" size="md">
                  <MessageSquare size={18} />
                  Написать менеджеру
                </Button>
              </div>
            </div>
          )}

          {/* Действия */}
          <div className="flex flex-wrap gap-4">
            <Link to="/dashboard/orders">
              <Button variant="outline" size="md">
                <ArrowLeft size={18} />
                К списку заказов
              </Button>
            </Link>
            {order.status === 'completed' && (
              <Button variant="primary" size="md">
                Заказать повторно
              </Button>
            )}
            {order.status === 'in_progress' && (
              <Button variant="outline" size="md">
                <MessageSquare size={18} />
                Задать вопрос
              </Button>
            )}
          </div>
        </Container>
      </Section>
    </>
  )
}

export default OrderDetailPage
