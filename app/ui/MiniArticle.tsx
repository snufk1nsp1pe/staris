import Link from 'next/link'
// import ReactMarkdown from "react-markdown";
  
export default function MiniArticle({ post }) {
          const { bg, text, border, meta } = post.palette

  return (
    <article
      className={`relative ${border} ${bg} border-2 border-dashed rounded-2xl p-5 ${text} ${post.colSpan} ${post.rowSpan} break-inside-avoid mb-4`}>
      <header className='flex justify-between pb-5 gap-2'>
        <Link href={`/notebook/${post.slug}`}>
          <h2 className='font-semibold uppercase text-2xl'>{post.title}</h2>
        </Link>
        <span className={`${meta} font-light text-sm`}>
          <time>{post.date}</time>
        </span>
      </header>
      {/* <ReactMarkdown>{post.tagline}</ReactMarkdown> */}
      <span>{post.tagline}</span>
      <div>
        {post.tags?.map((tag, i) => (
          <span key={i} className={`${meta} font-semibold`}>
            {`#${tag} `}{' '}
          </span>
        ))}
      </div>
    </article>
  )
}
