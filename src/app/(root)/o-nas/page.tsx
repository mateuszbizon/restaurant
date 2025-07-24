import AboutSection from '@/components/sections/AboutSection'
import SubPageHero from '@/components/sections/SubPageHero'
import WhyUsSection from '@/components/sections/WhyUsSection'
import React from 'react'

function AboutPage() {
  return (
    <>
        <SubPageHero title='O nas' />
        <AboutSection />
        <WhyUsSection />
    </>
  )
}

export default AboutPage