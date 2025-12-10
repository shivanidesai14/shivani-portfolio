'use client'

import { motion } from 'framer-motion'
import { experiences } from '@/data/portfolio'
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt, FaCode } from 'react-icons/fa'

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-16 md:py-24">
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Work Experience
          </span>
        </motion.h2>

        <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline line */}
              {index < experiences.length - 1 && (
                <div className="hidden md:block absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-blue-400/50 to-purple-400/50" />
              )}

              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border-l-4 border-pink-400"
                whileHover={{ scale: 1.02, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
              >
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <FaBriefcase className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg md:text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300 font-semibold mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/80 mb-4">
                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt className="text-pink-300" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-purple-300" />
                        {exp.period}
                      </span>
                    </div>

                    {/* Technologies */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <FaCode className="text-pink-300" />
                        <span className="text-sm font-semibold text-white/90">Technologies:</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                            className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium border border-white/30"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.1 }}
                          className="flex items-start gap-3 text-sm md:text-base text-white/90"
                        >
                          <span className="text-pink-300 mt-1.5 text-lg flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
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
