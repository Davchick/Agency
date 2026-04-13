import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'

const CasesHero = () => {
  return (
    <Section className="pt-32 md:pt-36 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
      <Container>
        <div className="max-w-3xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Кейсы
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.05] tracking-tight text-text">
            Результаты,{' '}
            <span className="bg-gradient-to-r from-accent to-cyan-400 bg-clip-text text-transparent">
              которые говорят
            </span>{' '}
            за себя
          </h1>
          <p className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed">
            Реальные проекты с измеримыми результатами. 
            Каждый кейс — это история роста нашего клиента.
          </p>
        </div>
      </Container>
    </Section>
  )
}

export default CasesHero
