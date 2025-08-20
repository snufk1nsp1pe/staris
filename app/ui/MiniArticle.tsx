import Link from 'next/link'
// import ReactMarkdown from "react-markdown";
import { Post } from '@/lib/types'
export default function MiniArticle({ post }: {post: Post}) {
  const { bg, text, border, meta } = post.palette

  return (
      <article
        className={` relative ${border} ${bg} border-2 border-dashed rounded-2xl md:p-5 p-3 leading-6 ${text} ${post.colSpan} ${post.rowSpan} break-inside-avoid mb-4`}>
        <header className='flex justify-between md:pb-5 pb-3 gap-2'>
          <Link href={`/notebook/${post.slug}`}>
            <h2 className='font-semibold md:text-2xl text-xl'>{post.title}</h2>
          </Link>
          <span className={`${meta} font-light md:text-sm text-xs`}>
            <time>{post.date}</time>
          </span>
        </header>
        {/* <ReactMarkdown>{post.tagline}</ReactMarkdown> */}
        <span className='md:text-lg  '>{post.tagline}</span>
        <div className='md:mt-4 mt-2'>
          {post.tags?.map((tag, i) => (
            <Link
              href={`/notebook/tags/${tag}`}
              key={i}
              className={`${meta} font-semibold md:text-[16px] text-sm`}>
              {`#${tag} `}{' '}
            </Link>
          ))}
        </div>
      </article>
  )
}
