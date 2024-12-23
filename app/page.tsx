import About from "./components/about"
import Intro from "./components/intro"
import SectionDivider from "./components/section-divider"
import Projects from "./components/projects"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 max-w-[50rem] !text-center mx-auto">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  )
}
