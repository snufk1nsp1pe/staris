import { Article } from '@/app/ui/Article'
import Box1 from '@/app/ui/Box1'
import Box2 from '@/app/ui/Box2'
import { getPostBySlug } from '@/lib/posts'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
export default async function NotePage(props: Params) {
  const params = await props.params
  const { content, frontmatter, palette } = await getPostBySlug(params.slug)

  if (!content) {
    return notFound()
  }

  return (
    <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
      <Link
        href='/notebook'
        className='inline-flex items-center text-[#56768D] font-bold'>
        <ArrowLeft className='w-5 h-5 mr-2' />
        Back
      </Link>
      <div className='mt-6 grid grid-cols-[300px_1fr] gap-5'>
        {frontmatter.boxes && (
          <div className='flex flex-col gap-5'>
            <Box1 frontmatter={frontmatter} />
            <Box2 frontmatter={frontmatter} />
          </div>
        )}
        <div className={frontmatter.box1 ? '' : 'col-span-2'}>
          <Article content={content} frontmatter={frontmatter} palette={palette}/>
        </div>
      </div>
    </main>
    //   <div className=' grid grid-rows-[20px_1fr_20px] grid-cols-[200px_1fr_200px]  justify-items-center min-h-screen p-8 pb-20 gap-16   sm:p-20'>
    //     <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'>
    //       <Article content={content} frontmatter={frontmatter} />
    //     </main>
    //   </div>
  )
}
