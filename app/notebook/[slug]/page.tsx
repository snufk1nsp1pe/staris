import { Article } from '@/app/ui/Article'
import Box1 from '@/app/ui/Box1'
import Box2 from '@/app/ui/Box2'
import { getPostBySlug } from '@/lib/posts'
import { notFound } from 'next/navigation'


export default async function NotePage({params}:  {params: Promise<{ slug: string }>}
) {
  const { content, frontmatter, palette } = await getPostBySlug((await params).slug)

  if (!content) {
    return notFound()
  }

  return (
 
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
  
  )
}
