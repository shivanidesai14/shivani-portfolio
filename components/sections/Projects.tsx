'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/portfolio'
import { FaCode, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const gradientColors = [
  'from-pink-500 via-purple-500 to-indigo-500',
  'from-cyan-500 via-blue-500 to-indigo-500',
  'from-purple-500 via-pink-500 to-red-500',
]

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-16 md:py-24">
      <div className="section-container">
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              whileHover={{ scale: 1.03, y: -10 }}
            >
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 h-full border border-white/20 flex flex-col"
                whileHover={{ borderColor: 'rgba(244, 114, 182, 0.5)', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              >
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColors[index % gradientColors.length]} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <FaCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white flex-1">
                    {project.name}
                  </h3>
                </div>

                {/* Stack */}
                <p className={`text-sm font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${gradientColors[index % gradientColors.length]}`}>
                  {project.stack}
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-white/80 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href="#"
                    className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${gradientColors[index % gradientColors.length]} text-white rounded-lg hover:shadow-lg transition-all text-sm font-medium flex-1 justify-center`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    View
                  </motion.a>
                  <motion.a
                    href="#"
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-all text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
