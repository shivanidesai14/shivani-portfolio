'use client'

import { motion } from 'framer-motion'
import { education, languages } from '@/data/portfolio'
import { FaGraduationCap, FaLanguage } from 'react-icons/fa'

export default function Education() {
  return (
    <section id="education" className="w-full bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      <div className="section-container relative z-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Education & Languages
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border border-white/20 hover:border-cyan-400/50 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                <FaGraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative pl-6 border-l-4 border-cyan-400"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-cyan-400 rounded-full border-4 border-white/20 shadow-lg" />
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-sm md:text-base text-white/70">{edu.period}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border border-white/20 hover:border-indigo-400/50 hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="flex items-center gap-4 mb-6 md:mb-8">
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                <FaLanguage className="w-7 h-7 md:w-8 md:h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Languages</h3>
            </div>

            <div className="space-y-4">
              {languages.map((language, index) => (
                <motion.div
                  key={language}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all cursor-pointer"
                  whileHover={{ scale: 1.05, x: 5 }}
                >
                  <div className="w-3 h-3 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
                  <span className="text-base md:text-lg font-semibold text-white">
                    {language}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
