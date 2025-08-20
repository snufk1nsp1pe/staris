import { Frontmatter } from '@/lib/types'
import { ArrowUpRight } from 'lucide-react'

export default function Box1({ frontmatter }: {frontmatter: Frontmatter}) {
  return (
    <>
      <div className='box2 relative bg-rose-300 p-4 [box-shadow:5px_5px_3px_#242424] text-black rotate-[2deg]'>
        <h3 className='uppercase font-semibold'>{frontmatter.box2}</h3>
        <div className='flex flex-col space-y-1 mt-2'>
          {frontmatter.box2Heading?.map((head, i) => (
            <div key={i} className='flex'>
              <span className='font-semibold mr-2'>{`${head}:`}</span>

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
