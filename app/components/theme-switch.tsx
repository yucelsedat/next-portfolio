'use client'

import { useTheme } from '@/context/theme-context'
import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'


export default function ThemeSwitch() {

  const  { theme, toggleTheme } = useTheme()

  return (
    <button className='fixed right-6 bottom-6 bg-white bg-opacity-80 dark:bg-gray-950 backdrop-blur-[.5rem] p-3 rounded-full border border-white border-opacity-40 dark:border-none shadow-2xl hover:scale-[1.15] active:scale-105 transition-all'
      onClick={toggleTheme}
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  )
}
