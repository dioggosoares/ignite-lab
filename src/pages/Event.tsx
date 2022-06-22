import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <section className="flex flex-1 flex-col">
          <Video />
          <div className="flex w-full items-center justify-center px-8">
            <Footer />
          </div>
        </section>
        <section className="hidden md:flex flex-initial">
          <Sidebar />
        </section>
      </main>
    </div>
  )
}