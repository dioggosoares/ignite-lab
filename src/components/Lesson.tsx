import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonsProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: "live" | "class";
}

export function Lesson({ title, slug, availableAt, type }: LessonsProps) {
  const isLessonAvailable = isPast(availableAt);
  const availableDateFormat = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const [active, setActive] = useState(true)

  return (
    <>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      {isLessonAvailable ? (
        <NavLink to={`/classroom/lesson/${slug}`} className="group rounded-md border border-gray-500 cursor-pointer mb-8 mt-2 hover:border-green-500 
        active:bg-green-500">
          <div id="contentLink" className="p-4">
            <header className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-blue-500 font-medium group-active:text-white">
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>

              <span className="text-xs rounded py-[.125rem] px-2 text-white border border-green-300">
                {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className="text-gray-200 text-left mt-5 block">
              {title}
            </strong>
          </div>
        </NavLink>
      ) : (
        <a href="#" className="rounded-md border border-gray-500 cursor-not-allowed mb-8 mt-2 hover:not:border-green-500 focus:outline-none opacity-30">
          <div className="p-4">
            <header className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
                <Lock size={20} />
                Em breve
              </span>

              <span className="text-xs rounded py-[.125rem] px-2 text-white border border-green-300">
                {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
              </span>
            </header>

            <strong className="text-gray-200 text-left mt-5 block">
              {title}
            </strong>
          </div>
        </a>
      )}
    </>
  )
}