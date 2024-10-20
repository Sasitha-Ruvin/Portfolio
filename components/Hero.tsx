import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaDownload, FaLocationArrow } from 'react-icons/fa6'
import { profile } from '@/data'


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='h-[80vh] w-[50vw] top-10 left-full' fill='purple'/>
            <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue'/>
        </div>

        <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center">
            {/* Radial gradient for the container to give a faded look */}
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
        </div>
        <div className='flex justify-between items-center relative z-10 my-20'>
            <div className='max-w-[90vw] md:max-w-[45vw] flex flex-col items-start justify-center'>
                <h2 className='uppercase tracking-widest text-xs text-left text-blue-100'>Hello There</h2>
                <TextGenerateEffect
                    className='text-left text-[30px] md:text-5xl lg:text-6xl'
                    words='I&apos;m Sasitha Ruvin'
                />
                <p className='text-left md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                    React.JS Web Developer
                </p>
                <div className='flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 '>
                    <a href="#about">
                        <MagicButton 
                            title="Show My Work"
                            icon={<FaLocationArrow/>}
                            position='right'
                        />
                    </a>
                    <a href="/resume.pdf" download>
                        <MagicButton
                            title='Resume'
                            icon={<FaDownload/>}
                            position='right'
                        />
                    </a>
                </div>
            </div>

            {/* Right side image with spacing and mobile adjustments */}
            <div className='flex-shrink-0 ml-4 md:ml-8'>
                <img 
                    src={profile.img} 
                    alt={profile.title} 
                    className='w-36 h-36 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover'
                />
            </div>
        </div>
        






    </div>
  )
}

export default Hero