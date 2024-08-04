'use client'

import { Button } from '@/components/ui/button'
import { TThemeColors, TThemeMode } from '@/customTypes/theme-types'
import { LOCAL_THEME_COLOR, LOCAL_THEME_MODE, THEME_COLORS, THEME_MODES } from '@/global/constants'
import {setAppTheme} from '@/lib/utils'
import { useEffect, useState } from 'react'
import { Moon, Sun } from "lucide-react" 
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function ThemeCustomize() {

  const [mode, setMode] = useState<TThemeMode>()
  const [color, setColor] = useState<TThemeColors>()


  useEffect(() => {
    const themeMode: TThemeMode = (localStorage.getItem(LOCAL_THEME_MODE) || "dark") as TThemeMode
    const themeColor: TThemeColors = (localStorage.getItem(LOCAL_THEME_COLOR) || "orange") as TThemeColors
    setMode(themeMode)
    setColor(themeColor)
    setAppTheme(themeMode, themeColor)
  }, [])
  
  const setModeHandler = (mode: TThemeMode) => {
    setMode(mode)
    setAppTheme(mode, color!)
  }

  const setColorHandler = (color: TThemeColors) => {
    setColor(color)
    setAppTheme(mode!, color)
  }
  
  return (
    <section className='flex items-center gap-2'>
      <div className='order-2'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className='bg-secondary'>
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {
              THEME_MODES.map((mode) => (
                <DropdownMenuItem key={mode} onClick={() => setModeHandler(mode)}>
                  {mode}
                </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="default" className='flex items-center gap-2 bg-secondary'>
              <div className='bg-primary rounded-full w-4 h-4'></div>
              <p className='capitalize'>{color}</p>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <section className='grid grid-cols-3 gap-2'>
              {
                THEME_COLORS.map((color) => (
                  <DropdownMenuItem className='flex items-center gap-2 col-span-1 border' key={color} onClick={() => setColorHandler(color)}>
                    <div className={`${mode} ${color} bg-primary rounded-full w-4 h-4`}></div>
                    <p className='capitalize'>{color}</p>
                  </DropdownMenuItem>
                ))
              }
            </section>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

    </section>
  )
}
