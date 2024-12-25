'use client'

import { skillsData } from '@/lib/data'
import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100
  },
  animate:(index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

export default function Skills() {

  const { ref } = useSectionInView('Skills', .8)
  
  return (
    <section ref={ref} id='skills' className='mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40'>
      <SectionHeading>My Skills</SectionHeading>
      <ul 
        className='flex flex-wrap items-center justify-center content-center gap-2 text-lg text-gray-800'
      >
        {
          skillsData.map((skill, index) => (
            <motion.li key={index}
              className='bg-white px-5 py-2 borderBlack rounded-xl'
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView={'animate'}
              viewport={{
                once: true
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}
