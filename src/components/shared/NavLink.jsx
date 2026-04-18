'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { use } from 'react'

const NavLink = ({ href, children }) => {
    const pathname = usePathname()
    const isActive = href === pathname;
    return <Link href={href} className={`${isActive && 'text-green-600'} text-gray-600 hover:text-gray-900 duration-300`}>{children}</Link>
}

export default NavLink