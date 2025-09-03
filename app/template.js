'use client'
import { motion } from 'motion/react'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, backgroundColor: '#444b5f' }}
      animate={{ opacity: 1, backgroundColor: '#114b5f' }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
