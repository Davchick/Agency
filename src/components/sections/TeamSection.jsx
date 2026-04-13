import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { team } from '../../data/team.js'

const TeamSection = () => {
  return (
    <Section variant="alt">
      <Container>
        {/* Заголовок */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-accent uppercase tracking-wider">
              Команда
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-[48px] font-semibold text-text leading-tight">
              Люди, которые делают ваш бизнес
            </h2>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              Каждый участник — эксперт в своей области
            </p>
          </div>
        </FadeIn>

        {/* Сетка */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <FadeIn key={member.name} delay={index * 100}>
              <div
                className="group text-center p-8 rounded-2xl bg-surface border border-border-light hover:border-accent/30 transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
              >
                {/* Аватар */}
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 ring-2 ring-border-light group-hover:ring-accent/30">
                  <span className="text-2xl font-semibold text-accent">
                    {member.initials}
                  </span>
                </div>

                {/* Имя и роль */}
                <h3 className="text-lg font-semibold text-text mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default TeamSection
