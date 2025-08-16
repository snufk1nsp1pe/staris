import { PortableText } from '@portabletext/react'

export function Article({ post }) {
  return (
    <>
      <article className='relative border-[#B83555] bg-[#f9e3e9] border-2 border-dashed rounded-2xl p-5 text-[#57061a] '>
        <header className='flex justify-between pb-5 gap-2'>
          <h2 className='font-semibold uppercase text-2xl'>{post.title}</h2>
          <p className='text-[#7a3d4f] font-light text-sm'>
            <time>{post.date}</time>
          </p>
        </header>

        <PortableText value={post.content} />
        <div>
          {post.tags?.map((tag, i) => (
            <span key={i} className='text-[#7a3d4f] font-semibold'>
              {`#${tag} `}{' '}
            </span>
          ))}
        </div>
        {post.stickers?.map((s: any, i: number) => (
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
        ))}
      </article>
    </>
  )
}
