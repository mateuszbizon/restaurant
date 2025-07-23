import GlovoSection from '@/components/sections/GlovoSection'
import MenuSection from '@/components/sections/MenuSection'
import SubPageHero from '@/components/sections/SubPageHero'
import React from 'react'

function MenuPage() {
  return (
    <>
        <SubPageHero title='Menu' />
        <MenuSection />
        <GlovoSection />
    </>
  )
}

export default MenuPage