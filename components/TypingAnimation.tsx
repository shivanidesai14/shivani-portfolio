'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingAnimationProps {
  text: string
  speed?: number
  className?: string
}

export default function TypingAnimation({ text, speed = 200, className = '' }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span 
      className={`inline-block ${className}`} 
      style={{ 
        display: 'inline-block',
        position: 'relative',
        minWidth: '280px',
        minHeight: '1.2em'
      }}
    >
      {/* Invisible placeholder to reserve space */}
      <span 
        style={{ 
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          display: 'inline-block'
        }}
        aria-hidden="true"
      >
        {text}|
      </span>
      {/* Visible typing text */}
      <span 
        className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300"
        style={{ 
          position: 'absolute',
          left: 0,
          top: 0,
          whiteSpace: 'nowrap',
          display: 'inline-block'
        }}
      >
        {displayedText}
        <motion.span
          animate={{ opacity: showCursor ? 1 : 0 }}
          transition={{ duration: 0.1 }}
          className="inline-block w-0.5 h-full bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 ml-1"
          style={{ background: 'linear-gradient(to right, #f9a8d4, #c084fc, #93c5fd)' }}
        >
          |
        </motion.span>
      </span>
    </span>
  )
}
