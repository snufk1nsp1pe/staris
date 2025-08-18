import Link from 'next/link'

export default function Me() {
  return (
    <section className='flex flex-col items-center justify-center text-center '>
      <h1 className='text-5xl font-bold tracking-tight text-gray-800'>
        hello there, this is{'  '}
        <Link href={'/notebook/me'} className='underline decoration-amber-300'>
          serine
        </Link>
        .
      </h1>
      <p className='mt-4 text-lg text-gray-600'>
        i do computers, movies,{' '}
        <Link
          href={'/jukebox'}
          className='underline decoration-rose-300 underline-offset-2 decoration-2'>
          music
        </Link>
        , books &{' '}
        <Link
          href={'/notebook'}
          className='underline decoration-rose-300 underline-offset-2 decoration-2'>
          {' '}
          thoughts
        </Link>
        . <br />
      </p>
      <p className='mt-1 text-md text-gray-500 italic'>
        (also yapping, rejecting society and hating on the world)
      </p>
    </section>
  )
}
