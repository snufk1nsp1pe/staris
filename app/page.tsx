import React from 'react'
import { getAllPosts } from '../lib/posts'
import FeaturedPosts from './ui/FeaturedPosts'
import Me from './ui/Me'
import FeaturedReviews from './ui/FeaturedReviews'
import { getAllReviews } from '@/lib/reviews'
export default async function Home() {
  const posts = getAllPosts()
  const reviews = getAllReviews()

  return (
    <>
      <main className='px-5 md:mb-30 md:mt-50 mt-40 flex flex-col md:gap-3 md:mx-auto md:w-[1000px]'>
        <div className='md:mb-30 mb-14'>
          <Me />
        </div>
        <div className='md:mb-30 mb-10'>
          <FeaturedPosts posts={posts} />
        </div>
        <div className='md:mb-30 mb-10'>
          {' '}
          <FeaturedReviews reviews={reviews} />{' '}
        </div>
        {/* <Image
          src={'/star.png'}
          width={100}
          height={100}
          alt=''
          className='absolute md:top-65 md:right-130 top-65 right-8'
        /> */}
        {/* <Image
          src={'/bee.png'}
          width={100}
          height={100}
          alt=''
          className='md:block hidden absolute md:top-20 md:right-20 rotate-[20deg] '
        /> */}

      
        {/* <Image
          src={'/butterfly.png'}
          width={80}
          height={80}
          alt=''
          className='md:block hidden absolute md:top-10 md:left-150 rotate-[-20deg] '
        /> */}
        {/* <Image
          src={'/butterfly2.png'}
          width={80}
          height={80}
          alt=''
          className='md:block hidden absolute md:top-100 md:left-150 rotate-[20deg] '
        /> */}
        {/* <Image
          src={'/cat-laying.png'}
          width={250}
          height={250}
          alt=''
          className='md:block hidden absolute md:top-150 md:left-20 '
        /> */}
        {/* <Image
          src={'/cat-loaf.png'}
          width={200}
          height={200}
          alt=''
          className='md:block hidden absolute md:top-85 md:left-240 rotate-[-6deg]'
        /> */}
        {/* <Image
          src={'/daisies.png'}
          width={200}
          height={200}
          alt=''
          className='md:block hidden absolute md:top-300 md:right-40 rotate-[-6deg]'
        /> */}
        {/* <Image
          src={'/daisy-frog.png'}
          width={200}
          height={200}
          alt=''
          className='md:block hidden absolute md:top-255 md:left-165 rotate-[-6deg]'
        /> */}
        {/* <Image
          src={'/dino-dance.png'}
          width={200}
          height={200}
          alt=''
          className='md:block hidden absolute md:top-290 md:left-5 rotate-[-6deg]'
        /> */}
        {/* <Image
          src={'/sun.png'}
          width={200}
          height={200}
          alt=''
          className='md:block hidden absolute md:top-290 md:left-5 rotate-[-6deg]'
        /> */}
      </main>
    </>
  )
}
