'use client'

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useTheme } from '@/context/theme-context';

export default function Experience() {

  const { ref } = useSectionInView('Experience', .35)

  const { theme } = useTheme()
  
  return (
    <section ref={ref} id='experience' className='scroll-mt-28 mb-28 sm:mb-40'>
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((data, index) => (
          
          <React.Fragment  key={index} >
            <VerticalTimelineElement
              contentStyle={{
                background: theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                boxShadow: 'none' ,
                border: theme === 'light' ? '1px solid rgba(0, 0, 0, .05)': '1px solid rgba(255, 255, 255, .05)',
                textAlign: 'left' , 
                padding: '1.3rem 2rem'
              }}
              contentArrowStyle={{
                borderRight: '.4rem solid #9ca3af'
              }}
              date={data.date}
              icon={data.icon}
              iconClassName = 'dark:bg-gray-900 dark:border dark:border-gray-900 border border-white bg-white'
              // iconStyle={{
              //   background: 'white',
              //   fontSize: '1.5rem'
              // }}
              >
              <h3 className='font-semibold capitalize'>{data.title}</h3>
              <p className='font-normal !mt-0'>{data.location}</p>
              <p className='!font-normal !mt-1 text-gray-700 dark:text-white/40'>{data.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  )
}
