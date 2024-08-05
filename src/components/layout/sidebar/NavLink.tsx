'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  to: string
  children: React.ReactNode
  className?: string
}

export default function NavLink({to, children, className}: NavLinkProps) {
  const pathName = usePathname()

  return (
    <Link 
        href={to} 
        className={
            'uppercase font-bold hover:bg-secondary px-4 py-3 rounded-lg hover:text-primary'
            + ' '+(pathName === to ? 'bg-secondary rounded-lg text-primary' : 'bg-transparent')
            + ' ' + className
        } 
    >
        {children}
    </Link>
  )
}