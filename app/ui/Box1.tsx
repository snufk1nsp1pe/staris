export default function Box1({ frontmatter }) {
  return (
    <>
      <div className='bg-amber-300 p-4 [box-shadow:5px_5px_0px_#000000] text-black'>
        <h3 className='uppercase font-semibold'>{frontmatter.box1}</h3>
        {/* This div will stack all our new rows vertically */}
        <div className='flex flex-col space-y-1 mt-2 '>
          {/* We now use only ONE map loop */}
          {frontmatter.box1Heading?.map((head, i) => (
            // This is a single row containing a head and its content
            <div key={i} className='flex'>
              <span className='font-semibold mr-2'>
                {`${head}: `}{' '}
                <span className='font-normal'>
                  {frontmatter.box1Content[i]}
                </span>
              </span>

              {/* We access the content using the index `i` from the map */}
              {/* <span>{frontmatter.box1Content[i]}</span> */}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
