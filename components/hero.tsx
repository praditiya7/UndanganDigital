'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const weddingDate = new Date('2024-12-31T10:00:00')

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="text-center max-w-4xl mx-auto glass p-12 rounded-3xl"
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent mb-6 leading-tight">
            Kami Menikah
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <div className="text-2xl md:text-3xl font-semibold text-gray-700">
              Ahmad & Siti
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="text-xl md:text-2xl font-medium text-rose-gold">
              31 Desember 2024
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Dengan penuh rasa syukur kepada Tuhan Yang Maha Esa, kami mengundang Bapak/Ibu/Saudara/i untuk hadir di hari istimewa kami.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#rsvp"
            className="glass px-8 py-4 rounded-2xl text-lg font-medium text-gray-800 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Konfirmasi Kehadiran
          </a>
          <a
            href="#location"
            className="border-2 border-white/50 px-8 py-4 rounded-2xl text-lg font-medium text-gray-800 hover:bg-white/50 transition-all duration-300 transform hover:scale-105"
          >
            Lihat Lokasi
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Hearts */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-rose-gold/20 to-gold/20 rounded-full blur-xl animate-float"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-gold/20 to-rose-gold/20 rounded-full blur-xl animate-float"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          />
        </>
      )}
    </section>
  )
                      }
