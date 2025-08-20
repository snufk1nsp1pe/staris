import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/lib/mdx-components'
import { ReviewFrontmatter } from '@/lib/types'
import { FlagTriangleRight, Star } from 'lucide-react'
export function Review({
  content,
  frontmatter,
}: {
  content: string
  frontmatter: ReviewFrontmatter
}) {
  // const { bg, text, border, meta } = palette

  return (
    <>
      {frontmatter.spoiler && (
        <span className='flex gap-2 py-0 my-0 text-red-500  '>
          <FlagTriangleRight className='fill-red-500 rotate-[-20deg]' />
          <span> spoiler alert</span>
        </span>
      )}

      <article
        className={`relative md:p-5 p-3 md:leading-loose  text-gray-800 `}>
        <header className='flex flex-col justify-between md:pb-5 pb-3 gap-2'>
          <h2 className='font-semibold md:text-2xl text-xl'>
            my review of{' '}
            <span className='underline underline-offset-4 decoration-4 decoration-rose-300'>
              {frontmatter.title}
            </span>
          </h2>
          <span className={` font-bold  text-amber-500`}>
            <span className='flex gap-4'>
              {frontmatter.rating}/10
              <Star className='fill-amber-500' />
            </span>
          </span>
        </header>

        <MDXRemote source={content} components={MDXComponents} />
      </article>
    </>
  )
}
