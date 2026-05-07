'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import Location from '@/components/Location'
import RSVPForm from '@/components/RSVPForm'
import WishList from '@/components/WishList'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(183, 110, 121, 0.1) 0%, transparent 50%)`
        }} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10"
      >
        <Hero />
        <Countdown />
        <Location />
        <RSVPForm />
        <WishList />
      </motion.div>

      {/* Custom Cursor */}
      <div className="fixed w-4 h-4 bg-gold/80 rounded-full pointer-events-none z-50 mix-blend-difference opacity-0 lg:opacity-100 transition-all duration-300 scale-75" 
           id="cursor" />
    </main>
  )
}
