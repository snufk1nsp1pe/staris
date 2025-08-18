import TagDropdown from '../ui/TagDropdown'
import { getAllPosts } from '@/lib/posts'
import BackButton from '../ui/BackButton'

export default function Layout({ children }: { children: React.ReactNode }) {
  const posts = getAllPosts()
  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))].sort()

  return (
    <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
      <div className='flex gap-5'>
        <BackButton/>
        {/* gonna be a drop down menu */}
        <TagDropdown allTags={allTags}  />
      </div>
      {children}
    </main>
  )
}
