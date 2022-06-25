import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gql, useMutation } from "@apollo/client";
import { toast } from "react-toastify";

// IMPORT CSS
import "react-toastify/dist/ReactToastify.css";

// IMPORT GRAPHQL CODE
import { useCreateSubscriberMutation, usePublishSubscriberMutation } from "../graphql/generated";

// IMPORT COMPONENTS
import { Footer } from "../components/Footer";
import { Loading } from "../components/Loading";
import { Logo } from "../components/Logo";

// IMPORT STATIC IMAGE
import codeMockup from '../assets/code-mockup.png';

export function Subscribe() {
  const navigate = useNavigate()

  const [createSubscriber, { loading, error }] = useCreateSubscriberMutation()
  const [publishSubscriber, { error: publishError }] = usePublishSubscriberMutation()

  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState<{ name: string; email: string }>({
    name: '',
    email: ''
  });

  const [formErrors, setFormErrors] = useState<{ name: boolean; email: boolean }>({
    name: false,
    email: false
  });

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;

    if (formErrors[name as 'name' | 'email']) {
      setFormErrors((prevState) => ({
        ...prevState,
        [name]: false
      }));
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubscribe(evt: FormEvent) {
    evt.preventDefault();

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      setFormErrors((prevState) => ({ ...prevState, email: true }))
      toast("Esse é um email válido 🤔?", {type: "warning"});
      return
    }

    const subscriberData = await createSubscriber({
      variables: {
        name: formData.name,
        email: formData.email
      }
    })

    if (subscriberData) {
      const publishedData = await publishSubscriber({
        variables: {
          email: formData.email
        }
      });

      if ((error || publishError) && publishedData) {
        toast(error ? error.message : publishError?.message + " 😮‍💨", {type: "error"})
        setIsSuccess(false)
      } else {
        setFormErrors({email: false, name: false});
        setIsSuccess(true)
        toast("Sua vaga está garantida 🥳", {type: "success"});
      }
    }
  }

  useEffect(() => {
    if((!error || !publishError) && isSuccess) {
      navigate('/classroom')
    }
  }, [isSuccess])

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
              onChange={handleChange}
              name="name"
              required
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 border-none placeholder-gray-300 focus:outline-0 focus:ring-green-300 focus:border-green-300
              hover:border-green-300 transition-all duration-500 ease-in-out invalid:text-red-500
              focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={handleChange}
              name="email"
              // required
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

      <img src={codeMockup} className="mt-10" alt="" />
      <section id="footer" className="flex w-full bg-gray-900 items-center justify-center px-8">
        <Footer />
      </section>
    </main>
  )
}
