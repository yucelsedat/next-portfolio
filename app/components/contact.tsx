'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail'

export default function Contact() {

  const { ref } = useSectionInView('Contact', .5)
  
  return (
    <motion.section ref={ref} id='contact'
      className='scroll-mt-28 mb-20 sm:mb-28 w-[min(100%, 38rem)]'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 dark:text-white/40 -mt-6'>Please contact me directly at <a className='underline' href="mailto:yucelsedatt@gmail.com">exampe@gmail.com</a> or through this form.</p>

      <form className=" mt-10 flex flex-col gap-2 dark:text-black"
        action={ async (formData) => {

          //aslında sadece action={sendEmail} yazabilirdik ancak sever-action dan bize gelecek mesajları alıp burada işleyebilmek için bu şekilde yazmalıyız
          await sendEmail(formData)
        }}
      >
        <input 
          className='h-14 rounded-lg borderBlack pl-4  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all ' 
          name='senderEmail'
          type="email"
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea 
          className='h-52 my-3 rounded-lg p-4 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all ' 
          name='message'
          required
          maxLength={500}
          placeholder='Your message' 
        />
        <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110  active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10'>Submit <FaPaperPlane className='text-xs opacity-70 transtion-all group-hover:translate-x-1 group-hover:-translate-y-1' /></button>
      </form>
    </motion.section>
  )
}
