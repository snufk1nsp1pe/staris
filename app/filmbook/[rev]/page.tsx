import { Review } from '@/app/ui/Review'
import { getReviewBySlug } from '@/lib/reviews'
import { notFound } from 'next/navigation'

export default async function ReviewPage({
  params,
}: {
  params: Promise<{ rev: string }>
}) {
  const { content, frontmatter } = await getReviewBySlug((await params).rev)

  if (!content) {
    return notFound()
  }

  return (
    <div className='md:mt-6 md:grid md:grid-cols-[1fr] gap-5 flex flex-col-reverse mx-5'>
      <div>
        <Review content={content} frontmatter={frontmatter} />
      </div>
    </div>
  )
}
