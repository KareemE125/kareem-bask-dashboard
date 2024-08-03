'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import errorImage from '@/assets/images/error.png'

 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className='h-screen flex flex-col md:flex-row'>
      <section className='h-full w-full flex flex-col gap-12 text-center justify-center items-center p-8 bg-gradient-to-br from-gray-900 to-yellow-100'>
        <h2 className='text-2xl font-bold text-gray-200'>{error ? error.toString() : 'Something went wrong!'}</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </section>
      <section className='w-full hidden md:block'>
        <Image 
            className='h-full w-full object-cover object-bottom -z-10'
            src={errorImage} 
            alt='Error' 
            width={400}
            height={400}
        />
      </section>
    </main>
  )
}