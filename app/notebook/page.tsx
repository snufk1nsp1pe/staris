import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'
import MiniArticle from '../ui/MiniArticle'
import { ArrowLeft } from 'lucide-react'
function page() {
  const posts = getAllPosts()
  return (
    <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
      <div className='flex gap-5'>
        <Link
          href='/'
          className='inline-flex items-center text-[#56768D] font-bold'>
          <ArrowLeft className='w-5 h-5 mr-2' />
          Back
        </Link>
        {/* gonna be a drop down menu */}
        <span>tags</span>
      </div>
      <div className='columns-2 gap-5'>
        {posts.map((post) => (
          <MiniArticle post={post} key={post.slug} />
        ))}
      </div>
    </main>
  )
}

export default page

//  <p>notes</p>
//         <ul>
//           {posts.map((post) => (
//             <li key={post.slug}>
//               <Link href={`/notebook/${post.slug}`}>
//                 {post.title} - {post.date}
//               </Link>
//             </li>
//           ))}
//         </ul>