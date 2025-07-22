import ContactSection from '@/components/sections/ContactSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function ContactPage() {
  return (
    <>
        <SubPageHero title='Kontakt' />
        <ContactSection className='py-section-padding' />
    </>
  )
}

export default ContactPage