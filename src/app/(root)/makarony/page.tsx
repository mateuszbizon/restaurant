import GlovoSection from '@/components/sections/GlovoSection'
import MenuListSection from '@/components/sections/MenuListSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { pastas } from '@/constants/menu'
import React from 'react'

function PastaPage() {
  return (
    <>
        <SubPageHero title='Makarony' />
        <MenuListSection menu={pastas} />
        <GlovoSection />
    </>
  )
}

export default PastaPage