import { desserts } from '@/constants/menu'
import React from 'react'
import MenuCard from '../cards/MenuCard'

function Desserts() {
  return (
    <ul className='menu-list'>
        {desserts.map((item) => (
            <li key={item.name}>
                <MenuCard item={item} />
            </li>
        ))}
    </ul>
  )
}

export default Desserts