'use client'

import { motion } from 'framer-motion'
import { summary } from '@/data/portfolio'

export default function About() {
  return (
    <section id="about" className="w-full bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-16 md:py-24">
      <div className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
            About Me
          </span>
        </motion.h2>
        
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl border border-white/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
        >
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-center">
            {summary}
          </p>
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}
