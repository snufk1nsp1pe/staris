import { PortableText } from '@portabletext/react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import ReactMarkdown from 'react-markdown'
import { ArrowUpRight } from 'lucide-react'
import { MDXComponents } from '@/lib/mdx-components'
import Image from 'next/image'
export function Article({ content, frontmatter }) {
  const stickers = frontmatter.stickers
  return (
    <>
      <article className=' relative border-[#B83555] bg-[#f9e3e9] border-2 border-dashed rounded-2xl p-5 text-[#57061a] '>
        <header className='flex justify-between pb-5 gap-2'>
          <h2 className='font-semibold uppercase text-2xl'>
            {frontmatter.title}
          </h2>
          <p className='text-[#7a3d4f] font-light text-sm'>
            <time>{frontmatter.date}</time>
          </p>
        </header>

        <MDXRemote source={content} components={MDXComponents} />
        <div className='mt-8'>
          {frontmatter.tags?.map((tag, i) => (
            <span key={i} className='text-[#7a3d4f] font-semibold'>
              {`#${tag} `}
            </span>
          ))}
        </div>
        {stickers && stickers.map((s, i) => (
          <Image
            key={i}
            src={s.src}
            alt='hm'
            width={s.size}
            height={s.size}
            className='absolute'
            style={{
              left: `${s.x}px`,
              top: `${s.y}px`,
            }}
          />
        ))}
        {/* {post.stickers?.map((s: any, i: number) => (
          <img
            key={i}
            src={s.image.asset.url}
            alt={`Sticker ${i}`}
            style={{
              position: 'absolute',
              top: s.top || '0px',
              left: s.left || '0px',
              transform: `rotate(${s.rotation || 0}deg)`,
              width: s.size ? `${s.size}px` : '60px',
            }}
          />
        ))} */}
      </article>
    </>
  )
}
