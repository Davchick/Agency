import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import { cases } from '../../data/cases.js'
import { ArrowUpRight, TrendingUp } from 'lucide-react'

const industryFilters = [
  { key: 'all', label: 'Все' },
  { key: 'b2b', label: 'B2B' },
  { key: 'b2c', label: 'B2C' },
  { key: 'ecommerce', label: 'E-commerce' },
  { key: 'services', label: 'Услуги' },
]

const CasesGrid = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? cases
    : cases.filter((c) => c.industry === activeFilter)

  return (
    <Section>
      <Container>
        {/* Фильтры */}
        <div className="flex flex-wrap gap-2 mb-12">
          {industryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium
                transition-all duration-300
                ${activeFilter === filter.key
                  ? 'bg-accent text-white shadow-button'
                  : 'bg-background-alt text-text-secondary hover:text-text hover:bg-border-light'
                }
              `}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Сетка кейсов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((caseItem) => (
            <Link
              key={caseItem.slug}
              to={`/cases/${caseItem.slug}`}
              className="group block rounded-2xl bg-surface border border-border-light overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-500"
            >
              {/* Изображение */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-sm rounded-full text-xs font-medium text-text">
                    {caseItem.industryLabel}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-accent rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>

              {/* Контент */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                  {caseItem.title}
                </h3>
                <p className="text-sm text-text-secondary mb-5 line-clamp-2">
                  {caseItem.description}
                </p>

                {/* Результаты */}
                <div className="flex items-center gap-4">
                  {caseItem.results.slice(0, 2).map((result) => (
                    <div key={result.label}>
                      <div className="flex items-center gap-1.5">
                        <TrendingUp size={14} className="text-success" />
                        <span className="text-base font-bold text-text">{result.value}</span>
                      </div>
                      <span className="text-xs text-text-muted">{result.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">
              Кейсов в этой категории пока нет. Скоро добавим!
            </p>
          </div>
        )}
      </Container>
    </Section>
  )
}

export default CasesGrid
