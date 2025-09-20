import React from 'react'
import Container from '../ui/container'

function PubSection() {
  return (
    <section className='py-section-padding bg-foreground'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom text-background-dark'>Co możesz znaleźć w naszym pubie</h2>
            <div className='grid md:grid-cols lg:grid-cols-3 gap-x-10 gap-y-15'>
                <div className='bg-background-dark rounded-2xl space-y-7 bg-[url(/bilard.jpg)] bg-cover bg-center flex flex-col justify-end overflow-hidden h-[500px]'>
                    <div className='p-5 bg-background/80 space-y-3'>
                        <h3 className='heading3'>Bilard</h3>
                        <p className='little-bigger-text'>
                            Idealna rozrywka na wieczór ze znajomymi. Stół bilardowy czeka na graczy — niezależnie od poziomu zaawansowania. Rywalizacja i dobra zabawa gwarantowane!
                        </p>
                    </div>
                </div>
                <div className='bg-background-dark rounded-2xl space-y-7 bg-[url(/karaoke.jpg)] bg-cover bg-center flex flex-col justify-end overflow-hidden h-[500px]'>
                    <div className='p-5 bg-background/80 space-y-3'>
                        <h3 className='heading3'>Karaoke</h3>
                        <p className='little-bigger-text'>
                            Co tydzień dajemy głos naszym gościom! Śpiewaj swoje ulubione hity i zostań gwiazdą wieczoru. Wspólna zabawa, śmiech i niezapomniane chwile.
                        </p>
                    </div>
                </div>
                <div className='bg-background-dark rounded-2xl space-y-7 bg-[url(/rzutki.jpg)] bg-cover bg-center flex flex-col justify-end overflow-hidden h-[500px]'>
                    <div className='p-5 bg-background/80 space-y-3'>
                        <h3 className='heading3'>Rzutki</h3>
                        <p className='little-bigger-text'>
                            Dart to klasyka każdego dobrego pubu. Rzuć wyzwanie znajomym i sprawdź swoją celność. Tablica zawsze dostępna – wystarczy chęć do gry!
                        </p>
                    </div>
                </div>
                <div className='bg-background-dark rounded-2xl space-y-7 bg-[url(/pingpong.jpg)] bg-cover bg-center flex flex-col justify-end overflow-hidden h-[500px]'>
                    <div className='p-5 bg-background/80 space-y-3'>
                        <h3 className='heading3'>Mini stół do ping-ponga</h3>
                        <p className='little-bigger-text'>
                            Dynamiczna rozrywka dla dwóch osób lub szybkich turniejów w gronie znajomych. Mniejszy rozmiar, ale równie dużo emocji. Świetna alternatywa dla bilarda i rzutek!
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default PubSection