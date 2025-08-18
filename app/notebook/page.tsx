import React from 'react'
import { getAllPosts } from '../../lib/posts'
import MiniArticle from '../ui/MiniArticle'
function page() {
  const posts = getAllPosts()
   
  return (
    <div className='md:columns-2 md:gap-5 px-5'>
      {posts.map((post) => (
        <MiniArticle post={post} key={post.slug} />
      ))}
    </div>
  )
}

export default page


