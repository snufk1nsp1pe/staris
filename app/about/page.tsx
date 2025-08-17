import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { getPostBySlug } from '@/lib/posts'
import { Article } from '../ui/Article'
function page() {
  const {content, frontmatter, palette} = getPostBySlug('me')
  return (
    <div className='font-sans grid grid-rows-[20px_1fr_20px] grid-cols-[200px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
      <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'>
        <Article content={content} frontmatter={frontmatter} palette={palette}/>
        {/* <article className=' border-[#B83555] bg-[#f9e3e9] border-2 border-dashed rounded-2xl p-5 text-[#57061a] '>
          <header className='flex justify-between pb-5 gap-2'>
            <h2 className='font-semibold uppercase text-2xl'>$whoami</h2>
            <p className='text-[#7a3d4f] font-light text-sm'>
              <time dateTime='2025-08-14T02:00'>
                August 14, 2025 at 2:00 AM
              </time>
            </p>
          </header>
          <div className='indent-4'>Hello there :)</div>
          <p className='indent-4'>
            Long story short; one random summer evening i was running random
            linux commands (i use arch btw), then i had a random interesting
            thought like i always do, followed by another; ”why don&apos;t i
            make my own blog?” because my thoughts are really interesting, and i
            need to bother people with them, so here we are.
          </p>
          <p className='indent-4'>
            I present to you the weirdest and the wildest, neatly structured (i
            hope), as much as i love to write i also like to yap so buckle up
            and read on :D
          </p>
          <p className='indent-4'>
            As i was saying, i dropped the linux commands right away (i use arch
            btw) and rushed to my best friend; chatGPT. Straight to the point i
            queried: “tech stack needed for a blog?” and he happily obliged. I
            found out, after a wild couple of weeks battling react [
            <a href='https://theatre-gny2.vercel.app'>
              <span className='text-red underline decoration-[#f9e3e9] hover:underline hover:decoration-[#B83555] decoration-2 transition-all duration-300 ease-out underline-offset-4 '>
                yes i have another project
                <ArrowUpRight
                  width={15}
                  height={15}
                  className='inline ml-1 mb-2 hover:fill-[B83555]'
                />
              </span>
            </a>
            ], that he had a twin sister! Next.js!. I&apos;ve heard of Next.js
            before, to be honest it reminded me of a ninja, and upon learning it
            i realized it is in fact as stealthy as a ninja, it&apos;s fast and
            does the job done, like a serial killer to be precise.
          </p>
        </article> */}
      </main>
    </div>
  )
}

export default page
