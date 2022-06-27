import { Navigate, useParams } from "react-router-dom"

// IMPORT COMPONENTS
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Sidebar } from "../components/Sidebar"
import { Video } from "../components/Video"

// IMPORT GRAPHQL CODE
import { useGetLessonsQuery } from '../graphql/generated';

export function Classroom() {
  const { data } = useGetLessonsQuery()

  const { slugParam } = useParams<{ slugParam: string }>()

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <section id="content" className="flex flex-1 flex-col">
          {slugParam
            ? <Video lessonSlug={slugParam} />
            : data && <Navigate replace to={`/classroom/lesson/${data?.lessons[0]?.slug}`} />
          }
          <section id="footer" className="flex w-full items-center justify-center px-8">
            <Footer />
          </section>
        </section>
        <section id="cronograma" className="hidden 1xl:flex flex-initial bg-gray-700">
          <Sidebar />
        </section>
      </main>
    </div>
  )
}
