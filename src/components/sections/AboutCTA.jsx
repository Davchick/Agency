import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import Button from '../common/Button.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { ArrowRight } from 'lucide-react'

const AboutCTA = () => {
  return (
    <Section variant="accent">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'white' }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight mb-6">
              Готовы работать вместе?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Мы всегда открыты для новых проектов и интересных задач.
              Расскажите о вашем бизнесе — предложим решение.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Связаться с нами
                <ArrowRight
                  size={20}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </Container>
    </Section>
  )
}

export default AboutCTA
