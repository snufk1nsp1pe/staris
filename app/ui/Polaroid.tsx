// components/Polaroid.tsx
import { Review, TMDBMovie } from '@/lib/types'
import { error } from 'console'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export async function Polaroid({ review }: { review: Review }) {
  const id = review.id
  const api_key = 'f89dbaf591dd05cb3e5edf9076909603'
  const type = review.image
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
    { next: { revalidate: 60 * 60 } }
  )
//   if (!res.ok) throw new Error('failed to fetch wtf')
  const data: TMDBMovie = await res.json()
const path = type === 'backdrop_path'? data.backdrop_path : data.poster_path
  return (
    <article>
      <div
        className='w-100 h-[320px] bg-[#fdfcf7]   border border-neutral-200 rounded-sm shadow-lg flex flex-col items-center p-4 cursor-pointer transition-transform hover:scale-105'
        style={{ transform: `rotate(${review.degree}deg)` }}>
        <div className='w-full h-[240px] overflow-hidden'>
          <Image
            src={`https://image.tmdb.org/t/p/original${path}`}
            alt={`${review.title}`}
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
