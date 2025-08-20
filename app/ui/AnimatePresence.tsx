'use client'
// doesnt work as expected
import { AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function AnimatePresenceS({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait' key={pathname}>
      {children}
    </AnimatePresence>
  )
}
