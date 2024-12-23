'use client'

import { LinkName } from '@/types'
import React, { createContext, useContext, useState } from 'react'

type ActiveSectionContextProviderProps = {
  children: React.ReactNode,
}

type ActiveSectionContextType = {
  activeSection: LinkName,
  setActiveSection: React.Dispatch<React.SetStateAction<LinkName>>,
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
}

const Context = createContext<ActiveSectionContextType | null >(null)

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps ) {

  const [activeSection, setActiveSection ] = useState <LinkName>('Home')
  const [timeOfLastClick, setTimeOfLastClick ] = useState(0)

  const context = {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  )
}

export const useActiveSectionContext = () => {
  const context = useContext(Context)

  if(context === null ) {
    throw new Error(
      'useActiveSectionContext must be used within a ActiveSectionContextProvider'
    )
  }

  return context
}
