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

  return (
    <>
      <span className="text-gray-300">
        {availableDateFormat}
      </span>
      {isLessonAvailable ? (
        <button type="button" className="rounded-md border border-gray-500 cursor-pointer mb-8 mt-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-green-500">
          <div className="p-4">
            <header className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
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
        </button>
      ) : (
        <button type="button" className="rounded-md border border-gray-500 cursor-not-allowed mb-8 mt-2
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-600 focus:ring-blue-500 opacity-30" disabled>
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
        </button>
      )}
    </>
  )
}