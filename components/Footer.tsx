import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { div } from 'framer-motion/client'

const Footer = () => {
  return (
   <footer className='w-full mb-[100px] md:mb-5 pb-10' id='contact'>
        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to Take <span className='text-purple'> your</span> Digital presence to next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Reach Out to me Today.. Let&apos;s discuss how I can help you to achieve your goals</p>
            <a href="mailto:sasitharuween@gmail.com">
                <MagicButton
                title="Let's Get in Touch"
                icon={<FaLocationArrow/>}
                position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Sasitha</p>
            <div className='flex items-center md:gap-3 gap-6'>
                {socialMedia.map((profile)=>(
                    <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'>
                       <a key={profile.id}
                          href={profile.link}
                          target="_blank">
                       <img src={profile.img} alt="Social" width={20} height={20} />
                       </a>
                       
                    </div>
                ))}
            </div>
        </div>

   </footer>
  )
}

export default Footer