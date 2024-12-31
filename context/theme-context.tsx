'use client'

import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

type Theme = "light" | "dark"


type ThemeContextProviderProps = {
  children: React.ReactNode
}

type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void
}

const Context = createContext<ThemeContextType | null>(null)

export default function ThemeContextProvider({children} : ThemeContextProviderProps) {

  const [ theme, setTheme ] = useState<Theme>("light")

  const toggleTheme = () => {
    if(theme === 'light') {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      document.documentElement.classList.add('dark')
    } else {
      setTheme('light')
      window.localStorage.setItem('theme', 'light')
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null

    if(localTheme) {
      if( localTheme === 'dark') {
        document.documentElement.classList.add('dark')
      }
      setTheme(localTheme)
    }
    //bu siteye ilk defa girdiysen ve sistem teması dark ise theme i 'dark' yap 
    else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    } 
  }, [])

  const contextValues = {
    theme,
    toggleTheme
  }

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(Context)

  if(!context) throw new Error('')

  return context
}