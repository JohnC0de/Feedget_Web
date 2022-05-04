import html2canvas from 'html2canvas'
import { Camera } from 'phosphor-react'
import { useState } from 'react'

export default function ScreenshotButton() {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')
  }

  return (
    <button
      className="p-2 transition-colors border-transparent rounded-md focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand bg-zinc-800 hover:bg-zinc-700"
      onClick={handleTakeScreenshot}
      type="button"
    >
      <Camera className="w-6 h-6" />
    </button>
  )
}
