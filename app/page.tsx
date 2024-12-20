import About from "./components/About"
import Intro from "./components/Intro"
import SectionDivider from "./components/Section-divider"
import Projects from "./components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 max-w-[50rem] !text-center mx-auto mb-28 sm:mb-0">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
