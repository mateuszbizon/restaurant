import { NavItem } from '@/types'
import React from 'react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'

type NavCardProps = {
    item: NavItem
}

function NavCard({ item }: NavCardProps) {
  return (
    <>
        {item.isLink ? (
            <Button className='py-0 text-foreground hover:text-foreground2 text-lg' variant={"link"} asChild>
                <Link href={item.href}>
                    {item.label}
                </Link>
            </Button>
        ) : (
            <HoverCard>
                <HoverCardTrigger className='py-0 text-foreground hover:text-foreground2 text-lg font-medium hover:cursor-default'>
                    Menu
                </HoverCardTrigger>
                <HoverCardContent>
                    Content
                </HoverCardContent>
            </HoverCard>
        )}
    </>
  )
}

export default NavCard