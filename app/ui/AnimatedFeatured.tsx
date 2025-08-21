'use client'

import { motion } from 'framer-motion'

export default function AnimatedFeatured({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.05, ease: 'linear', delay: 0 }}>
      {children}
    </motion.div>
  )
}
