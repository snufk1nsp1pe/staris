import Link from "next/link";





export default function Hero1() {
  return (
    <section className='flex flex-col items-center justify-center text-center py-28'>
      <h1 className='text-5xl font-bold tracking-tight text-gray-800'>
        The <span >WiFi</span> Made{' '}
        <span className="text-amber-400">Me</span> Do It
      </h1>
      <p className='mt-4 text-lg text-gray-500 italic'>
        Blogging: cheaper than therapy.
      </p>
      {/* <a
        href='#posts'
        className='mt-8 underline decoration-pink-300 hover:decoration-pink-400 text-gray-700'>
        Read &amp; Regret
      </a> */}
      <Link
        href={'/notebook'}
        className='bg-rose-300 p-4 [box-shadow:5px_5px_0px_#000000] mt-2'>
        Read &amp; Regret
      </Link>
    </section>
  )
}



