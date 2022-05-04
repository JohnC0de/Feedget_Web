import html2canvas from 'html2canvas'
import { Camera, Trash } from 'phosphor-react'
import { useState } from 'react'
import Loading from '../Loading'

interface onScreenshotTook {
  screenshot: string | null
  onScreenshotTook: (screenshot: string | null) => void
}

export default function ScreenshotButton({
  screenshot,
  onScreenshotTook
}: onScreenshotTook) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

  async function handleTakeScreenshot() {
    setIsTakingScreenshot(true)
    const canvas = await html2canvas(document.querySelector('html')!)
    const base64image = canvas.toDataURL('image/png')

    onScreenshotTook(base64image)

    setIsTakingScreenshot(false)
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="flex items-end justify-end w-10 h-10 p-1 transition-colors border-transparent rounded-md text-zinc-400 hover:text-zinc-100"
        onClick={() => {
          onScreenshotTook(null)
        }}
        style={{
          backgroundImage: `url(${screenshot})`,
          backgroundPosition: 'right bottom',
          backgroundSize: 180
        }}
      >
        <Trash className="w-4 h-4" weight="fill" />
      </button>
    )
  }

  return (
    <button
      className="p-2 transition-colors border-transparent rounded-md focus:ring-2 focus:outline-none focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand bg-zinc-800 hover:bg-zinc-700"
      onClick={handleTakeScreenshot}
      type="button"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  )
}
