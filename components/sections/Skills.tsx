'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { FaCode, FaServer, FaDatabase, FaCloud, FaRocket } from 'react-icons/fa'

const skillCategories = [
  { title: 'Frontend', icon: FaCode, items: skills.frontend, color: 'from-blue-500 to-cyan-500' },
  { title: 'Backend', icon: FaServer, items: skills.backend, color: 'from-purple-500 to-pink-500' },
  { title: 'Database', icon: FaDatabase, items: skills.database, color: 'from-green-500 to-emerald-500' },
  { title: 'Cloud & Tools', icon: FaCloud, items: skills.cloud, color: 'from-orange-500 to-red-500' },
]

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 py-16 md:py-24">
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
            Technical Skills
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border border-white/20"
              whileHover={{ scale: 1.03, y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {category.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className={`px-3 md:px-4 py-2 bg-gradient-to-r ${category.color} text-white rounded-full text-xs md:text-sm font-semibold shadow-md hover:shadow-lg transition-all cursor-default`}
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border border-white/20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-lg">
              <FaRocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Methodologies</h3>
          </div>
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skills.methodologies.map((methodology, index) => (
              <motion.span
                key={methodology}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="px-3 md:px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs md:text-sm font-semibold shadow-md"
              >
                {methodology}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  )
}
