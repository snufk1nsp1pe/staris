import BackButton from '../ui/BackButton'

export default function Layout({ children }: { children: React.ReactNode }) {

  return (
    <main className='py-35 flex flex-col gap-5 mx-auto md:w-[1000px]'>
      <div className='flex gap-5 ml-4'>
        <BackButton/>
        {/* gonna be a drop down menu */}
      </div>
      {children}
    </main>
  )
}
