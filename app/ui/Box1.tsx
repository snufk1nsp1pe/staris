import { Frontmatter } from "@/lib/types";

export default function Box1({ frontmatter }: {frontmatter: Frontmatter}) {
  return (
    <>
      <div className='bg-amber-300 p-4 [box-shadow:5px_5px_0px_#000000] text-black rotate-[-2deg]'>
        <h3 className='uppercase font-semibold'>{frontmatter.box1}</h3>
        <div className='flex flex-col space-y-1 mt-2 '>
          {frontmatter.box1Heading?.map((head, i) => (
            <div key={i} className='flex'>
              <span className='font-semibold mr-2'>
                {`${head}: `}{' '}
                <span className='font-normal'>
                  {frontmatter.box1Content[i]}
                </span>
              </span>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}
