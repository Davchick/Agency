import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import { Target, Heart } from 'lucide-react'

const MissionSection = () => {
  return (
    <Section variant="alt">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Текст */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center">
                <Target size={24} className="text-accent" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Миссия
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text leading-tight mb-6">
              Делаем digital-рекламу понятной и результативной
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Мы основали агентство, потому что видели одну и ту же проблему: 
                бизнес тратит бюджеты на рекламу, которая не работает. А клиенты 
                не получают тех, кто действительно ищет их продукт.
              </p>
              <p>
                Наша миссия — исправить это. Мы строим прозрачные рекламные 
                системы, где каждый вложенный рубль приносит измеримый результат.
              </p>
              <p>
                Никаких «чёрных ящиков». Вы всегда знаете, куда идёт ваш бюджет, 
                какие метрики растут и какой ROI вы получаете.
              </p>
            </div>
          </div>

          {/* Визуальный блок */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-accent/10 via-accent/5 to-transparent border border-border-light flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <Heart size={64} className="mx-auto text-accent mb-6 opacity-60" />
                <blockquote className="text-xl md:text-2xl font-medium text-text leading-relaxed">
                  «Реклама должна окупаться — это не опция, а обязательное условие»
                </blockquote>
                <p className="mt-4 text-sm text-text-secondary">
                  — Ксения Ледовских, основатель
                </p>
              </div>
            </div>
            {/* Декор */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent/5 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-lg bg-border/50 -z-10" />
          </div>
        </div>
      </Container>
    </Section>
  )
}

export default MissionSection
