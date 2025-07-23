import GlovoSection from '@/components/sections/GlovoSection'
import MenuListSection from '@/components/sections/MenuListSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { desserts } from '@/constants/menu'
import React from 'react'

function page() {
  return (
    <>
        <SubPageHero title='Desery' />
        <MenuListSection menu={desserts} />
        <GlovoSection />
    </>
  )
}

export default page