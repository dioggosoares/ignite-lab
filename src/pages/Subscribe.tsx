import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Logo } from "../components/Logo";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber ($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [ createSubscriber, { loading } ] = useMutation(CREATE_SUBSCRIBER_MUTATION)

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
      <div className="w-full max-w-[68.75rem] flex flex-col md:flex md:flex-row items-center justify-between mt-20 mx-auto">
        <div className="flex flex-col max-w-[21.875rem] items-center justify-center text-center md:items-start md:text-left md:max-w-[40rem] mb-8 md:mb-0">
          <Logo width={200} height={34} />

          <h1 className="mt-8 text-[2.125rem] md:text-[2.5rem] leading-tight">
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
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 mt-4 uppercase py-4 rounded font-bold text-sm
              hover:bg-green-700 transitions-colors duration-500 ease-in-out disabled:opacity-50"
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