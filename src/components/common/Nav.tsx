"use client"

import React from 'react'
import Container from '../ui/container'
import { NAV_ITEMS } from '@/constants/navItems'
import NavCard from '../cards/NavCard'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import useScroll from '@/lib/hooks/useScroll'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavMobile from './NavMobile'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className={`h-nav-height fixed top-0 w-full ${isScrolled ? "bg-background" : "bg-transparent"} z-40 transition duration-300`}>
        <Container>
            <div className='flex justify-between items-center h-full'>
                <div>
                    <span className='text-lg'>Restauracja & Pub</span>
                </div>
                <div className='hidden lg:block'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className='flex gap-0'>
                            {NAV_ITEMS.map(item => (
                                <NavigationMenuItem key={item.label}>
                                    <NavCard item={item} />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className='lg:hidden'>
                    <NavMobile />
                </div>
            </div>
        </Container>
    </nav>
  )
}

export default Nav