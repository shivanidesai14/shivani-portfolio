'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import TypingAnimation from '@/components/TypingAnimation'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 pt-20"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #3b82f6 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center">
            {/* Left side - Text content */}
            <motion.div variants={itemVariants} className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-4 border border-white/30">
                  Full Stack Developer
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                <div className="text-white block mb-2">Hi, I&apos;m</div>
                <div 
                  className="block" 
                  style={{ 
                    minHeight: '1.2em',
                    width: '100%',
                    display: 'block',
                    position: 'relative'
                  }}
                >
                  <TypingAnimation text={personalInfo.name} speed={200} />
                </div>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-xl sm:text-2xl text-white/90 mb-4 font-medium"
              >
                {personalInfo.title}
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8 text-white/80"
              >
                <span className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-pink-300" />
                  {personalInfo.location}
                </span>
                <span className="hidden sm:inline text-white/60">•</span>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <FaPhone className="text-pink-300" />
                  {personalInfo.phone}
                </a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8"
              >
                <motion.a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-lg shadow-pink-500/50 font-semibold"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload />
                  Download Resume
                </motion.a>
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all font-semibold shadow-md"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope />
                  Contact Me
                </motion.a>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex justify-center lg:justify-start gap-4"
              >
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/20 transition-all shadow-md"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right side - Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-end"
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-600 rounded-3xl transform rotate-6 opacity-20 blur-xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-blue-600 rounded-3xl transform -rotate-6 opacity-20 blur-xl" />
                
                {/* Image container */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image
                    src="/profile.jpg"
                    alt={personalInfo.name}
                    fill
                    className="object-cover object-top scale-110"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl border-4 border-blue-100"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">4.5+</span>
                  </div>
                  <p className="text-xs text-gray-600 text-center mt-1 font-semibold">Years Exp</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mt-16"
          >
            <motion.a
              href="#about"
              className="text-white/60 hover:text-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
