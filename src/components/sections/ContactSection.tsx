import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'
import { EMAIL, INSTA, PHONE } from '@/constants'
import GoogleMap from '../ui/google-map'

function ContactSection() {
  return (
    <section className='pb-section-padding bg-foreground'>
        <Container>
            <div className='bg-foreground2 rounded-2xl p-5 md:p-10'>
                <h2 className='heading2 mb-10'>Nasze dane kontaktowe oraz informacje</h2>
                <div className='flex flex-col lg:flex-row gap-10'>
                    <div className='grow'>
                        <GoogleMap />
                    </div>
                    <div className='lg:w-[500px] grid md:grid-cols-2 gap-5 md:gap-0 text-center md:text-left bg-background rounded-xl p-7'>
                        <div className='space-y-5'>
                            <h3 className='bigger-text'>Godziny otwarcia</h3>
                            <div className='little-bigger-text space-y-1'>
                                <p className='font-medium'>Pon</p>
                                <p>Nieczynne</p>
                            </div>
                            <div className='little-bigger-text space-y-1'>
                                <p className='font-medium'>Wt - Śr</p>
                                <p>10:00 - 18:00</p>
                            </div>
                            <div className='little-bigger-text space-y-1'>
                                <p className='font-medium'>Czw</p>
                                <p>12:00 - 18:00</p>
                            </div>
                            <div className='little-bigger-text space-y-1'>
                                <p className='font-medium'>Pt - Sob</p>
                                <p>09:00 - 20:00</p>
                            </div>
                            <div className='little-bigger-text space-y-1'>
                                <p className='font-medium'>Ndz</p>
                                <p>Nieczynne</p>
                            </div>
                        </div>
                        <div className='space-y-5'>
                            <h3 className='bigger-text'>Kontakt</h3>
                            <div>
                                <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                    <Link href={`tel:${PHONE}`}>
                                        <Phone /> {PHONE}
                                    </Link>
                                </Button>
                            </div>
                            <div>
                                <Button variant={"link"} size={"link"} className='text-foreground hover:text-foreground/50' asChild>
                                    <Link href={`mailto:${EMAIL}`}>
                                        <Mail /> {EMAIL}
                                    </Link>
                                </Button>
                            </div>
                            <div className='flex flex-wrap gap-5'>
                                <Button size={"icon"} asChild>
                                    <Link href={INSTA} target='_blank'>
                                        <Instagram />
                                        <span className='sr-only'>Instagram</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ContactSection