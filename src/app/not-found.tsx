import { Button } from '@/components/ui/button'
import appRoutes from '@/routes/routes'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <main className='h-screen pb-20 flex flex-col justify-center items-center gap-4'>
      <h2>404 | Not Found</h2>
      <p>Could not find requested resource </p>
      <Button asChild>
        <Link href={appRoutes[0].path}>Return Home</Link>
      </Button>
    </main>
  )
}