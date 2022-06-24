import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

// IMPORT GRAPHQL CODE
import { useCreateSubscriberMutation } from "../graphql/generated";

// IMPORT COMPONENTS
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Logo } from "../components/Logo";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [ createSubscriber, { loading } ] = useCreateSubscriberMutation()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/classroom')
  }

  return (
    <main className="flex flex-1 flex-col items-center justify-between min-h-screen bg-blur bg-cover bg-no-repeat">
      <div className="w-full max-w-[68.75rem] flex flex-col lg:flex lg:flex-row items-center justify-between mt-20 px-6 mx-auto">
        <div className="flex flex-col max-w-[21.875rem] lg:max-w-[580px] xl:max-w-[40rem] items-center lg:items-start justify-center text-center lg:text-left mb-8 lg:mb-0">
          <Logo width={200} height={34} />

          <h1 className="mt-8 text-[2.125rem] xl:text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="bg-gray-700 border border-gray-500 rounded p-8">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

          <form onSubmit={handleSubscribe} className="w-full flex flex-col gap-2">
            <input
              className="bg-gray-900 rounded px-5 h-14 border-none placeholder-gray-300 focus:outline-0 focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 border-none placeholder-gray-300 focus:outline-0 focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out invalid:text-red-500
              focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 mt-4 uppercase py-4 rounded-md font-bold text-sm hover:bg-green-700 transitions-colors
              duration-500 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-green-500 disabled:opacity-50"
            >
              {loading ? <Loading /> : "Garantir minha vaga"}
            </button>
          </form>
        </div>
      </div>

      <img src="/src/assets/code-mockup.png" className="mt-10" alt="" />
      <section id="footer" className="flex w-full bg-gray-900 items-center justify-center px-8">
        <Footer />
      </section>
    </main>
  )
}
