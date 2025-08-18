import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import MiniArticle from '../ui/MiniArticle'
import { ArrowLeft } from 'lucide-react'
import TagDropdown from '../ui/TagDropdown'
function page({params}) {
  const posts = getAllPosts()
   
const tag = params.tag
  return (

      <div className='columns-2 gap-5'>
        {posts.map((post) => (
          <MiniArticle post={post} key={post.slug} />
        ))}
      </div>
    
  )
}

export default page


