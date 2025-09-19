"use client"

import React from 'react'
import Container from '../ui/container'
import { NAV_ITEMS } from '@/constants/navItems'
import NavCard from '../cards/NavCard'
import useScroll from '@/lib/hooks/useScroll'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '../ui/navigation-menu'
import NavMobile from './NavMobile'
import Link from 'next/link'
import { Button } from '../ui/button'

function Nav() {
    const { isScrolled } = useScroll({ scrollAmount: 50 })

  return (
    <nav className='h-nav-height fixed top-0 w-full z-40'>
        <Container>
            <div className='flex justify-between items-center h-full bg-background/80 rounded-4xl px-3'>
                <div>
                    <Link href={"/"} title='Strona główna'>
                        <span className='text-lg font-bold'>Restauracja & Pub</span>
                    </Link>
                </div>
                <div className='hidden lg:flex'>
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className='flex gap-0'>
                            {NAV_ITEMS.map(item => (
                                <NavigationMenuItem key={item.label}>
                                    <NavCard item={item} />
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                    <Button className='ml-2 rounded-4xl' asChild>
                        <Link href={"https://glovoapp.com/pl/pl"} target='_blank'>
                            Zamów teraz
                        </Link>
                    </Button>
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