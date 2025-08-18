import { Post } from '@/lib/types'
import MiniArticle from './MiniArticle'

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <>
      <h2 className='capitalize text-3xl font-bold tracking-tight text-gray-800 mb-5'>
        articles carefully picked for you (not really)
      </h2>
      <div className='columns-2 gap-5'>
        {posts.map(
          (post) => post.featured && <MiniArticle key={post.slug} post={post} />
        )}
      </div>
    </>
  )
}
