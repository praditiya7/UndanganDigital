'use client'

import { motion } from 'framer-motion'

export default function Location() {
  return (
    <section id="location" className="py-32 px-4 bg-gradient-to-b from-cream to-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-gold via-rose-gold to-gold bg-clip-text text-transparent mb-6">
            Tempat & Waktu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Bergabunglah dengan kami di momen istimewa ini
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Event Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                Akad Nikah
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-medium">Senin, 31 Desember 2024</p>
                <p className="text-xl font-bold text-rose-gold">10:00 WIB</p>
                <p className="text-gray-600">
                  Kediaman Mempelai Wanita
                  <br />
                  Jl. Raya Sukabumi, Jakarta Timur
                </p>
              </div>
            </div>

            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-playfair font-semibold text-gold mb-4">
                Resepsi
              </h3>
              <div className="space-y-3">
                <p className="text-lg font-medium">Senin, 31 Desember 2024</p>
                <p className="text-xl font-bold text-rose-gold">12:00 WIB - 15:00 WIB</p>
                <p className="text-gray-600">
                  Kediaman Mempelai Wanita
                  <br />
                  Jl. Raya Sukabumi, Sukabumi
                </p>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-8 rounded-2xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-gold to-rose-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                📍
              </div>
              <p className="text-lg font-medium text-gray-700 mb-2">
                Klik untuk buka Google Maps
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/80 px-6 py-3 rounded-xl font-medium text-gray-800 hover:bg-white transition-all duration-300 transform hover:scale-105"
              >
                Buka Peta
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
