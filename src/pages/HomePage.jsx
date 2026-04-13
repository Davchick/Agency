import { Helmet } from 'react-helmet'
import Hero from '../components/sections/Hero.jsx'
import ServicesGrid from '../components/sections/ServicesGrid.jsx'
import Advantages from '../components/sections/Advantages.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import CTASection from '../components/sections/CTASection.jsx'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Агентство интернет-рекламы — ИП Ледовских К.А.</title>
        <meta
          name="description"
          content="Настраиваем и ведём рекламные кампании в интернете. Контекстная реклама, таргет, SEO, SMM. Первые заявки — в первую неделю."
        />
      </Helmet>
      <Hero />
      <ServicesGrid />
      <Advantages />
      <Testimonials />
      <CTASection />
    </>
  )
}

export default HomePage
