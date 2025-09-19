"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Shadow from '../ui/shadow'
import Link from 'next/link'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { Star } from 'lucide-react'

function Hero() {
    useGSAP(() => {
        gsap.fromTo(".heading", {
            opacity: 0,
            y: -50,
        }, {
            opacity: 1,
            y: 0,
            duration: 1
        })
        gsap.fromTo(".text", {
            opacity: 0,
            x: -50
        }, {
            opacity: 1,
            x: 0,
            delay: 0.5,
            duration: 1
        })
        gsap.fromTo(".buttons", {
            opacity: 0,
            y: 50
        }, {
            opacity: 1,
            y: 0,
            delay: 1,
            duration: 1
        })
    }, [])

  return (
    <header className='py-section-padding lg:py-0 bg-[url(/restaurant.jpg)] bg-cover bg-center bg-no-repeat relative z-0 lg:h-screen'>
        <Shadow />
        <Container>
            <div className='h-full flex flex-col justify-center gap-10'>
                <div className='space-y-5 text-center lg:text-left max-w-[800px]'>
                    <h1 className='heading heading1'>Restauracja & Pub</h1>
                    <p className='text bigger-text'>
                        Zapraszamy do miejsca, gdzie wyśmienita kuchnia spotyka się z wyjątkowym klimatem pubu. Poczuj domową atmosferę, spróbuj lokalnych specjałów i odpocznij przy barze.
                    </p>
                    <div className='buttons flex gap-5 flex-wrap justify-center lg:justify-start'>
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
                <div className='flex justify-center lg:justify-end'>
                    <div className='max-w-[400px] rounded-2xl bg-background/80 p-5 space-y-5'>
                        <p className='little-bigger-text text-center lg:text-left'>
                            Wspaniały wystrój i fantastyczna obsługa
                        </p>
                        <div className='flex justify-between'>
                            <span className='heading1 font-medium flex gap-1'>4.9 <Star className='size-5 fill-[#FFCD29] stroke-[#FFCD29]' /></span>
                            <div className='flex flex-col justify-end'>
                                <span className='little-bigger-text'>Ocena</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Hero