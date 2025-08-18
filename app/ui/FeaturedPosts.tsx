import { Post } from '@/lib/types'
import MiniArticle from './MiniArticle'
import Link from 'next/link'

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <>
      <div className='flex justify-between items-center'>
        {' '}
        <h2 className='capitalize md:text-3xl text-xl font-bold tracking-tight text-gray-800 mb-5 decoration-wavy underline underline-offset-5'>
          picked for you (you lazy)
        </h2>
        <Link
          href={'/notebook'}
          className='md:text-gray-600 md:underline md:decoration-4 md:underline-offset-2 md:decoration-rose-300 md:text-md hidden md:block'>
          read more
        </Link>
      </div>
      <div className='md:columns-2 md:gap-5'>
        {posts.map(
          (post) => post.featured && <MiniArticle key={post.slug} post={post} />
        )}
        <Link
          href={'/notebook'}
          className='text-gray-600 underline decoration-4 underline-offset-2 decoration-rose-300 text-sm  md:hidden '>
          read more
        </Link>
      </div>
    </>
  )
}
