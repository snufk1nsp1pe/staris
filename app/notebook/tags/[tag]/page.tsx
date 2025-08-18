import React from 'react'
import { getAllPosts } from '@/lib/posts'
import MiniArticle from '@/app/ui/MiniArticle'

// type PageProps = {
//   params: {
//     tag: string 
//   }
// }

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const posts = await getAllPosts()
  const tag = await (await params).tag
  const filteredPosts = posts.filter((post) => post.tags?.includes(tag))
  return (
    <div className='md:columns-2 md:gap-5 px-5'>
      {filteredPosts.map((post) => (
        <MiniArticle post={post} key={post.slug} />
      ))}
    </div>
  )
}
