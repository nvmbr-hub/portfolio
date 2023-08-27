import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2020,
        title: 'Wordpress developer',
        duration: '5 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil molestias iure dolorem, sequi repudiandae minima culpa, ea veniam, ducimus excepturi tempora architecto velit ad nulla illo ipsam qui ipsa hic cum fugit alias aut sint ut? Incidunt eius qui rerum odio. Qui earum vero fuga eum veritatis libero corrupti.'
    },
    {
        year: 2020,
        title: 'Wordpress developer',
        duration: '5 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil molestias iure dolorem, sequi repudiandae minima culpa, ea veniam, ducimus excepturi tempora architecto velit ad nulla illo ipsam qui ipsa hic cum fugit alias aut sint ut? Incidunt eius qui rerum odio. Qui earum vero fuga eum veritatis libero corrupti.'
    },
    {
        year: 2020,
        title: 'Wordpress developer',
        duration: '5 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil molestias iure dolorem, sequi repudiandae minima culpa, ea veniam, ducimus excepturi tempora architecto velit ad nulla illo ipsam qui ipsa hic cum fugit alias aut sint ut? Incidunt eius qui rerum odio. Qui earum vero fuga eum veritatis libero corrupti.'
    },
    {
        year: 2020,
        title: 'Wordpress developer',
        duration: '5 years',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nihil molestias iure dolorem, sequi repudiandae minima culpa, ea veniam, ducimus excepturi tempora architecto velit ad nulla illo ipsam qui ipsa hic cum fugit alias aut sint ut? Incidunt eius qui rerum odio. Qui earum vero fuga eum veritatis libero corrupti.'
    },
]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
            key={idx} 
            year={item.year} 
            title={item.title} 
            duration={item.duration} 
            details={item.details}
            />
        ))}
    </div>
  )
}

export default Work;