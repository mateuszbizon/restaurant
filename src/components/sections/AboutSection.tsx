import React from 'react'
import Container from '../ui/container'

function AboutSection() {
  return (
    <section className='py-section-padding bg-foreground text-background-dark'>
        <Container>
            <div className='flex flex-col gap-5 md:grid grid-cols-3 grid-rows-2 md:min-h-[500px]'>
                <div className='aspect-video md:aspect-auto card row-span-full col-start-1 col-end-3 bg-[url(/restaurant.jpg)] bg-center bg-cover overflow-hidden rounded-2xl p-5'></div>
                <div className='space-y-5 rounded-2xl border-2 p-5'>
                    <h2 className='heading3'>Kim jesteśmy?</h2>
                    <div className='little-bigger-text'>
                        <p>
                            Jesteśmy lokalnym pubem i restauracją działającym od 2021 roku, stworzonym z miłości do dobrej kuchni i jeszcze lepszego towarzystwa. Naszym celem od początku było stworzenie miejsca, w którym każdy poczuje się jak u siebie.
                        </p>
                    </div>
                </div>
                <div className='space-y-5 rounded-2xl border-2 p-5'>
                    <h2 className='heading3'>Nasza kuchnia</h2>
                    <div className='little-bigger-text'>
                        <p>
                            Stawiamy na jakość – używamy tylko świeżych składników, wiele z nich pochodzi od lokalnych dostawców. Nasze pizze wypiekamy w piecu opalanym drewnem, a makarony robimy na miejscu według tradycyjnych włoskich przepisów.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection