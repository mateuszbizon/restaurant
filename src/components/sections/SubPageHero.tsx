import React from 'react'
import Container from '../ui/container'
import Shadow from '../ui/shadow'

type SubPageHeroProps = {
    title?: string;
}

function SubPageHero({ title = "O nas" }: SubPageHeroProps) {
  return (
    <header className='py-[calc(theme(padding.section-padding)*2)] bg-[url(/restaurant.jpg)] bg-cover bg-center bg-no-repeat relative z-0'>
        <Shadow />
        <Container>
            <div className='flex flex-col justify-center h-full'>
                <h1 className='heading1 text-center'>{title}</h1>
            </div>
        </Container>
    </header>
  )
}

export default SubPageHero