'use client'

import { motion } from 'framer-motion'

export default function AnimatedMe({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ x: 900 }} 
      animate={{ x: 0 }} 
      transition={{ duration: 0.2, ease: 'linear' }}>
      {children}
    </motion.div>
  )
}
