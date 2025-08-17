import Link from 'next/link'
// import ReactMarkdown from "react-markdown";

export default function MiniArticle({ post }) {
 
  return (
    <article
      className={`relative border-[#B83555] bg-[#f9e3e9] border-2 border-dashed rounded-2xl p-5 text-[#57061a] ${post.colSpan} ${post.rowSpan} break-inside-avoid mb-4`}>
      <header className='flex justify-between pb-5 gap-2'>
        <Link href={`/notebook/${post.slug}`}>
          <h2 className='font-semibold uppercase text-2xl'>{post.title}</h2>
        </Link>
        <span className='text-[#7a3d4f] font-light text-sm'>
          <time>{post.date}</time>
        </span>
      </header>
      {/* <ReactMarkdown>{post.tagline}</ReactMarkdown> */}
      <span>{post.tagline}</span>
      <div>
        {post.tags?.map((tag, i) => (
          <span key={i} className='text-[#7a3d4f] font-semibold'>
            {`#${tag} `}{' '}
          </span>
        ))}
      </div>
    </article>
  )
}
