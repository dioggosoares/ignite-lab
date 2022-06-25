import { useState } from "react";
import { X, List } from 'phosphor-react';

import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="z-[100] fixed w-full flex flex-row items-center justify-between xl:justify-center py-5 px-6 bg-gray-700 border-b border-gray-600">
      <Logo width={200} height={34} />
      <div className="xl:hidden flex flex-row items-center gap-2">
        <span className="text-sm text-gray-100">Aulas</span>
        {toggleMenu
          ?
          <X size={28} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenu(false)} />
          :
          <List size={28} className="text-blue-500 cursor-pointer" onClick={() => setToggleMenu(true)} />
        }
      </div>
      {toggleMenu ? (
        <div className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-0 transition-all duration-150 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      ) : (
        <div className="z-[100] xl:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-150 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      )
      }
    </header>
  )
}
