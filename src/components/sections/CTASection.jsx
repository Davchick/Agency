import { Link } from 'react-router-dom'
import Container from '../common/Container.jsx'
import Section from '../common/Section.jsx'
import Button from '../common/Button.jsx'
import FadeIn from '../common/FadeIn.jsx'
import { ArrowRight } from 'lucide-react'

const CTASection = () => {
  return (
    <Section variant="accent">
      {/* Декоративный фон */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full opacity-20 blur-[100px]"
          style={{ background: 'white' }}
        />
        <div
          className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full opacity-10 blur-[80px]"
          style={{ background: 'white' }}
        />
      </div>

      <Container className="relative z-10">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-[48px] font-semibold leading-tight mb-6">
              Готовы обсудить
              <br />
              ваш проект?
            </h2>
            <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed">
              Оставьте заявку — мы свяжемся с вами в течение рабочего дня
              и предложим решение под ваши задачи.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-white text-accent hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Оставить заявку
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

export default CTASection
