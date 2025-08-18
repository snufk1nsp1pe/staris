import React from 'react'
import { getAllPosts } from '../lib/posts'
import FeaturedPosts from './ui/FeaturedPosts'
import Me from './ui/Me'

export default async function Home() {
  const posts = getAllPosts()

  return (
    <>
      <main className='px-5 md:mb-30 md:mt-50 mt-30 flex flex-col md:gap-3 md:mx-auto md:w-[1000px]'>
        <div className='md:mb-30 mb-14'>
          <Me/>
        </div>
        <div className='md:mb-30 mb-10'>
          <FeaturedPosts posts={posts} />
        </div>
        <div>hi</div>
      </main>
    </>
  )
}
