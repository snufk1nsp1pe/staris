import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/lib/mdx-components'
import { ReviewFrontmatter } from '@/lib/types'
export function Review({ content, frontmatter}: {content: string, frontmatter: ReviewFrontmatter}) {
  // const { bg, text, border, meta } = palette

  return (
    <>
      <article
        className={`relative md:p-5 p-3 md:leading-loose  text-gray-800 `}>
        <header className='flex flex-col justify-between md:pb-5 pb-3 gap-2'>
          <h2 className='font-semibold md:text-2xl text-xl'>
            {frontmatter.title}
          </h2>
          <span  className={` font-light md:text-sm text-xs`}>
            <time>{frontmatter.rating}</time>
          </span>
        </header>

        <MDXRemote source={content} components={MDXComponents} />
       
        
      </article>
    </>
  )
}
