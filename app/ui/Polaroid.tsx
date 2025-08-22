import { Review } from '@/lib/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Fetch from '@/lib/fetch'

export async function Polaroid({ review }: { review: Review }) {
  const type = review.image
  // const path = (await Fetch({ review: review })).path
  // const year = (await Fetch({ review: review })).year
  // const title = (await Fetch({ review: review })).title
const { path, year, title } = await Fetch({ review: review })
  return (
    <article className='break-inside-avoid md:mt-8 mt-5'>
      <Link href={`/filmbook/${review.slug}`}>
        <div
          className='bg-[#fdfcf7] border border-neutral-200 rounded-sm shadow-lg flex flex-col items-center p-4 cursor-pointer transition-transform hover:scale-101'
          style={{ transform: `rotate(${review.degree}deg)` }}>
          <div
            className={
              type === 'poster'
                ? 'w-full aspect-[3/4] relative h-100 '
                : 'w-full aspect-[16/9] relative'
            }>
            <Image
              src={`https://image.tmdb.org/t/p/original${path}`}
              alt={`${title}`}
              className='w-full h-full object-cover'
              width={300}
              height={450}
            />
          </div>
          <div className='w-full flex flex-col items-center justify-center mt-2 text-center'>
            <span className='text-sm font-semibold capitalize'>{`${title} (${year})`}</span>
            <span className='text-sm text-neutral-500'>{`reviewed on ${review.date}`}</span>
            <span className=' font-medium text-yellow-600'>
              ★ {review.rating}/10
            </span>
          </div>
        </div>
      </Link>
    </article>
  )
}
