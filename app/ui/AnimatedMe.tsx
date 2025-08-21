'use client'

import { motion } from 'framer-motion'

export default function AnimatedMe({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: 'linear' }}>
      {children}
    </motion.div>
  )
}
