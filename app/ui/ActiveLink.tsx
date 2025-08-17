'use client' // This must be a client component
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ActiveLinkProps } from '../../lib/types'
export function ActiveLink({ href, children, tab }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = href === '/' ? pathname === href : pathname.startsWith(href)

  const baseClass =
    'font-mono px-6 py-2 bg-slate-900/0 rounded-lg font-bold transform transition duration-400'
  const homeClass = isActive
    ? `${baseClass} text-[#8CA273] underline decoration-[#8CA273] decoration-2 transition-all duration-300 ease-out underline-offset-4`
    : `${baseClass} text-[#6F5D4F] hover:text-[#8CA273] decoration-[#F7EFDA] `

  const aboutClass = isActive
    ? `${baseClass} text-[#B83555] underline decoration-[#B83555] decoration-2 transition-all duration-300 ease-out underline-offset-4`
    : `${baseClass} text-[#6F5D4F] hover:text-[#B83555] decoration-[#F7EFDA]`

  const notebookClass = isActive
    ? `${baseClass} text-[#56768D] underline decoration-[#56768D] decoration-2 transition-all duration-300 ease-out underline-offset-4`
    : `${baseClass} text-[#6F5D4F] hover:text-[#56768D] decoration-[#F7EFDA]`
  return (
    <Link
      href={href}
      className={
        tab === 'home'
          ? homeClass
          : tab === 'about'
          ? aboutClass
          : notebookClass
      }>
      {children}
    </Link>
  )
}
// about #B83555
// notebook #56768D
