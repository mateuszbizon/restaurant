import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'

function GlovoSection() {
  return (
    <section className='py-section-padding bg-[#FFEFCA] text-background-dark'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Znajdziesz nas też na <span className='text-glovo-green'>Glovo</span></h2>
            <div className='max-w-[700px] mx-auto rounded-2xl bg-glovo-yellow p-7 space-y-8 bigger-text'>
                <ol className='space-y-5 list-decimal list-inside'>
                    <li>Pobierz aplikację Glovo z App Store lub Google Play.</li>
                    <li>Zarejestruj się lub zaloguj.</li>
                    <li>Wpisz swój adres dostawy.</li>
                    <li>Wyszukaj naszą restaurację.</li>
                    <li>Wybierz dania z menu i dodaj do koszyka.</li>
                    <li>Opłać zamówienie i czekaj na dostawę!</li>
                </ol>
                <p className='text-center'>Zamów także przez przeglądarkę</p>
                <div className='flex justify-center'>
                    <Button size={"lg"} className='text-lg' asChild>
                        <Link href={"https://glovoapp.com/pl/pl"} target='_blank'>
                            Zamów teraz
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default GlovoSection