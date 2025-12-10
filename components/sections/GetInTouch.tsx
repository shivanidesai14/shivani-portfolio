'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaPaperPlane } from 'react-icons/fa'

export default function GetInTouch() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-pink-500 to-red-500',
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
  ]

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 py-12 md:py-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl"
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
          className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl"
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
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-3"
          >
            <FaPaperPlane className="w-10 h-10 md:w-12 md:h-12 text-pink-400" />
          </motion.div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
              Get In Touch
            </span>
          </h2>
          <p className="text-white/80 text-sm md:text-base max-w-xl mx-auto">
            Currently seeking new opportunities. Open to discussing roles where I can contribute my expertise and grow professionally.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mb-8">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <method.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-white font-semibold mb-1 text-sm">{method.label}</h3>
              <p className="text-white/70 text-xs break-all">{method.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Social Links & Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center bg-gradient-to-r ${color} rounded-full text-white shadow-lg`}
                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white rounded-lg font-semibold shadow-xl text-sm"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
