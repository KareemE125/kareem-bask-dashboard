'use client'

import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";
import appRoutes from "@/routes/routes";


export default function Footer() {
  const path = usePathname();
  if (path.includes(appRoutes[0].path)) return null
  return (
    <footer className='bg-gray-100 dark:bg-background w-full px-4 py-1 border-t border-primary shadow-sm font-semibold flex flex-col md:flex-row justify-between items-center text-sm text-center '>
      <p className="pb-1 md:p-0">© 2024 Bask Dashboard, All rights reserved.</p>
      <Image src={logo} alt="logo" width={200} className="invert dark:invert-0"/>
    </footer>
  )
}