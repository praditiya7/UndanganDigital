'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { formatDistanceToNowStrict } from 'date-fns'
import { id } from 'date-fns/locale'

interface CountdownProps {
  targetDate: Date
}

export default function Countdown() {
  const targetDate = new Date('2024-12-31T10:00:00')
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const distance = targetDate.getTime() - Date.now()
      if (distance > 0) {
        setTimeLeft(formatDistanceToNowStrict(targetDate, { 
          addSuffix: false, 
          locale: id 
        }))
      } else {
        setTimeLeft('Hari bahagia telah tiba! 🎉')
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const timeParts = timeLeft.split(', ')

  return (
    <section id="countdown" className="py-32 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent mb-16"
        >
          Countdown
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-12 rounded-3xl max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {timeParts.map((part, index) => {
              const [value, unit] = part.split(' ')
              return (
                <div key={index} className="space-y-2">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-gold"
                  >
                    {value}
                  </motion.div>
                  <div className="text-sm md:text-base font-medium text-gray-600 capitalize">
                    {unit}
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
