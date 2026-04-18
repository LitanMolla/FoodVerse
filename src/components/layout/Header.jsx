import Link from 'next/link'
import React from 'react'
import NavLink from '../shared/NavLink'

const Header = () => {
  return (
    <header className='bg-gray-100 shadow shadow-gray-200 py-4'>
        <nav className="container">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-lg font-bold">
                    Food<span className='text-green-600'>Verse</span>
                </Link>
                <div className='flex gap-2.5'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/food-client'>Food Client</NavLink>
                    <NavLink href='/food-server'>Food Server</NavLink>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header