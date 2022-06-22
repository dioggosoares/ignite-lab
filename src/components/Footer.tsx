import { Rocketseat } from "./Rocketseat";

export function Footer() {
  return (
    <footer className="flex flex-col py-6 md:flex-row items-center justify-between w-full h-14 border-t border-gray-500">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Rocketseat />
        <span className="text-gray-300 text-xs">Rocketseat - Todos os direitos reservados</span>
      </div>
      <span className="text-gray-300 text-xs py-6 md:py-0">Políticas de privacidade</span>
    </footer>
  )
}