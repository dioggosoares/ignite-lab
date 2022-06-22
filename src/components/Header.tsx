import { useState } from "react";
import { X, List } from 'phosphor-react';

import { Logo } from "./Logo";
import { Sidebar } from "./Sidebar";

export function Header() {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <header className="fixed md:static w-full flex flex-row items-center justify-between md:justify-center py-5 px-6 bg-gray-700 border-b border-gray-600">
      <Logo width={200} height={34} />
      <div className="flex flex-row items-center gap-2">
        <span className="md:hidden text-sm text-gray-100">Aulas</span>
        {toggleMenu
          ?
          <X size={28} className="md:hidden text-blue-500 cursor-pointer" onClick={() => setToggleMenu(false)} />
          :
          <List size={28} className="text-blue-500 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
          // <svg width="48" height="48" className="text-gray-200 md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          //   <rect x="12" y="20" width="24" height="2" fill="#81D8F7"></rect>
          //   <rect x="20" y="26" width="16" height="2" fill="#81D8F7"></rect>
          //   <rect x="24" y="32" width="12" height="2" fill="#81D8F7"></rect>
          // </svg>
        }
      </div>
      {toggleMenu ? (
        <div className="md:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-0 transition-all duration-150 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      ) : (
        <div className="md:hidden fixed top-[4.6875rem] right-0 w-full h-full bg-gray-700 translate-x-full transition-all duration-150 ease-in-out">
          <nav id="mobileNavbar" className="flex flex-col w-full">
            <Sidebar />
          </nav>
        </div>
      )
      }
    </header>
  )
}