import GlovoSection from '@/components/sections/GlovoSection'
import MenuListSection from '@/components/sections/MenuListSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { salads } from '@/constants/menu'
import React from 'react'

function SaladPage() {
  return (
    <>
        <SubPageHero title='Sałatki' />
        <MenuListSection menu={salads} />
        <GlovoSection />
    </>
  )
}

export default SaladPage