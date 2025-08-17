import React from 'react'
import { getAllPosts } from '../lib/posts'
import Hero1 from './ui/Hero1'

export default async function Home() {
  // const posts = await client.fetch(`*[_type == "post"]{
  //   title,
  //   slug,
  //   content,
  //   date,
  //   tags,
  //   stickers[]{
  //     image{asset->{url}},
  //     top,
  //     left,
  //     rotation,
  //     size
  //   }
  // }`)
  const posts = getAllPosts()

  return (
    <>
      {' '}
      <div className='font-sans grid grid-rows-[20px_1fr_20px] grid-cols-[200px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
        <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'>
          <Hero1/>
         
          {/* {posts.map((post: any) => (
            <HomeArticle key={post.slug} post={post} />
          ))} */}
        </main>
      </div>
    </>
  )
}
