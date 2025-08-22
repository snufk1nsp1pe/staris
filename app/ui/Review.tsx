import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/lib/mdx-components'
import { ReviewFrontmatter, TMDBMovie } from '@/lib/types'
import { FlagTriangleRight, Star } from 'lucide-react'
// import { p } from 'framer-motion/client'
export async function Review({
  content,
  frontmatter,
}: {
  content: string
  frontmatter: ReviewFrontmatter
}) {
  const api_key = process.env.TMDB_API_KEY
  const id = frontmatter.link
    .split('https://www.themoviedb.org/movie/')[1]
    .split('-')[0]
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`,
    { next: { revalidate: 60 * 60 } }
  )
  const data: TMDBMovie = await res.json()
  console.log(data)
  const title = data.title
  console.log(title)

  return (
    <>
      {frontmatter.spoiler && (
        <span className='flex gap-2 py-0 my-0 text-red-500 decoration-double underline decoration-2'>
          <FlagTriangleRight className='fill-red-500 rotate-[-20deg]' />
          <span>spoiler alert</span>
        </span>
      )}
      {!frontmatter.spoiler && (
        <span className='flex gap-2 py-0 my-0 text-green-500 decoration-double underline decoration-2'>
          <FlagTriangleRight className='fill-green-500 rotate-[-20deg]' />
          <span>spoiler free</span>
        </span>
      )}

      <article
        className={`relative md:p-5 p-3 md:leading-loose  text-gray-800 `}>
        <header className='flex flex-col justify-between md:pb-5 pb-3 gap-4'>
          <h2 className='font-semibold md:text-2xl text-xl'>
            my review of{' '}
            <span className='underline capitalize decoration-wavy underline-offset-4 decoration-3 decoration-purple-300'>
              {title}
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
