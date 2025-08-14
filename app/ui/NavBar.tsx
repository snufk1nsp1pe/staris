import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className=' backdrop-blur fixed top-3 left-1/2 -translate-x-1/2 w-100 h-16 z-50 bg-white/100 flex items-center justify-center gap-6 px-6 py-4 shadow-sm border-[#6F5D4F] border-2 border-dashed rounded-2xl'>
      <Link
        href={'/about'}
        className={
          'font-mono px-6 py-2 bg-slate-900/0 rounded-lg font-bold transform transition duration-400  text-[#6F5D4F] hover:text-[#B83555] hover:-translate-y-0.5'
        }>
        about
      </Link>

      <Link
        href={'/'}
        className={
          'font-mono px-6 py-2 bg-slate-900/0 rounded-lg font-bold transform transition duration-400  text-[#6F5D4F] hover:text-[#8CA273] hover:-translate-y-0.5'
        }>
        home
      </Link>

      <Link
        href={'/notebook'}
        className={
          'font-mono px-6 py-2 bg-slate-900/0 rounded-lg font-bold transform transition duration-400  text-[#6F5D4F] hover:text-[#56768D]  hover:-translate-y-0.5'
        }>
        notebook
      </Link>
    </nav>
  )
}

export default NavBar