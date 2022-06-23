import { useParams } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Classroom() {
  const { slug } = useParams<{ slug: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <section id="content" className="flex flex-1 flex-col">
          {slug
            ? <Video lessonSlug={slug} />
            : <div id="classContent" className="flex-1 mt-[4.6875rem] md:mt-0" />
          }
          <section id="footer" className="flex w-full items-center justify-center px-8">
            <Footer />
          </section>
        </section>
        <section id="cronograma" className="hidden md:flex flex-initial">
          <Sidebar />
        </section>
      </main>
    </div>
  )
}