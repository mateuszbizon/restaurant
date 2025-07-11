import { MenuItem } from '@/types'
import React from 'react'

type MenuCardProps = {
    item: MenuItem
}

function MenuCard({ item }: MenuCardProps) {
  return (
    <div className='flex flex-col gap-2'>
        <div className='flex justify-between items-center flex-wrap font-medium little-bigger-text'>
            <span>{item.name}</span>
            <div>
                {typeof item.price === 'number' ? (
                    <span>{item.price} zł</span>
                ) : (
                    <div className='flex'>
                        <span>Mała: {item.price.small} zł / Duża: {item.price.large} zł</span>
                    </div>
                )}
            </div>
        </div>
        <p className='text-lg'>
            {item.ingredients.join(', ')}
        </p>
    </div>
  )
}

export default MenuCard