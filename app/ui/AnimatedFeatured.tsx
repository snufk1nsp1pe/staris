'use client'

import { motion } from 'framer-motion'

export default function AnimatedFeatured({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -300 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: 'linear', delay: 0 }}>
      {children}
    </motion.div>
  )
}
