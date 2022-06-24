import { useNavigate, useParams } from "react-router-dom"

// IMPORT GRAPHQL CODE
import { useGetSlugQuery } from "../graphql/generated"

// IMPORT COMPONENTS
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

export function Classroom() {
  const { data } = useGetSlugQuery()

  const { slugParam } = useParams<{ slugParam: string }>()
  const navigate = useNavigate()

  const slug = data?.lessons[0].slug

  if (!slugParam) {
    navigate(`/classroom/lesson/${slug}`)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <section id="content" className="flex flex-1 flex-col">
          {slugParam
            ? <Video lessonSlug={slugParam} />
            : <div id="classContent" className="flex-1 mt-[4.6875rem] md:mt-0" />
          }
          <section id="footer" className="flex w-full items-center justify-center px-8">
            <Footer />
          </section>
        </section>
        <section id="cronograma" className="hidden xl:flex flex-initial bg-gray-700">
          <Sidebar />
        </section>
      </main>
    </div>
  )
}
