import { salads } from '@/constants/menu'
import React from 'react'
import MenuCard from '../cards/MenuCard'

function Salads() {
  return (
    <ul className='menu-list'>
        {salads.map((item) => (
            <li key={item.name}>
                <MenuCard item={item} />
            </li>
        ))}
    </ul>
  )
}

export default Salads