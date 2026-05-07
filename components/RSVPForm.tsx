'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import AlWishFormatter from './AlWishFormatter'

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'hadir',
    guests: 1,
    wish: '',
    formattedWish: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [rawWish, setRawWish] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate API submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setSubmitted(true)
  }

  const handleWishFormat = (formatted: string) => {
    setFormData(prev => ({ ...prev, formattedWish: formatted }))
  }

  if (submitted) {
    return (
      <section id="rsvp" className="py-32 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass p-16 rounded-3xl"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-8 flex items-center justify-center">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-gray-800 mb-4">
              Terima Kasih!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Konfirmasi kehadiran Anda telah tercatat.{' '}
              <span className="font-semibold text-gold">Kami menantikan kehadiran Anda!</span>
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setSubmitted(false)}
              className="bg-gradient-to-r from-gold to-rose-gold text-white px-8 py-4 rounded-2xl font-medium hover:from-gold/90 hover:to-rose-gold/90 transition-all duration-300"
            >
              Konfirmasi Lagi
            </motion.button>
          </motion.div>
        </div>
      </section>
    )
  }

  return (
    <section id="rsvp" className="py-32 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent text-center mb-20"
        >
          Konfirmasi Kehadiran
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="glass p-12 rounded-3xl space-y-8"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                placeholder="Nama Anda"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email / WhatsApp</label>
              <input
                type="text"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                placeholder="email@example.com"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Kehadiran</label>
              <select
                value={formData.attendance}
                onChange={(e) => setFormData({...formData, attendance: e.target.value})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              >
                <option value="hadir">Hadir</option>
                <option value="tidak-hadir">Tidak Hadir</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Jumlah Tamu</label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
              >
                {[1,2,3,4,5].map(n => (
                  <option key={n} value={n}>{n} Orang</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ucapan & Doa (Opsional)
            </label>
            <textarea
              rows={4}
              value={rawWish}
              onChange={(e) => {
                setRawWish(e.target.value)
                setFormData({...formData, wish: e.target.value})
              }}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-vertical"
              placeholder="Tuliskan ucapan dan doa untuk pasangan baru..."
            />
            <AlWishFormatter 
              rawWish={rawWish} 
              onFormatted={handleWishFormat}
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-gold to-rose-gold text-white py-6 rounded-2xl font-semibold text-lg hover:from-gold/90 hover:to-rose-gold/90 transition-all duration-300 shadow-xl"
          >
            Kirim Konfirmasi
            <span className="ml-2">✨</span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  )
                }
