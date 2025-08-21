'use client'

import { motion } from 'framer-motion'

export default function AnimatedArticle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ y: 300 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.2, ease: 'linear', delay: 0 }} 
    >
      {children}
    </motion.div>
  )
}
