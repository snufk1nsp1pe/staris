import { MDXRemote } from 'next-mdx-remote/rsc'
import { MDXComponents } from '@/lib/mdx-components'
import Image from 'next/image'
import Link from 'next/link'
import { Frontmatter } from '@/lib/types'
export function Article({ content, frontmatter}: {content: string, frontmatter: Frontmatter}) {
  // const { bg, text, border, meta } = palette

  const stickers = frontmatter.stickers
  return (
    <>
      <article
        className={`relative md:p-5 p-3 md:leading-loose  text-gray-800 `}>
        <header className='flex flex-col justify-between md:pb-5 pb-3 gap-2'>
          <h2 className='font-semibold md:text-2xl text-xl'>
            {frontmatter.title}
          </h2>
          <span  className={` font-light md:text-sm text-xs`}>
            <time>{frontmatter.date}</time>
          </span>
        </header>

        <MDXRemote source={content} components={MDXComponents} />
        <div className='md:mt-8 mt-4'>
          {frontmatter.tags?.map((tag, i) => (
            <Link
              href={`/notebook/tags/${tag}`}
              key={i}
              className={` font-semibold md:text-[16px] text-sm`}>
              {`#${tag} `}
            </Link>
          ))}
        </div>
        {stickers &&
          stickers.map((s, i) => (
            <Image
              key={i}
              src={s.src}
              alt='hm'
              width={s.size}
              height={s.size}
              className='md:absolute'
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
