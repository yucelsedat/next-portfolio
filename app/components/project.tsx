"use client";

import { projectsData } from "@/lib/data"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

type ProjectData = (typeof projectsData)[number]

export default function Project({ title, description, tags, imageUrl }: ProjectData) {

  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  })

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])
  
  return (
    <motion.div 
      ref={ref}
      // initial={{}}
      // animate={{}}
      style={{
        scale: scaleProgress,
        opacity : opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" relative bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 max-w-[42rem] rounded-lg border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem]  hover:bg-gray-200 transition">

        <div className="sm:group-even:absolute sm:group-even:right-0 flex flex-col h-full px-5 pt-4 pb-7 text-left sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[55%]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li key={index}
                className="bg-black/[0.7] px-3 py-1 text-white dark:text-white/70 text-[0.7rem] uppercase tracking-wider rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image 
          src={imageUrl}
          alt={`project: ${title}`}
          quality={90}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40
          group-hover:-translate-x-3
          group-even:group-hover:translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:scale-[1.04]
          group-even:group-hover:rotate-2
          transition
          "
        />
      </section>
    </motion.div>
  )
}