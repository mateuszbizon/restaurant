import GlovoSection from '@/components/sections/GlovoSection'
import MenuListSection from '@/components/sections/MenuListSection'
import SubPageHero from '@/components/sections/SubPageHero'
import { pizzas } from '@/constants/menu'
import React from 'react'

function PizzaPage() {
  return (
    <>
        <SubPageHero title='Pizze' />
        <MenuListSection menu={pizzas} />
        <GlovoSection />
    </>
  )
}

export default PizzaPage