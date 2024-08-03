import Image from "next/image";
import logo from "@/assets/images/logo.png";

export default function Footer() {
  return (
    <footer className='bg-gray-100 dark:bg-background w-full px-4 py-1 border-t border-primary shadow-sm font-semibold flex flex-col md:flex-row justify-between items-center text-sm text-center '>
      <p className="pb-1 md:p-0">© 2024 Bask Dashboard, All rights reserved.</p>
      <div className="bg-primary rounded-lg px-2">
        <Image src={logo} alt="logo" width={200} />
      </div>
    </footer>
  )
}