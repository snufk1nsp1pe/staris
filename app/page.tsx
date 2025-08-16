import { ArrowUpRight } from 'lucide-react'
import { client } from './lib/sanity'
import { PortableText } from '@portabletext/react'
import { Article } from './ui/Article'

export default async function Home() {
  const posts = await client.fetch(`*[_type == "post"]{
    title,
    slug,
    content,
    date,
    tags,
    stickers[]{
      image{asset->{url}},
      top,
      left,
      rotation,
      size
    }
  }`)

  return (
    <>
      {' '}
      <div className='font-sans grid grid-rows-[20px_1fr_20px] grid-cols-[200px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
        <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'>
          {posts.map((post: any) => (
            <Article key={post.slug.current} post={post}/>
          ))}
        </main>
      </div>
    </>
  )
}
