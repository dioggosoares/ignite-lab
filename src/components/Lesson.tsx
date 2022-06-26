import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'
import classNames from 'classnames'
interface LessonsProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonsProps) {
  const { slugParam } = useParams<{ slugParam: string }>()
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const navigate = useNavigate()

  const isActiveLesson = slugParam === slug

  return (
    <>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      <div className={classNames("group", {
          'cursor-not-allowed': !isLessonAvailable
        })}>
        <NavLink to={`/classroom/lesson/${slug}`}  className={classNames("group", {
          'pointer-events-none opacity-30 hover:not:border-green-500': !isLessonAvailable
        })}>
          <div id="infoLink" className={classNames('rounded-md border border-gray-500 cursor-pointer p-4 mb-8 mt-2', {
            'bg-green-500': isActiveLesson,
            'group-hover:border-green-500': isLessonAvailable,
            'tooltipArrow': isActiveLesson,
          })}>
            <header className="flex items-center justify-between">
              {isLessonAvailable ? (
                <span className={classNames('flex items-center gap-2 text-sm font-medium', {
                  'text-white': isActiveLesson,
                  'text-blue-500': !isActiveLesson,
                })}>
                  <CheckCircle size={20} />
                  Conteúdo liberado
                </span>
              ) : (
                <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                  <Lock size={20} />
                  Em breve
                </span>
              )}

              <span className={classNames('text-xs rounded py-[.125rem] px-2 text-white border', {
                'border-white': isActiveLesson,
                'border-green-300': !isActiveLesson,
              })}>
                {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className={classNames('text-left mt-5 block', {
              'text-white': isActiveLesson,
              'text-gray-200': !isActiveLesson,
            })}>
              {title}
            </strong>
          </div>
        </NavLink>
      </div>
    </>
  )
}
