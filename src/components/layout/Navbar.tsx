import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import ThemeCustomize from '@/components/ui/theme-customize'
import SideSheet from '@/components/layout/sidebar/SideSheet'


export default function Navbar() {
  
  return (
    <nav className='h-full py-[9px] px-4 flex items-center justify-between shadow-md dark:shadow-gray-700 bg-background'>
      <div className='hidden md:block pl-14'></div>
      <section className='block md:hidden'>
        <div className='flex items-center'><SideSheet /></div>
      </section>
      <section className='flex items-center justify-end gap-4'>
        <ThemeCustomize />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </nav>
  )
}
