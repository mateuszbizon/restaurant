import React, { ComponentProps } from 'react'
import Container from '../ui/container'
import { Gamepad2, Smile, Users, UtensilsCrossed } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { RESTAURANT_IMG } from '@/constants/images'

type WhyUsSectionProps = ComponentProps<'section'>

function WhyUsSection({ className, ...props }: WhyUsSectionProps) {
  return (
    <section className={cn('pb-section-padding bg-foreground', className)} {...props}>
        <Container>
            <div className='bg-background rounded-2xl p-5 md:p-10'>
                <div className='grid lg:grid-cols-2 gap-10'>
                    <div>
                        <h2 className='heading2 mb-10'>Dlaczego my?</h2>
                        <div className='space-y-10'>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='rounded-md p-3 text-black bg-[#5DECBF] flex justify-center items-center h-fit mx-auto'>
                                    <UtensilsCrossed className='size-8' />
                                </div>
                                <div className='space-y-2 text-center lg:text-left'>
                                    <h3 className='heading3'>Świetna kuchnia, uczciwe ceny</h3>
                                    <p className='little-bigger-text'>
                                        Serwujemy pyszne dania ze świeżych składników, bez zbędnych udziwnień i za rozsądną cenę. U nas jakość idzie w parze ze smakiem.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='rounded-md p-3 text-black bg-[#D38BC7] flex justify-center items-center h-fit mx-auto'>
                                    <Users className='size-8' />
                                </div>
                                <div className='space-y-2 text-center lg:text-left'>
                                    <h3 className='heading3'>Klimat, do którego chce się wracać</h3>
                                    <p className='little-bigger-text'>
                                        Luźna, przyjazna atmosfera — idealna na spotkania z paczką, randkę czy szybkie piwo po pracy. Po prostu dobre miejsce na dobry wieczór.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='rounded-md p-3 text-black bg-[#00B38A] flex justify-center items-center h-fit mx-auto'>
                                    <Gamepad2 className='size-8' />
                                </div>
                                <div className='space-y-2 text-center lg:text-left'>
                                    <h3 className='heading3'>Rozrywka dla każdego</h3>
                                    <p className='little-bigger-text'>
                                        Bilard, rzutki, karaoke i ping pong – u nas nie da się nudzić. Mamy coś na spokojny wieczór i na konkretną imprezę
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex-row gap-5'>
                                <div className='rounded-md p-3 text-black bg-[#F9F871] flex justify-center items-center h-fit mx-auto'>
                                    <Smile className='size-8' />
                                </div>
                                <div className='space-y-2 text-center lg:text-left'>
                                    <h3 className='heading3'>Obsługa, która naprawdę się stara</h3>
                                    <p className='little-bigger-text'>
                                        Zespół z pasją i luzem — nie traktujemy Cię jak kolejny stolik, tylko jak gościa, który ma się dobrze bawić. Po prostu: fajni ludzie, dobra energia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden lg:block pt-10'>
                        <figure className='relative w-full max-w-[600px] mx-auto aspect-square'>
                            <Image src={RESTAURANT_IMG.src} alt={RESTAURANT_IMG.alt} fill className='object-cover rounded-2xl' />
                        </figure>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default WhyUsSection