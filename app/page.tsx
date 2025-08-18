import React from 'react'
import { getAllPosts } from '../lib/posts'
import Hero1 from './ui/Hero1'
import FeaturedPosts from './ui/FeaturedPosts'

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
      <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
        {/* <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'> */}
        <div className='my-30'>
          <Hero1 />
        </div>
        <div>
          <FeaturedPosts posts={posts} />
        </div>
        {/* {posts.map((post: any) => (
            <HomeArticle key={post.slug} post={post} />
          ))} */}
        {/* </main> */}
      </main>
    </>
  )
}
