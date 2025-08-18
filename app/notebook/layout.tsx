import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import TagDropdown from "../ui/TagDropdown";
import MiniArticle from "../ui/MiniArticle";
import { getAllPosts } from "@/lib/posts";

export default function Layout({ children }: { children: React.ReactNode }){
     const posts = getAllPosts()
       
    const tag = posts.tag
    return (
      <main className='py-25 flex flex-col gap-5 mx-auto w-[1000px]'>
        <div className='flex gap-5'>
          <Link
            href='/'
            className='inline-flex items-center text-[#56768D] font-bold'>
            <ArrowLeft className='w-5 h-5 mr-2' />
            Back
          </Link>
          {/* gonna be a drop down menu */}
          <TagDropdown posts={posts} currentTag={tag} />
          <span>tags</span>
        </div>
        {children}
      </main>
    )
}
