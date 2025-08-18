import React from 'react'
import { ActiveLink } from './ActiveLink'

function NavBar() {
  return (
    <nav className='backdrop-blur fixed top-3 left-1/2 -translate-x-1/2 md:w-100 w-75 h-16 z-50 bg-white/100 flex items-center justify-center md:gap-6 gap-1 shadow-sm border-[#6F5D4F] border-2 border-dashed rounded-2xl'>
      <ActiveLink href='/' tab='home'>
        home
      </ActiveLink>
      <ActiveLink href='/notebook' tab='notebook'>
        notebook
      </ActiveLink>
      <ActiveLink href='/jukebox' tab='about'>
        jukebox
      </ActiveLink>
    </nav>
  )
}

export default NavBar
