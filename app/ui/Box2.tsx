import { ArrowUpRight } from 'lucide-react'

export default function Box1({ frontmatter }) {
  return (
    <>
      <div className='bg-rose-300 p-4 [box-shadow:5px_5px_0px_#000000] text-black'>
        <h3 className='uppercase font-semibold'>{frontmatter.box2}</h3>
        {/* This div will stack all our new rows vertically */}
        <div className='flex flex-col space-y-1 mt-2'>
          {/* We now use only ONE map loop */}
          {frontmatter.box2Heading?.map((head, i) => (
            // This is a single row containing a head and its content
            <div key={i} className='flex'>
              <span className='font-semibold mr-2'>{`${head}:`}</span>

              {/* We access the content using the index `i` from the map */}
              <a href={frontmatter.box2Content[i]}>
                <span className='text-red underline decoration-rose-300 hover:underline hover:decoration-[#B83555] decoration-2 transition-all duration-300 ease-out underline-offset-4 '>
                  here
                  <ArrowUpRight
                    width={15}
                    height={15}
                    className='inline ml-1 mb-2 hover:fill-[B83555]'
                  />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
