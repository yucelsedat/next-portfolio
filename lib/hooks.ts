import { useActiveSectionContext } from '@/context/active-section-context'
import { LinkName } from '@/types'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'


export  function useSectionInView(sectionName : LinkName, threshold= 0.5 ) {

  const { setActiveSection , timeOfLastClick } = useActiveSectionContext()

  const { ref, inView } = useInView({
    threshold
  })

  useEffect(() => {
    if( inView && Date.now() - timeOfLastClick > 1000 ) {
      setActiveSection(sectionName)
    } 
    
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return (
    {
      ref
    }
  )
}
