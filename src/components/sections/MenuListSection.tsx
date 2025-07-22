import React from 'react'
import Container from '../ui/container'
import { MenuItem } from '@/types'

type MenuListSectionProps = {
    menu: MenuItem[]
}

function MenuListSection({ menu }: MenuListSectionProps) {
  return (
    <section className='py-section-padding'>
        <Container>
            <ul className='space-y-15'>
                {menu.map(item => (
                    <li className='bg-background p-7 rounded-2xl space-y-5 md:space-y-8' key={item.name}>
                        <h2 className='heading3'>{item.name}</h2>
                        <p className='bigger-text'>
                            {typeof item.price === 'object' ? (
                                <span>Mała: {item.price.small} zł / Duża: {item.price.large} zł</span>
                            ) : (
                                <span>{item.price} zł</span>
                            )}
                        </p>
                        <p className='little-bigger-text'>{item.ingredients.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </Container>
    </section>
  )
}

export default MenuListSection