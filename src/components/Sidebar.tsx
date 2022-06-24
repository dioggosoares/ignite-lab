// IMPORT GRAPHQL CODE
import { useGetLessonsQuery } from '../graphql/generated';

// IMPORT COMPONENTS
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return (
    <aside className="relative w-full xl:w-[21.75rem] h-[calc(100vh-6.25rem)] 1xl:h-[calc(100vh-28.875rem)] overflow-auto 1xl:overflow-auto p-6 bg-gray-700 border-l border-gray-600
    scrollbar-none">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div id="listLessons" className="flex flex-col">
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>
  )
}
