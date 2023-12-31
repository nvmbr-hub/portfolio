import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter,FaFacebookF,FaInstagram,FaLinkedinIn, FaRegSmileWink} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-center object-cover scale-x-[-1]' src="\src\assets\img\bg_ph.jpg" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start'>
                <h1 className='sm:test-5xl text-4xl font-bold text-gray-800'>I'm Vlad Simutin</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                I'm a 
                <TypeAnimation
                sequence={[
                    'Another person on your way',
                    2000,
                    () => {
                        return <FaRegSmileWink />
                    },
                    2000, //Разобраться
                    'Full-stack developer',
                    1500,
                    'Project manager',
                    1500,
                ]}
                wrapper="div"
                speed={50}
                style={{ fontSize: '1em', paddingLeft: '5px' }}
                repeat={Infinity}
                cursor={true}
                />
                </h2>
                <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                    <FaTwitter className='cursor-pointer' size={20}/>
                    <FaFacebookF className='cursor-pointer' size={20}/>
                    <FaInstagram className='cursor-pointer' size={20}/>
                    <FaLinkedinIn className='cursor-pointer' size={20}/>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;

