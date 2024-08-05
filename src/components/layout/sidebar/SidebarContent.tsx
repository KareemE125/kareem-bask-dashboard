import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import appRoutes from '@/routes/routes'
import NavLink from '@/components/layout/sidebar/NavLink'

export default function SidebarContent() {
  return (
    <section className="h-full flex flex-col gap-6">
      <header className="flex justify-center items-center border-b-2 pt-3 py-3 md:border-b-0 md:pt-0 md:shadow-md md:dark:shadow-gray-700">
        <Image src={logo} alt='logo' width={450} className='invert dark:invert-0'/>
      </header>
      <section className='flex flex-col gap-3'>
        { appRoutes.map((route) => <NavLink key={route.path} to={route.path} className='flex items-center gap-4'>
          <span>{route.icon}</span>
          <span className='text-[17px] pt-1'>{route.name}</span>
        </NavLink>) }
      </section>
    </section>
  )
}
