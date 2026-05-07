import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY!)

export async function formatWeddingWish(rawWish: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' })
    
    const prompt = `Merapikan ucapan pernikahan ini agar terdengar lebih hangat, puitis, dan elegan dalam bahasa Indonesia atau sunda yang indah. Jaga esensi ucapan asli:

"${rawWish}"

Buat versi yang:
- Lebih puitis dan romantis
- Menggunakan bahasa Indonesia atau sunda yang halus
- Tetap mempertahankan makna asli
- Maksimal 2 kalimat`

    const result = await model.generateContent(prompt)
    const response = await result.response
    const formattedWish = response.text()?.trim() || rawWish
    
    return formattedWish
  } catch (error) {
    console.error('Error formatting wish:', error)
    return rawWish // Fallback to original if API fails
  }
}
