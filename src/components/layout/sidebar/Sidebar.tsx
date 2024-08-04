'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { PanelLeftClose, PanelLeftOpen } from "lucide-react"

export default function Sidebar({children}: {children: React.ReactNode}) {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <section className={`relative h-full shadow dark:shadow-gray-700 bg-background transition-all ${isOpen? ' w-full min-w-60 max-w-72 py-3 p-2 ' : ' w-0 min-w-0 max-w-0 '}`}>
      <div className="absolute top-2 -right-14 z-50">
        <Button variant="ghost" size="icon" onClick={toggleSidebar} >
          {isOpen ? <PanelLeftClose /> : <PanelLeftOpen />}
        </Button>
      </div>
      <main className="w-full overflow-hidden">
        {children}
      </main>
    </section>
  )
}
