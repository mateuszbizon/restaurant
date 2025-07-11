import { snacks } from '@/constants/menu'
import React from 'react'
import MenuCard from '../cards/MenuCard'

function Snacks() {
  return (
    <ul className='menu-list'>
        {snacks.map((item) => (
            <li key={item.name}>
                <MenuCard item={item} />
            </li>
        ))}
    </ul>
  )
}

export default Snacks