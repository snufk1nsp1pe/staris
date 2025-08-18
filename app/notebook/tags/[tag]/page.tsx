import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import MiniArticle from '@/app/ui/MiniArticle'
import { ArrowLeft } from 'lucide-react'
import TagDropdown from '@/app/ui/TagDropdown'
export default async function Page({ params }) {
  const posts = await getAllPosts()
  const tag = await params.tag
  const filteredPosts = posts.filter(post => post.tags?.includes(tag))
  return (
 
      <div className='columns-2 gap-5'>
        {filteredPosts.map((post) => (
          <MiniArticle post={post} key={post.slug} />
        ))}
      </div>
    
  )
}
