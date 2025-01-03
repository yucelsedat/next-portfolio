import ActiveSectionContextProvider from '@/context/active-section-context'
import Navbar from './components/navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './components/footer'
import ThemeSwitch from './components/theme-switch'
import ThemeContextProvider from '@/context/theme-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sedat | Personal Portfolio',
  description: 'Sedat is a full-stack developer with 1 year of experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 transition-colors`}>
        <div className="bg-[#fbe2e3] dark:bg-[#e0a6a8]  absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] dark:bg-[#9284ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" ></div>
        <ActiveSectionContextProvider>
        <ThemeContextProvider>
          <Navbar />
          {children}
          <Footer />
          <ThemeSwitch />
        </ThemeContextProvider>
        </ActiveSectionContextProvider>
        {/*  */}
      </body>
    </html>
  )
}
