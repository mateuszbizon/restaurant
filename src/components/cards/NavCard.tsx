import { NavItem } from '@/types'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

type NavCardProps = {
    item: NavItem
}

function NavCard({ item }: NavCardProps) {
  return (
    <>
        {item.isLink && (
            <Button className='py-0 text-foreground hover:text-foreground2 text-lg' variant={"link"} asChild>
                <Link href={item.href}>
                    {item.label}
                </Link>
            </Button>
        )}
    </>
  )
}

export default NavCard