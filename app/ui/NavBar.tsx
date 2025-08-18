import React from 'react'
import { ActiveLink } from './ActiveLink'

function NavBar() {
  return (
    <nav className=' backdrop-blur fixed top-3 left-1/2 -translate-x-1/2 w-100 h-16 z-50 bg-white/100 flex items-center justify-center gap-6 px-6 py-4 shadow-sm border-[#6F5D4F] border-2 border-dashed rounded-2xl'>
      <ActiveLink href='/about' tab='about'>
        about
      </ActiveLink>
      <ActiveLink href='/' tab='home'>
        home
      </ActiveLink>
      <ActiveLink href='/notebook' tab='notebook'>
        notebook
      </ActiveLink>
    </nav>
  )
}

export default NavBar
