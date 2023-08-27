import React from 'react'
import ProjectItem from './ProjectItem'
import yamalImg from '../assets/img/yamal.jpg'

const Project = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-boldtext-center text-[#001b5e]'>Project</h1>
        <p className='text-center py-8'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquam, cum officiis, ab sunt eligendi voluptate libero fugit reiciendis temporibus consectetur. Voluptatem nobis qui numquam error labore dolores delectus maiores, quasi tenetur impedit praesentium adipisci quaerat fugit modi odit sed voluptas iste minus asperiores aliquid doloribus debitis quidem? Dolorem, natus delectus. Eum reprehenderit rerum ad sunt hic, nisi in nulla.
            </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem  img={yamalImg} title='Yamal App'/>
            <ProjectItem  img={yamalImg} title='Yamal App'/>
            <ProjectItem  img={yamalImg} title='Yamal App'/>
            <ProjectItem  img={yamalImg} title='Yamal App'/>
        </div>
    </div>
  )
}

export default Project
