import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { GLOVO_IMG } from '@/constants/images'

function GlovoSection() {
  return (
    <section className='py-section-padding bg-glovo-yellow text-background-dark'>
        <Container>
            <div className='grid lg:grid-cols-2'>
                <div className='space-y-10 flex flex-col justify-center'>
                    <h2 className='heading1 text-center'>Znajdziesz nas też na <span className='text-glovo-green'>Glovo</span></h2>
                    <div className='flex justify-center'>
                        <Button size={"lg"} className='text-xl' asChild>
                            <Link href={"https://glovoapp.com/pl/pl"} target="_blank">
                                Zamów teraz
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col justify-center'>
                    <figure className='relative w-full max-w-[300px] mx-auto aspect-square'>
                        <Image src={GLOVO_IMG.src} alt={GLOVO_IMG.alt} fill className='rounded-2xl' />
                    </figure>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default GlovoSection