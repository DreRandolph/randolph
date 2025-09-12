'use client'
import { motion } from 'framer-motion'

export default function Template({ children }) {
  return (
    <motion.div
      initial={{
        opacity: 1,
        backgroundImage: '#000000',
      }}
      animate={{
        opacity: 1,
        backgroundImage: [
          'linear-gradient(45deg , #190020 25%, #8304A6 25%)',
          'linear-gradient(45deg , #190020, #8304A6)',
          'linear-gradient(45deg , #8304A6, #190020)',
          'linear-gradient(45deg , #8304A6, #190020)',
          'linear-gradient(45deg , #190020, #8304A6)',
        ],
        transition: { duration: 8, ease: 'easeInOut', repeat: Infinity },
      }}
      transition={{
        duration: 2,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  )
}
