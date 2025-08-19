// components/Polaroid.tsx
import { Review } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export function Polaroid({review}: {review: Review}) {
    const id= review.id
    console.log(id)
  return (
    <article>
      <div
        className='w-100 h-[320px] bg-[#fdfcf7]   border border-neutral-200 rounded-sm shadow-lg flex flex-col items-center p-4 cursor-pointer transition-transform hover:scale-105'
        style={{ transform: `rotate(${review.degree}deg)` }}>
        <div className='w-full h-[240px] overflow-hidden'>
          <Image
            src={'https://cdn.wallpapersafari.com/54/6/iplz07.jpg'}
            alt={'alt'}
            className='w-full h-full object-cover'
            width={2560}
            height={1440}
          />
        </div>
        <Link href={`/reviews/${review.slug}`}>
          <div className='w-full flex flex-col items-center justify-center mt-2 text-center'>
            <p className='text-sm font-semibold'>{review.title}</p>
            <p className='text-xs text-neutral-500'>{review.date}</p>
            <p className='text-xs font-medium text-yellow-600'>
              ★ {review.rating}/10
            </p>
          </div>
        </Link>
      </div>
    </article>
  )
}
