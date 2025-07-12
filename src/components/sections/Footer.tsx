import React from 'react'
import Container from '../ui/container'
import Link from 'next/link'
import { Button } from '../ui/button'
import { EMAIL, INSTA, PHONE } from '@/constants'
import { Instagram, Mail, Phone } from 'lucide-react'
import { MENU_ITEMS, NAV_ITEMS } from '@/constants/navItems'

function Footer() {
  return (
    <footer className='pt-section-padding pb-10 bg-background'>
        <Container>
            <div className='grid md:grid-cols-[repeat(auto-fit,_280px)] gap-10 md:gap-20'>
                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>
                        Restauracja & Pub
                    </p>
                    <p className='md:text-lg'>
                        <em>
                            Zapraszamy do miejsca, gdzie wyśmienita kuchnia spotyka się z wyjątkowym klimatem pubu. Poczuj domową atmosferę, spróbuj lokalnych specjałów i odpocznij przy barze.
                        </em>
                    </p>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Nawigacja</p>
                    <nav>
                        <ul className='space-y-2'>
                            {NAV_ITEMS.map(item => {
                                if (!item.isLink) return null

                                return (
                                    <li key={item.label}>
                                        <Button className='text-foreground hover:text-foreground/50' size={"link"} variant={"link"} asChild>
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </Button>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Menu</p>
                    <nav>
                        <ul className='space-y-2'>
                            {MENU_ITEMS.map(item => (
                                <li key={item.label}>
                                    <Button className='text-foreground hover:text-foreground/50' size={"link"} variant={"link"} asChild>
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

                <div className='space-y-4 text-center md:text-left'>
                    <p className='bigger-text'>Dane kontaktowe</p>
                    <div className='space-y-5'>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                <Link href={`tel:${PHONE}`}>
                                    <Phone /> {PHONE}
                                </Link>
                            </Button>
                        </div>
                        <div>
                            <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                <Link href={`mailto:${EMAIL}`}>
                                    <Mail /> {EMAIL}
                                </Link>
                            </Button>
                        </div>
                        <div className='flex justify-center lg:justify-start items-center gap-3 text-foreground'>
                            <Button size={"icon"} asChild>
                                <Link href={INSTA} target='_blank' title='Instagram'>
                                    <Instagram />
                                    <span className='sr-only'>Instagram</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-section-padding flex justify-between items-center'>
                <p>
                    &copy; {new Date().getFullYear()} | <span className='font-semibold'>Nazwa Firmy</span>
                </p>
            </div>
        </Container>
    </footer>
  )
}

export default Footer