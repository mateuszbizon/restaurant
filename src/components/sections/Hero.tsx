import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Shadow from '../ui/shadow'
import Link from 'next/link'

function Hero() {
  return (
    <header className='py-section-padding bg-[url(/restaurant.jpg)] bg-cover bg-center bg-no-repeat relative z-0 h-screen'>
        <Shadow />
        <Container>
            <div className='space-y-5 h-full flex flex-col justify-center max-w-[800px]'>
                <h1 className='heading1'>Restauracja & Pub</h1>
                <p className='bigger-text'>
                    Zapraszamy do miejsca, gdzie wyśmienita kuchnia spotyka się z wyjątkowym klimatem pubu. Poczuj domową atmosferę, spróbuj lokalnych specjałów i odpocznij przy barze.
                </p>
                <div className='flex gap-5 flex-wrap'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={"/menu"}>
                            Nasze menu
                        </Link>
                    </Button>
                    <Button size={"lg"} variant={"secondary"} className='text-lg' asChild>
                        <Link href={"https://glovoapp.com/pl/pl"} target='_blank'>
                            Zamów teraz
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero