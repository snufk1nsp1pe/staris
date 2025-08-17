// import { PortableText } from '@portabletext/react'
import { MDXRemote } from 'next-mdx-remote/rsc'
// import ReactMarkdown from 'react-markdown'
// import { ArrowUpRight } from 'lucide-react'
import { MDXComponents } from '@/lib/mdx-components'
import Image from 'next/image'
export function Article({ content, frontmatter, palette }) {
    const { bg, text, border, meta } = palette

  const stickers = frontmatter.stickers
  return (
    <>
      <article className={` relative ${border} ${bg} border-2 border-dashed rounded-2xl p-5 ${text} `}>
        <header className='flex justify-between pb-5 gap-2'>
          <h2 className='font-semibold uppercase text-2xl'>
            {frontmatter.title}
          </h2>
          <p className={`${meta} font-light text-sm`}>
            <time>{frontmatter.date}</time>
          </p>
        </header>

        <MDXRemote source={content} components={MDXComponents} />
        <div className='mt-8'>
          {frontmatter.tags?.map((tag, i) => (
            <span key={i} className={`${meta} font-semibold`}>
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
      </article>
    </>
  )
}
