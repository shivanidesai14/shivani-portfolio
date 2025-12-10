'use client'

import { motion } from 'framer-motion'
import { achievements } from '@/data/portfolio'
import { FaTrophy, FaAward } from 'react-icons/fa'

const iconMap = [FaTrophy, FaAward]
const gradients = [
  'from-yellow-400 via-orange-500 to-red-500',
  'from-purple-400 via-pink-500 to-red-500',
]

export default function Achievements() {
  return (
    <section id="achievements" className="w-full bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 py-16 md:py-24 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300">
            Achievements
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[index] || FaTrophy
            const gradient = gradients[index] || gradients[0]
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl p-6 md:p-8 border border-white/20 hover:border-pink-400/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10, shadow: '2xl' }}
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl flex-shrink-0`}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                    >
                      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                        {achievement.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
