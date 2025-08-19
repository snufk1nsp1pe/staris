import React from 'react'
// import { ActiveLink } from './ActiveLink'
import Link from 'next/link'

function NavBar() {
  return (
    // <nav className='backdrop-blur fixed top-3 left-1/2 -translate-x-1/2 md:w-100 w-75 h-16 z-50 bg-white/100 flex items-center justify-center md:gap-6 gap-1 shadow-sm border-[#6F5D4F] border-2 border-dashed rounded-2xl'>
    //   <ActiveLink href='/' tab='home'>
    //     home
    //   </ActiveLink>
    //   <ActiveLink href='/notebook' tab='notebook'>
    //     notebook
    //   </ActiveLink>
    //   <ActiveLink href='/jukebox' tab='about'>
    //     jukebox
    //   </ActiveLink>
    // </nav>
    <nav className='absolute top-[-18px] left-1/2 -translate-x-1/2 md:w-100 w-75 h-16 z-50 flex items-start justify-center md:gap-6 gap-1 '>
      <Link href={'/'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 12 20'
          width='100'
          height='120'
          fill='#E47083'
          className='bi bi-bookmark-fill'>
          <path d='M2 2v17.5a.5.5 0 0 0 .74.439L6 17.069l4.26 2.87A.5.5 0 0 0 10 19.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2' />

          <g transform='translate(6 10) rotate(-90)'>
            <text
              x='0'
              y='0'
              textAnchor='middle'
              dominantBaseline='middle'
              fontSize='2.5'
              fontWeight='600'
              fill='black'>
              home
            </text>
          </g>
        </svg>
      </Link>
      <Link href={'/notebook'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 12 20'
          width='100'
          height='120'
          fill='#A8BF89'
          className='bi bi-bookmark-fill'>
          <path d='M2 2v17.5a.5.5 0 0 0 .74.439L6 17.069l4.26 2.87A.5.5 0 0 0 10 19.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2' />
          <g transform='translate(6 10) rotate(-90)'>
            <text
              x='0'
              y='0'
              textAnchor='middle'
              dominantBaseline='middle'
              fontSize='2.5'
              fontWeight='600'
              fill='black'>
              notebook
            </text>
          </g>
        </svg>
      </Link>

      <Link href={'/reviews'}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 12 20'
          width='100'
          height='120'
          fill='#89B8C2' //#89B8C2 #CDB4DB
          className='bi bi-bookmark-fill'>
          <path d='M2 2v17.5a.5.5 0 0 0 .74.439L6 17.069l4.26 2.87A.5.5 0 0 0 10 19.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2' />

          <g transform='translate(6 10) rotate(-90)'>
            <text
              x='0'
              y='0'
              textAnchor='middle'
              dominantBaseline='middle'
              fontSize='2.5'
              fontWeight='600'
              fill='black'>
              reviews
            </text>
          </g>
        </svg>
      </Link>
    </nav>
  )
}

export default NavBar
