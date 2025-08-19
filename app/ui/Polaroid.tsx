// components/Polaroid.tsx
import { Review, TMDBMovie } from '@/lib/types'
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
  const path = type === 'backdrop_path' ? data.backdrop_path : data.poster_path

  return (
    <article className='break-inside-avoid md:mt-8 mt-5'>
      <div
        className='bg-[#fdfcf7] border border-neutral-200 rounded-sm shadow-lg flex flex-col items-center p-6 cursor-pointer transition-transform hover:scale-105'
        style={{ transform: `rotate(${review.degree}deg)` }}>
        <div
          className={
            type === 'poster_path'
              ? 'w-full aspect-[3/4] relative h-100 '
              : 'w-full aspect-[16/9] relative'
          }>
          <Image
            src={`https://image.tmdb.org/t/p/original${path}`}
            alt={`${review.title}`}
            className='w-full h-full object-cover'
            width={300}
            height={450}
          />
        </div>
        <Link href={`/filmbook/${review.slug}`}>
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
