import { Helmet } from 'react-helmet'
import AboutHero from '../components/sections/AboutHero.jsx'
import MissionSection from '../components/sections/MissionSection.jsx'
import ValuesSection from '../components/sections/ValuesSection.jsx'
import TeamSection from '../components/sections/TeamSection.jsx'
import AboutCTA from '../components/sections/AboutCTA.jsx'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>О нас — Агентство интернет-рекламы</title>
        <meta
          name="description"
          content="Узнайте больше о нашем агентстве: миссия, ценности и команда. ИП Ледовских Ксения Андреевна."
        />
      </Helmet>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <AboutCTA />
    </>
  )
}

export default AboutPage
