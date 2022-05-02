import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
export default function Widget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)

  function toggleWidgetVisibility() {
    setIsWidgetOpen(!isWidgetOpen)
  }

  return (
    <div className="absolute bottom-4 right-4">
      {isWidgetOpen && <p>Hello World</p>}

      <button
        onClick={toggleWidgetVisibility}
        className="flex items-center h-12 px-3 text-white rounded-full bg-brand group"
      >
        <ChatTeardropDots className="w-6 h-6" />
        <span className="overflow-hidden transition-all duration-500 ease-linear max-w-0 group-hover:max-w-xs">
          Feedback
        </span>
      </button>
    </div>
  )
}
