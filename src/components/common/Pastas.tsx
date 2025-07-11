import { pastas } from '@/constants/menu'
import React from 'react'
import MenuCard from '../cards/MenuCard'

function Pastas() {
  return (
    <ul className='menu-list'>
        {pastas.map((item) => (
            <li key={item.name}>
                <MenuCard item={item} />
            </li>
        ))}
    </ul>
  )
}

export default Pastas