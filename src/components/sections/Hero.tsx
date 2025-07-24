"use client"

import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Shadow from '../ui/shadow'
import Link from 'next/link'
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"

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
    <header className='py-section-padding bg-[url(/restaurant.jpg)] bg-cover bg-center bg-no-repeat relative z-0 h-screen'>
        <Shadow />
        <Container>
            <div className='space-y-5 h-full flex flex-col justify-center max-w-[800px]'>
                <h1 className='heading heading1'>Restauracja & Pub</h1>
                <p className='text bigger-text'>
                    Zapraszamy do miejsca, gdzie wyśmienita kuchnia spotyka się z wyjątkowym klimatem pubu. Poczuj domową atmosferę, spróbuj lokalnych specjałów i odpocznij przy barze.
                </p>
                <div className='buttons flex gap-5 flex-wrap'>
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