import { Review } from '@/lib/types'
import { Polaroid } from './Polaroid'
import Link from 'next/link'

export default function FeaturedReviews({ reviews }: { reviews: Review[] }) {
  return (
    <>
      <div className='flex justify-between items-center mb-5'>
        {' '}
        <h2 className='capitalize md:text-3xl text-xl font-bold tracking-tight text-gray-800 mb-5 decoration-wavy underline underline-offset-5'>
          picked for you (you lazy)
        </h2>
        <Link
          href={'/reviews'}
          className='md:text-gray-600 md:underline md:decoration-4 md:underline-offset-2 md:decoration-rose-300 md:text-md hidden md:block'>
          view more
        </Link>
      </div>
      <div className='md:columns-2 md:gap-8'>
        {reviews.map(
          (review) => review.featured && <Polaroid key={review.slug} review={review} />
        )}
        <Link
          href={'/notebook'}
          className='text-gray-600 underline decoration-4 underline-offset-2 decoration-rose-300 text-sm  md:hidden '>
          view more
        </Link>
      </div>
    </>
  )
}
