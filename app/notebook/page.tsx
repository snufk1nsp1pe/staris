import React from 'react'
import { getAllPosts } from '../../lib/posts'
import MiniArticle from '../ui/MiniArticle'
import Image from 'next/image'
import AnimatedArticle from '../ui/AnimatedArticle'
function page() {
  const posts = getAllPosts()

  return (
    <div className='relative md:columns-2 md:gap-5 px-5'>
      {posts.map((post) => (
        <AnimatedArticle key={post.slug}>
          <MiniArticle post={post} key={post.slug} />
        </AnimatedArticle>
      ))}
      <Image
        src={'/daisies.png'}
        width={200}
        height={200}
        alt=''
        className='md:block hidden absolute md:top-[-100px] md:right-[-150px] w-32 h-32 md:w-48 md:h-48 '
      />
    </div>
  )
}

export default page
