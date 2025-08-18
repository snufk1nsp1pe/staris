// app/ui/TagDropdown.jsx
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function TagDropdown({ posts, currentTag }) {
  const [isOpen, setIsOpen] = useState(false)
  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))].sort()

  return (
    <div className='relative inline-block text-left'>
      <div>
        <button
          type='button'
          onClick={() => setIsOpen(!isOpen)}
          className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
          {currentTag ? (
            <span className='capitalize'>{currentTag}</span>
          ) : (
            'Tags'
          )}
          <ChevronDown
            className='-mr-1 h-5 w-5 text-gray-400'
            aria-hidden='true'
          />
        </button>
      </div>

      {isOpen && (
        <div className='absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-2xl bg-white border-dashed border-2 border-[#6F5D4F] focus:outline-none'>
          <div className='py-1 max-h-60 overflow-y-auto custom-scrollbar'>
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
