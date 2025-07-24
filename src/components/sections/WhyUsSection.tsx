import React from 'react'
import Container from '../ui/container'
import { Gamepad2, Smile, Users, UtensilsCrossed } from 'lucide-react'

function WhyUsSection() {
  return (
    <section className='pb-section-padding bg-foreground'>
        <Container>
            <div className='bg-background-dark rounded-2xl p-5 md:p-10'>
                <h2 className='heading2 text-center heading-margin-bottom'>Dlaczego my?</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-center'>
                    <div className='space-y-5'>
                        <UtensilsCrossed className='size-10 mx-auto' />
                        <h3 className='heading3 md:min-h-[120px]'>Świetna kuchnia, uczciwe ceny</h3>
                        <p className='little-bigger-text'>
                            Serwujemy pyszne dania ze świeżych składników, bez zbędnych udziwnień i za rozsądną cenę. U nas jakość idzie w parze ze smakiem.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Users className='size-10 mx-auto' />
                        <h3 className='heading3 md:min-h-[120px]'>Klimat, do którego chce się wracać</h3>
                        <p className='little-bigger-text'>
                            Luźna, przyjazna atmosfera — idealna na spotkania z paczką, randkę czy szybkie piwo po pracy. Po prostu dobre miejsce na dobry wieczór.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Gamepad2 className='size-10 mx-auto' />
                        <h3 className='heading3 md:min-h-[120px]'>Rozrywka dla każdego</h3>
                        <p className='little-bigger-text'>
                            Bilard, rzutki, karaoke i muzyka na żywo – u nas nie da się nudzić. Mamy coś na spokojny wieczór i na konkretną imprezę.
                        </p>
                    </div>
                    <div className='space-y-5'>
                        <Smile className='size-10 mx-auto' />
                        <h3 className='heading3 md:min-h-[120px]'>Obsługa, która naprawdę się stara</h3>
                        <p className='little-bigger-text'>
                            Zespół z pasją i luzem — nie traktujemy Cię jak kolejny stolik, tylko jak gościa, który ma się dobrze bawić. Po prostu: fajni ludzie, dobra energia.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUsSection