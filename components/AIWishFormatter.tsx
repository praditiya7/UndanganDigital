'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { formatWeddingWish } from '@/lib/gemini'

interface AlWishFormatterProps {
  rawWish: string
  onFormatted: (formattedWish: string) => void
}

export default function AlWishFormatter({ rawWish, onFormatted }: AlWishFormatterProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [formattedWish, setFormattedWish] = useState('')

  const handleFormat = async () => {
    if (!rawWish.trim()) return
    
    setIsProcessing(true)
    try {
      const result = await formatWeddingWish(rawWish)
      setFormattedWish(result)
      onFormatted(result)
    } catch (error) {
      console.error('Formatting error:', error)
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="space-y-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleFormat}
        disabled={isProcessing || !rawWish.trim()}
        className="w-full bg-gradient-to-r from-gold to-rose-gold text-white px-6 py-3 rounded-xl font-medium hover:from-gold/90 hover:to-rose-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isProcessing ? (
          <>
            ✨ AI sedang memformat...
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          </>
        ) : (
          '✨ Format dengan AI'
        )}
      </motion.button>

      {formattedWish && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="glass p-6 rounded-2xl bg-gradient-to-r from-gold/5 to-rose-gold/5 border border-gold/20"
        >
          <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
            "{formattedWish}"
          </p>
        </motion.div>
      )}
    </div>
  )
}
