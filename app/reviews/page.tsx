import React from 'react'
import { getAllReviews } from '../../lib/reviews'
import { Polaroid } from '../ui/Polaroid'
function page() {
  const reviews = getAllReviews()
   
  return (
    <div className='md:columns-2 md:gap-15 px-10'>
      {reviews.map((review) => (
        <Polaroid review={review} key={review.slug} />
      ))}
    </div>
  )
}

export default page


