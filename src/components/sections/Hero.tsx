import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Shadow from '../ui/shadow'

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
                <div>
                    <Button size={"lg"} className='text-lg'>
                        Nasze menu
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero