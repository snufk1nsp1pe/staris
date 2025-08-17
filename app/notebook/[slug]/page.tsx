import { Article } from '@/app/ui/Article'
import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'
export default async function NotePage(props: Params){
    const params = await props.params;
    const {content, frontmatter} = await getPostBySlug(params.slug)
    if (!content){
        return notFound()
    }

    return (
      <div className='font-sans grid grid-rows-[20px_1fr_20px] grid-cols-[200px_1fr_200px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20'>
        <main className='flex flex-col gap-[32px] row-start-2 col-start-2 items-center sm:items-start'>
          <Article content={content} frontmatter={frontmatter} />
        </main>
      </div>
    )
}