import React from 'react'
import Container from '../ui/container'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import Pizzas from '../common/Pizzas'

function MenuSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <h2 className='heading2 text-center heading-margin-bottom'>Nasze menu</h2>
            <Tabs className='lg:flex-row gap-10' defaultValue='pizza'>
                <TabsList className='bg-background rounded-xl border p-7 w-full lg:w-[400px] flex-col gap-5'>
                    <TabsTrigger value='pizza'>Pizze</TabsTrigger>
                    <TabsTrigger value='salad'>Sałatki</TabsTrigger>
                    <TabsTrigger value='pasta'>Makarony</TabsTrigger>
                </TabsList>
                <div className='grow bg-background rounded-xl border p-7'>
                    <TabsContent value='pizza'>
                        <Pizzas />
                    </TabsContent>
                </div>
            </Tabs>
        </Container>
    </section>
  )
}

export default MenuSection