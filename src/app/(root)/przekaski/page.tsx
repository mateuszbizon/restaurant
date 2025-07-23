import GlovoSection from '@/components/sections/GlovoSection'
import MenuListSection from '@/components/sections/MenuListSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { snacks } from '@/constants/menu'
import React from 'react'

function page() {
  return (
    <>
        <SubPageHero title='Przekąski' />
        <MenuListSection menu={snacks} />
        <GlovoSection />
    </>
  )
}

export default page