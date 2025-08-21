import React from 'react'
import { getAllReviews } from '../../lib/reviews'
import { Polaroid } from '../ui/Polaroid'
import Image from 'next/image'
import AnimatedArticle from '../ui/AnimatedArticle'
function page() {
  const reviews = getAllReviews()
   
  return (
    <div className='md:columns-2 md:gap-15 px-10'>
      <Image
        src={'/bouquet.png'}
        width={200}
        height={200}
        alt=''
        className='md:block hidden absolute md:top-50 md:left-20 rotate-[20deg] '
      />
      {reviews.map((review) => (
        <AnimatedArticle key={review.slug}>
          <Polaroid review={review} key={review.slug} />
        </AnimatedArticle>
      ))}
    </div>
  )
}

export default page


