import Link from 'next/link'
import Image from 'next/image'
export default function Me() {
 
  return (
    <section className='relative flex flex-col items-center justify-center text-center '>
      <h1 className='md:text-5xl text-3xl font-bold tracking-tight text-gray-800'>
        hello there, this is{'  '}
        <Link
          href={'/notebook/me'}
          className='bg-[linear-gradient(-3deg,transparent_26%,theme(colors.amber.300)_26%,theme(colors.amber.300)_70%,transparent_70%)]'>
          serine
        </Link>
        .
      </h1>
      <span className='md:mt-4 md:text-lg text-gray-600 leading-6 md:leading-relaxed'>
        i do computers,{' '}
        <Link
          href={'/filmbook'}
          className='underline decoration-rose-300 underline-offset-2 decoration-4 '>
          movies
        </Link>
        , music , books &{' '}
        <Link
          href={'/notebook'}
          className='underline decoration-rose-300 underline-offset-2 decoration-4'>
          {' '}
          thoughts
        </Link>
        . <br />
      </span>
      <span className='md:mt-1 md:text-md text-sm text-gray-500 italic'>
        (also yapping, rejecting society and hating on the world)
      </span>
      <Image
        src={'/heart-cat.png'}
        width={200}
        height={200}
        alt=''
        className='md:block hidden absolute md:top-0 md:right-0  rotate-[20deg] w-32 h-32 md:w-48 md:h-48 '
      />
    </section>
  )
}
