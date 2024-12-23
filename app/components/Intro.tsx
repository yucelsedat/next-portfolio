'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {

  const { ref } = useSectionInView('Home', 0.75)
  
  return (
    <section ref={ref} id='home' className='mb-28 sm:mb-0 scroll-mt-[100rem]'>
      <div>
        <div className='relative w-24 mx-auto'>
          <motion.div
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{type: 'tween',  duration: 0.2}}
          >
          <Image 
            src={'/profil-sea.png'}
            alt='profile image'
            width={192}
            height={192}
            priority={true}
            quality={100}
            className='w-24 h-24 object-cover aspect-[1/1] rounded-full border-[0.35rem] border-white shadow-xl '
          />
          </motion.div>

          <motion.span className='absolute bottom-0 right-0 text-3xl'
            initial={{opacity: 0, scale: 0}}
            animate={{opacity: 1, scale: 1}}
            transition={{
              type: 'spring',
              stiffness: 125,
              delay: 0.1,
              duration: 0.7
            }}
          >
            👋 
          </motion.span>
        </div>
      </div>

     
      
      <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl '
        initial={{opacity: 0, y: 100}}
        animate={{opacity: 1, y: 0}}
      >
        <span className="font-bold">Hello, I'm Sedat.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">8 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      {/* BUTTONS */}
      <motion.div className='flex flex-col gap-5 items-center justify-center sm:flex-row text-lg font-medium'
         initial={{opacity: 0, y: 100}}
         animate={{opacity: 1, y: 0}}
         transition={{
          delay: 0.1
         }}
      >
        <Link href='#contact'
          className='group bg-gray-950 flex items-center gap-2 text-white py-3 px-7 rounded-full focus:scale-110 hover:scale-110  hover:bg-gray-950 active:scale-105 transition'
        >
          Contact me here
          <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition'/>
        </Link>
        <a href="/CV.pdf"
          download
          className='group bg-white flex items-center gap-2 py-3 px-7 rounded-full focus:scale-110 hover:scale-110  active:scale-105 transition border border-black/10'
        >
          Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition'/>
        </a>
        <a href="https://linkedin.com" 
          target='_blank'
          className='bg-white flex items-center gap-2 p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'
        >
          <BsLinkedin />
        </a>
        <a href="https://linkedin.com" 
          target='_blank'
          className='bg-white flex items-center gap-2 p-4 text-gray-700 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10'
        >
          <BsGithub />
        </a>
      </motion.div>

    </section>
  )
}
