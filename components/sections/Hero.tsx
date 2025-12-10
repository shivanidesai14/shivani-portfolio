'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { FaDownload, FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaCode } from 'react-icons/fa'
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
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
          className="absolute top-40 right-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md text-white rounded-full text-sm md:text-base font-semibold border border-white/30 shadow-lg"
            >
              <FaCode className="text-pink-300" />
              Full Stack Developer
            </motion.span>
          </motion.div>

          {/* Name with typing animation */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <div className="text-white/90 block mb-3 text-2xl sm:text-3xl md:text-4xl font-light">
              Hi, I&apos;m
            </div>
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

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-6 font-medium max-w-3xl mx-auto"
          >
            {personalInfo.title}
          </motion.p>

          {/* Experience badge */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">4.5+</span>
              </div>
              <span className="text-white font-semibold">Years of Experience</span>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-white/80"
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

          {/* Action buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-4 mb-10"
          >
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-xl shadow-pink-500/50 font-semibold text-base md:text-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              Download Resume
            </motion.a>
            <motion.a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-all font-semibold shadow-lg text-base md:text-lg"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-4 mb-12"
          >
            <motion.a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center bg-white/10 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-white/20 transition-all shadow-lg"
              whileHover={{ scale: 1.15, rotate: 5, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center"
          >
            <motion.a
              href="#about"
              className="text-white/60 hover:text-white transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg
                className="w-8 h-8"
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
