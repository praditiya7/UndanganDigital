'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const mockWishes = [
  {
    name: "Ema Anah",
    wish: "Semoga rumah tangga kalian penuh keberkahan dan keharmonisan. Selamat menempuh hidup baru.",
    timestamp: "2026-05-20"
  },
  {
    name: "Unknown",
    wish: "Kalian adalah pasangan terbaik. Semoga cinta kalian abadi seperti bintang di langit malam.",
    timestamp: "2026-05-21"
  }
]

export default function WishList() {
  const [wishes, setWishes] = useState(mockWishes)

  return (
    <section className="py-32 px-4 bg-gradient-to-t from-cream to-white/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent text-center mb-20"
        >
          Buku Ucapan
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishes.map((wish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
              whileHover={{ y: -8 }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-gold to-rose-gold rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-semibold text-sm">💝</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 truncate group-hover:text-gold transition-colors">
                    {wish.name}
                  </h4>
                  <p className="text-xs text-gray-500">{wish.timestamp}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-sm italic line-clamp-4 group-hover:line-clamp-none">
                "{wish.wish}"
              </p>
            </motion.div>
          ))}
        </div>

        {wishes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-500 mb-8">
              Belum ada ucapan. Jadilah yang pertama!
            </p>
            <a href="#rsvp" className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-rose-gold text-white px-8 py-4 rounded-2xl font-medium hover:from-gold/90 hover:to-rose-gold/90 transition-all duration-300">
              Tulis Ucapan
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
