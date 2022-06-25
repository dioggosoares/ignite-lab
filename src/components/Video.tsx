import { RingLoader } from 'react-spinners';
import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, ImageSquare, Lightning } from "phosphor-react"

// IMPORT GRAPHQL CODE
import { useGetLessonBySlugQuery } from '../graphql/generated';

// IMPORT VIME CSS
import '@vime/core/themes/default.css'

interface VideoProps {
  lessonSlug: string;
}

export function Video({ lessonSlug }: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug,
    },
  })

  if (!data || !data.lesson) {
    return (
      <div id="classContent" className="flex flex-1 mx-auto items-center justify-center mt-[4.6875rem] md:mt-0">
        <RingLoader
          color="#81D8F7"
          loading={true}
          size={100}
          speedMultiplier={2}
        />
      </div>
    )
  }

  return (
    <div id="classContent" className="flex-1 mt-[4.6875rem]">
      <div id="videoBox" className="bg-black flex justify-center">
        <div className="w-full h-full max-w-[68.75rem] max-h-[60vh] aspect-video">
          <Player>
            <Youtube
              key={data.lesson.videoId}
              videoId={data.lesson.videoId}
            />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div id="infoClass" className="max-w-[68.75rem] mx-auto p-8">
        <header className="flex flex-wrap items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mt-6">
                <img
                  className="h-16 w-16 rounded-full ring-2 ring-offset-4 ring-offset-gray-900 ring-blue-500"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block">{data.lesson.teacher.name}</strong>
                  <span className="text-gray-200 text-sm block">{data.lesson.teacher.bio}</span>
                </div>
              </div>
            )
            }
          </div>

          <div className="flex flex-col w-full lg:w-auto gap-4">
            <a href="#" className="flex items-center p-4 text-sm bg-green-500 rounded font-bold uppercase gap-2 justify-center hover:bg-green-700
            transitions-colors duration-500 ease-in-out">
              <DiscordLogo size={24} />
              Comunidade do Discord
            </a>

            <a href="#" className="flex items-center p-4 text-sm border border-blue-500 text-blue-500 rounded font-bold uppercase gap-2 justify-center
            hover:bg-blue-500 hover:text-gray-900 transitions-colors duration-500 ease-in-out">
              <Lightning size={24} />
              <span >Acesse o desafio</span>
            </a>
          </div>
        </header>

        <footer className="gap-8 mt-20 flex flex-wrap lg:flex-wrap xl:grid xl:grid-cols-2">
          <a href="" className="flex w-full xl:w-auto bg-gray-700 rounded overflow-hidden items-stretch md:justify-between gap-6 hover:bg-gray-600 border-2 border-green-500 border-opacity-0
          hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out">
            <div className="flex p-6 h-full items-center bg-green-500">
              <FileArrowDown size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="flex h-full p-6 items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="flex w-full xl:w-auto bg-gray-700 rounded overflow-hidden items-stretch md:justify-between gap-6 hover:bg-gray-600 border-2 border-green-500 border-opacity-0
          hover:-translate-y-2 hover:border-opacity-100 transitions-all duration-500 ease-in-out">
            <div className="flex p-6 h-full items-center bg-green-500">
              <ImageSquare size={40} />
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200">Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className="flex h-full p-6 items-center text-blue-500">
              <CaretRight size={24} />
            </div>
          </a>
        </footer>
      </div>
    </div>
  )
}
