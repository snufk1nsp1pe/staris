import React from 'react'
import { getAllPosts } from '../lib/posts'
import Hero1 from './ui/Hero1'
import FeaturedPosts from './ui/FeaturedPosts'
import Me from './ui/Me'

export default async function Home() {
  const posts = getAllPosts()

  return (
    <>
      <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
        <div className='my-30'>
          <Me/>
        </div>
        <div>
          <FeaturedPosts posts={posts} />
        </div>
      </main>
    </>
  )
}
