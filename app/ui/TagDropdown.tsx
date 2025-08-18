// app/ui/TagDropdown.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function TagDropdown({ allTags }: { allTags: Array<string> }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const currentTag = pathname.startsWith('/notebook/tags/')
    ? decodeURIComponent(pathname.split('/').pop()) // Get the last part of the URL
    : 'all'
  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex w-full justify-center gap-x-1.5 bg-amber-300 p-2 [box-shadow:5px_5px_0px_#000000] text-sm font-semibold text-gray-900 shadow-sm focus:outline-none '>
          {currentTag ? (
            <span className='capitalize'>{currentTag}</span>
          ) : (
            'Tags'
          )}
          <ChevronDown
            className='-mr-1 h-5 w-5 text-gray-900'
            aria-hidden='true'
          />
        </button>
      </div>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white border-dashed border-2 border-[#6F5D4F] focus:outline-none'>
          <div className='py-1 max-h-60 overflow-y-auto custom-scrollbar focus:outline-none'>
            <ul>
              <li>
                <Link
                  href='/notebook'
                  onClick={() => setIsOpen(false)}
                  className='block px-4 py-2 text-sm text-[#6F5D4F] rounded-2xl hover:font-bold'>
                  all
                </Link>
              </li>
              {allTags.map((tag, i) => (
                <li key={i}>
                  <Link
                    href={`/notebook/tags/${tag}`}
                    onClick={() => setIsOpen(false)}
                    className='block px-4 py-2 text-sm text-[#6F5D4F] rounded-2xl hover:font-bold'>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
