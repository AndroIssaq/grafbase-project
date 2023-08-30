import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavLinks } from '@/constants'
import AuthProvider from './AuthProvider'
const Navbar = () => {
  const session = {}
  return (
    <nav className='flexBetween navbar'>
    <div className='flex-1 flexStart gap-10'>
      <Link href='/'>
        <Image
          src='/logo.svg'
          width={116}
          height={43}
          alt='logo'
        />
      </Link>
      <ul className='xl:flex hidden text-small gap-7'>
        {NavLinks.map((link) => (
          <Link href={link.href} key={link.text}>
            {link.text}
          </Link>
        ))}
      </ul>
    </div>

    <div className='flexCenter gap-4'>
      {session?(
        <>
          <Link href="/create-project">
            login
          </Link>
        </>
      ) : (
        <AuthProvider/>
      )}
    </div>
  </nav>
  )
}

export default Navbar