'use client'

import Image from "next/image";
import { useState } from "react"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import logo from "@/assets/images/logo.png";

export default function Sidebar({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <section className={`relative flex flex-col h-full shadow-md dark:shadow-gray-700 bg-background transition-all ${isOpen? ' w-full min-w-60 max-w-72 py-3 p-2 ' : ' w-0 min-w-0 max-w-0 '}`}>
      <div className="absolute top-2 -right-14 z-50">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} >
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <main className="w-full overflow-hidden">
        {children}
      </main>
      <div className='mt-auto'>
        <footer className='bg-background w-full border-t border-primary shadow-md font-semibold text-xs text-center '>
          <p className="p-2">© 2024 Bask Dashboard, All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
