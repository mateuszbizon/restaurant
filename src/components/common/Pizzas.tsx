import { pizzas } from '@/constants/menu'
import React from 'react'
import MenuCard from '../cards/MenuCard'

function Pizzas() {
  return (
    <ul className='menu-list'>
        {pizzas.map((item) => (
            <li key={item.name}>
                <MenuCard item={item} />
            </li>
        ))}
    </ul>
  )
}

export default Pizzas