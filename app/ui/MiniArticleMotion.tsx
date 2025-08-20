// doesnt work as expected
'use client'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { usePreviousPath } from '@/lib/hooks/usePreviousPath'
export function MiniArticleMotion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const prevPath = usePreviousPath()

  let initial = {  y: 0 }
  let animate = {  y: 0 }

  if (prevPath === '/' && pathname === '/notebook') {
    // Coming from homepage => notebook
    initial = {  y: 100 }
    animate = { y: 0 }
  } //coming from notebook => home 
  else if (prevPath?.startsWith('/notebook')) {
    initial = {  y: -100 }
    animate = {  y: 0 }
  }

  return (
    <motion.div
      key={pathname}
      initial={initial}
      animate={animate}
      transition={{ duration: 0.6, ease: 'easeIn' }}>
      {children}
    </motion.div>
  )
}
