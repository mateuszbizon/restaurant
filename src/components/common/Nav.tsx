"use client"

import React from 'react'
import Container from '../ui/container'
import { NAV_ITEMS } from '@/constants/navItems'
import NavCard from '../cards/NavCard'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import useScroll from '@/lib/hooks/useScroll'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className={`h-nav-height fixed top-0 w-full ${isScrolled ? "bg-background" : "bg-transparent"} z-40 transition`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div>
                    <span className='text-lg'>Restauracja & Pub</span>
                </div>
                <div className='hidden lg:block'>
                    <ul className='flex'>
                        {NAV_ITEMS.map(item => (
                            <li key={item.label}>
                                <NavCard item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='lg:hidden'>
                    <Button size={"icon"}>
                        <Menu />
                    </Button>
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav