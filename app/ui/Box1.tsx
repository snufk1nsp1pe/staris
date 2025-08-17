export default function Box1({ frontmatter }) {
  return (
    <>
      <div className='bg-amber-300 p-4 [box-shadow:5px_5px_0px_#000000]'>
        <h3 className='uppercase font-semibold'>{frontmatter.box1}</h3>
        <div className='flex'>
          {frontmatter.box1Heading?.map((head, i) => (
            <div key={i} className='flex flex-col'>
              {head}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
